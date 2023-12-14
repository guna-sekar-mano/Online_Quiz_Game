import express from 'express'
import { initlearnandearn, getlearningquestions, savelearningquestions } from '../controllers/earn-points/learn-and-earn.controller.js'
import { initreferandearn } from '../controllers/earn-points/refer-and-earn.controller.js'
import { initwatchadandearn, savewatchandearn } from '../controllers/earn-points/watch-and-earn.controller.js'
import { userAuthenticateJWT } from '../services/token/usertoken.service.js'
import authenticateJWT from '../services/token/token.service.js'
import { checklearnandearn } from '../middleware/earnpointsMiddleware.js'
import { getallearnpointhistory } from '../controllers/earn-points/earnpointhistory.controller.js'
const earnpointsRouter = express.Router()
earnpointsRouter.get('/apiinitlearnandearn', userAuthenticateJWT(['User']), initlearnandearn)
earnpointsRouter.get('/apigetlearningquestions', [userAuthenticateJWT(['User']), checklearnandearn], getlearningquestions)
earnpointsRouter.post('/apisavelearningquestions', userAuthenticateJWT(['User']), savelearningquestions)
// refer and earn
earnpointsRouter.get('/apiinitreferandearn', userAuthenticateJWT(['User']), initreferandearn)
// watch ad and earn
earnpointsRouter.get('/apiinitwatchadandearn', userAuthenticateJWT(['User']), initwatchadandearn)
earnpointsRouter.post('/apisavewatchandearn', userAuthenticateJWT(['User']), savewatchandearn)
// earnpoint history
earnpointsRouter.get('/apigetallearnpointhistory', authenticateJWT(['admin']), getallearnpointhistory)
export default earnpointsRouter
