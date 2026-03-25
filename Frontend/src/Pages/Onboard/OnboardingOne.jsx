import React from 'react';
import './Onboarding.css';

const OnboardingOne = () => {
  return (
    <div className="onboarding-page">
      {/* Top Section: Header Actions */}
      <div className="onboarding-header">
        <button className="skip-btn">Skip</button>
      </div>

      {/* Middle Section: Illustration */}
      <div className="illustration-container">
        <div className="circle-bg-mask">
          <img 
            src="/onboarding-girl.png" 
            alt="Safe Space illustration" 
            className="main-onboarding-img" 
          />
        </div>
      </div>

      {/* Bottom Section: Text & Controls */}
      <div className="onboarding-content">
        <h1 className="onboarding-title">A Safe Space for Your Emotions</h1>
        <p className="onboarding-desc">
          Track how you feel, reflect on your day, and express 
          your emotions in a space designed just for you.
        </p>

        {/* Progress Dots */}
        <div className="progress-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>

        {/* Navigation Button */}
        <div className="nav-container">
          <button className="next-btn">Next</button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingOne;