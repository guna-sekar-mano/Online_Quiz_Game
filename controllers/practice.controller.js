import { Questions } from '../models/questions.model.js'
import { Startgameresult } from '../models/startgame.model.js'
import { Users } from '../models/users.model.js'
import { startgameresultcalculate } from '../services/resultcalculate/resultcalculate.js'
import { getquestions } from '../services/startgame/QuestionService.js'
const practiceinit = async (req, res, next) => {
  try {
    const resquestions = await Questions.find({ ...req.query, Level: 'Practice' })
    res.send({ questions: resquestions, status: 'Test Started' })
  } catch (err) {
    console.log(err)
  }
}
const savepracticeresult = async (req, res, next) => {
  try {
    const { Level, Stage } = req.body
    const { Email, userId } = req.user
    const checklalreadyexists = await Startgameresult.findOne({ Email, userId, Level, Stage }, { Stage_Status: 1, Userstageids: 1 }).lean()
    const resquizresult = checklalreadyexists?.Stage_Status === 'Incomplete'
      ? await Startgameresult.findOneAndUpdate({ Level, Stage, Email, userId }, req.body, { new: true })
      : await new Startgameresult(req.body).save()

    const allquestions = await getquestions({ Level: 'Practice', Category: req.body.Category })
    const correctAnswerCount = startgameresultcalculate(resquizresult, allquestions)
    const response = await Startgameresult.findOneAndUpdate({ _id: resquizresult._id }, {
      CorrectAnswerCount: correctAnswerCount,
      WrongAnswerCount: allquestions.length - correctAnswerCount,
      Game_Status: 'Finished',
      Stage_Status: 'Completed'
    }, { returnOriginal: false })

    res.send({ status: 'Test Completed', datas: { _id: response._id } })
  } catch (err) {
    console.log(err)
  }
}
const practiceresult = async (req, res, next) => {
  try {
    const resquizresult = await new Startgameresult(req.body).save()
    const allquestions = await Questions.find({ Level: 'Practice' })
    const correctAnswerCount = startgameresultcalculate(req.body, allquestions)
    const response = await Startgameresult.findOneAndUpdate({ _id: resquizresult._id },
      { CorrectAnswerCount: correctAnswerCount, WrongAnswerCount: allquestions.length - correctAnswerCount, Game_Status: 'Finished' }, { returnOriginal: false })
    res.send({ status: 'Test Completed', datas: { _id: response._id } })
  } catch (err) {
    console.log(err)
  }
}
const updateguestuser = async (req, res, next) => {
  try {
    const resuser = await Users.findOne({ Email: req.user.Email }, { Email: 1, 'Full Name': 1, userId: 1 }).lean()
    const { _id, ...userobj } = resuser
    if (resuser) {
      const updateres = await Startgameresult.findOneAndUpdate(req.body, userobj, { new: true })
      updateres ? res.send({ status: 'ok' }) : res.send({ status: 'error' })
    } else {
      res.status(200).json({ message: 'error' })
    }
  } catch (err) {
    console.log(err)
    res.status(400).json({ message: err })
  }
}
export { practiceinit, savepracticeresult, practiceresult, updateguestuser }
