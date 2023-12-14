import { getquestions } from '../../services/startgame/QuestionService.js'
import { Users } from '../../models/users.model.js'
import { Earnpointhistory } from '../../models/earnpoints.model.js'
const learncatgory = ['Current Events', 'Interview Questions', 'Physics Questions', 'Chemistry Questions', 'English Questions']
function toTitleCase (str) {
  return str.toLowerCase().replace(/\b\w/g, function (char) {
    return char.toUpperCase()
  })
}

const initlearnandearn = async (req, res, next) => {
  try {
    const { Email } = req.user
    const resinit = await Earnpointhistory.find({ Email, Earnpointtype: 'Learn and Earn' }, { _id: 0, 'Historydata.EarnpointCategory': 1 })
    res.send({ resinit, learncatgory })
  } catch (err) {
    console.log(err)
  }
}
const getlearningquestions = async (req, res, next) => {
  try {
    const resquestions = await getquestions({ Category: { $regex: decodeURIComponent(req.query.category), $options: 'i' } }, { _id: 0, __v: 0 })
    res.send(resquestions)
  } catch (err) {
    console.log(err)
  }
}
const savelearningquestions = async (req, res, next) => {
  try {
    const { Email, userId } = req.user
    const { Points, Lifes } = await Users.findOneAndUpdate({ Email }, { $inc: { Points: 20 } }, { new: true })
    const category = toTitleCase(decodeURIComponent(req.body.Category))
    await new Earnpointhistory({
      Email,
      userId,
      Points,
      Lifes,
      Earnpointtype: 'Learn and Earn',
      Historydata: { EarnpointCategory: category, Earnpointvalue: 20 },
      History: `20 points earn from ${category} questions learning`
    }).save()
    res.send({ status: 'Success', Points })
  } catch (err) {
    console.log(err)
  }
}
export { initlearnandearn, getlearningquestions, savelearningquestions }
