import { Startgameresult } from '../models/startgame.model.js'
import { startgameresultcalculate } from '../services/resultcalculate/resultcalculate.js'
import { getresults, checkprevlevel } from '../services/startgame/startgameService.js'
import { getquestions, getquetionsrandom } from '../services/startgame/QuestionService.js'
import { Users } from '../models/users.model.js'
const startgameinit = async (req, res, next) => {
  try {
    const { Level, Stage } = req.query
    const { Email, userId } = req.user
    const checklalreadyexists = await getresults({ Email, userId, Level, Stage }, { Stage: 1, Userstageids: 1 })
    if (checklalreadyexists.length === 0) {
      const checkstages = await getresults({ Email, userId, Level, Stage_Status: 'Completed', Game_Status: 'Finished' }, { Stage: 1 })
      let response
      if (checkstages.filter(d => (d.Stage * 1) + 1 === (Stage * 1)).length === 1 ||
            (req.query.Level === 'Tutorial' && Stage === '1') ||
            (await checkprevlevel({ Email, userId, checkstages, Level }) === true && Stage === '1')) {
        const results = await getquetionsrandom([{ $match: req.query }, { $sample: { size: (process.env.MAX_SIZE * 1) } }, { $project: { 'Correct Answer': 0 } }])
        const savestageids = new Startgameresult({ Email, userId, Level, Stage, Userstageids: results.map(question => question._id.toString()) }).save()
        response = savestageids ? { questions: results, status: 'Test Started' } : { status: 'Not Allowed' }
      } else {
        response = { status: 'Not Allowed' }
      }

      res.send(response)
    } else {
      const ids = checklalreadyexists[0].Userstageids
      const response = await getquestions({ _id: { $in: checklalreadyexists[0].Userstageids } }, { 'Correct Answer': 0 })
      const sortedRecords = ids.map(id => response.find(record => record._id.toString() === id))
      res.send({ questions: sortedRecords, status: 'Test Started' })
    }
  } catch (err) {
    console.log(err)
  }
}
const savestartgameresult = async (req, res, next) => {
  try {
    const { Level, Stage } = req.body
    const { Email, userId } = req.user
    const checklalreadyexists = await Startgameresult.findOne({ Email, userId, Level, Stage }, { Stage_Status: 1, Userstageids: 1 }).lean()
    const resquizresult = checklalreadyexists?.Stage_Status === 'Incomplete'
      ? await Startgameresult.findOneAndUpdate({ Level, Stage, Email, userId }, req.body, { new: true })
      : await new Startgameresult(req.body).save()

    const allquestions = await getquestions({ _id: { $in: checklalreadyexists.Userstageids } })
    const correctAnswerCount = startgameresultcalculate(resquizresult, allquestions)
    const checkstatus = correctAnswerCount >= process.env.MAX_SCORE ? 'Finished' : 'Game Over'
    const response = await Startgameresult.findOneAndUpdate({ _id: resquizresult._id }, {
      CorrectAnswerCount: correctAnswerCount,
      WrongAnswerCount: allquestions.length - correctAnswerCount,
      Game_Status: checkstatus,
      Stage_Status: 'Completed'
    }, { returnOriginal: false })
    if (checkstatus === 'Finished') {
      await Users.findOneAndUpdate({ Email }, {
        $inc: {
          Points: (correctAnswerCount * 1) >= process.env.EXTRA_POINT_SCORE
            ? (correctAnswerCount * 1) + (process.env.EXTRA_POINT * 1)
            : (correctAnswerCount * 1)
        }
      }, { new: true })
    } else {
      const user = await Users.findOne({ Email }).lean()
      const { Points, Lifes } = await Users.findOneAndUpdate({ Email }, {
        $inc: user.Lifes !== 0 ? { Lifes: -1 } : { Points: user.Points >= 20 ? -(process.env.DECREASE_POINT * 1) : -user.Points }
      }, { new: true })
      console.log({ Points, Lifes })
      await Startgameresult.findOneAndUpdate({ _id: response._id }, { Points, Lifes }, { new: true })
    }
    res.send({ status: 'Test Completed', datas: { _id: response._id } })
  } catch (err) {
    console.log(err)
  }
}
const getstartgameresult = async (req, res, next) => {
  try {
    const response = await Startgameresult.findOne(req.query, { CorrectAnswerCount: 1, Level: 1 })
    res.send(response)
  } catch (error) {
    console.log(error)
  }
}
export { startgameinit, savestartgameresult, getstartgameresult }
