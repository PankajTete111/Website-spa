import React, { useEffect, useState } from 'react';
import images from '../assets/images';
import './MobileStatusBar.css';

const MobileStatusBar = () => {
  const [time, setTime] = useState(() => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mobile-status-bar">
      <span className="status-time">{time}</span>
      <div className="status-icons">
        <img src={images.MobileSignal} alt="Signal" />
        <img src={images.WIFI} alt="WiFi" />
        <img src={images.Battery} alt="Battery" />
      </div>
    </div>
  );
};

export default MobileStatusBar; 