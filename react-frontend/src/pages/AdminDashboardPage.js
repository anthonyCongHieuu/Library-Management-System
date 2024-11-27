import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AdminDashboardPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        padding: '20px',
        textAlign: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>
      <Typography variant="body1">
        Chào mừng bạn đến trang quản trị.
      </Typography>
      <Box sx={{ marginTop: '20px' }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/manage-users')}
          sx={{ marginRight: '10px' }}
        >
          Quản lý người dùng
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => navigate('/view-reports')}
        >
          Xem báo cáo
        </Button>
      </Box>
    </Box>
  );
};

export default AdminDashboardPage;
