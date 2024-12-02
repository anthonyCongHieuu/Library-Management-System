import React, { useState } from 'react';
import { Button, TextField, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Điều hướng người dùng sau khi login thành công

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/users/login', { email, password });

      // Kiểm tra dữ liệu phản hồi trước khi sử dụng
      if (response && response.data) {
        // Lưu token hoặc xử lý dữ liệu người dùng
        localStorage.setItem('token', response.data.token);  // Lưu JWT vào localStorage
        alert('Login successful!');
        navigate('/dashboard'); // Điều hướng đến trang dashboard sau khi login thành công
      } else {
        console.error('No response data received');
        alert('Login failed: No data received');
      }
    } catch (error) {
      // Xử lý lỗi khi có vấn đề với API hoặc mạng
      if (error.response) {
        console.error('Error response:', error.response);
        alert('Login failed: ' + error.response.data.message);
      } else {
        console.error('Error message:', error.message);
        alert('An error occurred: ' + error.message);
      }
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f7f7f7',
      }}
    >
      <Typography variant="h4" gutterBottom>Đăng nhập</Typography>
      <form onSubmit={handleLogin} style={{ width: '300px' }}>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          label="Mật khẩu"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button type="submit" variant="contained" color="primary" sx={{ marginTop: '10px' }}>
            Đăng nhập
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default LoginPage;
