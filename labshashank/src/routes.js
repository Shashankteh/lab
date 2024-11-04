const express = require('express');
const User = require('../models/User');  // Import the User model
const router = express.Router();

// Signup route
router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  // Create a new user
  const newUser = new User({ username, email, password });
  await newUser.save();

  res.json({ message: 'Signup successful' });
});

// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Find user by email and password
  const user = await User.findOne({ email, password });

  if (user) {
    res.json({ message: 'Login successful' });
  } else {
    res.status(400).json({ message: 'Invalid credentials' });
  }
});

module.exports = router;
