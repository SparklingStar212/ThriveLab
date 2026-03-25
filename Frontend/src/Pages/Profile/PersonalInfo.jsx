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

      <main className="p-main">
        <header className="p-header">
          <button className="back-btn">‹</button>
          <button className="save-btn-top">Save</button>
          <div className="p-header-user">Johnny <img src="/avatar.png" className="p-avatar" alt="" /></div>
        </header>

        <div className="p-scroll-content">
          {/* Avatar Section */}
          <div className="p-top-card">
            <div className="p-pic-wrapper">
              <img src="/avatar-large.png" alt="Profile" className="p-large-avatar" />
              <button className="p-camera-btn">📷</button>
            </div>
            <h1 className="p-name">Johnny James</h1>
          </div>

          {/* Form Fields */}
          <div className="edit-form">
            <div className="f-row">
              <label>Full name :</label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              />
            </div>

            <div className="f-row">
              <label>Email address :</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="f-row">
              <label>Date of birth :</label>
              <div className="dob-group">
                <input type="text" placeholder="DD" className="dob-input" />
                <input type="text" placeholder="MM" className="dob-input" />
                <input type="text" placeholder="YYYY" className="dob-input long" />
              </div>
            </div>

            <div className="f-row">
              <label>Gender :</label>
              <div className="select-wrapper">
                <select
                  value={formData.gender}
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PersonalInfo;