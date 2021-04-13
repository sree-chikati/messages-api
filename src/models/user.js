const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Add your models here.
const UserSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, select: false }
  })
  
  const User = mongoose.model('User', UserSchema)
  
  module.exports = User