const nodemailer = require("nodemailer")

const transport = nodemailer.createTransport(
    {
        service: "hotmail",
        auth: {
            user: 'sammydorcis@outlook.com',
            pass: 'Sammy3646.'
        }
    }
)

const sendEmail = async (message) => {
    return new Promise((resolve, reject) => {
        transport.sendMail(message, (err, info) => {
            if (err) {
                return reject(err)
            }

            // console.log(info.response)
            resolve(info.response)
        })
    })
}

module.exports = sendEmail