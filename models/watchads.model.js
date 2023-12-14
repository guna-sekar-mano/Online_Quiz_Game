import mongoose from 'mongoose'
import con1 from '../db/db.js'
const WatchadsandlearnSchema = new mongoose.Schema({
  Adtitle: { type: String, trim: true },
  Adtotalseconds: { type: Number, trim: true },
  Adlink: { type: String, trim: true }
}, { timestamps: true })
const Watchads = con1.model('watchads', WatchadsandlearnSchema)
export { Watchads }
