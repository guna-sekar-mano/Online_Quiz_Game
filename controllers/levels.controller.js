import { Startgameresult } from '../models/startgame.model.js'
const getactivelevels = async (req, res, next) => {
  try {
    const resdata = await Startgameresult.aggregate([
      { $match: { Email: req.user.Email, Stage_Status: 'Completed' } },
      {
        $group: {
          _id: '$Level',
          maxStage: { $max: '$Stage' }
        }
      },
      {
        $group: {
          _id: null,
          uniqueValues: { $push: { Level: '$_id', Max: '$maxStage' } }
        }
      },
      {
        $project: {
          _id: 0,
          uniqueValues: 1
        }
      }
    ])

    res.send(resdata[0] ? resdata[0]?.uniqueValues : resdata)
  } catch (err) {
    console.log(err)
  }
}
const checklevels = async (req, res, next) => {
  try {
    const resdata = await Startgameresult.findOne({ ...req.body, Email: req.user.Email, UserId: req.user.UserId }).lean()
    res.send(resdata ? { status: 'Allowed' } : { status: 'Not Allowed' })
  } catch (err) {
    console.log(err)
  }
}

export { getactivelevels, checklevels }
