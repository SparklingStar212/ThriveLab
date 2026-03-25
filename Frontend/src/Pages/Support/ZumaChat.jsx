import React, { useState } from 'react';
import './ZumaChat.css';

const ZumaChat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const newMessages = [...messages, { id: Date.now(), text: input, sender: 'user' }];
    setMessages(newMessages);
    setInput("");

    // Simulate Zuma response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        text: "That sounds heavy... sometimes exhaustion isn’t just physical. Has something been sitting in your mind lately?",
        sender: 'zuma'
      }]);
    }, 1000);
  };

  return (
    <div className="zuma-page">
      {/* Slide-out Sidebar Overlay */}
      <aside className={`chat-sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className="close-sidebar" onClick={() => setIsSidebarOpen(false)}>✕</button>
        <div className="new-chat-btn">
          <span>📝</span> New Chat
        </div>
        <div className="history-section">
          <p className="history-label">Your Chats</p>
          <ul className="history-list">
            <li>Tiredness</li>
            <li>Sleep</li>
          <li>Good Day</li>
          <li>Work Issues</li>
        </ul>
        </div>
      </aside>

      <main className="zuma-main">
        {/* Header Nav */}
        <header className="zuma-header">
          <button className="back-arrow">‹</button>
          <div className="header-right">
            <span>Johnny</span>
            <img src="/avatar.png" className="z-avatar" alt="User" />
          </div>
        </header>

        {/* Chat Body */}
        <div className="zuma-body">
          <button className="menu-toggle" onClick={() => setIsSidebarOpen(true)}>☰</button>

          {messages.length === 0 ? (
            <div className="zuma-intro">
              <p className="greeting">Hi Johnny 👋</p>
              <h1 className="prompt">What Happened Today?</h1>
              <div className="zuma-character">
                <img src="/zuma-full.png" alt="Zuma" />
              </div>
            </div>
          ) : (
            <div className="message-container">
              {messages.map((msg) => (
                <div key={msg.id} className={`msg-wrapper ${msg.sender}`}>
                  {msg.sender === 'zuma' && <img src="/zuma-head.png" className="mini-zuma" alt="" />}
                  <div className="msg-bubble">{msg.text}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Input Bar */}
        <footer className="zuma-footer">
          <div className="input-pill">
            <input
              type="text"
              placeholder="Type here"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()} />
            <button className="mic-btn">🎙️</button>
          </div>
        </footer>
      </main>
</div >
);
};

export default ZumaChat;