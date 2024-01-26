// GeneralInfo.js
import React, { useState } from 'react';

const GeneralInfo = ({ onSubmit, onEdit, data }) => {
  const [name, setName] = useState(data.name || '');
  const [email, setEmail] = useState(data.email || '');
  const [phone, setPhone] = useState(data.phone || '');

  const handleSubmit = () => {
    onSubmit({ name, email, phone });
  };

  return (
    <div>
      <h2>General Information</h2>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={() => onEdit('general')}>Edit</button>
    </div>
  );
};

export default GeneralInfo;
