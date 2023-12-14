import { Earnpointhistory } from '../../models/earnpoints.model.js'
import { Users } from '../../models/users.model.js'
export const savereferearpointhistory = async (RefId) => {
  try {
    const { userId, Email } = await Users.findOne({ userId: RefId })
    const checkprevrefer = await Earnpointhistory.find({ userId, Email, Earnpointtype: 'Refer and Earn' })
    if (checkprevrefer.length < 5) {
      const { Points, Lifes } = await Users.findOneAndUpdate({ Email }, { $inc: { Points: process.env.INVITE_POINT } }, { new: true })
      const cdata = `Person ${checkprevrefer.length + 1}`
      return await new Earnpointhistory({
        userId,
        Email,
        Points,
        Lifes,
        Earnpointtype: 'Refer and Earn',
        Historydata: { EarnpointCategory: cdata, Earnpointvalue: 20 },
        History: `20 points earn from refer by ${cdata}`
      }).save()
    } else {
      return true
    }
  } catch (err) {
    console.log(err)
  }
}
