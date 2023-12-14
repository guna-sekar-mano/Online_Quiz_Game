import app from './app.js'
import './config/env.js'
const PORT = process.env.PORT || 1004
app.listen(PORT, () => console.log(`Server listening on ${PORT}`))
