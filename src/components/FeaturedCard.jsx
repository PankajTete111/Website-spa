import React from 'react';
import './FeaturedCard.css';
import images from '../assets/images';

const FeaturedCard = ({ image, title, location, rating, distance, type, offer }) => (
  <div className="featured-card">
    <img src={image} alt={title} />
    <div className="card-content">
      <div className="card-title-row">
        <h4>{title}</h4>
        <img src={images.Like} alt="Like" className="like-icon" />
      </div>
      <p className="card-location">{location}</p>
      <div className="card-meta">
        <span>⭐ {rating}</span>
        <span>{distance} km</span>
        <span>{type}</span>
      </div>
    </div>
  </div>
);

export default FeaturedCard; 