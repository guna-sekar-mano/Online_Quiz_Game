import express from 'express'
import multer from 'multer'
import authenticateJWT from '../services/token/token.service.js'
import { importquestions, getallquestions, savequestion, updatequestion, deletequestion, bulkupdatequestion } from '../controllers/admin/questions.controller.js'
const questionRouter = express.Router()

// Configure Multer for handling file uploads
const storage = multer.memoryStorage()
const upload = multer({ storage })
// question
questionRouter.post('/apiimportquestions', authenticateJWT(['admin']), upload.single('Questionfile'), importquestions)
questionRouter.get('/apigetallquestions', authenticateJWT(['admin']), getallquestions)
questionRouter.post('/apisavequestion', authenticateJWT(['admin']), upload.array('files'), savequestion)
questionRouter.put('/apiupdatequestion', authenticateJWT(['admin']), upload.array('files'), updatequestion)
questionRouter.delete('/apideletequestion', authenticateJWT(['admin']), deletequestion)
questionRouter.put('/apibulkupdatequestion', authenticateJWT(['admin']), upload.array('files'), bulkupdatequestion)

export default questionRouter
