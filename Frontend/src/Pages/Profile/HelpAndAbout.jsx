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
    </div>
  );
};

export default HelpAndAbout;