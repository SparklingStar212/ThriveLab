import React from 'react';
import './BottomSection.css';

const BottomSection = () => {
  return (
    <div className="bottom-wrapper">
      <section className="calm-section">
        <div className="calm-content">
          <h2 className="calm-title">
            Calm <span className="highlight-text">Down</span> with Support Tools
          </h2>
          <p className="calm-subtitle">
            Take a moment to pause, breathe, and reset whenever you need to.
          </p>
          <div className="calm-image-container">
            <img
              src="/meditation-illustration.png"
              alt="Person meditating"
              className="calm-img"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default BottomSection;