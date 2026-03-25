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

    </div>

  );
};

export default QuestionsTwo;