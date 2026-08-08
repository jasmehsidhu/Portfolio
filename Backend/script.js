import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'

const port=1000
const app= express()
app.use(cors())
app.use(express.json())
app.listen(port,()=>{
    console.log('Server Started')
})
app.post('/',(req,res)=>{
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "jasmehasofficial@gmail.com",
            pass: "xikd kasi rpmj qqtq"  
        }
    });
    const mailOptions = {
        from: "jasmehasofficialgmail.com",
        to: "jasmeh82@gmail.com",
        subject: `Message from ${req.body.username}`,
        text: `Email : ${req.body.email} , ${req.body.message}`
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent: " + info.response);
        }
    });
})
