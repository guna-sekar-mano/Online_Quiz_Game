import { Users } from '../../models/users.model.js'
import { Startgameresult } from '../../models/startgame.model.js'
import { filterformat } from '../../services/filter/globalfilter.js'
import { activityresult, sortactivityresult } from '../../services/users/activityresultService.js'
const getfullusers = async (req, res, next) => {
  try {
    let { first, rows, globalFilter } = req.query
    const fieldArray = Object.keys(Users.schema.obj)
    const filter = { $or: fieldArray.filter((field1) => field1 !== '_id' && !Users.schema.paths[field1].instance.includes('Number')).map(field => ({ [field]: { $regex: globalFilter, $options: 'i' } })) }
    globalFilter = globalFilter !== '' ? filter : {}
    const resdata = await Users.find(globalFilter).skip(first).limit(rows)
    const totallength = await Users.countDocuments(globalFilter)
    res.send({ datas: resdata, totallength })
  } catch (err) {
    console.log(err)
  }
}
const updateusers = async (req, res, next) => {
  try {
    const resdata = await Users.findOneAndUpdate({ _id: req.body._id }, { Status: req.body.Status }, { returnOriginal: false })
    res.send(resdata)
  } catch (err) {
    console.log(err)
  }
}
const getactivitybyuser = async (req, res, next) => {
  try {
    const { userId, first, rows, globalFilter } = req.query
    const fieldArray = Object.keys(Startgameresult.schema.obj)
    const filtervalue = filterformat(fieldArray, globalFilter)
    const resdata = await Startgameresult.find({ ...filtervalue, userId }, { Results: 0 }).skip(first).limit(rows)
    const totallength = await Startgameresult.countDocuments({ ...filtervalue, userId })
    res.send({ datas: resdata, totallength })
  } catch (err) {
    console.log(err)
  }
}
const getdetailedactivityresult = async (req, res, next) => {
  try {
    const { _id } = req.query
    const resdata = await Startgameresult.findOne({ _id }, { Results: 1, Userstageids: 1 }).lean()
    const outres = resdata.Results.length !== 0 ? await activityresult(resdata.Results) : await sortactivityresult(resdata.Userstageids)
    res.send(outres)
  } catch (err) {
    console.log(err)
  }
}
export { getfullusers, updateusers, getactivitybyuser, getdetailedactivityresult }
