import express from 'express'
import { checkstages, getstages } from '../controllers/stages.controller.js'
import { userAuthenticateJWT } from '../services/token/usertoken.service.js'
import { Checkpointsandlifes } from '../middleware/UserMiddlware.js'
const stagesRouter = express.Router()
stagesRouter.get('/apigetstages', [userAuthenticateJWT(['User']), Checkpointsandlifes], getstages)
stagesRouter.post('/apicheckstages', userAuthenticateJWT(['User']), checkstages)
export default stagesRouter
