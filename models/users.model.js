import mongoose from 'mongoose'
import con1 from '../db/db.js'
const adminSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String

}, { timestamps: true })
const userSchema = new mongoose.Schema({
  userId: { type: String, default: () => new Date().getTime().toString() },
  'Full Name': String,
  Email: String,
  Password: String,
  Points: { type: Number, default: 100 },
  Lifes: { type: Number, default: 5 },
  Role: { type: String, default: 'User' },
  OTP: String,
  Invite_List: Array,
  Status: { type: String, default: 'Inactive' }
}, { timestamps: true })

const Users = con1.model('users', userSchema)
const Admins = con1.model('admins', adminSchema)
export { Users, Admins }
