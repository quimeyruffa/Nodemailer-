require('dotenv').config();
const express = require("express");
const nodemailer= require("nodemailer")
const app = express();
const path = require("path")

const PORT = 8080;



// Step 1 -> What going to connect to whichever host domain 
//  that using or either services that you'd like to connect you
let transpoter = nodemailer.createTransport({
    //  i'd like to connect to Gmail so i do service and make it 
    // equal to Gmail
     service: 'gmail',
     auth:{
        //  configure this one so that it is not visible to the entire public
         user:process.env.email,
         pass:process.env.password
     }
})

// Step 2 -> what are the things that i'd like to send to my mail 
let mailOptions={
    from: 'quimeyzoe86@gmail.com',
    to:'quimeyzoe86@gmail.com',
    subject:'Testing and testing',
    text:'It works!'
}

// Step 3 -> Grap whatever you have the transporter on step number one
transpoter.sendMail(mailOptions, function(err, data){
    if (err){
        // We need to disable that Gmail feacture https://myaccount.google.com/lesssecureapps
        console.log('Errors Occurs', err)
    } else{
        console.log('Email sent!!')
    }
})
