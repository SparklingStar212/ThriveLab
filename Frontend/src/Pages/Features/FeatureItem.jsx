import React from 'react';
import './Features.css';


const FeatureItem = ({ title, description, image, reverse }) => {
  return (
    <div className={`feature-item ${reverse ? 'reverse' : ''}`} >
      <div className="feature-info">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="feature-mockup">
        <img src={image} alt={title} className="phone-frame" />
      </div>
    </div>
  );
};

export default FeatureItem;