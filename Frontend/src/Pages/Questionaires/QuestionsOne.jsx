import React, { useState } from 'react';
import './Questions.css';

const QuestionsOne = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = [
    { id: 1, text: "Track my moods" },
    { id: 2, text: "Improve daily routine" },
    { id: 3, text: "Reduce stress" },
    { id: 4, text: "Build emotional awareness" },
    { id: 5, text: "Stay motivated" }
  ];

  const toggleOption = (id) => {
    if (selectedOptions.includes(id)) {
      setSelectedOptions(selectedOptions.filter(item => item !== id));
    } else {
      if (selectedOptions.length < 2) {
        setSelectedOptions([...selectedOptions, id]);
      }
    }
  };

  return (
    <div className="questions-page">
      <div className="questions-header">
        <div className="progress-bar-top">
          <span className="step-pill active"></span>
          <span className="step-pill"></span>
          <span className="step-pill"></span>
          <span className="step-pill"></span>
        </div>
        <button className="skip-btn">Skip</button>
      </div>

      <div className="questions-content">
        <h1>What brings you here today?</h1>
        <p className="subtitle">select up to 2</p>

        <div className="options-staggered-grid">
          {options.map((option, index) => (
            <div
              key={option.id}
              className={`option-chip chip-align-${index} ${selectedOptions.includes(option.id) ? 'selected' : ''}`}
              onClick={() => toggleOption(option.id)}
            >
              {option.text}
            </div>
          ))}
        </div>
      </div>

      <div className="questions-footer">
        <button className="next-btn-round" disabled={selectedOptions.length === 0}>
          Next
        </button>
      </div>
    </div>
  );
};

export default QuestionsOne;