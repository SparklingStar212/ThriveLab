import React, { useState } from 'react';
import './Calendar.css';

const Calendar = () => {
  const [selectedDay, setSelectedDay] = useState(30);

  // Mock data for days with entries
  const entries = {
    28: { mood: "Angry", emoji: "😡", time: "2:21PM", stress: "Very Stressed", level: 5 },
    29: { mood: "Happy", emoji: "😊", time: "11:00AM", stress: "Low Stress", level: 1 },
    30: { mood: "Tired", emoji: "😑", time: "2:21PM", stress: "Moderate", level: 3 },
  };

  const days = Array.from({ length: 30 }, (_, i) => i + 1);
  const nextMonthDays = [1, 2, 3, 4];

  return (
    <div className="calendar-container">
      {/* Sidebar Navigation - Desktop */}
      <aside className="sidebar">
        <div className="logo-section">
          <img src="/logo-heart.png" alt="Logo" />
          <span>Thrivelab</span>
        </div>
        <nav className="nav-menu">
          <div className="nav-item">Home</div>
          <div className="nav-item active">Calendar</div>
          <div className="nav-item">Diary</div>
          <div className="nav-item">Support</div>
          <div className="nav-item">AI chat</div>
        </nav>
      </aside>

      <main className="calendar-main">
        <header className="dash-header">
          <div className="mobile-logo"><span>Thrivelab</span></div>
          <div className="user-profile">
            <span>Johnny</span>
            <img src="/avatar.png" alt="User" className="avatar" />
          </div>
        </header>

        <div className="calendar-content">
          {/* Calendar Card */}
          <section className="calendar-card">
            <div className="calendar-header">
              <button className="nav-arrow">‹</button>
              <div className="date-selectors">
                <select><option>Sep</option></select>
                <select><option>2026</option></select>
              </div>
              <button className="nav-arrow">›</button>
            </div>

            <div className="calendar-grid">
              {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                <div key={day} className="weekday-label">{day}</div>
              ))}

              {/* Empty spacers for month start if needed */}
              <div className="day-cell empty"></div>

              {days.map(day => (
                <div
                  key={day}
                  className={`day-cell ${selectedDay === day ? 'selected' : ''} ${entries[day] ? 'has-entry' : ''}`}
                  onClick={() => setSelectedDay(day)}
                >
                  {entries[day] && <span className="entry-emoji">{entries[day].emoji}</span>}
                  <span className="day-number">{day}</span>
                </div>
              ))}

              {nextMonthDays.map(day => (
                <div key={`next-${day}`} className="day-cell next-month">{day}</div>
              ))}
            </div>
          </section>

          {/* Side Detail Panel */}
          <section className="detail-panel">
            {entries[selectedDay] ? (
              <div className="record-card-full">
                <div className="record-large-emoji">{entries[selectedDay].emoji}</div>
                <div className="record-details">
                  <h3>{entries[selectedDay].mood}</h3>
                  <span className="record-time">{entries[selectedDay].time}</span>
                  <p>Stress level : {entries[selectedDay].stress}</p>
                  <div className="stress-meter">
                    {[1, 2, 3, 4, 5].map(step => (
                      <span key={step} className={`step ${step <= entries[selectedDay].level ? 'active' : ''}`}></span>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="empty-calendar-state">
                <img src="/notebook-icon.png" alt="Empty" />
                <p className="empty-title">Nothing here yet.</p>
                <p className="empty-sub">No entry was recorded for this day</p>
              </div>
            )}
          </section>
        </div>

        {/* Mobile Bottom Nav */}
        <nav className="bottom-nav">
          <div className="tab">🏠<span>Home</span></div>
          <div className="tab active">📅<span>Calendar</span></div>
          <div className="tab">📓<span>Diary</span></div>
          <div className="tab">✨<span>Support</span></div>
          <div className="tab">💬<span>AI chat</span></div>
        </nav>
      </main>
    </div>
  );
};

export default Calendar;