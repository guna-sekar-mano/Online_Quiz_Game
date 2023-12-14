import { Earnpointhistory } from '../models/earnpoints.model.js'

export const checklearnandearn = async (req, res, next) => {
  try {
    const { Email } = req.user
    const resdata = await Earnpointhistory.findOne({ Email, 'Historydata.EarnpointCategory': { $regex: decodeURIComponent(req.query.category), $options: 'i' } })
    resdata ? res.send({ status: 'Already points earned' }) : next()
  } catch (err) {
    console.log(err)
  }
}
