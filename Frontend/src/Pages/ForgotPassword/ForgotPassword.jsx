import React from 'react';
import './ForgotPassword.css';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import Img6 from '../../assets/img (6).png';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const handleReset = (e) => {
    e.preventDefault();
    alert("Password reset link sent to your email!");
    navigate('/signin');
  };
  return (
    <div className="forgot-page">
      <div className="forgot-card">

        <div className="forgot-form-side">
          <div className="logo-top">
            <img src={Logo} alt="MoodSpace" className="forgot-logo" />
          </div>

          <form className="forgot-form" onSubmit={handleReset}>
            <div className="input-field">
              <label>Email</label>
              <input type="email" placeholder="Value" required />
            </div>

            <div className="button-group">
              <button
                type="button"
                className="cancel-btn"
                onClick={() => navigate('/signin')}>
                Cancel
              </button>
              <button type="submit" className="reset-btn">Reset Password</button>
            </div>
          </form>
        </div>

        <div className="forgot-image-side">
          <img src={Img6} alt="Relaxing" className="forgot-img" />
        </div>

      </div>
    </div>
  );
};

export default ForgotPassword;