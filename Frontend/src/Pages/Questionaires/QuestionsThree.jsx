import React, { useState } from 'react';
import './Questions.css';

const QuestionsThree = () => {
  const [selected, setSelected] = useState(null);

  const options = [
    { id: 1, text: "Motivational quotes", align: "left" },
    { id: 2, text: "Gentle affirmations", align: "right" },
    { id: 3, text: "Short breathing reminders", align: "left" },
    { id: 4, text: "Practical coping tips", align: "right" }
  ];

  return (
    <div className="questions-page">
      <div className="q-header">
        <div className="q-progress">
          <span className="q-dot"></span>
          <span className="q-dot"></span>
          <span className="q-dot active"></span>
          <span className="q-dot"></span>
        </div>
        <button className="q-skip">Skip</button>
      </div>

      <div className="q-body">
        <h1 className="q-title">What kind of encouragement do you prefer?</h1>

        <div className="q-options-container">
          {options.map((option) => (
            <div 
              key={option.id} 
              className={`q-row ${option.align === 'right' ? 'flex-end' : 'flex-start'}`}
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

      <div className="q-footer split">
        <button className="btn-back">Previous</button>
        <button className="q-next-btn" disabled={selected === null}>
          Next
        </button>
      </div>
    </div>
  );
};

export default QuestionsThree;