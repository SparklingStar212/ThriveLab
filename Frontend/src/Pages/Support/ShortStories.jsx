import React, { useState } from 'react';
import './ShortStories.css';

const ShortStories = () => {
  const [activeStory, setActiveStory] = useState(null);

  const stories = [
    {
      id: 1,
      title: "The Day I Didn’t Fix Everything",
      text: "That day started with a long list. There were problems to solve, messages to reply to, plans that had fallen apart, and emotions I didn’t fully understand. I woke up thinking I had to fix everything before the day ended. But the hours passed, and things didn’t go the way I imagined. Some tasks stayed unfinished. Some conversations stayed unresolved. Some worries refused to disappear. At first, it felt like failure. But as evening came, something quieter appeared. I noticed that even though everything wasn’t fixed, the world hadn’t fallen apart. The sky still turned soft shades of orange. The air was calm. My breathing slowed. And in that quiet moment I realized something important: Not every problem needs to be solved today. Some things need time. Some things need rest. And sometimes the bravest thing we can do is simply pause. That night, instead of trying to fix everything, I allowed myself to just exist. And somehow, that was enough."
    },
    { id: 2, title: "The Weight of Small Things", text: "Coming soon..." },
    { id: 3, title: "The Quiet Win", text: "Coming soon..." },
    { id: 4, title: "Tomorrow Exists", text: "Coming soon..." },
    { id: 5, title: "A Day Without Energy", text: "Coming soon..." },
    { id: 6, title: "The Permission", text: "Coming soon..." },
    { id: 7, title: "Rain Doesn’t Last Forever", text: "Coming soon..." },
    { id: 8, title: "Zuma’s Reminder", text: "Coming soon..." },
    { id: 9, title: "Three Breaths", text: "Coming soon..." },
    { id: 10, title: "The Thought That Wasn’t True", text: "Coming soon..." }
  ];

  return (
    <div className="stories-page">
      {/* Sidebar - Desktop */}
      <aside className="st-sidebar">
        <div className="st-logo">Thrivelab</div>
        <nav className="st-nav">
          <div className="st-nav-item">Home</div>
          <div className="st-nav-item">Calendar</div>
          <div className="st-nav-item">Diary</div>
          <div className="st-nav-item active">Support</div>
          <div className="st-nav-item">AI chat</div>
        </nav>
      </aside>

      <main className="st-main">
        <header className="st-header">
          <button className="back-btn">‹</button>
          <div className="st-user">Johnny <img src="/avatar.png" className="st-avatar" alt="User" /></div>
        </header>

        <div className="st-content">
          {/* Grid of Story Cards */}
          <section className="stories-grid">
            {stories.map((story) => (
              <div key={story.id} className="story-card">
                <div className="story-icon-box">📖</div>
                <p className="story-title">{story.title}</p>
                <button
                  className="read-btn"
                  onClick={() => setActiveStory(story)}
                >
                  Read
                </button>
              </div>
            ))}
          </section>

          {/* Reading Panel (Desktop View) / Overlay (Mobile) */}
          <section className={`reading-panel ${activeStory ? 'open' : ''}`}>
            {!activeStory ? (
              <div className="st-placeholder">
                <p>Tap on a Story to start reading</p>
              </div>
            ) : (
              <div className="full-story-view">
                <button className="close-story" onClick={() => setActiveStory(null)}>✕</button>
                <div className="story-header-icon">📖</div>
                <h2>{activeStory.title}</h2>
                <div className="story-body-text">
                  <p>{activeStory.text}</p>
                </div>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
};

export default ShortStories;