import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Button } from '@mui/material';
import ListView from './ListView';  // Đảm bảo ListView được định nghĩa và hoạt động tốt
import GridView from './GridView';  // Đảm bảo GridView được định nghĩa và hoạt động tốt
import SearchBar from './SearchBar';  // Đảm bảo SearchBar được định nghĩa và hoạt động tốt

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [view, setView] = useState('list');
  const [searchTerm, setSearchTerm] = useState('');

  // Gọi API để lấy danh sách sách từ backend
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/books');  // Đảm bảo endpoint backend đúng
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  // Lọc sách theo từ khóa tìm kiếm
  const filteredBooks = books.filter((book) => {
    const titleWords = book.title.toLowerCase().split(" ");
    const lowercaseSearchTerm = searchTerm.toLowerCase();
    return titleWords.some(word => word.startsWith(lowercaseSearchTerm));
  });

  return (
    <Box sx={{ mt: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <SearchBar onSearch={setSearchTerm} /> {/* Tìm kiếm */}
        <Box>
          {/* Các nút chuyển đổi giữa chế độ xem danh sách và lưới */}
          <Button variant="contained" onClick={() => setView('list')}>
            List View
          </Button>
          <Button variant="contained" onClick={() => setView('grid')} sx={{ ml: 2 }}>
            Grid View
          </Button>
        </Box>
      </Box>
      {/* Chuyển đổi giữa ListView và GridView */}
      {view === 'list' ? <ListView books={filteredBooks} /> : <GridView books={filteredBooks} />}
    </Box>
  );
};

export default BookList;
