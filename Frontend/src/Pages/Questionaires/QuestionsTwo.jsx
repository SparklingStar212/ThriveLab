import React, { useState } from 'react';
import './Questions.css';

const QuestionsTwo = () => {
  const [selected, setSelected] = useState(null);

  const options = [
    "Once a day",
    "Twice a day",
    "I'll decide later",
    "Only when I feel stressed"
  ];

  return (
    <div className="questions-page">
      <div className="q-header">
        <div className="q-progress">
          <span className="q-dot"></span>
          <span className="q-dot active"></span>
          <span className="q-dot"></span>
          <span className="q-dot"></span>
        </div>
        <button className="q-skip">Skip</button>
      </div>

      <div className="q-body">
        <h1 className="q-title">How often would you like to check in?</h1>

        <div className="q-options-container">
          {/* Row 1: Two chips side by side */}
          <div className="q-row">
            <button
              className={`q-chip ${selected === 0 ? 'is-active' : ''}`}
              onClick={() => setSelected(0)}
            >
              Once a day
            </button>
            <button
              className={`q-chip ${selected === 1 ? 'is-active' : ''}`}
              onClick={() => setSelected(1)}
            >
              Twice a day
            </button>
          </div>

          {/* Row 2: One chip aligned right */}
          <div className="q-row flex-end">
            <button
              className={`q-chip ${selected === 2 ? 'is-active' : ''}`}
              onClick={() => setSelected(2)}
            >
              I'll decide later
            </button>
          </div>

          {/* Row 3: One chip aligned left */}
          <div className="q-row flex-start">
            <button
              className={`q-chip ${selected === 3 ? 'is-active' : ''}`}
              onClick={() => setSelected(3)}
            >
              Only when I feel stressed
            </button>
          </div>
        </div>
      </div>

      <div className="q-footer split">
        <button className="btn-back">Previous</button>
        <button className="q-next-btn" disabled={selected === null}>Next</button>
      </div>
    </div>
  );
};

export default QuestionsTwo;