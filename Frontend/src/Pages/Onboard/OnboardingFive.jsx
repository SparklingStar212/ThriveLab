import React from 'react';
import './Onboarding.css';

const OnboardingFive = () => {
  return (
    <div className="onboarding-page">
      {/* Header is empty as there is no Skip button on the final screen */}
      <div className="onboarding-header"></div>

      {/* Middle Illustration: The "Path" choice in a large Orb */}
      <div className="illustration-container">
        <div className="choice-orb-bg">
          <img
            src="/onboarding-paths.png"
            alt="Person standing at two paths"
            className="onboarding-main-img"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="onboarding-content">
        <h1 className="onboarding-title">Ready to Begin</h1>
        <p className="onboarding-desc">
          Choose how you'd like to continue. Create an account
          to save your progress or sign in if you're already with us.
        </p>

        {/* Progress Dots: Fifth dot is now active */}
        <div className="dots-container">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot active"></span>
        </div>

        {/* Final Navigation Buttons: Sign In and Sign Up */}
        <div className="button-footer">
          <button className="btn-prev">Sign in</button>
          <button className="btn-next">Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingFive;