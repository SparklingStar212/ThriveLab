import React, { useState } from 'react';
import './Questions.css';

const QuestionsOne = () => {
const [selected, setSelected] = useState([]);

const options = [
"Track my moods",
"Improve daily routine",
"Reduce stress",
"Build emotional awareness",
"Stay motivated"
];

const handleSelect = (index) => {
if (selected.includes(index)) {
setSelected(selected.filter(i => i !== index));
} else if (selected.length < 2) {
setSelected([...selected, index]);
}
};

return (
<div className="questions-page">
<div className="q-header">
<div className="q-progress">
<span className="q-dot active"></span>
<span className="q-dot"></span>
<span className="q-dot"></span>
<span className="q-dot"></span>
</div>
<button className="q-skip">Skip</button>
</div>

  <div className="q-body">
    <h1 className="q-title">What brings you here today?</h1>
    <p className="q-sub">select up to 2</p>

    <div className="q-options-list">
      {options.map((text, idx) => (
        <button 
          key={idx}
          className={`q-chip chip-${idx} ${selected.includes(idx) ? 'is-active' : ''}`}
          onClick={() => handleSelect(idx)}
        >
          {text}
        </button>
      ))}
    </div>
  </div>

  <div className="q-footer">
    <button className="q-next-btn">Next</button>
  </div>
</div>
);
};

export default QuestionsOne;