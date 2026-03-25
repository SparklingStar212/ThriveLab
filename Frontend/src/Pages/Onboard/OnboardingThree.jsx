import React from 'react';
import './Onboarding.css';

const OnboardingThree = () => {
return (
<div className="onboarding-page">
{/* Top Header */}
<div className="onboarding-header">
<button className="skip-btn">Skip</button>
</div>

  {/* Middle Illustration with Peach-to-Green Glow */}
  <div className="illustration-container">
    <div className="support-orb-bg">
      <img 
        src="/support-illustration.png" 
        alt="Person relaxing in chair" 
        className="onboarding-main-img" 
      />
    </div>
  </div>

  {/* Content Section */}
  <div className="onboarding-content">
    <h1 className="onboarding-title">Support, Right When You Need It.</h1>
    <p className="onboarding-desc">
      Access calming exercises, gentle encouragement, 
      and tools designed to help you reset and feel balanced.
    </p>

    {/* Progress Dots: Third dot is now active/wide */}
    <div className="dots-container">
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot active"></span>
      <span className="dot"></span>
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

export default OnboardingThree;