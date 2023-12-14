import express from 'express'
import authenticateJWT from '../services/token/token.service.js'
import { getwatchads, savewatchads, updatewatchads, deletewatchads } from '../controllers/admin/watchads.contoller.js'
const watchadsRouter = express.Router()
watchadsRouter.get('/apigetwatchads', authenticateJWT(['admin']), getwatchads)
watchadsRouter.post('/apisavewatchads', authenticateJWT(['admin']), savewatchads)
watchadsRouter.put('/apiupdatewatchads', authenticateJWT(['admin']), updatewatchads)
watchadsRouter.delete('/apideletewatchads', authenticateJWT(['admin']), deletewatchads)
export default watchadsRouter
