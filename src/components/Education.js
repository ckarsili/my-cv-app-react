// Education.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faCheck } from '@fortawesome/free-solid-svg-icons';
const Education = ({ onSubmit, onEdit, data }) => {
  const [school, setSchool] = useState(data.school || '');
  const [studyTitle, setStudyTitle] = useState(data.studyTitle || '');
  const [studyDate, setStudyDate] = useState(data.studyDate || '');

  const handleSubmit = () => {
    onSubmit({ school, studyTitle, studyDate });
  };

  return (
    <div>
      <h2>Educational Experience</h2>
      <input type="text" value={school} onChange={(e) => setSchool(e.target.value)} />
      <input type="text" value={studyTitle} onChange={(e) => setStudyTitle(e.target.value)} />
      <input type="text" value={studyDate} onChange={(e) => setStudyDate(e.target.value)} />
      <button onClick={handleSubmit} ><FontAwesomeIcon icon={faCheck} />Submit</button>
      <button onClick={() => onEdit('education')}>Edit</button>
    </div>
  );
};

export default Education;
