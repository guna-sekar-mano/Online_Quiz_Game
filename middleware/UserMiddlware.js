import { findUserByQuery } from '../services/users/userService.js'
export const Checkpointsandlifes = async (req, res, next) => {
  const resdata = await findUserByQuery({ Email: req.user.Email }, { Points: 1 })
  resdata?.Points !== 0 ? next() : res.send({ status: 'Low Points' })
}
