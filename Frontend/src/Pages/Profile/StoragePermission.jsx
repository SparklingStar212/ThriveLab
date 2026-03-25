import React from 'react';
import './Settings.css';

const StoragePermission = () => {
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
          <div className="p-header-user">Johnny <img src="/avatar.png" className="p-avatar" alt="" /></div>
        </header>

        <div className="p-content">
          <h1 className="p-title">Storage Permission</h1>

          <div className="permission-info">
            <p className="description">
              Storage access allows Thrivelab to save your journal entries and export your data when requested.
            </p>

            <div className="usage-box">
              <h2 className="usage-title">What storage will be used for:</h2>
              <ul className="usage-list">
                <li>Saving journal entries</li>
                <li>Saving mood history</li>
                <li>Exporting user data</li>
                <li>Saving downloaded calm music</li>
              </ul>
            </div>

            <p className="description footer-note">
              Thrivelab stores your emotional records securely and only uses storage when necessary.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StoragePermission;