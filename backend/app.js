require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

app.use(cors({
    origin: 'https://remi-dev.fr', 
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
}));
app.use(express.json());

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT, 10),
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
});

app.post('/send-email', (req, res) => {
    const { lastName, firstName, subject, message } = req.body;
    
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: `Site remi-dev.fr - ${firstName} ${lastName} : ${subject}`,
        text: message,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            console.error('Error sending email: ', error.message);
            return res.status(500).send('Erreur lors de l\'envoi du mail');
        }
        res.status(200).send('Message envoyé avec succès.');
    });
});

module.exports = app

