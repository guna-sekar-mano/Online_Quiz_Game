import { Questions } from '../../models/questions.model.js'
export const getquestions = async (query, project) => {
  const resquestions = await Questions.find(query, project ?? {})
  return resquestions
}
export const getquetionsrandom = async (query) => {
  const resquestions = await Questions.aggregate(query)
  return resquestions
}
