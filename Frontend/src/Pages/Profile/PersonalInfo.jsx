import React, { useState } from 'react';
import './Profile.css';

const PersonalInfo = () => {
  const [formData, setFormData] = useState({
    fullName: 'Johnny James',
    email: 'johnnyjames@gmail.com',
    day: '',
    month: '',
    year: '',
    gender: 'Male'
  });

  return (
    <div className="profile-page">
      {/* Sidebar - Desktop */}
      <aside className="p-sidebar">
        <div className="p-logo">Thrivelab</div>
        <nav className="p-nav">
          <div className="p-nav-item">Home</div>
          <div className="p-nav-item">Calendar</div>
          <div className="p-nav-item">Diary</div>
          <div className="p-nav-item">Support</div>
          <div className="p-nav-item">AI chat</div>
        </nav>
      </aside>
    </div>
  );
};

export default PersonalInfo;