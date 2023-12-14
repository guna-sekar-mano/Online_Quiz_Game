import express from 'express'
import { adminlogin, userlogin } from '../controllers/login.controller.js'
import { sendotp, registerUser } from '../controllers/register.controller.js'
const apiRouter = express.Router()
// admin
apiRouter.post('/apiadminlogin', adminlogin)
// account
apiRouter.post('/apiregisterUser', registerUser)
apiRouter.post('/apiuserlogin', userlogin)
apiRouter.post('/apisendotp', sendotp)
export default apiRouter
