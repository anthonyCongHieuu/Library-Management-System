import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ReaderDashboardPage = () => {
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
        Reader Dashboard
      </Typography>
      <Typography variant="body1">
        Chào mừng bạn đến trang dành cho người đọc.
      </Typography>
      <Box sx={{ marginTop: '20px' }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/book-list')}
        >
          Xem danh sách sách
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => navigate('/search-books')}
          sx={{ marginLeft: '10px' }}
        >
          Tìm kiếm sách
        </Button>
      </Box>
    </Box>
  );
};

export default ReaderDashboardPage;
