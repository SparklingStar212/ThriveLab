import React from 'react';
import './Hero.css';
import Img1 from '../../assets/img (1).png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            A Safe Space For Your <br />
            <span className="highlight">Emotions</span>
          </h1>
          <p className="hero-subtitle">
            A private place to understand and care for your emotions.
          </p>
          <button className="hero-btn">Sign up for free</button>
        </div>

        <div className="hero-image-wrapper">
          <img
            src={Img1}
            alt="Person sitting in a beanbag reading"
            className="hero-img"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;