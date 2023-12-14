import { Questions } from '../../models/questions.model.js'
import { exceltojson } from '../../services/excel/excel.service.js'
import { Saveimages } from '../../services/imageupload/imageupload.service.js'
const importquestions = async (req, res, next) => {
  try {
    const json = await exceltojson(req.file.buffer)
    const resdata = await Questions.insertMany(json)
    res.send(resdata)
  } catch (err) {
    console.log(err)
    res.status(400).json({ message: err })
  }
}
const getallquestions = async (req, res, next) => {
  try {
    let { first, rows, globalFilter } = req.query
    const fieldArray = Object.keys(Questions.schema.obj)
    const filter = { $or: fieldArray.filter((field1) => field1 !== '_id').map(field => ({ [field]: { $regex: globalFilter, $options: 'i' } })) }
    globalFilter = globalFilter !== '' ? filter : {}
    const resdata = await Questions.find(globalFilter).skip(first).limit(rows)
    const totallength = await Questions.countDocuments(globalFilter)
    res.send({ datas: resdata, totallength })
  } catch (err) {
    res.status(400).json({ message: err })
  }
}
const savequestion = async (req, res, next) => {
  try {
    const imagestorepath = await Saveimages(req.files)
    console.log(imagestorepath)
    const resdata = await new Questions({ ...req.body, 'Image for Question': imagestorepath[0], 'Image for Explanation': imagestorepath[1] }).save()
    res.send(resdata)
  } catch (err) {
    res.status(400).json({ message: err })
  }
}
const updatequestion = async (req, res, next) => {
  try {
    let imagestorepath = []
    if (req.files.length !== 0) {
      imagestorepath = await Saveimages(req.files)
    }
    const findquestion = await Questions.findOne({ _id: req.body._id })
    const imagepath = { 'Image for Question': imagestorepath[0] ? imagestorepath[0] : findquestion['Image for Question'], 'Image for Explanation': imagestorepath[1] ? imagestorepath[1] : findquestion['Image for Explanation'] }
    const newDataArray = [req.body].map((obj) => { const { _id, ...rest } = obj; return rest })
    const resdata = await Questions.findOneAndUpdate({ _id: req.body._id }, { $set: { ...newDataArray[0], ...imagepath } }, { returnOriginal: false })
    res.send(resdata)
  } catch (err) {
    console.log(err)
    res.status(400).json({ message: err })
  }
}
const deletequestion = async (req, res, next) => {
  try {
    const resdata = await Questions.deleteOne({ _id: req.query.id })
    if (resdata.deletedCount !== 0) {
      res.send({ _id: req.query.id, status: 'Ok' })
    } else {
      res.send({ status: 'Error' })
    }
  } catch (err) {
    res.status(400).json({ message: err })
  }
}
const bulkupdatequestion = async (req, res, next) => {
  try {
    const resdata = await Questions.updateMany({ _id: { $in: req.body._id } }, req.body.datas)
    console.log(resdata.modifiedCount)
    if (resdata.modifiedCount !== 0) {
      res.send({ status: 'Ok' })
    } else {
      res.send({ status: 'Error' })
    }
  } catch (err) {
    res.status(400).json({ message: err })
  }
}
export { importquestions, getallquestions, savequestion, updatequestion, deletequestion, bulkupdatequestion }
