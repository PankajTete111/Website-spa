import React from 'react';
import './Header.css';
import images from '../assets/images';
const Header = () => (
  <header className="header">
    {/* Desktop/Tablet View */}
    <div className="header-desktop">
      <div className="logo-placeholder"></div>
      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#">Search</a>
        <a href="#">Reels</a>
        <a href="#">Cart</a>
        <a href="#">Login</a>
      </nav>
    </div>
    {/* Mobile View */}
    <div className="header-mobile">
      <div className="mobile-location">
        <img src={images.LocationDesktop} alt="Location" className="icon" />
        <span className="location-text">Madhapur</span>
        <span className="dropdown-arrow">▼</span>
      </div>
      <div className="bell-icon">
        <img src={images.bell} alt="Notifications" className="icon" />
      </div>
    </div>
  </header>
);

export default Header; 