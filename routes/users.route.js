import express from 'express'
import authenticateJWT from '../services/token/token.service.js'
import { userAuthenticateJWT } from '../services/token/usertoken.service.js'
import { getfullusers, updateusers, getactivitybyuser, getdetailedactivityresult } from '../controllers/admin/users.controller.js'
import { getpointsandlifes } from '../controllers/pointsandlifes.controller.js'
const usersRouter = express.Router()
usersRouter.get('/apigetfullusers', authenticateJWT(['admin']), getfullusers)
usersRouter.put('/apiupdateusers', authenticateJWT(['admin']), updateusers)
usersRouter.get('/apigetactivitybyuser', authenticateJWT(['admin']), getactivitybyuser)
usersRouter.get('/apigetdetailedactivityresult', authenticateJWT(['admin']), getdetailedactivityresult)
// points and lifes
usersRouter.get('/apigetpointandlifes', userAuthenticateJWT(['User']), getpointsandlifes)
export default usersRouter
