import React, { useState } from 'react';
import './Settings.css';

const Notifications = () => {
  const [view, setView] = useState('manage'); // 'manage' or 'permission'
  const [notifs, setNotifs] = useState({
    dailyQuotes: true,
    dailyMood: true,
    breathing: true,
    insights: true,
    streak: true,
    zuma: true
  });

  const handleToggle = (key) => {
    setNotifs(prev => ({ ...prev, [key]: !prev[key] }));
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
          <button className="back-arrow" onClick={() => setView('manage')}>‹</button>
          <div className="p-header-user">Johnny <img src="/avatar.png" className="p-avatar" alt="" /></div>
        </header>

        <div className="p-content">
          {view === 'manage' ? (
            <>
              <h1 className="p-title">Notifications</h1>
              <p className="p-subtitle">Manage your reminders and alerts</p>

              <div className="settings-stack">
                <div className="setting-row">
                  <span>Daily Quotes</span>
                  <div className={`switch ${notifs.dailyQuotes ? 'on' : ''}`} onClick={() => handleToggle('dailyQuotes')}>
                    <div className="knob"></div>
                  </div>
                </div>

                <div className="setting-row">
                  <span>Daily Mood Check</span>
                  <div className={`switch ${notifs.dailyMood ? 'on' : ''}`} onClick={() => handleToggle('dailyMood')}>
                    <div className="knob"></div>
                  </div>
                </div>

                <div className="setting-row">
                  <span>Breathing Reminder</span>
                  <div className={`switch ${notifs.breathing ? 'on' : ''}`} onClick={() => handleToggle('breathing')}>
                    <div className="knob"></div>
                  </div>
                </div>

                <div className="setting-row">
                  <span>Weekly Insights</span>
                  <div className={`switch ${notifs.insights ? 'on' : ''}`} onClick={() => handleToggle('insights')}>
                    <div className="knob"></div>
                  </div>
                </div>

                <div className="setting-row">
                  <span>Streak Reminder</span>
                  <div className={`switch ${notifs.streak ? 'on' : ''}`} onClick={() => handleToggle('streak')}>
                    <div className="knob"></div>
                  </div>
                </div>

                <div className="setting-row">
                  <span>Zuma Check-In</span>
                  <div className={`switch ${notifs.zuma ? 'on' : ''}`} onClick={() => handleToggle('zuma')}>
                    <div className="knob"></div>
                  </div>
                </div>

                <button className="p-link-btn" onClick={() => setView('permission')}>View Permissions Info</button>
              </div>
            </>
          ) : (
            /* Notification Permission Info View */
            <div className="permission-view">
              <h1 className="p-title">Notification Permission</h1>
              <p className="description">
                Notifications help Thrivelab remind you to check in with your emotions and maintain healthy habits.
              </p>

              <div className="usage-box">
                <h2 className="usage-title">What notifications will be used for:</h2>
                <ul className="usage-list">
                  <li>Daily mood check reminders</li>
                  <li>Stress check reminders</li>
                  <li>Motivational quotes</li>
                  <li>Breathing exercise reminders</li>
                  <li>Streak reminders</li>
                </ul>
              </div>

              <div className="settings-stack">
                <div className="setting-row">
                  <span>Daily Mood Reminder</span>
                  <div className="switch on"><div className="knob"></div></div>
                </div>
                <div className="setting-row">
                  <span>Motivational Quotes</span>
                  <div className="switch on"><div className="knob"></div></div>
                </div>
                <div className="setting-row">
                  <span>Breathing Reminders</span>
                  <div className="switch"><div className="knob"></div></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Notifications;