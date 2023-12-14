import { Users } from '../models/users.model.js'
import bcrypt from 'bcrypt'
import sendMail from '../services/mail/mailService.js'
import { findUserByQuery, saveOrUpdateUser } from '../services/users/userService.js'
import { savereferearpointhistory } from '../services/earnpoints/ReferEarnpointhistory.js'
const sendotp = async (req, res, next) => {
  try {
    const checkuser = await findUserByQuery({ Email: req.body.Email })
    if (checkuser === null || checkuser.Status !== 'Active') {
      const resdata = await sendMail(req.body)
      if (resdata.status === 'Email Sent') {
        const { Password, ...otherdatas } = req.body
        const haspassword = await bcrypt.hash(Password, 10)
        const data = { ...otherdatas, Password: haspassword, OTP: resdata.otp }
        const res1 = await saveOrUpdateUser(data)
        res1 ? res.status(200).send({ status: 'OTP Sent' }) : res.send({ status: 'Email  not exists' })
      } else {
        res.send({ status: 'Email  not exists' })
      }
    } else {
      res.send({ status: 'Already email exists' })
    }
  } catch (err) {
    console.log(err)
  }
}
const registerUser = async (req, res, next) => {
  try {
    const { RefId, ...otherdatas } = req.body
    const checkuser = await findUserByQuery(otherdatas)
    if (checkuser) {
      await Users.findOneAndUpdate({ _id: checkuser._id }, { Status: 'Active' })
      if (RefId) {
        await savereferearpointhistory(RefId)
      }
      res.send({ status: 'Sucessfully registered' })
    } else {
      res.send({ status: 'Invalid OTP' })
    }
  } catch (err) {
    console.log(err)
  }
}

export { sendotp, registerUser }
