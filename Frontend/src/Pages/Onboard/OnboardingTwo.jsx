import React from 'react';
import './Onboarding.css';

const OnboardingTwo = () => {
  return (
    <div className="onboarding-page">
      {/* Skip button remains in the same place */}
      <div className="onboarding-header">
        <button className="skip-btn">Skip</button>
      </div>

      {/* Top Section: App Mockup with Green Gradient Circle */}
      <div className="illustration-container">
        <div className="green-orb-mask">
          <div className="phone-mockup-wrapper">
            <img 
              src="/check-in-mockup.png" 
              alt="Daily Check-in App Mockup" 
              className="onboarding-mockup-img" 
            />
          </div>
        </div>
      </div>

      {/* Bottom Section: Text & Controls */}
      <div className="onboarding-content">
        <h1 className="onboarding-title">Check In Daily</h1>
        <p className="onboarding-desc">
          Log your mood and stress level in seconds. Small 
          daily check-ins help you understand yourself better over time.
        </p>

        {/* Progress Dots - Second dot is now active */}
        <div className="progress-dots">
          <span className="dot"></span>
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>

        {/* Dual Navigation Buttons */}
        <div className="nav-container split">
          <button className="prev-btn">Previous</button>
          <button className="next-btn">Next</button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingTwo;