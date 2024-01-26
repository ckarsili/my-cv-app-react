// App.js
import React, { useState } from 'react';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import './styles/App.css';

const App = () => {
  const [showGeneral, setShowGeneral] = useState(true);
  const [showEducation, setShowEducation] = useState(true);
  const [showExperience, setShowExperience] = useState(true);

  const [generalData, setGeneralData] = useState({});
  const [educationData, setEducationData] = useState({});
  const [experienceData, setExperienceData] = useState({});

  const handleGeneralSubmit = (data) => {
    setGeneralData(data);
    setShowGeneral(false);
  };

  const handleEducationSubmit = (data) => {
    setEducationData(data);
    setShowEducation(false);
  };

  const handleExperienceSubmit = (data) => {
    setExperienceData(data);
    setShowExperience(false);
  };

  const handleEdit = (section) => {
    switch (section) {
      case 'general':
        setShowGeneral(true);
        break;
      case 'education':
        setShowEducation(true);
        break;
      case 'experience':
        setShowExperience(true);
        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      {showGeneral && <GeneralInfo onSubmit={handleGeneralSubmit} onEdit={handleEdit} data={generalData} />}
      {showEducation && <Education onSubmit={handleEducationSubmit} onEdit={handleEdit} data={educationData} />}
      {showExperience && <Experience onSubmit={handleExperienceSubmit} onEdit={handleEdit} data={experienceData} />}
    </div>
  );
};

export default App;
