import mongoose from 'mongoose'
const con1 = mongoose.createConnection('mongodb://0.0.0.0:27017/quizapp',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  function (_err, db) {
    if (_err) { console.log(_err) }
    console.log('Quiz App Database Connected successfully')
  }
)
export default con1
