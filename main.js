const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport(
    {
        service: 'hotmail',
        auth: {
            user: 'email@user.com',
            pass: 'password'
        }
    }
)

const sendMail = async (message) => {
    return new Promise((resolve, reject) => {
        transport.sendMail(message, (err, info) => {
            if (err) {
                return reject(err)
            }
            console.log(info.response)
            resolve(info.response)
        })
    })
}

module.exports = sendMail