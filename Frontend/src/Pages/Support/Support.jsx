import React from 'react';
import './Support.css';

const Support = () => {
  const tools = [
    {
      title: "Breathing Exercise",
      desc: "A simple 1 minute exercise to help you find your calm",
      icon: "💨",
      color: "green-light",
      iconBg: "#b8c7ab"
    },
    {
      title: "Short Stories",
      desc: "Calming tales to help you relax and drift away",
      icon: "📖",
      color: "green-pale",
      iconBg: "#5e6954"
    },
    {
      title: "Calm Music",
      desc: "Find your calm one note at a time",
      icon: "🎵",
      color: "peach-light",
      iconBg: "#f8a47e"
    },
    {
      title: "Mini Games",
      desc: "Playful distractions to help shift your focus",
      icon: "🎮",
      color: "peach-pale",
      iconBg: "#d8967a"
    }
  ];

  return (
    <div className="support-container">
      {/* Sidebar - Desktop */}
      <aside className="sidebar">
        <div className="logo-section">Thrivelab</div>
        <nav className="nav-menu">
          <div className="nav-item">Home</div>
          <div className="nav-item">Calendar</div>
          <div className="nav-item">Diary</div>
          <div className="nav-item active">Support</div>
          <div className="nav-item">AI chat</div>
        </nav>
      </aside>

      <main className="support-main">
        <header className="dash-header">
          <div className="mobile-logo">Thrivelab</div>
          <div className="user-profile">
            <span>Johnny</span>
            <img src="/avatar.png" alt="User" className="avatar" />
          </div>
        </header>

        <div className="support-scroll-content">
          {/* Quote Card */}
          <section className="quote-card">
            <span className="quote-label">Quote of the day</span>
            <p className="quote-text">
              “You don’t have to see the whole staircase, just take the first step”
            </p>
            <span className="quote-author">Martin Luther King Jr.</span>
            <div className="heart-icon">❤️</div>
          </section>

          {/* Tools Grid */}
          <div className="tools-list">
            {tools.map((tool, index) => (
              <div key={index} className={`tool-card ${tool.color}`}>
                <div className="tool-icon" style={{ backgroundColor: tool.iconBg }}>
                  {tool.icon}
                </div>
                <h3>{tool.title}</h3>
                <p>{tool.desc}</p>
                <button className="open-tools">
                  Open Tools <span>→</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Nav - Mobile */}
        <nav className="bottom-nav">
          <div className="tab">🏠<span>Home</span></div>
          <div className="tab">📅<span>Calendar</span></div>
          <div className="tab">📓<span>Diary</span></div>
          <div className="tab active">✨<span>Support</span></div>
          <div className="tab">💬<span>AI chat</span></div>
        </nav>
      </main>
    </div>
  );
};

export default Support;