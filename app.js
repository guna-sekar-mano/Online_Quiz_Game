import express from 'express'
import bodyparser from 'body-parser'
import compression from 'compression'
import morgan from 'morgan'
import cors from 'cors'
import router from './routes/index.js'
const app = express()
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(compression())
app.use('/uploads', express.static('uploads'))
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:1001', 'http://192.168.0.20:3000', 'http://127.0.0.1:5500'],
  credentials: true
}))
//
app.use('/', router)
app.use('/hello', (req, res) => res.send('Hello'))
export default app
