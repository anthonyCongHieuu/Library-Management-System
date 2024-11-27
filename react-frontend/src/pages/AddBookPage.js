import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const AddBook = () => {
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    category: '',
    year: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const books = JSON.parse(localStorage.getItem('books')) || [];
    books.push(bookData);
    localStorage.setItem('books', JSON.stringify(books));
    alert('Book added successfully!');
    setBookData({
      title: '',
      author: '',
      category: '',
      year: '',
    });
  };

  return (
    <Box sx={{ padding: '20px', backgroundColor: '#fff', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <Typography variant="h6" gutterBottom>Add New Book</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          name="title"
          value={bookData.title}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Author"
          name="author"
          value={bookData.author}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Category"
          name="category"
          value={bookData.category}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Year"
          name="year"
          value={bookData.year}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" color="primary" sx={{ marginTop: '20px' }}>
          Add Book
        </Button>
      </form>
    </Box>
  );
};

export default AddBook;
