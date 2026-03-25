import React, { useState } from 'react';
import './Preferences.css';

const AppPreferences = () => {
  const [prefs, setPrefs] = useState({
    zumaHome: true,
    quoteWidget: true,
    calmButton: false,
    theme: 'Light'
  });

  const togglePref = (key) => {
    setPrefs(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="pref-page">
      {/* Sidebar - Desktop Only */}
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
          <button className="back-arrow">‹</button>
          <div className="p-user">Johnny <img src="/avatar.png" className="p-avatar" alt="" /></div>
        </header>

        <div className="p-content">
          <h1 className="p-title">App Preferences</h1>

          <div className="settings-container">
            {/* Theme Dropdown */}
            <div className="setting-row">
              <span className="setting-label">Theme</span>
              <div className="select-box">
                <span>{prefs.theme}</span>
                <span className="chevron">▼</span>
              </div>
            </div>

            {/* Zuma Home Toggle */}
            <div className="setting-row">
              <span className="setting-label">Show Zuma on Home screen</span>
              <div
                className={`toggle-switch ${prefs.zumaHome ? 'on' : ''}`}
                onClick={() => togglePref('zumaHome')}
              >
                <div className="toggle-knob"></div>
              </div>
            </div>

            {/* Quote Widget Toggle */}
            <div className="setting-row">
              <span className="setting-label">Show Quote Widget</span>
              <div
                className={`toggle-switch ${prefs.quoteWidget ? 'on' : ''}`}
                onClick={() => togglePref('quoteWidget')}
              >
                <div className="toggle-knob"></div>
              </div>
            </div>

            {/* Calm Down Button Toggle */}
            <div className="setting-row">
              <span className="setting-label">Show Calm Down button</span>
              <div
                className={`toggle-switch ${prefs.calmButton ? 'on' : ''}`}
                onClick={() => togglePref('calmButton')}
              >
                <div className="toggle-knob"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AppPreferences;