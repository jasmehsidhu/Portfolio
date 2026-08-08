import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'
import { Resend } from 'resend';


const port = process.env.PORT || 1000
const app = express()
const resend = new Resend(process.env.RESEND);
resend.apiKeys.create({ name: 'Production' });
app.use(cors());
app.use(express.json())
app.listen(port, () => {
    console.log('Server Started')
})

app.post('/',async (req, res) => {
  const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'jasmeh76@gmail.com',
            subject: `Message from ${req.body.username}`,
            text: `Email : ${req.body.email} , ${req.body.message}`
        })

  
})
