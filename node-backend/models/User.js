const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Tạo schema cho User
const userSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],  // Kiểm tra username thay vì name
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters long'],
  },
  role: {
    type: String,
    required: [true, 'Role is required'],
    enum: ['reader', 'admin'], // Chỉ cho phép 'reader' hoặc 'admin'
    default: 'reader', // Giá trị mặc định là 'reader'
  },
});

module.exports = mongoose.model('User', userSchema);
