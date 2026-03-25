import React, { useState } from 'react';
import './Settings.css';

const DataProtection = () => {
  const [settings, setSettings] = useState({
    storeLocally: true,
    anonymousMode: true,
    aiUsage: true,
    analytics: true,
    backup: true
  });

  const handleToggle = (key) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="settings-page">
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

export default DataProtection;