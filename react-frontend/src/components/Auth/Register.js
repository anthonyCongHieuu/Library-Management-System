import React, { useState } from 'react';
import { Button, TextField, Box, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('reader'); // Mặc định là 'reader'
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const newUser = { fullName, email, password, role };  // Gán vai trò được chọn từ radio button
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
        
        {/* Radio Buttons để chọn vai trò */}
        <FormControl component="fieldset" sx={{ marginTop: '20px' }}>
          <FormLabel component="legend">Vai trò</FormLabel>
          <RadioGroup
            row
            value={role}
            onChange={(e) => setRole(e.target.value)}
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

export default RegisterPage;
