const mongoose = require('mongoose')
const Schema = mongoose.Schema

var emailSchema = new Schema({

  id: String,
  sender: String,
  name: String,
  subject: String,
  body: String,
  date: String,

})

const Email = mongoose.model('email', emailSchema)

module.exports = {
  Email,
  emailSchema
}