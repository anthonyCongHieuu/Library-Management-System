import React from 'react';

const LogoutButton = () => {
  const handleLogout = () => {
    // Xóa token đăng nhập khỏi localStorage
    localStorage.removeItem('token');
    // Chuyển hướng đến trang đăng nhập
    window.location.href = '/login';
  };

  return (
    <button onClick={handleLogout}>Đăng xuất</button>
  );
};

export default LogoutButton;