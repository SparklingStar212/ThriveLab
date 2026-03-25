import React, { useState } from 'react';
import './Statistics.css';

const Statistics = () => {
  const [activeTab, setActiveTab] = useState('Week');

  const emotionsData = [
    { day: "Sun", emojis: ["😊"] },
    { day: "Mon", emojis: ["🙄"] },
    { day: "Tue", emojis: ["🙄", "😌", "😑"] },
    { day: "Wed", emojis: ["😊", "🤔"] },
    { day: "Thu", emojis: ["😟", "😱"] },
    { day: "Fri", emojis: ["😫", "😱", "😡"] },
    { day: "Sat", emojis: ["😑"] },
  ];

  return (
    <div className="stats-page">
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
          <button className="back-btn" onClick={() => window.history.back()}>‹</button>
          <div className="p-header-user">Johnny <img src="/avatar.png" className="p-avatar" alt="" /></div>
        </header>

        <div className="p-content">
          <h1 className="p-title">Statistics</h1>

          {/* Time Tabs */}
          <div className="stats-tabs">
            {['Week', 'Month', 'Year'].map(tab => (
              <button
                key={tab}
                className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="stats-scroll-area">
            {/* Emotions Section */}
            <section className="stats-section">
              <h2 className="section-subtitle">Emotions</h2>
              <div className="emotions-list">
                {emotionsData.map((item, index) => (
                  <div key={index} className="emotion-row">
                    <span className="day-label">{item.day}</span>
                    <div className="emoji-group">
                      {item.emojis.map((e, i) => <span key={i} className="stat-emoji">{e}</span>)}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Stress Levels Graph */}
            <section className="stats-section">
              <h2 className="section-subtitle">Stress Levels</h2>
              <div className="graph-container">
                <div className="y-axis">
                  <span>5</span><span>4</span><span>3</span><span>2</span><span>1</span>
                </div>
                <div className="graph-body">
                  <svg viewBox="0 0 700 200" className="stress-line-graph">
                    {/* Simplified line path matching your screenshot data points */}
                    <polyline
                      fill="none"
                      stroke="#a7c49f"
                      strokeWidth="3"
                      points="50,180 150,150 250,100 350,150 450,80 550,50 650,150"
                    />
                    {/* Data Points */}
                    <circle cx="50" cy="180" r="4" fill="#a7c49f" />
                    <circle cx="150" cy="150" r="4" fill="#a7c49f" />
                    <circle cx="250" cy="100" r="4" fill="#a7c49f" />
                    <circle cx="350" cy="150" r="4" fill="#a7c49f" />
                    <circle cx="450" cy="80" r="4" fill="#a7c49f" />
                    <circle cx="550" cy="50" r="4" fill="#a7c49f" />
                    <circle cx="650" cy="150" r="4" fill="#a7c49f" />
                  </svg>
                  <div className="x-axis">
                    <span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Insights Section */}
            <section className="stats-section">
              <h2 className="section-subtitle">Insights</h2>
              <div className="insights-box">
                <p>Your stress levels were highest on Friday</p>
                <p>Your Mood improved during the weekend</p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Statistics;