const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Add your models here.
const UserSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, select: false },
    messages : [{ type: Schema.Types.ObjectId, ref: "Message" }]
  })
  
  const User = mongoose.model('User', UserSchema)
  
  module.exports = User