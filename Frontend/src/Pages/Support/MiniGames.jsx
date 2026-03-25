import React from 'react';
import './MiniGames.css';

const MiniGames = () => {
const games = [
{ id: 1, title: "Breathe With Zuma", icon: "🎮" },
{ id: 2, title: "Grounding 5-4-3-2-1", icon: "🎮" },
{ id: 3, title: "Color the Mood", icon: "🎮" },
{ id: 4, title: "3 Good Things", icon: "🎮" },
{ id: 5, title: "Catch the Calm", icon: "🎮" },
{ id: 6, title: "Thought Sorting", icon: "🎮" },
{ id: 7, title: "Build Your Calm Space", icon: "🎮" },
{ id: 8, title: "Zuma Care", icon: "🎮" }
];

return (
<div className="games-page">
{/* Shared Navigation Sidebar */}
<aside className="g-sidebar">
<div className="g-logo">Thrivelab</div>
<nav className="g-nav">
<div className="g-nav-item">Home</div>
<div className="g-nav-item">Calendar</div>
<div className="g-nav-item">Diary</div>
<div className="g-nav-item active">Support</div>
<div className="g-nav-item">AI chat</div>
</nav>
</aside>

  <main className="g-main">
    <header className="g-header">
      <button className="back-arrow">‹</button>
      <div className="g-user">Johnny <img src="/avatar.png" className="g-avatar" alt="User" /></div>
    </header>

    <div className="g-content">
      <div className="games-grid">
        {games.map((game) => (
          <div key={game.id} className="game-card">
            <div className="game-icon-box">
              <img src="/gamepad-icon.png" alt="Game" className="gamepad-img" />
            </div>
            <p className="game-title">{game.title}</p>
            <button className="play-button">Play</button>
          </div>
        ))}
      </div>
    </div>
  </main>
</div>
);
};

export default MiniGames;