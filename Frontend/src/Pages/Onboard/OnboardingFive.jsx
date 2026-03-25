import React from 'react';
import './Onboarding.css';

const OnboardingFive = () => {
return (
<div className="onboarding-page">
  {/* Header is empty as there is no Skip button on the final screen */}
  <div className="onboarding-header"></div>

  {/* Middle Illustration */}
  <div className="illustration-container">
    <div className="final-orb-bg">
      <img 
        src="/onboarding-final.png" 
        alt="Ready to start" 
        className="onboarding-main-img" 
      />
    </div>
  </div>

  {/* Content Section */}
  <div className="onboarding-content">
    <h1 className="onboarding-title">Ready to Thrive?</h1>
    <p className="onboarding-desc">
      Your journey to better mental well-being starts now. 
      We're here to support you every step of the way.
    </p>

    {/* Progress Dots: Final dot active */}
    <div className="dots-container">
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot active"></span>
    </div>

    {/* Navigation Buttons */}
    <div className="button-footer">
      <button className="btn-prev">Previous</button>
      <button className="btn-next">Get Started</button>
    </div>
  </div>
</div>
);
};

export default OnboardingFive;