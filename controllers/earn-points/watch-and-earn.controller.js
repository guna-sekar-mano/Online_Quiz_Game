import { Users } from '../../models/users.model.js'
import { Earnpointhistory } from '../../models/earnpoints.model.js'
import { Watchads } from '../../models/watchads.model.js'
const initwatchadandearn = async (req, res, next) => {
  try {
    const { Email } = req.user
    const resinit = await Earnpointhistory.find({ Email, Earnpointtype: 'Watch Ad and Earn' }, { _id: 0, 'Historydata.EarnpointCategory': 1 })
    const watchadcatgory = await Watchads.find({}, { _id: 0, Adtotalseconds: 1, Adlink: 1 })
    res.send({ resinit, watchadcatgory })
  } catch (err) {
    console.log(err)
  }
}
const savewatchandearn = async (req, res, next) => {
  try {
    const { Email, userId } = req.user
    const { vlength } = req.body
    const { Points, Lifes } = await Users.findOneAndUpdate({ Email }, { $inc: { Points: vlength } }, { new: true })
    await new Earnpointhistory({
      Email,
      userId,
      Points,
      Lifes,
      Earnpointtype: 'Watch Ad and Earn',
      Historydata: { EarnpointCategory: vlength, Earnpointvalue: vlength },
      History: `${Points} points earn from ${req.body.vlength} second watching ad`
    }).save()
    res.send({ status: 'Success', Points })
  } catch (err) {
    console.log(err)
  }
}
export { initwatchadandearn, savewatchandearn }
