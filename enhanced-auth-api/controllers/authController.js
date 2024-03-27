// backend/controllers/authController.js
const User = require('../models/User');

exports.registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

exports.loginUser = async (req, res) => {
  res.json(req.user);
};

exports.logoutUser = async (req, res) => {
  req.logout();
  res.json({ message: 'Logged out successfully' });
};
