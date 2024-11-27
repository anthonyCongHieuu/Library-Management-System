import React, { useState } from 'react';
import { Button, TextField, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Để điều hướng giữa các trang

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook để điều hướng

  // Hàm xử lý đăng nhập
  const handleLogin = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('user'));  // Kiểm tra thông tin người dùng trong localStorage
    if (user && email === user.email && password === user.password) {
      navigate('/');  // Điều hướng đến trang chính nếu đăng nhập thành công
    } else {
      alert('Email hoặc mật khẩu không đúng');
    }
  };

  // Hàm điều hướng đến trang đăng ký
  const handleRegister = () => {
    navigate('/register');  // Chuyển hướng đến trang đăng ký
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
          <Button
            variant="outlined"
            color="secondary"
            sx={{ marginTop: '10px' }}
            onClick={handleRegister}  // Khi nhấn, điều hướng đến trang đăng ký
          >
            Đăng ký
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default LoginPage;
