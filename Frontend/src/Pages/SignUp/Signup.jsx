import React from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import Img6 from '../../assets/img (6).png';


const Signup = () => {
  return (
    <div className="signup-page">
      <div className="signup-card">

        <div className="form-side">
          <div className="form-header">
            <img src={Logo} alt="Logo" className="signup-logo" />
            <h1 className="form-title">Join MoodSpace</h1>
            <p className="form-subtitle">Let's start your journey to a happier and calmer mind today</p>
          </div>

          <form className="actual-form">
            <div className="field">
              <label>Username</label>
              <input type="text" />
            </div>

            <div className="field">
              <label>Age</label>
              <input type="number" />
            </div>

            <div className="field">
              <label>Email</label>
              <input type="email" />
            </div>

            <div className="field">
              <label>Password</label>
              <input type="password" />
            </div>

            <button type="submit" className="submit-btn">Sign up</button>
          </form>

          <p className="signin-link">
            Already have an account? <Link to="/signin">Sign in</Link>
          </p>
        </div>

        <div className="image-side">
          <img src={Img6} alt="Journaling" className="main-illustration" />
        </div>

      </div>
    </div>
  );
};

export default Signup;