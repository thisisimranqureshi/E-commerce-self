const express = require('express');
const cors = require('cors');
require('./configuration/configure');
const users = require('./configuration/users');
const mailing = require('./mail');
const app = express();
app.use(express.json());
app.use(cors());

let otpStore = {}; // Store OTPs temporarily

// Function to generate a random OTP
const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
};

// Signup route
app.post('/signup', async (req, res) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).send({ error: 'Email is required' });
    }

    // Generate OTP and send it
    const otp = generateOTP();
    otpStore[email] = otp; // Store OTP for verification

    try {
        await mailing.sendOTP(email, otp);
        res.send({ message: 'OTP sent to your email' });
    } catch (error) {
        res.status(500).send({ error: 'Error sending OTP' });
    }
});

// Verify OTP route
app.post('/verify-otp', async (req, res) => {
    const { email, otp } = req.body;

    if (otpStore[email] === otp) {
        delete otpStore[email]; // Clear OTP after verification
        let user = new users(req.body);
        await user.save();
        res.send({ message: 'Signup successful, you can now log in' });
    } else {
        res.status(400).send({ error: 'Invalid OTP' });
    }
});

// Login route
app.post('/login', async (req, resp) => {
    const { email, password } = req.body;
    if (email && password) {
        let user = await users.findOne({ email, password }).select("-password");
        if (user) {
            resp.send(user);
        } else {
            resp.status(400).send({ result: "Invalid email or password" });
        }
    } else {
        resp.status(400).send({ result: "Email and password are required" });
    }
});

// Route for re-sending OTP (optional)
app.post('/resend-otp', async (req, res) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).send({ error: 'Email is required' });
    }

    // Generate new OTP and send it
    const otp = generateOTP();
    otpStore[email] = otp;

    try {
        await mailing.sendOTP(email, otp);
        res.send({ message: 'New OTP sent to your email' });
    } catch (error) {
        res.status(500).send({ error: 'Error sending OTP' });
    }
});

app.listen(3500, () => {
    console.log('Server is running on port 3500');
});
