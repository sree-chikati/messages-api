const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Add your models here.
const MessageSchema = new Schema({
    title: { type: String, required: true },
    body: { type: String, select: false },
    author: { type: String, select: false }
  })
  
  const Message = mongoose.model('Message', MessageSchema)
  
  module.exports = Message