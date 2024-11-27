import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';

const ReportsPage = () => {
  const [report, setReport] = useState(null);

  useEffect(() => {
    // Giả lập lấy báo cáo từ API hoặc localStorage
    const fetchReport = () => {
      const data = {
        totalBooks: 100,  // Ví dụ
        totalUsers: 50,   // Ví dụ
      };
      setReport(data);
    };
    fetchReport();
  }, []);

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>Báo cáo hệ thống</Typography>

      {report ? (
        <Box>
          <Typography variant="body1">Tổng số sách: {report.totalBooks}</Typography>
          <Typography variant="body1">Tổng số người dùng: {report.totalUsers}</Typography>
        </Box>
      ) : (
        <Typography variant="body1">Đang tải báo cáo...</Typography>
      )}

      <Button variant="contained" color="primary" sx={{ marginTop: '20px' }}>
        Tải báo cáo
      </Button>
    </Box>
  );
};

export default ReportsPage;
