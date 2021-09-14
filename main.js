const nodemailer = require("nodemailer");
const dontenv = require('dotenv');
dontenv.config();


const transport = nodemailer.createTransport(
    {
        service: "hotmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASS
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