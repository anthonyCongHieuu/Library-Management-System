const express = require('express');
const User = require('../models/User');
const { verifyAdmin, verifyToken } = require('../middleware/authMiddleware');
const router = express.Router();

// Lấy tất cả người dùng (Admin)
router.get('/', verifyToken, verifyAdmin, async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error: error.message });
  }
});

// Sửa thông tin người dùng (Admin)
router.put('/:id', verifyToken, verifyAdmin, async (req, res) => {
  const { username, email, role } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, { username, email, role }, { new: true });
    if (!updatedUser) return res.status(404).json({ message: 'User not found' });

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: 'Error updating user', error: error.message });
  }
});

// Xóa người dùng (Admin)
router.delete('/:id', verifyToken, verifyAdmin, async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).json({ message: 'User not found' });

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user', error: error.message });
  }
});

module.exports = router;
