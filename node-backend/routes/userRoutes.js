// routes/users.js

const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');  // Đảm bảo đường dẫn đúng

// Đăng ký người dùng
router.post('/register', UserController.register);

// Đăng nhập người dùng
router.post('/login', UserController.login);

module.exports = router;
