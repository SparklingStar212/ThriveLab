import Logo from "../../assets/images/Logo.png"

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-contents">
          <div>
            <img src={Logo} width="50px" alt="" />
          </div>
          <div className="navbar-links">
            <a href="/about">About</a>
            <a href="/features">Features</a>
            <a href="/howitworks">How It Works</a>
          </div>
          <div className="navbar-buttons">
            <button className="signin-btn" onClick={() => window.location.href = '/signin'}>Sign In</button>
            <button className="signup-btn" onClick={() => window.location.href = '/signup'}>Sign Up</button>
          </div>
          <div className="menu-div" onClick={() => {
            const dropdown = document.getElementById('dropDown');
            if (dropdown.style.display === 'none') {
              dropdown.style.display = 'flex';
            } else {
              dropdown.style.display = 'none';
            }
          }}>
            <img src="./hamburger-menu.svg" alt="" width="30px" />
            <div className="dropdown-content" id="dropDown">
              <a href="/about">About</a>
              <a href="/features">Features</a>
              <a href="/howitworks">How It Works</a>
              <button className="signin-btn" onClick={() => window.location.href = '/signin'}>Sign In</button>
              <button className="signup-btn" onClick={() => window.location.href = '/signup'}>Sign Up</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}