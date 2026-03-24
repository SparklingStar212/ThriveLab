import React from 'react'
import './Footer.css'
import Logo from '../assets/Logo.png';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-logo">
            <img src={Logo} alt="ThriveLab" />
            <span>ThriveLab</span>
          </div>
          <nav className="footer-links">
            <a href="#about">About</a>
            <a href="#features">Features</a>
            <a href="#how">How it works</a>
            <a href="#privacy">Privacy policy</a>
          </nav>
        </div>
        <hr className="footer-divider" />
        <p className="copyright">© 2024 ThriveLab. All rights reserved.</p>
      </footer>
    </>
  )
}

export default Footer