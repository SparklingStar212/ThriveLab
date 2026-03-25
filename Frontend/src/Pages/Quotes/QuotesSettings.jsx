import React, { useState } from 'react';
import './Quotes.css';

const QuotesSettings = () => {
const [settings, setSettings] = useState({
dailyQuotes: true,
notifications: true,
time: "8:00AM",
widget: true,
category: "Motivation"
});

const toggle = (key) => {
setSettings(prev => ({ ...prev, [key]: !prev[key] }));
};

return (
<div className="quotes-page">
{/* Sidebar - Desktop Only */}
<aside className="q-sidebar">
<div className="q-logo">Thrivelab</div>
<nav className="q-nav">
<div className="q-nav-item">Home</div>
<div className="q-nav-item">Calendar</div>
<div className="q-nav-item">Diary</div>
<div className="q-nav-item">Support</div>
<div className="q-nav-item">AI chat</div>
</nav>
</aside>

  <main className="q-main">
    <header className="q-header">
      <button className="back-arrow">‹</button>
      <div className="q-user">Johnny <img src="/avatar.png" className="q-avatar" alt="" /></div>
    </header>

    <div className="q-content">
      <div className="settings-stack">
        
        {/* Toggles */}
        <div className="q-row">
          <span>Daily Quotes</span>
          <div className={`toggle ${settings.dailyQuotes ? 'on' : ''}`} onClick={() => toggle('dailyQuotes')}>
            <div className="knob"></div>
          </div>
        </div>

        <div className="q-row">
          <span>Quote Notifications</span>
          <div className={`toggle ${settings.notifications ? 'on' : ''}`} onClick={() => toggle('notifications')}>
            <div className="knob"></div>
          </div>
        </div>

        {/* Time Picker */}
        <div className="q-row">
          <span>Notification time</span>
          <div className="time-pill">{settings.time}</div>
        </div>

        <div className="q-row">
          <span>Quote Widget</span>
          <div className={`toggle ${settings.widget ? 'on' : ''}`} onClick={() => toggle('widget')}>
            <div className="knob"></div>
          </div>
        </div>

        {/* Categories */}
        <div className="category-section">
          <p className="section-label">Quote Categories</p>
          
          {['Motivation', 'Calm', 'Self love'].map((cat) => (
            <label key={cat} className="radio-row">
              <input 
                type="radio" 
                name="category" 
                checked={settings.category === cat}
                onChange={() => setSettings({...settings, category: cat})}
              />
              <span className="radio-custom"></span>
              {cat}
            </label>
          ))}
        </div>

        {/* Large Menu Buttons */}
        <div className="menu-buttons">
          <button className="outline-btn">Saved Quotes</button>
          <button className="outline-btn">Customize Quotes</button>
        </div>

      </div>
    </div>
  </main>
</div>
);
};

export default QuotesSettings;