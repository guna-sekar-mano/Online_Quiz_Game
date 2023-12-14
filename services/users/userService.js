import { Users } from '../../models/users.model.js'
const findUserByQuery = async (query, projection) => {
  return await Users.findOne(query, projection ?? {}).lean()
}

const saveOrUpdateUser = async (data) => {
  const checkUser = await findUserByQuery({ Email: data.Email })

  if (checkUser === null) {
    const newUser = await new Users(data).save()
    return newUser
  } else {
    return await Users.findOneAndUpdate({ _id: checkUser._id }, data)
  }
}
export { findUserByQuery, saveOrUpdateUser }
