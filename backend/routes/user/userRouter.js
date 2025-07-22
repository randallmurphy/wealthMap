const express = require('express');
const router = express.Router();
const userController = require('./controller/userController');
const jwtMiddleware = require('./utils/jwtMiddleware');

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/profile', jwtMiddleware, userController.getUserProfile);

module.exports = router;
