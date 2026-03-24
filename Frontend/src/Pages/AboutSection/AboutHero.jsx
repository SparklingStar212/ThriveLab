import React from 'react';
import './About.css';
import Img18 from '../../assets/img (18).png';

const AboutHero = () => {
  return (
    <section className="about-hero">
      <div className="hero-orb-overlay">
        <h1 className="about-title">A Space Built for You</h1>
        <p className="about-subtitle">
          We created this space to help you understand your emotions, 
          manage stress, and feel supported every single day.
        </p>
        <button className="hero-btn">Sign up for free</button>
      </div>
    </section>
  );
};

export default AboutHero;