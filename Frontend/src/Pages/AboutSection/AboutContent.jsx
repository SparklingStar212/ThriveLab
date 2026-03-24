import React from 'react';
import './About.css';
import Img13 from '../../assets/img (13).png';
import Img16 from '../../assets/img (16).png';
import Img11 from '../../assets/img (11).png';
const AboutContent = () => {
  return (
    <div className="about-container">
      <section className="mission-section">
        <div>
          <h2>Our Mission</h2>
          <p>Our goal is to provide a safe and supportive space where young people can track their emotions, understand their stress, and build healthier habits.</p>
        </div>
        <div className="circle-frame">
          <img src={Img13} alt="Person reading" />
        </div>
      </section>

      <section className="why-section">
        <h2>Why We Built This</h2>
        <p>We noticed that many teens struggle to talk about their emotions. We wanted to create a private space where feelings can be tracked without judgment.</p>
        <div className="dual-image-grid">
          <img src={Img16} alt="Teen support" />
        </div>
      </section>

      <section className="difference-section">
        <h2>What Makes Us Different</h2>
        <div className="feature-cards-stack">
          <div className="diff-card">
            <h3>Private and Safe</h3>
            <p>Your data stays personal and protected.</p>
          </div>
          <div className="diff-card">
            <h3>Simple Tracking</h3>
            <p>Easy mood and stress check-ins.</p>
          </div>
          <div className="diff-card">
            <h3>Support Tools</h3>
            <p>Breathing exercises, stories, and calming activities.</p>
          </div>
          <div className="diff-card">
            <h3>Helpful Insights</h3>
            <p>Understand patterns in your emotions.</p>
          </div>
        </div>
      </section>

      <section className="privacy-section">
        <div>
          <h2>Privacy & Safety Note</h2>
          <p>Your privacy matters. We do not share your personal emotional data. Everything you log is for your growth and understanding.</p>
        </div>
        <div className="rect-image">
          <img src={Img11} alt="Person reading" />
        </div>
      </section>
    </div>
  );
};

export default AboutContent;