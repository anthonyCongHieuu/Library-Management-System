import React, { useState } from 'react';
import { Button, TextField, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const newUser = { fullName, email, password, role: 'reader' };
    localStorage.setItem('user', JSON.stringify(newUser));  // Lưu thông tin người dùng vào localStorage
    navigate('/login');  // Sau khi đăng ký thành công, chuyển hướng về trang đăng nhập
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
      <Typography variant="h4" gutterBottom>Đăng ký tài khoản</Typography>
      <form onSubmit={handleRegister} style={{ width: '300px' }}>
        <TextField
          label="Họ tên"
          variant="outlined"
          fullWidth
          margin="normal"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <TextField
          label="Email"
          type="email"
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
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ marginTop: '10px' }}
        >
          Đăng ký
        </Button>
      </form>
    </Box>
  );
};

export default RegisterPage;
