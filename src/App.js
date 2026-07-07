import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  // State quản lý vị trí slide hiện tại (0: Sáng, 1: Chiều, 2: Tối)
  const [currentSlide, setCurrentSlide] = useState(0);

  // Danh sách nội dung các slide trượt
  const slides = [
    { title: "Good Morning", subtitle: "Cybers and Spaces.", bg: "linear-gradient(135deg, #008080 0%, #20b2aa 50%, #e0ffff 100%)" },
    { title: "Good Afternoon", subtitle: "Spaces and Cybers.", bg: "linear-gradient(135deg, #007070 0%, #00a8a8 50%, #b2faf2 100%)" },
    { title: "Good Evening", subtitle: "Welcome to React.", bg: "linear-gradient(135deg, #005757 0%, #008080 50%, #83e8dd 100%)" }
  ];

  useEffect(() => {
    // Gọi API lấy dữ liệu thực tế đổ vào bảng
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data.slice(0, 3)); 
      })
      .catch(error => console.error(error));
  }, []);

  // Hàm xử lý khi bấm nút mũi tên sang trái
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Hàm xử lý khi bấm nút mũi tên sang phải
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div style={{ margin: 0, padding: 0, fontFamily: 'Arial, sans-serif', color: '#333', userSelect: 'none' }}>
      
      {/* 1. HEADER */}
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

      {/* 2. BANNER TỰ CHẾ MŨI TÊN TRƯỢT (Không lỗi thư viện) */}
      <div style={{ 
        height: '250px', 
        background: slides[currentSlide].bg, 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center', 
        color: '#fff',
        textAlign: 'center',
        position: 'relative',
        transition: 'background 0.5s ease'
      }}>
        {/* Mũi tên TRÁI (<) */}
        <div 
          onClick={prevSlide}
          style={{
            position: 'absolute', left: '30px', top: '50%', transform: 'translateY(-50%)',
            fontSize: '40px', color: 'rgba(255,255,255,0.6)', cursor: 'pointer', fontWeight: '100'
          }}
          onMouseEnter={(e) => e.target.style.color = '#fff'}
          onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.6)'}
        >
          ‹
        </div>

        {/* Nội dung Banner */}
        <h1 style={{ fontSize: '36px', margin: '0 0 10px 0', fontWeight: 'normal' }}>{slides[currentSlide].title}</h1>
        <p style={{ fontSize: '16px', margin: 0, opacity: 0.8 }}>{slides[currentSlide].subtitle}</p>
        
        {/* Dấu gạch đường trượt (Dấu chấm chuyển trang) */}
        <div style={{ display: 'flex', gap: '5px', marginTop: '20px' }}>
          {slides.map((_, index) => (
            <div 
              key={index}
              onClick={() => setCurrentSlide(index)}
              style={{ 
                width: '20px', height: '3px', cursor: 'pointer',
                backgroundColor: currentSlide === index ? '#fff' : 'rgba(255,255,255,0.4)',
                transition: 'background 0.3s'
              }}
            ></div>
          ))}
        </div>

        {/* Mũi tên PHẢI (>) */}
        <div 
          onClick={nextSlide}
          style={{
            position: 'absolute', right: '30px', top: '50%', transform: 'translateY(-50%)',
            fontSize: '40px', color: 'rgba(255,255,255,0.6)', cursor: 'pointer', fontWeight: '100'
          }}
          onMouseEnter={(e) => e.target.style.color = '#fff'}
          onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.6)'}
        >
          ›
        </div>
      </div>

      {/* 3. CONTENT (Bảng hiển thị) */}
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
            <tr style={{ borderBottom: '1px solid #eee', backgroundColor: '#f9f9f9' }}>
              <td style={{ padding: '12px 20px' }}>John Doe</td>
              <td style={{ padding: '12px 20px' }}>1</td>
              <td style={{ padding: '12px 20px' }}>Active</td>
            </tr>
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
      <footer style={{ 
        textAlign: 'center', padding: '20px', fontSize: '14px', color: '#555', 
        borderTop: '1px solid #eee', marginTop: '20px' 
      }}>
        📍Hanoi, August 2026
      </footer>

    </div>
  );
}

export default App;