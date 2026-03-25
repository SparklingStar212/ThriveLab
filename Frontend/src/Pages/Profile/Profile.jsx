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
    </div>
  );
};

export default Profile;