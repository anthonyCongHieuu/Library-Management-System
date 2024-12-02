// controllers/bookController.js
const Book = require('../models/Book');

// Tạo sách mới
exports.createBook = async (req, res) => {
  try {
    // Kiểm tra xem có đủ dữ liệu trong request hay không
    const { title, author, publishedDate } = req.body;
    if (!title || !author || !publishedDate) {
      return res.status(400).json({ message: 'Title, author, and published date are required.' });
    }

    // Tạo đối tượng sách mới
    const book = new Book({ title, author, publishedDate });

    // Lưu sách vào cơ sở dữ liệu
    await book.save();

    // Trả về phản hồi thành công
    res.status(201).json({ message: 'Book added successfully', book });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Lấy danh sách tất cả các sách
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
