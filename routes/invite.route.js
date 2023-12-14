import express from 'express'
import { userAuthenticateJWT } from '../services/token/usertoken.service.js'
import { invitefriends } from '../controllers/invite.controller.js'
const inviteRouter = express.Router()
// points and lifes
inviteRouter.post('/apiinvitefriends', userAuthenticateJWT(['User']), invitefriends)
export default inviteRouter
