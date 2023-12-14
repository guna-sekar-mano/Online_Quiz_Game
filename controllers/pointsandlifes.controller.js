import { findUserByQuery } from '../services/users/userService.js'
const getpointsandlifes = async (req, res, next) => {
  try {
    const resdata = await findUserByQuery({ Email: req.user.Email }, { Points: 1, Lifes: 1, Status: 1 })
    res.send(resdata)
  } catch (err) {
    console.log(err)
  }
}
export { getpointsandlifes }
