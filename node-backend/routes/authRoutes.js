const express = require('express');
const router = express.Router();

// Định nghĩa các route ở đây
router.post('/login', (req, res) => {
  res.send('Login route');
});

router.post('/register', (req, res) => {
  res.send('Register route');
});

module.exports = router;
