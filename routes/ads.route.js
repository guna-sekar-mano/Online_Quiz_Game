import express from 'express'
import { adstreaming } from '../controllers/ads/adsstream.controller.js'
const adsRouter = express.Router()
// points and lifes//
adsRouter.get('/apiadstreaming', adstreaming)
export default adsRouter
