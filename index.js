require('dotenv').config();
const express = require('express'),
app = express(),
PORT = process.env.PORT || 80,
cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');

            //Express Set Up 
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`);
})

app.use(express.static(path.join(__dirname, '/build')));


app.get('*', (req,res) =>{
    // in production use path /build/index.html
    if(process.env.NODE_ENV === 'production'){
        res.sendFile(path.join(__dirname+'build/index.html'));
    }
    //otherwise use index.html in main directory
    res.sendFile(path.join(__dirname,'index.html'));
});


            // POST ROUTE
     
app.post('/sendMail',(req,res)=>{
    console.log('Data: ', req.body);
    res.json({Message: "POST Received"});

    // Setting up NODEMAILER

    // Setting up the transport with nodemailer
    let smtpTransport = nodemailer.createTransport({
        service: 'Gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false
        auth: { 
            user: process.env.EMAIL,
            pass: process.env.PASS

        }

    })

    // setting up mail options with message
    let mailOptions = {
        from: process.env.EMAIL,
        to: req.body.email,
        subject: 'Matt Staton\'s Web Application Demo',
        html:

        `
            <h3>Confirmation Email</h3>
            <h4>Sign Up Confirmation.</h4>
            <p>${req.body.firstName}, Thank you for signing up using my sign up web app demo. Your information will not be stored.
            </p>

        `

    }

    
    // Sending email with transport using 'sendMail'

    smtpTransport.sendMail(mailOptions,(error, response)=>{
            if(error){
                return console.log(error);
            }
               return console.log("Email sent!");
            
    })

})