// import { Users } from '../models/users.model.js'
import sendinviteMail from '../services/mail/invitemailService.js'
import { findUserByQuery } from '../services/users/userService.js'
const invitefriends = async (req, res, next) => {
  try {
    const check = await findUserByQuery({ ...req.body, ...{ Status: 'Active' } })
    if (!check) {
      const sendinvite = await sendinviteMail(req.body, req.user.userId)
      console.log(sendinvite)
      res.send(sendinvite)
    } else {
      res.send({ status: 'Email Already exists' })
    }
  } catch (err) {
    console.log(err)
  }
}
export { invitefriends }
