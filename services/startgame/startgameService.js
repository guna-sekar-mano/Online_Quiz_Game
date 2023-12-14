import { Startgameresult } from '../../models/startgame.model.js'
const levels = [
  { Level: 'Tutorial' },
  { Level: 'Beginner' },
  { Level: 'Intermediate' },
  { Level: 'Advanced' },
  { Level: 'Expert' }
]
export const getresult = async (query, column) => {
  const getunlockstage = await Startgameresult.findOne(query, column ?? {})
  return getunlockstage
}
export const getresults = async (query, column) => {
  const getunlockstage = await Startgameresult.find(query, column).sort({ Stage: 1 })
  return getunlockstage
}
export const checkprevlevel = async (data) => {
  if (data.checkstages?.length === 0) {
    const getprevlevels = levels.findIndex(d => d.Level === data.Level)
    const countdoc = await Startgameresult.countDocuments({ Email: data.Email, userId: data.userId, Level: levels[getprevlevels - 1]?.Level, Game_Status: 'Finished' })
    return countdoc === 5
  }
}
