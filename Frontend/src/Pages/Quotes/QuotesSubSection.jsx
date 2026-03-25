import React, { useState } from 'react';
import './QuotesSub.css';

const QuotesSubSection = () => {
  const [view, setView] = useState('saved'); // 'saved', 'custom', or 'add'
  const [hasData, setHasData] = useState(false);

  return (
    <div className="quotes-sub-page">
      {/* Sidebar - Desktop Only */}
      <aside className="s-sidebar">
        <div className="s-logo">Thrivelab</div>
        <nav className="s-nav">
          <div className="s-nav-item">Home</div>
          <div className="s-nav-item">Calendar</div>
          <div className="s-nav-item">Diary</div>
          <div className="s-nav-item active">Support</div>
          <div className="s-nav-item">AI chat</div>
        </nav>
      </aside>

      <main className="s-main">
        <header className="s-header">
          <button className="back-btn" onClick={() => setView('saved')}>‹</button>
          <div className="s-user">Johnny <img src="/avatar.png" className="s-avatar" alt="" /></div>
        </header>

        <div className="s-content">
          <h1 className="s-title">
            {view === 'saved' ? 'Saved Quotes' : view === 'custom' ? 'Customize Quotes' : 'Add Quote'}
          </h1>

          {/* Logic for Empty States or Content */}
          {!hasData && view !== 'add' ? (
            <div className="empty-state">
              <div className="empty-illustration">
                <img src="/notebook-icon.png" alt="Nothing here" />
              </div>
              <p>Nothing here yet.</p>
            </div>
          ) : view === 'add' ? (
            /* "Type Quotes Here" View */
            <div className="add-quote-container">
              <div className="add-header">
                <span className="type-placeholder">Type Quotes here</span>
                <div className="emoji-tag">
                  <span>🤔</span>
                  <small>Thoughtful</small>
                </div>
              </div>
              <button className="save-btn" onClick={() => { setHasData(true); setView('custom'); }}>Save</button>
            </div>
          ) : (
            /* Populated State (Example) */
            <div className="quote-list">
              <div className="quote-card">
                <div className="quote-card-header">
                  {view === 'custom' && (
                    <div className="emoji-tag-card">
                      <span>🤔</span>
                      <small>Thoughtful</small>
                    </div>
                  )}
                </div>
                <p>“You don’t have to see the whole staircase, just take the first step”</p>
                <span className="heart-icon">❤️</span>
              </div>
            </div>
          )}

          {/* Floating Add Button - Only shows on main sub-views */}
          {view !== 'add' && (
            <button className="fab-plus" onClick={() => setView('add')}>+</button>
          )}
        </div>
      </main>
    </div>
  );
};

export default QuotesSubSection;