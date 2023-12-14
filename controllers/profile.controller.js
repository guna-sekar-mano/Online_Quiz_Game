import { Startgameresult } from '../models/startgame.model.js'
import { Earnpointhistory } from '../models/earnpoints.model.js'
import mongoose from 'mongoose'
const gettrackyouractivity = async (req, res, next) => {
  try {
    let { first, rows, globalFilter } = req.query
    const { Email } = req.user
    const fieldArray = Object.keys(Startgameresult.schema.obj)
    const filter = { $or: fieldArray.filter((field1) => Startgameresult.schema.path(field1) instanceof mongoose.Schema.Types.String).map(field => ({ [field]: { $regex: globalFilter, $options: 'i' } })) }
    globalFilter = globalFilter !== '' ? filter : {}
    const resdata = await Startgameresult.find({ ...globalFilter, Email }, { _id: 0, __v: 0 }).skip(first).limit(rows)
    const totallength = await Startgameresult.countDocuments({ ...globalFilter, Email })
    res.send({ datas: resdata, totallength })
  } catch (err) {
    console.log(err)
  }
}
const getallearnpointhistory = async (req, res) => {
  try {
    let { first, rows, globalFilter } = req.query
    const { Email } = req.user
    const fieldArray = Object.keys(Earnpointhistory.schema.obj)
    const filter = { $or: fieldArray.filter((field1) => Earnpointhistory.schema.path(field1) instanceof mongoose.Schema.Types.String).map(field => ({ [field]: { $regex: globalFilter, $options: 'i' } })) }
    globalFilter = globalFilter !== '' ? filter : {}
    const resdata = await Earnpointhistory.find({ ...globalFilter, Email }, { _id: 0, __v: 0 }).skip(first).limit(rows)
    const totallength = await Earnpointhistory.countDocuments({ ...globalFilter, Email })
    res.send({ datas: resdata, totallength })
  } catch (err) {
    console.log(err)
  }
}
export { gettrackyouractivity, getallearnpointhistory }
