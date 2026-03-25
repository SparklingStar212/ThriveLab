import React, { useState, useEffect } from 'react';
import './Breathing.css';

const BreathingExercise = () => {
  const [activeExercise, setActiveExercise] = useState(null);
  const [timer, setTimer] = useState(4);
  const [isExhaling, setIsExhaling] = useState(false);

  const exercises = [
    { id: 1, name: "Box Breathing", sub: "Steady your breath, Steady your mind" },
    { id: 2, name: "4-7-8 Breathing", sub: "Relax your nervous system" },
    { id: 3, name: "Deep Belly Breathing", sub: "Ground yourself in the moment" },
    { id: 4, name: "Coherent Breathing", sub: "Balance your heart rate" },
    { id: 5, name: "Sigh Release", sub: "Let go of tension instantly" },
    { id: 6, name: "Sleep Wind-Down", sub: "Prepare for a restful night" }
  ];

  // Simple breathing timer logic
  useEffect(() => {
    let interval;
    if (activeExercise) {
      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev === 1) {
            setIsExhaling(!isExhaling);
            return 4; // Reset to 4 seconds for next phase
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [activeExercise, isExhaling]);

  return (
    <div className="breathing-page">
      {/* Sidebar - Shared Navigation */}
      <aside className="b-sidebar">
        <div className="b-logo">Thrivelab</div>
        <nav className="b-nav">
          <div className="b-nav-item">Home</div>
          <div className="b-nav-item">Calendar</div>
          <div className="b-nav-item">Diary</div>
          <div className="b-nav-item active">Support</div>
          <div className="b-nav-item">AI chat</div>
        </nav>
      </aside>

      <main className="b-main">
        <header className="b-header">
          <button className="back-btn">‹</button>
          <div className="b-user">Johnny <img src="/avatar.png" className="b-avatar" alt="User" /></div>
        </header>

        <div className="b-content">
          {/* Left: List of Exercises */}
          <section className="exercise-grid">
            {exercises.map((ex) => (
              <div key={ex.id} className="ex-card">
                <div className="ex-icon">🌬️</div>
                <h3>{ex.name}</h3>
                <button className="start-btn" onClick={() => setActiveExercise(ex)}>Start</button>
              </div>
            ))}
          </section>

          {/* Right: Active Animation Area */}
          <section className="animation-panel">
            {!activeExercise ? (
              <div className="tap-to-start">
                <p>Tap on a breathing exercise to start</p>
              </div>
            ) : (
              <div className="active-breathing">
                <div className="ex-icon-large">🌬️</div>
                <h2>{activeExercise.name}</h2>
                <p>{activeExercise.sub}</p>

                <div className={`breath-circle ${isExhaling ? 'shrink' : 'expand'}`}>
                  <span className="timer-num">{timer}</span>
                </div>

                <p className="breath-instruction">{isExhaling ? 'Exhale...' : 'Inhale...'}</p>

                <button className="stop-btn" onClick={() => setActiveExercise(null)}>Stop</button>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
};

export default BreathingExercise;