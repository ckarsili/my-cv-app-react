// src/components/Experience.js
import React, { useState } from 'react';
import '../styles/Experience.css';

const Experience = ({ onSubmit, onEdit, data }) => {
  const [company, setCompany] = useState(data.company || '');
  const [position, setPosition] = useState(data.position || '');
  const [responsibilities, setResponsibilities] = useState(data.responsibilities || '');
  const [startDate, setStartDate] = useState(data.startDate || '');
  const [endDate, setEndDate] = useState(data.endDate || '');

  const handleSubmit = () => {
    onSubmit({ company, position, responsibilities, startDate, endDate });
  };

  return (
    <div className="input-section">
      <h2>Practical Experience</h2>
      <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Company Name" />
      <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} placeholder="Position" />
      <textarea value={responsibilities} onChange={(e) => setResponsibilities(e.target.value)} placeholder="Responsibilities"></textarea>
      <input type="text" value={startDate} onChange={(e) => setStartDate(e.target.value)} placeholder="Start Date" />
      <input type="text" value={endDate} onChange={(e) => setEndDate(e.target.value)} placeholder="End Date" />
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={() => onEdit('experience')}>Edit</button>
    </div>
  );
};

export default Experience;
