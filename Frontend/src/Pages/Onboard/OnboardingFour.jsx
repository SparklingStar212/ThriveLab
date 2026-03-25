import React from 'react';
import './Onboarding.css';

const OnboardingFour = () => {
  return (
    <div className="onboarding-page">
      {/* Top Header */}
      <div className="onboarding-header">
        <button className="skip-btn">Skip</button>
      </div>

      {/* Middle Illustration: Data Chart in a soft Green Orb */}
      <div className="illustration-container">
        <div className="stats-orb-bg">
          <div className="stats-card">
            <img
              src="/mood-graph-card.png"
              alt="Weekly Mood Score Chart"
              className="chart-img"
            />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="onboarding-content">
        <h1 className="onboarding-title">Understand Yourself</h1>
        <p className="onboarding-desc">
          Receive insights on your mood and stress levels
          from similar patterns.
        </p>

        {/* Progress Dots: Fourth dot is now the active pill shape */}
        <div className="dots-container">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot active"></span>
          <span className="dot"></span>
        </div>

        {/* Navigation Buttons */}
        <div className="button-footer">
          <button className="btn-prev">Previous</button>
          <button className="btn-next">Next</button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingFour;