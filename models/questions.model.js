import mongoose from 'mongoose'
import con1 from '../db/db.js'
const questionSchema = new mongoose.Schema({
  Category: {
    type: String,
    default: ''
  },
  'Sub Category': {
    type: String,
    default: ''
  },
  Question: {
    type: String,
    default: ''
  },
  'Image for Question': {
    type: String,
    default: ''
  },
  'Option A': {
    type: String

  },
  'Option B': {
    type: String

  },
  'Option C': {
    type: String

  },
  'Option D': {
    type: String

  },
  'Correct Answer': {
    type: String,
    default: ''
  },
  Level: {
    type: String,
    default: ''
  },
  Stage: {
    type: String,
    default: ''
  },
  Explanation: {
    type: mongoose.Schema.Types.Mixed,
    default: ''
  },
  'Image for Explanation': {
    type: String,
    default: ''
  },
  'Question Status': {
    type: String,
    default: 'Active'
  }
}, { timestamps: true })
const Questions = con1.model('questions', questionSchema)
export { Questions }
