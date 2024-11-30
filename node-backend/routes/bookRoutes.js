const express = require('express');
const Book = require('../models/Book');
const { verifyToken, verifyAdmin } = require('../middleware/authMiddleware');
const router = express.Router();

// Lấy tất cả sách
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching books', error: error.message });
  }
});

// Thêm sách (Admin)
router.post('/', verifyToken, verifyAdmin, async (req, res) => {
  const { title, author, genre, publishedDate } = req.body;

  try {
    const newBook = new Book({ title, author, genre, publishedDate });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: 'Error adding book', error: error.message });
  }
});

// Sửa sách (Admin)
router.put('/:id', verifyToken, verifyAdmin, async (req, res) => {
  const { title, author, genre, publishedDate } = req.body;

  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, { title, author, genre, publishedDate }, { new: true });
    if (!updatedBook) return res.status(404).json({ message: 'Book not found' });

    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({ message: 'Error updating book', error: error.message });
  }
});

// Xóa sách (Admin)
router.delete('/:id', verifyToken, verifyAdmin, async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook) return res.status(404).json({ message: 'Book not found' });

    res.status(200).json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting book', error: error.message });
  }
});

module.exports = router;
