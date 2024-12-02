// models/User.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,  // Đảm bảo email là duy nhất
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['reader', 'admin'],  // Các vai trò hợp lệ
    default: 'reader',
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
