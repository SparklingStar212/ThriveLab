import React from 'react';
import './Privacy.css';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import Img14 from '../../assets/img (14).png';

const Privacy = () => {
  const dataSafety = [
    "We don't sell your data",
    "Your mood logs stay private",
    "You control your information",
    "You can delete your account anytime"
  ];

  const infoCollect = [
    "Mood entries",
    "Journal entries",
    "Stress levels",
    "Basic account info (email, username)"
  ];

  const yourRights = [
    "View your data",
    "Export your data",
    "Delete your data"
  ];

  const infoUsage = [
    "To improve app experience",
    "To generate insights",
    "To personalize encouragement"
  ];

  return (
    <>
      <Navbar />
      <div className="privacy-page">
        <section className="privacy-hero">
          <div className="privacy-hero-content">
            <h1>Your privacy matters</h1>
            <p>We are committed to protecting your emotional data and keeping your experience safe and secure.</p>
            <button className="btn-signup">Sign up for free</button>
          </div>
          <div className="shield-graphic">
            <img src={Img14} alt="" />
          </div>
        </section>

        <section className="privacy-tags">
          <div className="tag-group">
            {dataSafety.map((text, i) => (
              <div key={i} className="tag-pill green-pill">{text}</div>
            ))}
          </div>

          <div className="tag-section">
            <h2>Information We Collect</h2>
            <div className="tag-group">
              {infoCollect.map((text, i) => (
                <div key={i} className="tag-pill green-pill">{text}</div>
              ))}
            </div>
          </div>

          <div className="tag-section">
            <h2>How We Use Your Information</h2>
            <div className="tag-group">
              {infoUsage.map((text, i) => (
                <div key={i} className="tag-pill peach-pill">{text}</div>
              ))}
            </div>
          </div>

          <div className="tag-section">
            <h2>Your Rights</h2>
            <div className="tag-group">
              {yourRights.map((text, i) => (
                <div key={i} className="tag-pill green-pill">{text}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="privacy-details">
          <div className="detail-block">
            <h2 style={{ textAlign: 'center' }}>Data Protection</h2>
            <h3>Encryption</h3>
            <p>We use encryption to protect your data when it is sent and when it is stored.</p>
            <h3>Secure Storage</h3>
            <p>Your information is stored securely and only authorized systems can access it.</p>
            <h3>Access Control</h3>
            <p>Your journal entries and mood logs are private and visible only to you.</p>
            <h3>Account Protection</h3>
            <p>You are responsible for keeping your login details secure.</p>
            <h3>Account Deletion</h3>
            <p>You can delete your account at any time. Once deleted, your data will be permanently removed from our systems.</p>
          </div>

          <div className="detail-block">
            <h2 style={{ textAlign: 'center' }}>Cookies</h2>
            <h3>What Are Cookies?</h3>
            <p>Cookies are small files stored on your device that help the app remember your preferences.</p>
            <h3>Why We Use Them</h3>
            <p>To keep you logged in, remember your theme settings, and improve performance.</p>
            <h3>Analytics</h3>
            <p>We may use analytics tools to understand how users interact with the app. This data does not identify you personally</p>
            <h3>Control</h3>
            <p>You can disable cookies in your browser settings, but some features may not work properly.</p>
          </div>

          <div className="detail-block">
            <h2 style={{ textAlign: 'center' }}>Notifications</h2>
            <h3>Purpose</h3>
            <p>We send gentle reminders to help you stay consistent with mood tracking.</p>
            <h3>Customization</h3>
            <p>You can adjust or turn off notifications anytime in your settings.</p>
            <h3>No Spam Promise</h3>
            <p>We do not send promotional spam or sell your contact information.</p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Privacy;