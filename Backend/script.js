import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'

const port = process.env.PORT || 1000
const app = express()
app.use(cors())
app.use(express.json())
app.listen(port, () => {
    console.log('Server Started')
})

app.post('/', (req, res) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_APP_PASSWORD
        }
    });

    const mailOptions = {
        from: process.env.GMAIL_USER,
        to: "jasmeh82@gmail.com",
        subject: `Message from ${req.body.username}`,
        text: `Email : ${req.body.email} , ${req.body.message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).json({ success: false, error: error.message });
        } else {
            console.log("Email sent: " + info.response);
            return res.status(200).json({ success: true });
        }
    });
})
