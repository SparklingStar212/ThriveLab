import Footer from "../components/layouts/Footer";
import Navbar from "../components/layouts/Navbar";
import "./LandingPage.css";
import "./About.css";

import AboutCards from "../components/ui/ACards";

export default function About() {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <h1>A Space Built for You</h1>
        <p>We created this space to help you understand your emotions, manage stress, and feel supported  every single day</p>
        <button className="signup-btn s-btn">Sign up for free</button>
      </section>


      <section className="landing-page-section">
        <div className="text-content a-text-content">
          <h1>Our Mission</h1>
          <p className="a-p">Our goal is to provide a safe and supportive space where young people can track their emotions, understand their stress, and build healthier habits.</p>
        </div>
        <div className="image-content AITwo"></div>
      </section>

      <section className="landing-page-section a-section">
        <div className="text-content a-text-content">
          <h1>Why We Built This?</h1>
          <p className="a-p2">We noticed that many teens struggle to talk about their emotions. We wanted to create a private space where feelings can be tracked without judgment.</p>
        </div>
        <div className="image-content AIThree"></div>
      </section>

      <section className="landing-page-section a-section">
        <div className="text-content a-text-content">
          <h1>What Makes Us Different?</h1>
        </div>
        <div className="cards-container">
          <AboutCards h2=" Private and Safe" p="Your data stays personal and protected." />
          <AboutCards h2="Simple Tracking" p="Easy mood and stress check-ins." />
          <AboutCards h2="Support Tools" p="Breathing exercises, stories, and calming activities." />
          <AboutCards h2="Helpful Insights" p="Understand patterns in your emotions" />
        </div>
      </section>

      <section className="landing-page-section a-sec5">
        <div className="text-content a-text-content">
          <h1>Privacy & Safety Note</h1>
          <p className="a-p2">Your privacy matters. We do not share your personal emotional data. Everything you log is for your growth and understanding.</p>
        </div>
        <div className="image-content AIFour"></div>
      </section>

      <Footer />
    </>
  );
}