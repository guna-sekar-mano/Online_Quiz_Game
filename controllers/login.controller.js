import { Admins } from '../models/users.model.js'
import { Createtoken } from '../services/token/usertoken.service.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { findUserByQuery } from '../services/users/userService.js'
const JWT_SECRET = 'Quiz_Secret_2023'
const adminlogin = async (req, res, next) => {
  try {
    const resuser = await Admins.findOne(req.body)
    if (resuser) {
      const token = jwt.sign({ userId: resuser }, JWT_SECRET)
      res.status(200).json({ message: 'success', token })
    } else {
      res.status(200).json({ message: 'error' })
    }
  } catch (err) {
    res.status(400).json({ message: err })
  }
}
const userlogin = async (req, res) => {
  try {
    const { Email, Password } = req.body
    const resdata = await findUserByQuery({ Email, Status: 'Active' })
    if (!resdata) {
      return res.send({ status: 'Login failed' })
    }
    const verifypassword = await bcrypt.compare(Password, resdata.Password)
    if (verifypassword === true) {
      const token = Createtoken({ 'Full Name': resdata['Full Name'], Email: resdata.Email, Role: resdata.Role, userId: resdata.userId })
      res.send({ status: 'Login Success', token })
    } else {
      res.send({ status: 'Login failed' })
    }
  } catch (err) {
    console.log(err)
  }
}
export { adminlogin, userlogin }
