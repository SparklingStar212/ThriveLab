import Footer from "../components/layouts/Footer";
import Navbar from "../components/layouts/Navbar";
import "./LandingPage.css";


export default function LandingPage() {
  return (
    <>
      <Navbar />
      <section className="landing-page-section">
        <div className="text-content">
          <h1>A Safe Space For Your <span>Emotions</span> </h1>
          <p>A private place to understand and care for your emotions.</p>
          <button className="signup-btn s-btn">Sign up for free</button>
        </div>
        <div className="image-content IOne"></div>
      </section>

      <section className="landing-page-section">
        <div className="text-content TCOne">
          <h1>Track Your Stress <span>Levels</span> and Emotions Accurately. </h1>
          <p>Keep track of how you feel and notice patterns in your emotions over time.</p>
        </div>
        <div className="image-content ITwo"></div>
        <div className="text-content TCTwo">
          <h1>Track Your Stress <span>Levels</span> and Emotions Accurately. </h1>
          <p>Keep track of how you feel and notice patterns in your emotions over time.</p>
        </div>
      </section>

      <section className="landing-page-section">
        <div className="text-content">
          <h1>Monitor Your Mental Health </h1>
          <p>Reflect on your feelings and build better self-awareness.</p>
        </div>
        <div className="image-content IThree"></div>
      </section>

      <section className="landing-page-section">
        <div className="text-content TCOne">
          <h1>Receive <span>Insights</span> on Your Emotions and Stress Levels </h1>
          <p>Discover trends in your moods and learn what affects your stress levels.</p>
        </div>
        <div className="image-content IFour"></div>
        <div className="text-content TCTwo">
          <h1>Receive <span>Insights</span> on Your Emotions and Stress Levels </h1>
          <p>Discover trends in your moods and learn what affects your stress levels.</p>
        </div>
      </section>

      <section className="landing-page-section">
        <div className="text-content">
          <h1>Calm <span>Down</span> with Support Tools</h1>
          <p>Take a moment to pause, breathe, and reset whenever you need to.</p>
        </div>
        <div className="image-content IFive"></div>
      </section>

      < Footer />
    </>
  );
}