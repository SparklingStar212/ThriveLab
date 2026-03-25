import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar Navigation - Desktop only */}
      <aside className="sidebar">
        <div className="logo-section">
          <img src="/logo-heart.png" alt="Logo" />
          <span>Thrivelab</span>
        </div>
        <nav className="nav-menu">
          <div className="nav-item active"><i className="icon-home"></i> Home</div>
          <div className="nav-item"><i className="icon-calendar"></i> Calendar</div>
          <div className="nav-item"><i className="icon-diary"></i> Diary</div>
          <div className="nav-item"><i className="icon-support"></i> Support</div>
          <div className="nav-item"><i className="icon-chat"></i> AI chat</div>
        </nav>
      </aside>

      <main className="main-content">
        {/* Top Header */}
        <header className="dash-header">
          <div className="mobile-logo">
            <img src="/logo-heart.png" alt="Logo" />
            <span>Thrivelab</span>
          </div>
          <div className="user-profile">
            <span>Johnny</span>
            <img src="/avatar.png" alt="User" className="avatar" />
          </div>
        </header>

        <div className="scroll-content">
          {/* Emergency/Action Card */}
          <div className="card emergency-card">
            <div className="card-info">
              <h3><span className="alert-icon">!</span> Need to calm down?</h3>
              <p>Try our breathing exercises to calm yourself down immediately</p>
            </div>
            <span className="arrow">›</span>
          </div>

          {/* Quick Check-in Card */}
          <div className="card checkin-card">
            <div className="card-info">
              <span className="label">❤️ Quick Check-in</span>
              <h2>How I feel</h2>
              <p>Check your emotional state</p>
            </div>
            <span className="arrow white-arrow">›</span>
          </div>

          {/* Small Stats Grid */}
          <div className="stats-grid">
            <div className="stat-box">
              <img src="/insights-icon.png" alt="Insights" />
              <p>View insights</p>
              <h4>Insights</h4>
            </div>
            <div className="stat-box">
              <img src="/streak-icon.png" alt="Streak" />
              <p>10 days</p>
              <h4>Streak</h4>
            </div>
          </div>

          {/* Chat with Zuma Card */}
          <div className="card chat-card">
            <img src="/zuma-head.png" alt="Zuma" className="zuma-img" />
            <div className="card-info">
              <h3>Chat with Zuma</h3>
              <p>Share your thoughts with your AI friend</p>
            </div>
          </div>

          {/* Coming Soon Card */}
          <div className="card coming-soon-card">
            <div className="coming-soon-header">
              <h2>Coming Soon</h2>
              <h3>Grow with Zuma</h3>
            </div>
            <div className="coming-soon-body">
              <img src="/zuma-full.png" alt="Zuma" />
              <p>Your emotional companion is arriving soon. Grow together through daily check-ins</p>
            </div>
          </div>

          {/* Today's Record Section */}
          <section className="record-section">
            <h2>Today's record</h2>
            <div className="record-card">
              <div className="mood-emoji">😑</div>
              <div className="record-info">
                <h4>Tired</h4>
                <span>2:21PM</span>
                <p>Stress level : Moderate</p>
                <div className="stress-dots">
                  <span className="dot filled"></span>
                  <span className="dot filled"></span>
                  <span className="dot filled"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Bottom Tab Bar - Mobile only */}
        <nav className="bottom-nav">
          <div className="tab active"><div className="tab-icon">🏠</div><span>Home</span></div>
          <div className="tab"><div className="tab-icon">📅</div><span>Calendar</span></div>
          <div className="tab"><div className="tab-icon">📓</div><span>Diary</span></div>
          <div className="tab"><div className="tab-icon">✨</div><span>Support</span></div>
          <div className="tab"><div className="tab-icon">💬</div><span>AI chat</span></div>
        </nav>
      </main>
    </div>
  );
};

export default Dashboard;