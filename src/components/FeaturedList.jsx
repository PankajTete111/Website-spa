import React from 'react';
import FeaturedCard from './FeaturedCard';
import './FeaturedList.css';
import images from '../assets/images';

const mobileImages = [
  images.mobview,
  images.mobview2,
  images.mobview3,
  images.mobview4,
  images.mobview5,
];

const isMobile = () => window.innerWidth <= 600;

const FeaturedList = ({ items }) => {
  const useMobile = isMobile();
  const displayItems = useMobile ? items.slice(0, 5) : items;
  return (
    <section className="featured-section">
      <div className="featured-header">
        <h3>Featured</h3>
        <a href="#" className="view-all">View all →</a>
      </div>
      <div className="featured-list">
        {displayItems.map((item, idx) => (
          <FeaturedCard
            key={idx}
            {...item}
            image={useMobile && mobileImages[idx] ? mobileImages[idx] : item.image}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedList; 