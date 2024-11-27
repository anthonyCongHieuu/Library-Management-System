import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const navigate = useNavigate();

  if (!currentUser) {
    // Nếu không có người dùng đăng nhập, điều hướng về trang đăng nhập
    navigate("/login");
    return null;
  }

  return (
    <div>
      <h2>Xin chào, {currentUser.fullName}!</h2>
      <p>Vai trò của bạn: {currentUser.role}</p>

      {currentUser.role === "reader" && (
        <div>
          <h3>Chức năng dành cho độc giả:</h3>
          <ul>
            <li>Xem danh sách sách</li>
            <li>Mượn sách</li>
          </ul>
        </div>
      )}

      {currentUser.role === "librarian" && (
        <div>
          <h3>Chức năng dành cho thủ thư:</h3>
          <ul>
            <li>Quản lý sách</li>
            <li>Xác nhận mượn/trả sách</li>
          </ul>
        </div>
      )}

      {currentUser.role === "admin" && (
        <div>
          <h3>Chức năng dành cho quản trị viên:</h3>
          <ul>
            <li>Quản lý người dùng</li>
            <li>Xem báo cáo thống kê</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
