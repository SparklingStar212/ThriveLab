import React from 'react';
import './Features.css';
import Img12 from '../../assets/img (12).png';

const FeaturesHero = () => {
  return (
    <section className="features-hero">
      <div className="features-hero-content">
        <h1>Need to Calm Down? <br/> We've Got Your Back</h1>
        <p>
          Feeling overwhelmed? Access calming tools, sleep stories, 
          relaxing music, and mini games designed to help you breathe, 
          reset, and feel better.
        </p>
        <button className="btn-start">Start now</button>
      </div>
      <div className="features-hero-image">
      </div>
    </section>
  );
};

export default FeaturesHero;