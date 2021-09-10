const express = require('express');
const sendMail  = require('./main');

const app = express();

const PORT = 8000;

app.get('/', (req, res) => {
    res.send("testing nodemailer")
})

app.get('/mail', async (req, res) => {
    const message = {
        from: {
            name: 'Dorcis Kirigha',
            address: 'samuel.kirigha@thejitu.com'
        },
        to: 'faithkihara3@gmail.com',
        subject: 'Sending mails with nodemailer',
        text: 'Woow thats how i learned to send mails using nodemailer'
    }

    try {
        await sendMail(message)
        res.send('Email sent')
    } catch (error) {
        res.send('something wrong happened')
    }
})

app.listen(PORT, () => {
    console.log(`app listening from port ${PORT}`);
})