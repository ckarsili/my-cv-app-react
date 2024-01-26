// src/components/Education.js
import React, { useState } from 'react';
import '../styles/Education.css';

const Education = ({ onSubmit, onEdit, data }) => {
  const [school, setSchool] = useState(data.school || '');
  const [studyTitle, setStudyTitle] = useState(data.studyTitle || '');
  const [studyDate, setStudyDate] = useState(data.studyDate || '');

  const handleSubmit = () => {
    onSubmit({ school, studyTitle, studyDate });
  };

  return (
    <div className="input-section">
      <h2>Educational Experience</h2>
      <input type="text" value={school} onChange={(e) => setSchool(e.target.value)} placeholder="School Name" />
      <input type="text" value={studyTitle} onChange={(e) => setStudyTitle(e.target.value)} placeholder="Study Title" />
      <input type="text" value={studyDate} onChange={(e) => setStudyDate(e.target.value)} placeholder="Study Date" />
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={() => onEdit('education')}>Edit</button>
    </div>
  );
};

export default Education;
