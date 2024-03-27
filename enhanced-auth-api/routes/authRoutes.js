// backend/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const passport = require('passport');
const { registerUser, loginUser, logoutUser } = require('../controllers/authController');

router.post('/register', registerUser);
router.post('/login', passport.authenticate('local'), loginUser);
router.post('/logout', logoutUser);

module.exports = router;
