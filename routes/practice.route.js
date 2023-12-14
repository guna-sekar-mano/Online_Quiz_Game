import express from 'express'
import { practiceinit, savepracticeresult, practiceresult, updateguestuser } from '../controllers/practice.controller.js'
import { userAuthenticateJWT } from '../services/token/usertoken.service.js'
const practiceRouter = express.Router()
// admin
practiceRouter.get('/apipracticeinit', practiceinit)
practiceRouter.post('/apipracticeresult', practiceresult)
practiceRouter.post('/apisavepracticeresult', userAuthenticateJWT(['User']), savepracticeresult)
practiceRouter.post('/apiupdateguestuser', userAuthenticateJWT(['User']), updateguestuser)
export default practiceRouter
