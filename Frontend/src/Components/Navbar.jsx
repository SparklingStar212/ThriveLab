import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src={Logo} alt="ThriveLab Logo" className="logo-img" />
          <span className="logo-text">ThriveLab</span>
        </div>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/features">Features</Link></li>
          <li><Link to="/how-it-works">How it works</Link></li>
          <li><Link to="/privacy">Privacy policy</Link></li>
          <li className="mobile-only"><button className="btn-login"><Link to="/sign-in">Log in</Link></button></li>
          <li className="mobile-only"><button className="btn-signup"><Link to="/sign-up">Sign Up</Link></button></li>
        </ul>

        <div className="nav-actions">
          <button className="btn-login"><Link to="/sign-in">Log In</Link></button>
          <button className="btn-signup"><Link to="/sign-up">Sign Up</Link></button>
        </div>

        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;