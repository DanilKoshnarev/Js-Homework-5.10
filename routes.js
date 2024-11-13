const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/registration', authController.authRegistration);

module.exports = router;
