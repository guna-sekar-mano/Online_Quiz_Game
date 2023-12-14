import { Startgameresult } from '../models/startgame.model.js'
import { Questions } from '../models/questions.model.js'
const levels = [
  { Level: 'Tutorial' },
  { Level: 'Beginner' },
  { Level: 'Intermediate' },
  { Level: 'Advanced' },
  { Level: 'Expert' }
]
const getresults = async (req, query) => {
  const getunlockstage = await Startgameresult.find({ ...query, userId: req.user.userId, Email: req.user.Email }, { Stage: 1, Level: 1 }).sort({ Stage: 1 })
  return getunlockstage
}
const getstages = async (req, res, next) => {
  try {
    const getunlockstage = await getresults(req, { Level: req.query.Level, Stage_Status: 'Completed', Game_Status: 'Finished' })
    const checkprevlevel = async () => {
      if (getunlockstage.length === 0) {
        const getprevlevels = levels.findIndex(d => d.Level === req.query.Level)
        const countdoc = await Startgameresult.countDocuments({ userId: req.user.userId, Email: req.user.Email, Level: levels[getprevlevels - 1].Level, Game_Status: 'Finished' })
        return countdoc === 5
      }
    }
    if (getunlockstage.filter(d => d.Level === req.query.Level).length >= 1 || req.query.Level === 'Tutorial' || await checkprevlevel() === true) {
      const resdata = await Questions.aggregate([
        { $match: req.query },
        { $group: { _id: null, uniqueValues: { $addToSet: { Stage: '$Stage' } } } },
        { $unwind: '$uniqueValues' },
        { $sort: { 'uniqueValues.Stage': 1 } },
        { $group: { _id: null, uniqueValues: { $push: '$uniqueValues' } } },
        { $project: { _id: 0, uniqueValues: 1 } }
      ])
      res.send({ status: 'Allowed', arr: resdata[0].uniqueValues, arr1: getunlockstage })
    } else {
      res.send({ status: 'Not Allowed' })
    }
  } catch (err) {
    console.log(err)
  }
}
const checkstages = async (req, res, next) => {
  try {
    const resdata = await Startgameresult.findOne({ ...req.body, Email: req.user.Email, UserId: req.user.UserId }).lean()
    if (resdata) {
      res.send({ status: 'Allowed' })
    } else {
      res.send({ status: 'Not Allowed' })
    }
  } catch (err) {
    console.log(err)
  }
}
export { checkstages, getstages }
