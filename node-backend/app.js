const express = require('express');
const cors = require('cors');
const connectDB = require('./database');
const bookRoutes = require('./routes/bookRoutes');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');  // Import routes
require('dotenv').config();


// Khởi tạo ứng dụng express
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json()); // Để xử lý JSON từ frontend

// Đăng ký các route
app.use('/api/users', userRoutes); // Đặt '/api/users' làm tiền tố cho các route người dùng
app.use('/api/auth', authRoutes);  // Đặt '/api/auth' làm tiền tố cho các route đăng ký
app.use('/', bookRoutes);  // Đăng ký các route sách

// Kết nối MongoDB
connectDB();

// Khởi động server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
