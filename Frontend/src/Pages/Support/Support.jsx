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

    </div>
  );
};

export default Support;