import React, { useState } from 'react';
import { Button, TextField, Box, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    role: '',  // Khởi tạo role là rỗng
  });

  const navigate = useNavigate();  // Để điều hướng sau khi đăng ký thành công

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/users/register', formData);
      if (response && response.data) {
        alert(response.data.message);
        navigate('/login');  // Điều hướng về trang login sau khi đăng ký thành công
      } else {
        alert('No response data received');
      }
    } catch (error) {
      if (error.response && error.response.data) {
        alert('Error: ' + error.response.data.message);
      } else {
        alert('Error: Unknown error');
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
      <Typography variant="h4" gutterBottom>Đăng ký tài khoản</Typography>
      <form onSubmit={handleRegister} style={{ width: '300px' }}>
        <TextField
          label="Họ tên"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.fullName}
          onChange={handleChange}
          name="fullName"
          required
        />
        <TextField
          label="Email"
          type="email"
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
        
        {/* Radio Buttons để chọn vai trò */}
        <FormControl component="fieldset" sx={{ marginTop: '20px' }}>
          <FormLabel component="legend">Vai trò</FormLabel>
          <RadioGroup
            row
            value={formData.role}
            onChange={handleChange}
            name="role"
          >
            <FormControlLabel value="reader" control={<Radio />} label="Người đọc" />
            <FormControlLabel value="admin" control={<Radio />} label="Quản trị viên" />
          </RadioGroup>
        </FormControl>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ marginTop: '20px' }}
        >
          Đăng ký
        </Button>
      </form>
    </Box>
  );
};

export default Register;