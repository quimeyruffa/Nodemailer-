require('dotenv').config();

const path = require('path');
const express = require('express');
const nodemailer= require("nodemailer");
const bodyParser = require('body-parser')


const app = express();
const port = 8000;
const viewDirectory = path.join(__dirname, '../views/');

app.use(express.static(viewDirectory));
app.use(bodyParser.json());

app.post('/send_email', (req, res) => {
    console.log('we are in');
    var email = req.body.email;
    var text = req.body.text;
    console.log(email);

// Step 1 -> What going to connect to whichever host domain 
//  that using or either services that you'd like to connect you
    let transporter = nodemailer.createTransport({
        //  i'd like to connect to Gmail so i do service and make it 
        // equal to Gmail
        service: 'gmail',
        auth:{
            //  configure this one so that it is not visible to the entire public
            user:process.env.email,
            pass:process.env.password
        }
    })
    let mailOptions={
        from: 'quimeyzoe86@gmail.com',
        to: email,
        subject:'Testing and testing',
        text: text
    }

  
// Step 2 -> what are the things that i'd like to send to my mail 


// Step 3 -> Grap whatever you have the transporter on step number one
transporter.sendMail(mailOptions, function(err, data){
    if (err){
        // We need to disable that Gmail feacture https://myaccount.google.com/lesssecureapps
        console.log('Errors Occurs', err)
    } else{
        console.log('Email sent!!' + data.response)
    }
})
});
app.listen(port, () => {
    console.log('Running on ' + port);
});
