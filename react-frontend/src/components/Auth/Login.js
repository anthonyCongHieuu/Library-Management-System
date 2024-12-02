import React, { useState } from 'react';
import { Button, TextField, Box, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Để điều hướng giữa các trang

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();  // Để điều hướng sau khi đăng nhập thành công

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/users/login', formData);
      localStorage.setItem('token', response.data.token);  // Lưu token vào localStorage
      alert('Login successful!');
      navigate('/Dashboard');  // Điều hướng đến trang dashboard sau khi đăng nhập thành công
    } catch (error) {
      alert('Error: ' + error.response.data.message);
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
          value={formData.email}
          onChange={handleChange}
          name="email"
          required
        />
        <TextField
          label="Mật khẩu"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.password}
          onChange={handleChange}
          name="password"
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
            onClick={() => navigate('/register')} // Điều hướng đến trang đăng ký
          >
            Đăng ký
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Login;
