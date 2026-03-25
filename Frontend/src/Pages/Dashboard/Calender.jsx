import React, { useState } from 'react';
import './Calendar.css';

const Calendar = () => {
const [selectedDay, setSelectedDay] = useState(30);

// Data for days with mood records
const entries = {
28: { mood: "Angry", emoji: "😡", time: "2:21PM", stress: "Very Stressed", level: 5 },
29: { mood: "Happy", emoji: "😊", time: "11:00AM", stress: "Low Stress", level: 1 },
30: { mood: "Tired", emoji: "😑", time: "2:21PM", stress: "Moderate", level: 3 },
};

const days = Array.from({ length: 30 }, (_, i) => i + 1);
const nextMonthDays = [1, 2, 3, 4];

return (
<div className="calendar-page">
{/* Sidebar - Desktop Only */}
<aside className="c-sidebar">
<div className="c-logo">Thrivelab</div>
<nav className="c-nav">
<div className="c-nav-item">Home</div>
<div className="c-nav-item c-active">Calendar</div>
<div className="c-nav-item">Diary</div>
<div className="c-nav-item">Support</div>
<div className="c-nav-item">AI chat</div>
</nav>
</aside>

  <main className="c-main">
    <header className="c-header">
      <div className="mobile-header-logo">Thrivelab</div>
      <div className="c-user">Johnny <img src="/avatar.png" className="c-avatar" alt="User" /></div>
    </header>

    <div className="c-content">
      {/* LEFT: The Calendar Grid */}
      <section className="c-calendar-box">
        <div className="c-grid-header">
          <button className="c-arrow">‹</button>
          <div className="c-date-pick">
            <select><option>Sep</option></select>
            <select><option>2026</option></select>
          </div>
          <button className="c-arrow">›</button>
        </div>

        <div className="c-grid">
          {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
            <div key={day} className="c-weekday">{day}</div>
          ))}
          
          <div className="c-cell empty"></div>
          
          {days.map(day => (
            <div 
              key={day} 
              className={`c-cell ${selectedDay === day ? 'is-selected' : ''} ${entries[day] ? 'has-mood' : ''}`}
              onClick={() => setSelectedDay(day)}
            >
              {entries[day] && <span className="c-emoji">{entries[day].emoji}</span>}
              <span className="c-num">{day}</span>
            </div>
          ))}

          {nextMonthDays.map(day => (
            <div key={`next-${day}`} className="c-cell c-next">{day}</div>
          ))}
        </div>
      </section>

      {/* RIGHT: Selected Day Record */}
      <section className="c-detail-view">
        {entries[selectedDay] ? (
          <div className="c-record-card">
            <div className="c-big-emoji">{entries[selectedDay].emoji}</div>
            <div className="c-record-info">
              <h3>{entries[selectedDay].mood}</h3>
              <span className="c-time">{entries[selectedDay].time}</span>
              <p>Stress level : {entries[selectedDay].stress}</p>
              <div className="c-meter">
                {[1, 2, 3, 4, 5].map(s => (
                  <span key={s} className={`c-dot ${s <= entries[selectedDay].level ? 'c-filled' : ''}`}></span>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="c-empty">
            <img src="/notebook.png" alt="Empty" />
            <p>Nothing here yet.</p>
            <span className="c-subtext">No entry was recorded for this day</span>
          </div>
        )}
      </section>
    </div>

    {/* Bottom Nav - Mobile Only */}
    <nav className="c-bottom-nav">
      <div className="c-tab">🏠 Home</div>
      <div className="c-tab c-active-tab">📅 Calendar</div>
      <div className="c-tab">📓 Diary</div>
      <div className="c-tab">✨ Support</div>
      <div className="c-tab">💬 AI chat</div>
    </nav>
  </main>
</div>
);
};

export default Calendar;