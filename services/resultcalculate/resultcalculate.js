const quizzoneresultcalculate = (resresult, allquestions) => {
  try {
    let correctAnswerCount = 0

    const result = resresult.Results[0]
    for (const key in result) {
      if (Object.prototype.hasOwnProperty.call(result, key)) {
        const question = allquestions.find(function (q) {
          return q._id.toString() === result[key].Question_Id
        })

        if (question && result[key].Selected_Answer === question['Correct Answer']) {
          correctAnswerCount++
        }
      }
    }

    return correctAnswerCount
  } catch (err) {
    console.log(err)
  }
}
const startgameresultcalculate = (resresult, allquestions) => {
  try {
    let correctAnswerCount = 0

    const result = resresult.Results[0]
    for (const key in result) {
      if (Object.prototype.hasOwnProperty.call(result, key)) {
        const question = allquestions.find(function (q) {
          return q._id.toString() === result[key].Question_Id
        })

        if (question && result[key].Selected_Answer === question['Correct Answer']) {
          correctAnswerCount++
        }
      }
    }

    return correctAnswerCount
  } catch (err) {
    console.log(err)
  }
}
export { quizzoneresultcalculate, startgameresultcalculate }
