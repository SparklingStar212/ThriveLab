import Logo from "../../assets/images/Logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo-container">
        <img src={Logo} alt="ThriveLab Logo" className="footer-logo" width="50px" />
        <span>ThriveLab</span>
      </div>
      <div className="footer-links">
        <a href="/about">About</a>
        <a href="/features">Features</a>
        <a href="/howitworks">How It Works</a>
        <a href="/privacy">Privacy Policy</a>
      </div>
      <div className="footer-copyright">
        <small>@2026MoodSpace. All rights reserved.</small>
      </div>
    </footer>
  );
}