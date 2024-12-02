// src/axios.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/api'; // Địa chỉ backend của bạn

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
