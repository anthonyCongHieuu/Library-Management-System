const bcrypt = require('bcryptjs');  // Cài đặt bcrypt để mã hóa mật khẩu
const jwt = require('jsonwebtoken');  // Cài đặt jwt để tạo token
const User = require('../models/User');

// Đăng ký người dùng mới
exports.register = async (req, res) => {
  try {
    const { fullName, email, password, role } = req.body;

    // Kiểm tra nếu người dùng đã tồn tại
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email đã được sử dụng.' });
    }

    // Mã hóa mật khẩu
    const hashedPassword = await bcrypt.hash(password, 10);

    // Tạo người dùng mới với mật khẩu đã mã hóa
    const newUser = new User({ fullName, email, password: hashedPassword, role });
    await newUser.save();

    res.status(201).json({ message: 'Đăng ký thành công!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Đã xảy ra lỗi, vui lòng thử lại.' });
  }
};

// Đăng nhập người dùng
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Kiểm tra người dùng
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'Người dùng không tồn tại.' });
    }

    // So sánh mật khẩu
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Mật khẩu không đúng.' });
    }

    // Tạo JWT token
    const token = jwt.sign({ userId: user._id, email: user.email }, 'yourSecretKey', { expiresIn: '1h' });

    res.status(200).json({ message: 'Đăng nhập thành công!', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Đã xảy ra lỗi, vui lòng thử lại.' });
  }
};
