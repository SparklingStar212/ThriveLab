import React, { useState } from 'react';
import './ZumaChat.css';

const ZumaChat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

  };

  return (
    <div className="zuma-page">
      {/* Slide-out Sidebar Overlay */}
      <div className={`chat-sidebar ${isSidebarOpen ? 'open' : ''}`}>
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
      </div>
    </div>
  );
};

export default ZumaChat;