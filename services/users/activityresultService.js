import { Questions } from '../../models/questions.model.js'

const activityresult = async (Results) => {
  const questionIds = []
  // Iterate through the Results array and extract Question_Id values
  for (const result of Results) {
    for (const key in result) {
      if (Object.prototype.hasOwnProperty.call(result, key)) {
        questionIds.push({ [key]: result[key] })
      }
    }
  }
  const ids = questionIds.map((d, i) => d[`Q${i + 1}`]?.Question_Id)
  const resdata1 = await Questions.find({ _id: { $in: ids } }).lean()
  const combinedArray = questionIds.map((item1, i) => {
    const matchingItem2 = resdata1.find(item2 => item2._id.toString() === item1[`Q${i + 1}`]?.Question_Id)
    return { ...matchingItem2, Selected_Answer: item1[`Q${i + 1}`]?.Selected_Answer }
  })
  return combinedArray
}
const sortactivityresult = async (Userstageids) => {
  const response = await Questions.find({ _id: { $in: Userstageids } })
  const sortedRecords = Userstageids.map(id => response.find(record => record._id.toString() === id))
  return sortedRecords
}

export { activityresult, sortactivityresult }
