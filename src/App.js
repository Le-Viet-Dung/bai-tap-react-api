import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Gọi API lấy dữ liệu thực tế đổ vào Content theo yêu cầu đề bài
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        // Lấy 3 người dùng đầu tiên từ API để danh sách nhìn phong phú
        setUsers(response.data.slice(0, 3)); 
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div style={{ margin: 0, padding: 0, fontFamily: 'Arial, sans-serif', color: '#333' }}>
      
      {/* 1. HEADER (Đầy đủ menu như ảnh mẫu) */}
      <header style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '30px', 
        padding: '15px 20px', 
        backgroundColor: '#f8f9fa', 
        borderBottom: '1px solid #ddd' 
      }}>
        <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#333', marginRight: '10px' }}>MY APP</div>
        <span style={{ color: '#555', cursor: 'pointer', fontSize: '15px' }}>Home</span>
        <span style={{ color: '#555', cursor: 'pointer', fontSize: '15px' }}>Link</span>
        <span style={{ color: '#555', cursor: 'pointer', fontSize: '15px' }}>Options ▾</span>
      </header>

      {/* 2. BANNER (Màu xanh ngọc gradient chuẩn bài) */}
      <div style={{ 
        height: '250px', 
        background: 'linear-gradient(135deg, #008080 0%, #20b2aa 50%, #e0ffff 100%)', 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center', 
        color: '#fff',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '36px', margin: '0 0 10px 0', fontWeight: 'normal' }}>Good Morning</h1>
        <p style={{ fontSize: '16px', margin: 0, opacity: 0.8 }}>Cybers and Spaces.</p>
        <div style={{ display: 'flex', gap: '5px', marginTop: '20px' }}>
          <div style={{ width: '20px', height: '3px', backgroundColor: '#fff' }}></div>
          <div style={{ width: '20px', height: '3px', backgroundColor: 'rgba(255,255,255,0.4)' }}></div>
          <div style={{ width: '20px', height: '3px', backgroundColor: 'rgba(255,255,255,0.4)' }}></div>
        </div>
      </div>

      {/* 3. CONTENT (Bảng hiển thị dữ liệu tĩnh kèm dữ liệu Axios) */}
      <div style={{ paddingBottom: '40px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #ddd', backgroundColor: '#fff' }}>
              <th style={{ padding: '12px 20px', fontWeight: 'bold' }}>Name</th>
              <th style={{ padding: '12px 20px', fontWeight: 'bold' }}>ID</th>
              <th style={{ padding: '12px 20px', fontWeight: 'bold' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* Dòng dữ liệu John Doe cố định giống y hệt mẫu của cô */}
            <tr style={{ borderBottom: '1px solid #eee', backgroundColor: '#f9f9f9' }}>
              <td style={{ padding: '12px 20px' }}>John Doe</td>
              <td style={{ padding: '12px 20px' }}>1</td>
              <td style={{ padding: '12px 20px' }}>Active</td>
            </tr>
            {/* Vòng lặp map dữ liệu động trả về từ Axios */}
            {users.map(user => (
              <tr key={user.id} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '12px 20px' }}>{user.name}</td>
                <td style={{ padding: '12px 20px' }}>{user.id}</td>
                <td style={{ padding: '12px 20px' }}>Active</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 4. FOOTER (Ghim ngay ngắn ở giữa) */}
      <footer style={{ 
        textAlign: 'center', 
        padding: '20px', 
        fontSize: '14px', 
        color: '#555', 
        borderTop: '1px solid #eee', 
        marginTop: '20px' 
      }}>
        📍Hanoi, August 2026
      </footer>

    </div>
  );
}

export default App;