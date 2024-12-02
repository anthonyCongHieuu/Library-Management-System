import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import AddBookPage from './pages/AddBookPage';
import BookListPage from './pages/BookListPage';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import ProtectedRoute from './components/ProtectedRoute';
import AdminDashboardPage from './pages/AdminDashboardPage';
import ReaderDashboardPage from './pages/ReaderDashboardPage';
import ManageUsersPage from './pages/ManageUsersPage';  // Import thêm
import ReportsPage from './pages/ReportsPage';        // Import thêm
import './App.css';



const App = () => {
  const user = JSON.parse(localStorage.getItem('user'));  // Kiểm tra thông tin người dùng

  return (
    <Router>
      <div style={{ display: 'flex' }}>
        {user && <Sidebar />} {/* Hiển thị Sidebar chỉ khi người dùng đã đăng nhập */}
        <main style={{ flexGrow: 1, padding: '20px' }}>
          <Routes>
            {/* Public routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Nếu chưa đăng nhập, chuyển đến trang login */}
            <Route
              path="/"
              element={user ? (
                <Navigate to={user.role === 'admin' ? '/admin-dashboard' : '/reader-dashboard'} />
              ) : (
                <HomePage />
              )}
            />

            {/* Các route cần bảo vệ */}
            <Route
              path="/add-book"
              element={
                <ProtectedRoute>
                  <AddBookPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/view-books"
              element={
                <ProtectedRoute>
                  <BookListPage />
                </ProtectedRoute>
              }
            />
            {/* Dashboard cho Admin */}
            <Route
              path="/admin-Dashboard"
              element={
                <ProtectedRoute role="admin">
                  <AdminDashboardPage />
                </ProtectedRoute>
              }
            />
            {/* Dashboard cho Reader */}
            <Route
              path="/reader-Dashboard"
              element={
                <ProtectedRoute role="reader">
                  <ReaderDashboardPage />
                </ProtectedRoute>
              }
            />
            {/* Route cho quản lý người dùng (Admin Only) */}
            <Route
              path="/manage-users"
              element={
                <ProtectedRoute role="admin">
                  <ManageUsersPage />
                </ProtectedRoute>
              }
            />
            {/* Route cho báo cáo (Admin Only) */}
            <Route
              path="/view-reports"
              element={
                <ProtectedRoute role="admin">
                  <ReportsPage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
