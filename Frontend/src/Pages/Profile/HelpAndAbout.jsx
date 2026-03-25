import React from 'react';
import './Help.css';

const HelpAndAbout = () => {
  return (
    <div className="help-page">
      {/* Sidebar - Desktop Only */}
      <aside className="h-sidebar">
        <div className="h-logo">Thrivelab</div>
        <nav className="h-nav">
          <div className="h-nav-item">Home</div>
          <div className="h-nav-item">Calendar</div>
          <div className="h-nav-item">Diary</div>
          <div className="h-nav-item">Support</div>
          <div className="h-nav-item">AI chat</div>
        </nav>
      </aside>

      <main className="h-main">
        <header className="h-header">
          <button className="back-arrow">‹</button>
          <div className="h-user">Johnny <img src="/avatar.png" className="h-avatar" alt="" /></div>
        </header>

        <div className="h-content">
          <h1 className="h-title">Help & About</h1>

          <div className="h-section">
            <h2 className="h-section-title">About Thrivelab</h2>
            <p className="h-text">
              Thrivelab helps you track your emotions, manage stress, and build a healthier mindset.
            </p>
          </div>

          <div className="h-section">
            <h2 className="h-section-title">FAQ</h2>
            <ul className="h-faq-list">
              <li>• How do I track my mood?</li>
              <li>• How does Zuma work?</li>
              <li>• Is my data private?</li>
            </ul>
          </div>

          <div className="h-links-section">
            <div className="h-link-item">Contact Support</div>
            <div className="h-link-item">Report a Problem</div>
            <div className="h-link-item">Rate Thrivelab</div>
          </div>

          <footer className="h-footer">
            Version 1.0.0
          </footer>
        </div>
      </main>
    </div>
  );
};

export default HelpAndAbout;