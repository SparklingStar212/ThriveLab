import React, { useState } from 'react';
import './Questions.css';

const QuestionsFour = () => {
  const [selected, setSelected] = useState(null);

  const options = [
    { id: 1, text: "Morning", align: "left", offset: "10%" },
    { id: 2, text: "Afternoon", align: "right", offset: "15%" },
    { id: 3, text: "Evening", align: "left", offset: "20%" },
    { id: 4, text: "Custom time", align: "right", offset: "10%" },
    { id: 5, text: "No notifications", align: "left", offset: "20%" }
  ];

  return (
    <div className="questions-page">
      <div className="q-header">
        <div className="q-progress">
          <span className="q-dot"></span>
          <span className="q-dot"></span>
          <span className="q-dot"></span>
          <span className="q-dot active"></span>
        </div>
        <button className="q-skip">Skip</button>
      </div>

      <div className="q-body">
        <h1 className="q-title">When should we send reminders?</h1>

        <div className="q-options-container">
          {options.map((option) => (
            <div 
              key={option.id} 
              className={`q-row ${option.align === 'right' ? 'flex-end' : 'flex-start'}`}
              style={{ 
                paddingLeft: option.align === 'left' ? option.offset : '0',
                paddingRight: option.align === 'right' ? option.offset : '0'
              }}
            >
              <button 
                className={`q-chip ${selected === option.id ? 'is-active' : ''}`}
                onClick={() => setSelected(option.id)}
              >
                {option.text}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="q-footer center">
        <button className="start-btn" disabled={selected === null}>
          Let’s Get Started
        </button>
      </div>
    </div>
  );
};

export default QuestionsFour;