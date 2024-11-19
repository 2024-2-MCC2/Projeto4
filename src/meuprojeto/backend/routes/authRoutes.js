// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/AutenticarController');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/forgot-password', authController.forgotPassword);

module.exports = router;
