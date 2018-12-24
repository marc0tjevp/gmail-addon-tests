const Email = require('../models/schemas/email.schema')

let saveEmail = (req, res) => {
   
    const email = new Email(req.body)

    email.save().then( res.status(200).json(email).end())

}

let getEmails = (req, res) => {
    Email.find({}, function (err, emails) {
        if (err) {
            res.status(500).json(err).end()
        } else {
            res.status(200).json(emails).end()
        }
})
}

module.exports = {
    getEmails,
    saveEmail
}