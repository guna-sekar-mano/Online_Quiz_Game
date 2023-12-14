import jwt from 'jsonwebtoken'
const { verify } = jwt
const accessTokenSecret = 'Quiz_Test_2023'
const Createtoken = (data) => {
  const token = jwt.sign(data, accessTokenSecret)
  return token
}
const userAuthenticateJWT = (roles) => (req, res, next) => {
  const authHeader = req.headers.authorization
  if (authHeader) {
    // console.log("auth");
    const token = authHeader.split(' ')[1]
    verify(token, accessTokenSecret, (err, user) => {
      if (err) {
        return res.sendStatus(403)
      }

      req.user = user
      if (roles.includes(user.Role)) {
        next()
      } else {
        return res.sendStatus(403)
      }
    })
  } else {
    res.status(404).send('authentication to access')
  }
}
export { Createtoken, userAuthenticateJWT }
