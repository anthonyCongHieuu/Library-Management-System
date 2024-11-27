import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('user'));  // Kiểm tra thông tin người dùng trong localStorage
  const location = useLocation();  // Lấy thông tin location để chuyển hướng đúng trang

  if (!user) {
    // Nếu người dùng chưa đăng nhập, chuyển hướng đến trang login
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;  // Trả về các component con nếu người dùng đã đăng nhập
};

export default ProtectedRoute;
