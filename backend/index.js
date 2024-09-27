const express = require('express');
const cors = require('cors');
require('./configuration/configure'); // Ensure this is your database configuration
const users = require('./configuration/users'); // Your user model
const app = express();

app.use(express.json());
app.use(cors());

// Signup route
app.post('/signup', async (req, res) => {
    const { email, password, name } = req.body;

    // Validate input
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        return res.status(400).send({ error: 'Valid email is required' });
    }
    if (!password || password.length < 6) {
        return res.status(400).send({ error: 'Password is required and must be at least 6 characters long' });
    }
    if (!name) {
        return res.status(400).send({ error: 'Name is required' });
    }

    // Check for existing user
    const existingUser = await users.findOne({ email });
    if (existingUser) {
        return res.status(400).send({ error: 'Email is already registered' });
    }

    // Create a new user
    try {
        let user = new users({ email, password, name });
        await user.save();
        res.send({ message: 'Signup successful, you can now log in' });
    } catch (error) {
        res.status(500).send({ error: 'Error creating user' });
    }
});

// Login route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
        let user = await users.findOne({ email, password }).select("-password");
        if (user) {
            res.send(user);
        } else {
            res.status(400).send({ result: "Invalid email or password" });
        }
    } else {
        res.status(400).send({ result: "Email and password are required" });
    }
});

const PORT = 3500;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
