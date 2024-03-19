// index.js

import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f0f0;
`;

const Section = styled.div`
  margin-top: 20px;
`;

const Title = styled.h1`
  font-size: 32px;
  color: #333;
`;

const StyledInput = styled.input`
  padding: 10px;
  margin-right: 10px;
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

function App() {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewSV({ ...newSV, [name]: value });
  };

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

  return (
    <Container>
      <Title>Quản lí điểm danh sinh viên</Title>
      <Section>
        <h2>Danh sách sinh viên</h2>
        <ul>
          {sinhViens.map((sv, index) => (
            <li key={index}>
              <strong>MSSV:</strong> {sv.mssv}<br />
              <strong>Tên:</strong> {sv.name}<br />
              <strong>Điểm:</strong> {sv.grade}<br />
              <strong>Thời gian:</strong> {sv.time}<br />
              <strong>Ngày:</strong> {sv.day}
            </li>
          ))}
        </ul>
      </Section>
      <Section>
        <h2>Thêm sinh viên mới</h2>
        <form onSubmit={handleSubmit}>
          <StyledInput type="text" name="mssv" placeholder="MSSV" value={newSV.mssv} onChange={handleChange} required />
          <StyledInput type="text" name="name" placeholder="Tên" value={newSV.name} onChange={handleChange} required />
          <StyledInput type="text" name="grade" placeholder="Điểm" value={newSV.grade} onChange={handleChange} required />
          <StyledInput type="text" name="time" placeholder="Thời gian" value={newSV.time} onChange={handleChange} required />
          <StyledInput type="text" name="day" placeholder="Ngày" value={newSV.day} onChange={handleChange} required />
          <StyledButton type="submit">Thêm</StyledButton>
        </form>
      </Section>
    </Container>
  );
}

createRoot(document.getElementById('root')).render(<App />);
