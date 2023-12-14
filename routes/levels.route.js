import express from 'express'
import { getactivelevels, checklevels } from '../controllers/levels.controller.js'
import { userAuthenticateJWT } from '../services/token/usertoken.service.js'
import { Checkpointsandlifes } from '../middleware/UserMiddlware.js'
const levelsRouter = express.Router()
// admin
levelsRouter.get('/apigetactivelevels', [userAuthenticateJWT(['User']), Checkpointsandlifes], getactivelevels)
levelsRouter.post('/apichecklevels', userAuthenticateJWT(['User']), checklevels)
export default levelsRouter
