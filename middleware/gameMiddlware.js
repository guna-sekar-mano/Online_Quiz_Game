import { getresults } from '../services/startgame/startgameService.js'
export const checkstageCompleted = async (req, res, next) => {
  const { Level, Stage } = req.query
  const { Email, userId } = req.user
  const resdata = await getresults({ Email, userId, Level, Stage, Stage_Status: 'Completed', Game_Status: 'Finished' })
  resdata.length > 0 ? res.send({ status: 'Not Allowed' }) : next()
}
