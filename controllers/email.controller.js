const Email = require('../models/schemas/email.schema').Email

let saveEmail = (req, res) => {

    const id = req.body.payload.id || ''
    const sender = req.body.payload.sender || ''
    const name = req.body.payload.name || ''
    const subject = req.body.payload.subject || ''
    const body = req.body.payload.body || ''
    const date = req.body.payload.date || ''
   
    const email = new Email({
        id: id,
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