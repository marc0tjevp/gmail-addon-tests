const mongoose = require('mongoose')
const Schema = mongoose.Schema

var emailSchema = new Schema({
})

const Email = mongoose.model('email', emailSchema)

module.exports = {
  Email,
  emailSchema
}