import React, { useState } from 'react';
import './MoodCustomization.css';

const MoodCustomization = () => {
  const [selectedMoods, setSelectedMoods] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  const allMoods = [
    { id: 1, label: "Tired", emoji: "😑" },
    { id: 2, label: "Happy", emoji: "😊" },
    { id: 3, label: "Excited", emoji: "🤩" },
    { id: 4, label: "Thoughtful", emoji: "🤔" },
    { id: 5, label: "Anxious", emoji: "😰" },
    { id: 6, label: "Angry", emoji: "😡" },
    { id: 7, label: "Sad", emoji: "😔" },
    { id: 8, label: "Depressed", emoji: "😪" },
    { id: 9, label: "Calm", emoji: "😌" },
    { id: 10, label: "Stressed", emoji: "☹️" },
    { id: 11, label: "Overwhelmed", emoji: "😨" },
    { id: 12, label: "Lonely", emoji: "😟" },
    { id: 13, label: "Very happy", emoji: "😂" },
    { id: 14, label: "Okay", emoji: "🙄" },
    { id: 15, label: "Frustrated", emoji: "😫" }
  ];

  const toggleMood = (id) => {
    if (selectedMoods.includes(id)) {
      setSelectedMoods(selectedMoods.filter(m => m !== id));
    } else {
      setSelectedMoods([...selectedMoods, id]);
    }
  };

  return (
    <div className="mood-custom-page">
      {/* Sidebar - Desktop */}
      <aside className="m-sidebar">
        <div className="m-logo">Thrivelab</div>
        <nav className="m-nav">
          <div className="m-nav-item">Home</div>
          <div className="m-nav-item">Calendar</div>
          <div className="m-nav-item">Diary</div>
          <div className="m-nav-item">Support</div>
          <div className="m-nav-item">AI chat</div>
        </nav>
      </aside>

      <main className="m-main">
        <header className="m-header">
          <button className="back-arrow">‹</button>
          <div className="m-user">Johnny <img src="/avatar.png" className="m-avatar" alt="" /></div>
        </header>

        <div className="m-content">
          <div className="m-title-area">
            <h1>Select Moods you want to track</h1>
            <p>At least 8</p>
          </div>

          <div className="mood-grid">
            {allMoods.map((mood) => (
              <div
                key={mood.id}
                className="mood-option-row"
                onClick={() => toggleMood(mood.id)}
              >
                <div className={`mood-checkbox ${selectedMoods.includes(mood.id) ? 'checked' : ''}`}>
                  {selectedMoods.includes(mood.id) && <div className="inner-dot"></div>}
                </div>
                <div className="mood-card-mini">
                  <span className="mini-emoji">{mood.emoji}</span>
                  <span className="mini-label">{mood.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default MoodCustomization;