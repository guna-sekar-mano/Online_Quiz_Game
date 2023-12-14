import mongoose from 'mongoose'
import con1 from '../db/db.js'
const earnpointhistorySchema = new mongoose.Schema({
  userId: String,
  Email: String,
  Earnpointtype: String,
  Historydata: Object,
  History: String,
  Points: { type: Number },
  Lifes: { type: Number }
}, { timestamps: true })
const Earnpointhistory = con1.model('earnpointhistory', earnpointhistorySchema)
export { Earnpointhistory }
