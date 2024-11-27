import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import AddBookPage from './pages/AddBookPage';
import BookListPage from './pages/BookListPage';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Dashboard from './components/Auth/Dashboard';
import ManageUsersPage from './pages/ManageUsersPage';
import ReportsPage from './pages/ReportsPage';
import ProtectedRoute from './components/ProtectedRoute';  // Import ProtectedRoute

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <main style={{ flexGrow: 1, padding: '20px' }}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} /> {/* Trang sau đăng nhập */}
            
            <Route path="/manage-users" element={<ManageUsersPage />} />

            
            
            {/* Protected routes */}
            <Route element={<ProtectedRoute />}> {/* Bảo vệ các route sau */}
              <Route path="/" element={<HomePage />} />
              <Route path="/add-book" element={<AddBookPage />} />
              <Route path="/view-books" element={<BookListPage />} />
              <Route path="/manage-users" element={<ManageUsersPage />} /> 
              <Route path="/reports" element={<ReportsPage />} />
            </Route>
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
