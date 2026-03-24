import React from 'react';
import './FeatureRow.css';

const FeatureRow = ({ title, highlight, description, image, reverse }) => {
  return (
    <section className={`feature-section ${reverse ? 'row-reverse' : ''}`}>
      <div className="feature-container">
        <div className="feature-text">
          <h2 className="feature-title">
            {title} <span className="highlight-text">{highlight}</span>
          </h2>
          <p className="feature-description">{description}</p>
        </div>

        <div className="feature-image">
          <img src={image} alt={title} className="feature-img" />
        </div>
      </div>
    </section>
  );
};

export default FeatureRow;