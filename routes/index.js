import express from 'express'
import adminRouter from './admin.route.js'
import apiRouter from './api.route.js'
import questionRouter from './question.route.js'
import levelsRouter from './levels.route.js'
import usersRouter from './users.route.js'
import stagesRouter from './stages.route.js'
import startgameRouter from './startgame.route.js'
import practiceRouter from './practice.route.js'
import inviteRouter from './invite.route.js'
import adsRouter from './ads.route.js'
import earnpointsRouter from './earnpoints.route.js'
import watchadsRouter from './watchads.route.js'
import profileRouter from './profile.route.js'
const router = express.Router()
router.use('/admin', adminRouter)
router.use('/api', apiRouter)
router.use('/question', questionRouter)
router.use('/levels', levelsRouter)
router.use('/users', usersRouter)
router.use('/stages', stagesRouter)
router.use('/startgame', startgameRouter)
router.use('/practice', practiceRouter)
router.use('/invite', inviteRouter)
router.use('/ads', adsRouter)
router.use('/earnpoints', earnpointsRouter)
router.use('/watchads', watchadsRouter)
router.use('/profile', profileRouter)
export default router
