import React, { useState } from 'react';
import './Settings.css';

const PrivacySecurity = () => {
  const [view, setView] = useState('main'); // 'main' or 'policy'
  const [appLock, setAppLock] = useState(true);
  const [biometric, setBiometric] = useState(true);

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
          <button className="back-arrow" onClick={() => setView('main')}>‹</button>
          <div className="p-header-user">Johnny <img src="/avatar.png" className="p-avatar" alt="" /></div>
        </header>

        <div className="p-content">
          {view === 'main' ? (
            <div className="privacy-main">
              <h1 className="p-title">Privacy and Security</h1>
              <p className="p-subtitle-small">Your data is private and protected</p>

              <section className="settings-stack">
                <h3 className="stack-header">Security</h3>
                <div className="setting-row">
                  <span>App Lock</span>
                  <div className={`switch ${appLock ? 'on' : ''}`} onClick={() => setAppLock(!appLock)}>
                    <div className="knob"></div>
                  </div>
                </div>
                <div className="setting-row">
                  <span>Biometric Lock</span>
                  <div className={`switch ${biometric ? 'on' : ''}`} onClick={() => setBiometric(!biometric)}>
                    <div className="knob"></div>
                  </div>
                </div>
                <div className="setting-row link-row">
                  <span>Change Password</span>
                </div>

                <h3 className="stack-header">Data Control</h3>
                <div className="setting-row link-row"><span>Delete my data</span></div>
                <div className="setting-row link-row"><span>Export my data</span></div>
                <div className="setting-row link-row"><span>Clear Journal History</span></div>

                <h3 className="stack-header">Privacy</h3>
                <div className="setting-row link-row" onClick={() => setView('policy')}>
                  <span>Privacy Policy</span>
                </div>
                <div className="setting-row link-row"><span>Data Protection Settings</span></div>
                <div className="setting-row link-row"><span>Terms of Use</span></div>

                <h3 className="stack-header">Permissions</h3>
                <div className="setting-row link-row"><span>Notification Permission</span></div>
                <div className="setting-row link-row"><span>Storage Permission</span></div>
                <div className="setting-row link-row"><span>Microphone Permission</span></div>
              </section>
            </div>
          ) : (
            /* Privacy Policy Detail View */
            <div className="policy-view">
              <h1 className="p-title">Privacy Policy</h1>
              <p className="p-subtitle-small">Your data is private and protected</p>

              <div className="policy-content">
                <p className="policy-intro">
                  Thrivelab is designed to support your mental wellness. We respect your privacy and are committed to protecting your personal information.
                </p>

                <div className="policy-section">
                  <h3>Information We Collect</h3>
                  <p>Account information (name, email)</p>
                  <p>Mood check-ins (emotions selected)</p>
                  <p>Stress level inputs</p>
                  <p>Journal entries</p>
                  <p>App usage data (features used, frequency)</p>
                </div>

                <div className="policy-section">
                  <h3>How We Use Your Data</h3>
                  <p>To track emotional patterns</p>
                  <p>To generate insights and statistics</p>
                  <p>To personalize quotes and suggestions</p>
                  <p>To improve the app experience</p>
                </div>

                <div className="policy-section">
                  <h3>Data Storage</h3>
                  <p>Stored securely on our servers</p>
                  <p>Encrypted during transmission</p>
                  <p>Optional if offline app:</p>
                  <p>Stored locally on your device</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default PrivacySecurity;