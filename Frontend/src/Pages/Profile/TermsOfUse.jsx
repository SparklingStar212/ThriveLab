import React from 'react';
import './Terms.css';

const TermsOfUse = () => {
  return (
    <div className="terms-page">
      {/* Sidebar - Desktop Only */}
      <aside className="t-sidebar">
        <div className="t-logo">Thrivelab</div>
        <nav className="t-nav">
          <div className="t-nav-item">Home</div>
          <div className="t-nav-item">Calendar</div>
          <div className="t-nav-item">Diary</div>
          <div className="t-nav-item">Support</div>
          <div className="t-nav-item">AI chat</div>
        </nav>
      </aside>

      <main className="t-main">
        <header className="t-header">
          <button className="back-arrow" onClick={() => window.history.back()}>‹</button>
          <div className="t-user">Johnny <img src="/avatar.png" className="t-avatar" alt="" /></div>
        </header>

        <div className="t-content">
          <h1 className="t-title">Terms of Use</h1>

          <p className="t-intro">
            Thrivelab is a mental wellness companion designed to help users track emotions, manage stress, and build healthy habits.
          </p>

          <section className="t-section">
            <h3>Acceptable Use</h3>
            <p>Do not misuse the AI chat</p>
            <p>Do not attempt to hack or disrupt the app</p>
            <p>Do not upload harmful or illegal content</p>
          </section>

          <section className="t-section">
            <h3>Not a Medical Service</h3>
            <p>Thrivelab provides emotional support tools but does not replace professional medical or psychological care.</p>
          </section>

          <section className="t-section">
            <h3>User Responsibility</h3>
            <p>Keeping login details safe</p>
            <p>Using the app responsibly</p>
          </section>

          <section className="t-section">
            <h3>AI Chat Disclaimer</h3>
            <p>AI responses are generated automatically and should not be considered professional medical advice.</p>
          </section>

          <section className="t-section">
            <h3>Data Usage</h3>
            <p>Your data is handled according to our Privacy Policy and is used only to improve your experience.</p>
          </section>

          <section className="t-section">
            <h3>Updates to Terms</h3>
            <p>Thrivelab may update these terms occasionally. Users will be notified of important changes.</p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default TermsOfUse;