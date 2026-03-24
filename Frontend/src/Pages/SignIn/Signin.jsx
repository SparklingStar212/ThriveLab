import React from 'react';
import './Signin.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import Img6 from '../../assets/img (6).png';

const Signin = () => {
  return (
    <div className="signin-page">
      <div className="signin-card">

        <div className="signin-form-side">
          <div className="signin-header">
            <img src={Logo} alt="MoodSpace Logo" className="signin-logo" />
            <h1 className="signin-title">Welcome Back</h1>
            <p className="signin-subtitle">Good to see you again, take a moment to check in with yourself</p>
          </div>

          <form className="signin-form">
            <div className="input-field">
              <label>Email</label>
              <input type="email" required />
            </div>

            <div className="input-field">
              <label>Password</label>
              <input type="password" required />
            </div>

            <button type="submit" className="signin-btn">Sign In</button>
          </form>

          <div className="signin-footer">
            <Link to="/forgot-password">Forgot password?</Link>
          </div>
        </div>

        <div className="signin-image-side">
          <img src={Img6} alt="Relaxing" className="signin-img" />
        </div>

      </div>
    </div>
  );
};

export default Signin;