import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Gọi API lấy dữ liệu mẫu hiển thị ở Content
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        // Lấy tạm phần tử đầu tiên giống mẫu của cô (John Doe / ID: 1)
        setUsers(response.data.slice(0, 3)); 
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div style={{ margin: 0, padding: 0, fontFamily: 'Arial, sans-serif', color: '#333' }}>
      
      {/* 1. HEADER */}
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 50px', backgroundColor: '#f8f9fa', borderBottom: '1px solid #ddd' }}>
        <div style={{ fontSize: '20px', fontWeight: 'bold' }}>MY APP</div>
        <nav style={{ display: 'flex', gap: '20px' }}>
          <span style={{ color: '#666', cursor: 'pointer' }}>Home</span>
          <span style={{ color: '#666', cursor: 'pointer' }}>Link</span>
          <span style={{ color: '#666', cursor: 'pointer' }}>Options ▾</span>
        </nav>
      </header>

      {/* 2. BANNER */}
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

      {/* 3. CONTENT (Fetch API / Axios) */}
      <div style={{ padding: '0 0 40px 0' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #ddd', backgroundColor: '#fff' }}>
              <th style={{ padding: '12px 20px', fontWeight: 'bold' }}>Name</th>
              <th style={{ padding: '12px 20px', fontWeight: 'bold' }}>ID</th>
              <th style={{ padding: '12px 20px', fontWeight: 'bold' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* Dòng dữ liệu giống hệt mẫu của cô */}
            <tr style={{ borderBottom: '1px solid #eee', backgroundColor: '#f9f9f9' }}>
              <td style={{ padding: '12px 20px' }}>John Doe</td>
              <td style={{ padding: '12px 20px' }}>1</td>
              <td style={{ padding: '12px 20px' }}>Active</td>
            </tr>
            {/* Các dòng động load từ API bổ sung cho phong phú */}
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

      {/* 4. FOOTER */}
      <footer style={{ textAlign: 'center', padding: '20px', fontSize: '14px', color: '#555', borderTop: '1px solid #eee', marginTop: '20px' }}>
        📍Hanoi, August 2026
      </footer>

    </div>
  );
}

export default App;