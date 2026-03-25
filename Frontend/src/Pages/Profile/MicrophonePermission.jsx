import React, { useState } from 'react';
import './Settings.css';

const MicrophonePermission = () => {
  const [voiceEnabled, setVoiceEnabled] = useState(true);

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
          <h1 className="p-title">Microphone permission</h1>

          <div className="permission-info">
            <p className="description">
              Microphone access allows you to talk with Zuma using voice messages instead of typing.
            </p>

            <div className="usage-box">
              <h2 className="usage-title">What microphone will be used for:</h2>
              <ul className="usage-list">
                <li>Voice messages in AI chat</li>
                <li>Voice journaling (Coming soon)</li>
              </ul>
            </div>

            <div className="setting-row voice-toggle">
              <span className="setting-label">Voice Chat with Zuma</span>
              <div
                className={`switch ${voiceEnabled ? 'on' : ''}`}
                onClick={() => setVoiceEnabled(!voiceEnabled)}
              >
                <div className="knob"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MicrophonePermission;