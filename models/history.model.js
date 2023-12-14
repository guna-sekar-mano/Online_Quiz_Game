import mongoose from 'mongoose'
import con1 from '../db/db.js'
const gamehistorySchema = new mongoose.Schema({
  userId: String,
  Email: String,
  History: String
}, { timestamps: true })

const Gamehistory = con1.model('gamehistory', gamehistorySchema)

export { Gamehistory }
