import mongoose from 'mongoose'
import con1 from '../db/db.js'
import moment from 'moment-timezone'
const startgameresultSchema = new mongoose.Schema({
  userId: String,
  'Full Name': String,
  Email: String,
  Category: String,
  Level: String,
  Stage: String,
  Stage_Status: { type: String, default: 'Incomplete' },
  Game_Time: String,
  Results: Array,
  Points: { type: Number },
  Lifes: { type: Number },
  Date: { type: String, default: moment().format('YYYY-MM-DD') },
  CorrectAnswerCount: { type: String, default: '0' },
  WrongAnswerCount: { type: String, default: '0' },
  Userstageids: Array,
  Game_Type: String,
  Game_Status: String
}, { timestamps: true })
const Startgameresult = con1.model('startgameresults', startgameresultSchema)
export { Startgameresult }
