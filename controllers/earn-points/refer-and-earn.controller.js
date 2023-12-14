import { Earnpointhistory } from '../../models/earnpoints.model.js'
const refercatgory = ['Person 1', 'Person 2', 'Person 3', 'Person 4', 'Person 5']

const initreferandearn = async (req, res, next) => {
  try {
    const { Email } = req.user
    const resinit = await Earnpointhistory.find({ Email, Earnpointtype: 'Refer and Earn' }, { _id: 0, 'Historydata.EarnpointCategory': 1 })
    res.send({ resinit, refercatgory })
  } catch (err) {
    console.log(err)
  }
}
export { initreferandearn }
