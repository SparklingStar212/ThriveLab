import React, { useState } from 'react';
import './Diary.css';

const Diary = () => {
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [showEmojiModal, setShowEmojiModal] = useState(false);

  const entries = [
    { id: 1, title: "A Quiet Win Today", date: "March 1, 2026", time: "5:00pm", emoji: "😊", text: "I handled something today without overthinking it. It wasn't a big achievement, but I felt steady. I'm learning that peace can be small and still matter." },
    { id: 2, title: "Too Much At Once", date: "March 3, 2026", time: "8:00pm", emoji: "😑", text: "Everything felt urgent today. Messages, tasks, expectations. I tried to keep up, but my mind felt crowded. Maybe I need to slow down instead of pushing harder." },
    { id: 3, title: "Unexpected Smile", date: "March 6, 2026", time: "6:00pm", emoji: "😊", text: "I wasn't expecting today to be good, but something small made me smile. It reminded me that not all days have to be heavy. I want to remember this feeling." },
    { id: 4, title: "Why Did That Bother Me?", date: "March 9, 2026", time: "5:30pm", emoji: "😟", text: "A small comment kept replaying in my head. I don't know why it affected me so much. Maybe I care more than I admit." },
  ];

  return (
    <div className="diary-container">
      {/* Sidebar - Desktop Only */}
      <aside className="diary-sidebar">
        <div className="logo">Thrivelab</div>
        <nav>
          <div className="menu-item">Home</div>
          <div className="menu-item">Calendar</div>
          <div className="menu-item active">Diary</div>
          <div className="menu-item">Support</div>
          <div className="menu-item">AI chat</div>
        </nav>
      </aside>

      <main className="diary-main">
        {/* Header */}
        <header className="diary-header">
          <div className="mobile-only">Thrivelab</div>
          <div className="user-info">Johnny <img src="/avatar.png" className="avatar" alt="User" /></div>
        </header>

        <div className="diary-content">
          {/* Left Column: List */}
          <section className="entry-list">
            {entries.map(entry => (
              <div 
                key={entry.id} 
                className={`entry-card ${selectedEntry?.id === entry.id ? 'active' : ''}`}
                onClick={() => { setSelectedEntry(entry); setIsEditing(false); }}
              >
                <div className="card-header">
                  <span className="card-emoji">{entry.emoji}</span>
                  <div className="card-meta">
                    <h4>{entry.title}</h4>
                    <span>{entry.date} . {entry.time}</span>
                  </div>
                </div>
                <p className="card-preview">{entry.text}</p>
              </div>
            ))}
            <button className="fab-add" onClick={() => { setSelectedEntry(null); setIsEditing(true); }}>+</button>
          </section>

          {/* Right Column: Detail / Empty State */}
          <section className="entry-detail">
            {!selectedEntry && !isEditing ? (
              <div className="empty-state">
                <img src="/notebook-icon.png" alt="Diary" />
                <p>Tap on an entry to view or tap the "+" icon to add entry</p>
              </div>
            ) : (
              <div className="detail-view">
                <div className="detail-header">
                  <button className="back-arrow" onClick={() => setIsEditing(false)}>‹</button>
                  {isEditing && <button className="save-btn">save</button>}
                  {!isEditing && <button className="close-x" onClick={() => setSelectedEntry(null)}>✕</button>}
                </div>
                
                <div className="detail-body">
                  <div className="mood-select" onClick={() => setShowEmojiModal(true)}>
                    {selectedEntry?.emoji || "😊"}
                  </div>
                  <span className="detail-timestamp">{selectedEntry?.date || "March 1, 2026"} . {selectedEntry?.time || "5:00pm"}</span>
                  <h2 className="detail-title">{selectedEntry?.title || "A Quiet Win Today"}</h2>
                  <p className="detail-text">{selectedEntry?.text || "Start typing..."}</p>
                </div>

                {!isEditing && (
                  <div className="detail-actions">
                    <button className="action-btn"><i className="trash">🗑️</i></button>
                    <button className="action-btn" onClick={() => setIsEditing(true)}><i className="edit">📝</i></button>
                  </div>
                )}
              </div>
            )}
          </section>
        </div>
      </main>

      {/* Emoji Selection Modal */}
      {showEmojiModal && (
        <div className="modal-overlay">
          <div className="emoji-modal">
            <button className="modal-close" onClick={() => setShowEmojiModal(false)}>✕</button>
            <h3>How are you today?</h3>
            <div className="emoji-grid">
              {['Tired', 'Happy', 'Excited', 'Depressed', 'Sad', 'Angry', 'Thoughtful', 'Anxious'].map(mood => (
                <div className="emoji-item" key={mood}>
                  <div className="emoji-circle">😊</div>
                  <span>{mood}</span>
                </div>
              ))}
            </div>
            <button className="modal-save-btn" onClick={() => setShowEmojiModal(false)}>save</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Diary;