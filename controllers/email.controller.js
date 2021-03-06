const Email = require('../models/schemas/email.schema').Email

let saveEmail = (req, res) => {

    const sender = req.body.sender || ''
    const name = req.body.name || ''
    const subject = req.body.subject || ''
    const body = req.body.body || ''
    const date = req.body.date || ''
   
    const email = new Email({
        sender: sender,
        name: name,
        subject: subject,
        body: body,
        date: date,
    })

    console.log("Email: " + email)
    console.log("Body: " + req.body)

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