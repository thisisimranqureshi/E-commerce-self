const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'imranqureshii735@gmail.com',
        pass: 'evnpnjhnudxqnffd' // Use App Password if 2FA is enabled
    },
    logger: true, // Enable logging
    debug: true 
});

const sendOTP = (email, otp) => {
    const mailOptions = {
        from: 'imranqureshii735@gmail.com',
        to: {email}, // Use the email parameter here
        subject: 'Your OTP Code',
        text: `Your OTP code is ${otp}`
    };

    return transporter.sendMail(mailOptions)
        .then(info => {
            console.log('Email sent: ' + info.response);
        })
        .catch(error => {
            console.error('Error sending email: ', error);
            throw error;
        });
};

module.exports = { sendOTP };
