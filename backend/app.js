require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const axios = require('axios');  // Pour faire l'appel à l'API Turnstile
const app = express();

app.use(express.json());

app.use(helmet());

app.use(cors({
    origin: ['https://remi-dev.fr'], 
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
}));

const limiter = rateLimit({
    windowMS: 15 * 60 * 1000,
    max : 5,
    message: 'Trop de requêtes provenant de cette IP, veuillez réessayer dans 15 minutes.',
});
app.use(limiter);


const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT, 10),
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
});

app.post('/send-email', async (req, res) => {
    const { lastName, firstName, subject, message, 'cf-turnstile-response': captchaToken } = req.body;

    if(!lastName || !firstName || !subject || !message || !captchaToken) {
        return res.status(400).json({message: 'Tous les champs doivent être complétés'});
    }
    
    // Vérification du token CAPTCHA avec l'API Turnstile
    try {
        const verificationUrl = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
        const response = await axios.post(verificationUrl, {
            secret: process.env.TURNSTILE_SECRET_KEY,  // Ta clé secrète
            response: captchaToken,
            remoteip: req.ip  // Facultatif : L'adresse IP de l'utilisateur
        });

        const { success, 'error-codes': errorCodes } = response.data;

        if (!success) {
            return res.status(400).json({ message: 'CAPTCHA validation failed', errorCodes });
        }

        // Si le CAPTCHA est validé, envoyer l'email
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `Site remi-dev.fr - ${firstName} ${lastName} : ${subject}`,
            text: message,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email: ', error.message);
                return res.status(500).send('Erreur lors de l\'envoi du mail');
            }
            res.status(200).send('Message envoyé avec succès.');
        });
    } catch (error) {
        console.error('Erreur lors de la validation CAPTCHA :', error.message);
        res.status(500).json({ message: 'Erreur lors de la validation CAPTCHA.' });
    }
});

module.exports = app;