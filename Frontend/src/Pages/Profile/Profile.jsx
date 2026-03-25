import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [view, setView] = useState('menu'); // 'menu' or 'details'

  const menuSections = [
    {
      category: "Account", items: [
        { label: "Personal Information", icon: "👤", action: () => setView('details') },
        { label: "Privacy and Security", icon: "🔒" }
      ]
    },
    {
      category: "Customization", items: [
        { label: "Mood Customization", icon: "😊" },
        { label: "Quotes", icon: "💬" },
        { label: "App Preferences", icon: "⚙️" }
      ]
    },
    {
      category: "Activity", items: [
        { label: "Statistics", icon: "📈" }
      ]
    },
    {
      category: "Support", items: [
        { label: "Notifications", icon: "🔔" },
        { label: "Sound Settings", icon: "🔊" },
        { label: "Help and About", icon: "❓" }
      ]
    }
  ];

  return (
    <div className="profile-page">
      {/* Shared Sidebar - Desktop */}
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
          <button className="back-btn" onClick={() => setView('menu')}>‹</button>
          <div className="p-header-user">Johnny <img src="/avatar.png" className="p-avatar" alt="" /></div>
        </header>

        <div className="p-scroll-content">
          {/* Profile Picture Area */}
          <div className="p-top-card">
            <div className="p-pic-wrapper">
              <img src="/avatar-large.png" alt="Profile" className="p-large-avatar" />
              <button className="p-camera-btn">📷</button>
            </div>
            <h1 className="p-name">Johnny James</h1>
            {view === 'details' && <button className="p-edit-btn">📝 Edit</button>}
          </div>

          {view === 'menu' ? (
            /* Settings Menu View */
            <div className="p-settings-list">
              {menuSections.map((section, idx) => (
                <div key={idx} className="p-section">
                  <h3 className="p-section-title">{section.category}</h3>
                  {section.items.map((item, i) => (
                    <div key={i} className="p-menu-item" onClick={item.action}>
                      <span className="p-menu-icon">{item.icon}</span>
                      <span className="p-menu-label">{item.label}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ) : (
            /* Personal Info Detail View */
            <div className="p-details-card">
              <div className="p-info-row"><span className="p-label">Full name :</span> <span className="p-value">Johnny James</span></div>
              <div className="p-info-row"><span className="p-label">Email address :</span> <span className="p-value">johnnyjames@gmail.com</span></div>
              <div className="p-info-row"><span className="p-label">Date of birth :</span> <span className="p-value">March 11th, 2008</span></div>
              <div className="p-info-row"><span className="p-label">Gender :</span> <span className="p-value">Male</span></div>

              <div className="p-actions-footer">
                <button className="p-delete-btn">Delete account</button>
                <button className="p-logout-btn">🚪 Logout</button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Profile;