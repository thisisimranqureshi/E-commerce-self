const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail', // or another service
    auth: {
        user: 'imranqureshii735@gmail.com',
            pass: 'kapb nvwx rdvj vxzk'
    }
});

const sendOTP = (email, otp) => {
    const mailOptions = {
        from: 'imranqureshii735@gmail.com',
        to: 'iq005714@gmail.com',
        subject: 'Your OTP Code',
        text: `Your OTP code is ${otp}`
    };

    return transporter.sendMail(mailOptions);
};

module.exports = { sendOTP };
