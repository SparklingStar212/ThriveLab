import React, { useState } from 'react';
import './Settings.css';

const SoundSettings = () => {
  const [volume, setVolume] = useState(8);
  const [sounds, setSounds] = useState({
    breathing: true,
    notification: true,
    zuma: true,
    background: true
  });

  const toggleSound = (key) => {
    setSounds(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="settings-page">
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
          <button className="back-arrow" onClick={() => window.history.back()}>‹</button>
          <div className="p-user">Johnny <img src="/avatar.png" className="p-avatar" alt="" /></div>
        </header>

        <div className="p-content">
          <h1 className="p-title">Sound Settings</h1>
          <p className="p-subtitle">Control your audio experience</p>

          <div className="settings-stack">
            <div className="setting-row">
              <span>Breathing Sounds</span>
              <div className={`switch ${sounds.breathing ? 'on' : ''}`} onClick={() => toggleSound('breathing')}>
                <div className="knob"></div>
              </div>
            </div>

            <div className="setting-row">
              <span>Notification Sound</span>
              <div className={`switch ${sounds.notification ? 'on' : ''}`} onClick={() => toggleSound('notification')}>
                <div className="knob"></div>
              </div>
            </div>

            <div className="setting-row">
              <span>Zuma Sounds</span>
              <div className={`switch ${sounds.zuma ? 'on' : ''}`} onClick={() => toggleSound('zuma')}>
                <div className="knob"></div>
              </div>
            </div>

            <div className="setting-row">
              <span>Background Play</span>
              <div className={`switch ${sounds.background ? 'on' : ''}`} onClick={() => toggleSound('background')}>
                <div className="knob"></div>
              </div>
            </div>

            {/* Volume Slider Section */}
            <div className="volume-section">
              <label className="volume-label">Volume</label>
              <input
                type="range"
                min="0"
                max="10"
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
                className="volume-slider"
              />
              <div className="volume-numbers">
                <span>0</span>
                <span>10</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SoundSettings;