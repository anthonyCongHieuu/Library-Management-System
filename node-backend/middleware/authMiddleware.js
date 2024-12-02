
const jwt = require('jsonwebtoken');
const User = require('../models/User');  // Import model User để xác thực người dùng

// Kiểm tra token
exports.verifyToken = async (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    return res.status(403).json({ message: 'Access denied, token missing' });
  }
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);  // Giải mã token
    req.user = decoded;  // Lưu thông tin người dùng vào request
    next();  // Tiếp tục xử lý các route tiếp theo
  } catch (error) {
    return res.status(400).json({ message: 'Invalid token' });
  }
};

// Kiểm tra quyền Admin
exports.verifyAdmin = async (req, res, next) => {
  const user = await User.findById(req.user.id);
  if (!user || user.role !== 'admin') {
    return res.status(403).json({ message: 'Access denied, admin rights required' });
  }
  next();  // Tiếp tục xử lý các route
};
