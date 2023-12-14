import { Watchads } from '../../models/watchads.model.js'

const getwatchads = async (req, res) => {
  try {
    const { first, rows } = req.query
    const resdata = await Watchads.find({}).skip(first).limit(rows).sort({ Adtotalseconds: 1 })
    const totallength = await Watchads.countDocuments({})
    res.send({ datas: resdata, totallength })
  } catch (err) {
    console.log(err)
  }
}
const savewatchads = async (req, res) => {
  try {
    const resdata = await new Watchads(req.body).save()
    res.send(resdata)
  } catch (err) {
    console.log(err)
  }
}
const updatewatchads = async (req, res) => {
  try {
    const resdata = await Watchads.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true })
    res.send(resdata)
  } catch (err) {
    console.log(err)
  }
}
const deletewatchads = async (req, res) => {
  try {
    const { _id } = req.query
    const resdata = await Watchads.deleteOne({ _id })
    resdata.deletedCount > 0 ? res.send({ status: 'Record has been successfully deleted', _id }) : res.send({ status: 'The requested record was not found.' })
  } catch (err) {
    console.log(err)
  }
}
export { getwatchads, savewatchads, updatewatchads, deletewatchads }
