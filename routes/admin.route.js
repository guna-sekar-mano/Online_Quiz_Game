import express from 'express'
import { getdashboardcardcount } from '../controllers/admin/dashboard.controller.js'
const adminRouter = express.Router()
// admin
adminRouter.get('/apigetdashboardcardcount', getdashboardcardcount)

export default adminRouter
