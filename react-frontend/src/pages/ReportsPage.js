import React, { useState, useEffect } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const ReportsPage = () => {
  const [books, setBooks] = useState([]);
  const [reportData, setReportData] = useState({
    totalBooks: 0,
    borrowedBooks: 0,
    availableBooks: 0,
  });

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem('books')) || [];
    setBooks(storedBooks);

    const totalBooks = storedBooks.length;
    const borrowedBooks = storedBooks.filter(book => book.status === 'borrowed').length;
    const availableBooks = totalBooks - borrowedBooks;

    setReportData({
      totalBooks,
      borrowedBooks,
      availableBooks,
    });
  }, []);

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h6" gutterBottom>Book Report</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Total Books</TableCell>
              <TableCell>Borrowed Books</TableCell>
              <TableCell>Available Books</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{reportData.totalBooks}</TableCell>
              <TableCell>{reportData.borrowedBooks}</TableCell>
              <TableCell>{reportData.availableBooks}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ReportsPage;
