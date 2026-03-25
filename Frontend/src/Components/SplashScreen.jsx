import React, { useEffect, useState } from 'react';
import './SplashScreen.css';

const SplashScreen = ({ onFinish }) => {
  const [stage, setStage] = useState(1);

  useEffect(() => {
    // Stage 1: Just the heart
    // Stage 2: Heart + Text (after 1s)
    const timer1 = setTimeout(() => setStage(2), 1000);
    
    // Stage 3: Full Logo (after 2s)
    const timer2 = setTimeout(() => setStage(3), 2000);

    // Finish: Hide splash (after 3.5s)
    const timer3 = setTimeout(() => {
      onFinish();
    }, 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onFinish]);

  return (
    <div className="splash-overlay">
      <div className={`splash-container stage-${stage}`}>
        <div className="logo-wrapper">
          <img src="/logo-heart.png" alt="Heart" className="splash-heart" />
          <span className="splash-text">ThriveLab</span>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;