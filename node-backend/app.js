const express = require('express');
const cors = require('cors');
const connectDB = require('./database');  // Đảm bảo đường dẫn đúng
const bookRoutes = require('./routes/bookRoutes');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

// Khởi tạo ứng dụng express
const app = express();
const port = 3000;

// Kết nối MongoDB
connectDB();  // Gọi hàm kết nối MongoDB

// Các middleware và routes
app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/', bookRoutes);

// Khởi động server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
