const express = require('express');
const sendEmail = require('./main');


const app = express();

const PORT = 8000;

app.get('/', (req, res) => {
    res.send("testing nodemailer")
})

app.get('/mail', async (req, res) => {
    const message = {
        from: {
            name: 'Samuel Kirigha',
            address: 'sammydorcis@outlook.com'
        },
        to: 'dkirigha18@gmail.com',
        subject: 'Sending mails with nodemailer',
        text: 'Woow thats how i learned to send mails using nodemailer',
    }

    try {
        console.log(message);
        await sendEmail(message)
        res.send('Email sent')
    } catch (error) {
        res.send('something wrong happened')
    }
})

app.listen(PORT, () => {
    console.log(`app listening from port ${PORT}`);
})