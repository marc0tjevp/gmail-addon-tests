const routes = require('express').Router()
const controller = require('../controllers/email.controller')

routes.get('/', controller.getEmails)
routes.post('/', controller.saveEmail)

module.exports = routes