import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children, role }) => {
  const user = JSON.parse(localStorage.getItem('user'));  // Kiểm tra thông tin người dùng trong localStorage
  const location = useLocation();  // Lấy thông tin vị trí hiện tại

  if (!user) {
    // Nếu không có user, điều hướng tới trang login
    return <Navigate to="/login" state={{ from: location }} />;
  }

  if (role && user.role !== role) {
    // Nếu vai trò không khớp, điều hướng đến trang dashboard của vai trò hiện tại
    return user.role === 'admin' ? (
      <Navigate to="/admin-dashboard" />
    ) : (
      <Navigate to="/reader-dashboard" />
    );
  }

  return children;  // Trả về các component con nếu người dùng đã đăng nhập và vai trò hợp lệ
};

export default ProtectedRoute;
