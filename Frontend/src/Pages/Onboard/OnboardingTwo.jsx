import React from 'react';
import './Onboarding.css';

const OnboardingTwo = () => {
  return (
    <div className="onboarding-page">
      {/* Header with Skip button */}
      <div className="onboarding-header">
        <button className="skip-btn">Skip</button>
      </div>

      {/* Top Section: Green Circle with Phone Mockup */}
      <div className="illustration-container">
        <div className="green-orb-bg">
          <div className="phone-container">
            <img src="/phone-checkin.png" alt="App Mockup" className="mockup-img" />
          </div>
        </div>
      </div>

      {/* Bottom Section: Text and Buttons */}
      <div className="onboarding-content">
        <h1 className="onboarding-title">Check In Daily</h1>
        <p className="onboarding-desc">
          Log your mood and stress level in seconds. Small 
          daily check-ins help you understand yourself better over time.
        </p>

        {/* Dots: Second dot is now the wide/active one */}
        <div className="dots-container">
          <span className="dot"></span>
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>

        {/* Bottom Buttons */}
        <div className="button-footer">
          <button className="btn-prev">Previous</button>
          <button className="btn-next">Next</button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingTwo;