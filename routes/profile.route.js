import express from 'express'
import { gettrackyouractivity, getallearnpointhistory } from '../controllers/profile.controller.js'
import { userAuthenticateJWT } from '../services/token/usertoken.service.js'
const profileRouter = express.Router()
// admin
profileRouter.get('/apigettrackyouractivity', userAuthenticateJWT(['User']), gettrackyouractivity)
profileRouter.get('/apigetallearnpointhistory', userAuthenticateJWT(['User']), getallearnpointhistory)
export default profileRouter
