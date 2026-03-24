import React from 'react';
import './HowItWorks.css';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import Img22 from '../../assets/img (22).png';
import Img2 from '../../assets/img (2).png';
import Img7 from '../../assets/img (7).png';
import Img10 from '../../assets/img (10).png';
import Img15 from '../../assets/img (15).png';

const HowItWorks = () => {
  const steps = [
    {
      title: "Check In Your Mood & Stress Levels Daily",
      desc: "Start your day with a quick emotional check-in. Select how you feel and log your stress level in just a few seconds.",
      image: Img22,
      reverse: false,
      showButton: true
    },
    {
      title: "Get Encouragement Based on Your Mood",
      desc: "Receive kind and supportive messages tailored to how you're feeling — because everyone deserves encouragement.",
      image: Img2,
      reverse: true
    },
    {
      title: "Personalized Quotes for Different Emotions",
      desc: "Discover meaningful quotes matched to your emotions to help you reflect, grow, and feel understood.",
      image: Img7,
      reverse: false
    },
    {
      title: "Track Your Mood Weekly & Monthly",
      desc: "See patterns in your emotions with easy-to-read weekly and monthly insights. Understand your trends and grow from them.",
      image: Img10,
      reverse: true
    },
    {
      title: "Reduce Stress with Support Tools",
      desc: "When stress feels overwhelming, access calming exercises, sleep stories, and relaxation tools designed to help you reset.",
      image: Img15,
      reverse: false
    }
  ];

  return (
    <>
      <Navbar />
      <div className="how-page">
        {steps.map((step, index) => (
          <section key={index} className={`how-step ${step.reverse ? 'rev' : ''}`} >
            <div className="how-info">
              <h2>{step.title}</h2>
              <p>{step.desc}</p>
              {step.showButton && <button className="btn-signup">Sign up for free</button>}
            </div>
            <div className="how-visual">
              <div className="orb-bg">
                <img src={step.image} alt="App Mockup" className="how-mockup" />
              </div>
            </div>
          </section>
        ))}

        <section className="how-stats">
          <div className="stats-header">
            <h2>Track Your Mood Weekly & Monthly</h2>
            <p>See patterns in your emotions with easy-to-read weekly and monthly insights.</p>
          </div>
          <div className="stats-display">
            <img src="/graph-card.png" alt="Weekly Stats" className="stat-img" />
            <img src="/heatmap-card.png" alt="Monthly Heatmap" className="stat-img" />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default HowItWorks;