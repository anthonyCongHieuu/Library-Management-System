import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ padding: '20px', textAlign: 'center', backgroundColor: '#f0f0f0', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <Typography variant="h4" gutterBottom>Welcome to the Library Management System</Typography>
      <Typography variant="body1" gutterBottom>Use the sidebar to navigate through the application.</Typography>
      
      {/* Nút điều hướng cho Quản lý Sách */}
      <Button variant="contained" color="primary" onClick={() => navigate('/add-book')}>
        Add New Book
      </Button>
      <Button variant="contained" color="secondary" sx={{ marginLeft: '10px' }} onClick={() => navigate('/book-list')}>
        View Book List
      </Button>
      
      {/* Nút điều hướng cho Quản trị viên */}
      <Typography variant="h6" sx={{ marginTop: '30px' }}>Admin Features</Typography>
      <Button variant="contained" color="success" sx={{ marginTop: '10px' }} onClick={() => navigate('/manage-users')}>
        Manage Users
      </Button>
      <Button variant="contained" color="warning" sx={{ marginLeft: '10px' }} onClick={() => navigate('/reports')}>
        View Reports
      </Button>
    </Box>
  );
};

export default HomePage;
