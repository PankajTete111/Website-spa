import React from 'react';
import './CategoryCard.css';

const CategoryCard = ({ iconSrc, label }) => (
  <div className="category-card">
    <div className="category-icon">
      <img src={iconSrc} alt={label + ' icon'} style={{ width: 48, height: 48 }} />
    </div>
    <div className="category-label">{label}</div>
  </div>
);

export default CategoryCard; 