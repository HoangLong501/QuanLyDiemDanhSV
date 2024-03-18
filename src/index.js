import React, { useState, useEffect } from 'react'; // Import React hooks
import { createRoot } from 'react-dom';
import axios from 'axios'; // Import axios for making HTTP requests

// Define App component
function App() {
  // State hooks
  const [sinhViens, setSinhViens] = useState([]);
  const [newSV, setNewSV] = useState({ mssv: '', name: '', grade: '', time: '', day: '' });

  useEffect(() => {
    fetchSinhViens();
  }, []);

  const fetchSinhViens = async () => {
    try {
      const response = await axios.get('https://65f859a3df151452460f2d81.mockapi.io/ql_diem_danh_sv');
      setSinhViens(response.data);
    } catch (error) {
      console.error('Error fetching sinh viens:', error);
    }
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewSV({ ...newSV, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://65f859a3df151452460f2d81.mockapi.io/ql_diem_danh_sv', newSV);
      setNewSV({ mssv: '', name: '', grade: '', time: '', day: '' });
      fetchSinhViens(); 
    } catch (error) {
      console.error('Error creating sinh vien:', error);
    }
  };

  // Render App component UI
  return (
    <div className="App">
      <h1>Quản lí điểm danh sinh viên</h1>
      <div>
        <h2>Danh sách sinh viên</h2>
        <ul>
          {sinhViens.map((sv, index) => (
            <li key={index}>
              {sv.mssv} - {sv.name} - {sv.grade} - {sv.time} - {sv.day}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Thêm sinh viên mới</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="mssv" placeholder="MSSV" value={newSV.mssv} onChange={handleChange} />
          <input type="text" name="name" placeholder="Name" value={newSV.name} onChange={handleChange} />
          <input type="text" name="grade" placeholder="Grade" value={newSV.grade} onChange={handleChange} />
          <input type="text" name="time" placeholder="Time" value={newSV.time} onChange={handleChange} />
          <input type="text" name="day" placeholder="Day" value={newSV.day} onChange={handleChange} />
          <button type="submit">Thêm</button>
        </form>
      </div>
    </div>
  );
}

// Render App component into root element using createRoot
createRoot(document.getElementById('root')).render(<App />);
