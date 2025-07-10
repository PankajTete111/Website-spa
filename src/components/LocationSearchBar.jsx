import React, { useState, useEffect } from 'react';
import './LocationSearchBar.css';
import images from '../assets/images';

const dummyLocations = [
  '1208, Spline Arcade, Flat no 102...',
  'Banjara Hills, Hyderabad',
  'Jubilee Hills, Hyderabad',
];

const LocationSearchBar = ({ searchValue, onSearchChange, location, onLocationChange }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdown = (e) => {
    e.stopPropagation();
    setDropdownOpen((open) => !open);
  };
  const handleLocationSelect = (loc) => {
    setDropdownOpen(false);
    if (onLocationChange) onLocationChange(loc);
  };

  useEffect(() => {
    if (!dropdownOpen) return;
    const close = () => setDropdownOpen(false);
    window.addEventListener('click', close);
    return () => window.removeEventListener('click', close);
  }, [dropdownOpen]);

  return (
    <div className="location-search-bar">
      <div className="desktop-location-input">
        <img src={images.LocationDesktop} alt="Location" className="location-icon" />
        <span className="location-address">{location || dummyLocations[0]}</span>
        <span
          className="location-dropdown"
          onClick={handleDropdown}
          style={{ cursor: 'pointer' }}
        >
          ▼
        </span>
        {dropdownOpen && (
          <div className="location-dropdown-list">
            {dummyLocations.map((loc, idx) => (
              <div
                key={idx}
                className="location-dropdown-item"
                onMouseDown={() => handleLocationSelect(loc)}
              >
                {loc}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="search-input-wrapper">
        <img src={images.Search} alt="Search" className="search-icon" />
        <input
          className="search-input"
          type="text"
          placeholder="Search Spa, Services..."
          value={searchValue}
          onChange={e => onSearchChange && onSearchChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default LocationSearchBar; 