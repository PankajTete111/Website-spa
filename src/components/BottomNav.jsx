import React from 'react';
import './BottomNav.css';
import images from '../assets/images';

const BottomNav = () => (
  <nav className="bottom-nav">
    <a href="#" className="nav-item">
      <img src={images.Home} alt="Home" />
      <span>Home</span>
    </a>
    <a href="#" className="nav-item">
      <img src={images.reel} alt="Reels" />
      <span>Reels</span>
    </a>
    <a href="#" className="nav-item qr-item">
      <div className="qr-circle">
        <img src={images.QR} alt="QR" />
      </div>
      <span>QR</span>
    </a>
    <a href="#" className="nav-item">
      <img src={images.History} alt="History" />
      <span>History</span>
    </a>
    <a href="#" className="nav-item">
      <img src={images.avatar} alt="Profile" className="avatar" />
      <span>Profile</span>
    </a>
  </nav>
);

export default BottomNav; 