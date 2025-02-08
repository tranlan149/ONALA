import React, { useState } from 'react';
import { Input } from 'antd';
import './Search.css';

const { Search } = Input;

const SearchBar = ({ onSearch }) => {
  return (
    <Search
      placeholder="Nhập từ khóa tìm kiếm..."
      allowClear
      enterButton="Tìm kiếm"
      size="large"
      onSearch={onSearch} // Gọi hàm khi nhấn Enter hoặc nút Tìm kiếm
      
    />
  );
};

export default SearchBar;
