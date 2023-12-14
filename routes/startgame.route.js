import express from 'express'
import { startgameinit, savestartgameresult, getstartgameresult } from '../controllers/startgame.controller.js'
import { userAuthenticateJWT } from '../services/token/usertoken.service.js'
import { Checkpointsandlifes } from '../middleware/UserMiddlware.js'
import { checkstageCompleted } from '../middleware/gameMiddlware.js'
const startgameRouter = express.Router()
startgameRouter.get('/apistartgameinit', [userAuthenticateJWT(['User']), Checkpointsandlifes, checkstageCompleted], startgameinit)
startgameRouter.post('/apisavestartgameresult', userAuthenticateJWT(['User']), savestartgameresult)
startgameRouter.get('/apigetstartgameresult', userAuthenticateJWT(['User']), getstartgameresult)
export default startgameRouter
