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

      <main className="p-main">
        <header className="p-header">
          <button className="back-btn">‹</button>
          <div className="p-header-user">Johnny <img src="/avatar.png" className="p-avatar" alt="" /></div>
        </header>

        <div className="p-content">
          <h1 className="p-title">Data Protection settings</h1>

          <div className="settings-stack">
            <div className="setting-row">
              <span>Store Data Locally</span>
              <div className={`switch ${settings.storeLocally ? 'on' : ''}`} onClick={() => handleToggle('storeLocally')}>
                <div className="knob"></div>
              </div>
            </div>

            <div className="setting-row">
              <span>Anonymous Mode</span>
              <div className={`switch ${settings.anonymousMode ? 'on' : ''}`} onClick={() => handleToggle('anonymousMode')}>
                <div className="knob"></div>
              </div>
            </div>

            <div className="setting-row">
              <span>AI Chat Data Usage</span>
              <div className={`switch ${settings.aiUsage ? 'on' : ''}`} onClick={() => handleToggle('aiUsage')}>
                <div className="knob"></div>
              </div>
            </div>

            <div className="setting-row">
              <span>Analytics</span>
              <div className={`switch ${settings.analytics ? 'on' : ''}`} onClick={() => handleToggle('analytics')}>
                <div className="knob"></div>
              </div>
            </div>

            <div className="setting-row">
              <span>Backup Data</span>
              <div className={`switch ${settings.backup ? 'on' : ''}`} onClick={() => handleToggle('backup')}>
                <div className="knob"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DataProtection;