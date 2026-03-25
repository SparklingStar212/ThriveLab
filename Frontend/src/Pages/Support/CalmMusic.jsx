import React, { useState } from 'react';
import './Music.css';

const CalmMusic = () => {
  const [currentTrack, setCurrentTrack] = useState(null);

  const tracks = [
    { id: 1, title: "Peace of Mind", duration: "1:53" },
    { id: 2, title: "Ambient Calm", duration: "2:10" },
    { id: 3, title: "The Mountain", duration: "3:45" },
    { id: 4, title: "Calm Background", duration: "5:00" },
    { id: 5, title: "Nature", duration: "4:20" },
    { id: 6, title: "Calm Night", duration: "3:15" },
    { id: 7, title: "Relaxing Music", duration: "2:50" },
    { id: 8, title: "Slow Ambient", duration: "6:00" },
    { id: 9, title: "Ambient Deep", duration: "4:10" },
    { id: 10, title: "Ambient", duration: "3:30" }
  ];

  return (
    <div className="music-page">
      {/* Shared Sidebar */}
      <aside className="m-sidebar">
        <div className="m-logo">Thrivelab</div>
        <nav className="m-nav">
          <div className="m-nav-item">Home</div>
          <div className="m-nav-item">Calendar</div>
          <div className="m-nav-item">Diary</div>
          <div className="m-nav-item active">Support</div>
          <div className="m-nav-item">AI chat</div>
        </nav>
      </aside>

      <main className="m-main">
        <header className="m-header">
          <button className="back-arrow">‹</button>
          <div className="m-user">Johnny <img src="/avatar.png" className="m-avatar" alt="User" /></div>
        </header>

        <div className="m-content">
          {/* Grid of Music Tracks */}
          <section className="music-grid">
            {tracks.map((track) => (
              <div key={track.id} className="music-card">
                <div className="music-icon-box">🎵</div>
                <p className="track-name">{track.title}</p>
                <button
                  className="play-btn-small"
                  onClick={() => setCurrentTrack(track)}
                >
                  Play
                </button>
              </div>
            ))}
          </section>

          {/* Desktop Player Panel / Mobile Mini-Player */}
          <section className={`player-panel ${currentTrack ? 'show' : ''}`}>
            {currentTrack ? (
              <div className="player-content">
                <button className="close-player" onClick={() => setCurrentTrack(null)}>✕</button>
                <div className="player-art">🎵</div>
                <h2>{currentTrack.title}</h2>

                <div className="progress-container">
                  <div className="time-row">
                    <span>0:00</span>
                    <span>{currentTrack.duration}</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-knob"></div>
                  </div>
                </div>

                <div className="controls">
                  <button className="c-btn">⏮</button>
                  <button className="c-btn play-main">▶</button>
                  <button className="c-btn">⏭</button>
                </div>
              </div>
            ) : (
              <div className="player-placeholder">
                <p>Select a track to play</p>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
};

export default CalmMusic;