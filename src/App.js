import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import LocationSearchBar from './components/LocationSearchBar';
import CategoryCard from './components/CategoryCard';
import PromoBanner from './components/PromoBanner';
import FeaturedList from './components/FeaturedList';
import UpcomingAppointment from './components/UpcomingAppointment';
import BottomNav from './components/BottomNav';
import MobileStatusBar from './components/MobileStatusBar';
import images from './assets/images';

const categories = [
  { iconSrc: images.Saloon, label: 'Salon' },
  { iconSrc: images.Spa, label: 'SPA' },
  { iconSrc: images.Clinic, label: 'Clinic' },
];

const featuredItems = [
  {
    image: images.Card1,
    title: 'Renew Day Spa',
    location: '1208, Spline Arcade, Flat No 102 1st Floor',
    rating: 4.5,
    distance: 3.5,
    type: 'Unisex',
    offer: 'Flat 10% Off above value of 200',
  },
  {
    image: images.Card2,
    title: 'Sugar Beauty & Spa',
    location: '1208, Spline Arcade, Flat No 102 1st Floor',
    rating: 4.5,
    distance: 3.5,
    type: 'Unisex',
    offer: 'Flat 10% Off above value of 200',
  },
  {
    image: images.Card3,
    title: 'Aroma Spa & Wellness',
    location: '1208, Spline Arcade, Flat No 102 1st Floor',
    rating: 4.5,
    distance: 3.5,
    type: 'Unisex',
    offer: 'Flat 10% Off above value of 200',
  },
  {
    image: images.Card4,
    title: 'Bodhi Wellness | Habsi...',
    location: '1208, Spline Arcade, Flat No 102 1st Floor',
    rating: 4.5,
    distance: 3.5,
    type: 'Unisex',
    offer: 'Flat 10% Off above value of 200',
  },
  {
    image: images.Card5,
    title: 'Maya Spa, Kumarakom',
    location: '1208, Spline Arcade, Flat No 102 1st Floor',
    rating: 4.5,
    distance: 3.5,
    type: 'Unisex',
    offer: 'Flat 10% Off above value of 200',
  },
  {
    image: images.Card6,
    title: 'Golden Palms Hotels & S...',
    location: '1208, Spline Arcade, Flat No 102 1st Floor',
    rating: 4.5,
    distance: 3.5,
    type: 'Unisex',
    offer: 'Flat 10% Off above value of 200',
  },
  {
    image: images.Card7,
    title: 'Kairali Ayurvedic Healing...',
    location: '1208, Spline Arcade, Flat No 102 1st Floor',
    rating: 4.5,
    distance: 3.5,
    type: 'Unisex',
    offer: 'Flat 10% Off above value of 200',
  },
  {
    image: images.Card8,
    title: 'Jiva Spa, Vivanta By Taj',
    location: '1208, Spline Arcade, Flat No 102 1st Floor',
    rating: 4.5,
    distance: 3.5,
    type: 'Unisex',
    offer: 'Flat 10% Off above value of 200',
  },
  {
    image: images.Card9,
    title: 'Golkonda Resorts and Spa',
    location: '1208, Spline Arcade, Flat No 102 1st Floor',
    rating: 4.5,
    distance: 3.5,
    type: 'Unisex',
    offer: 'Flat 10% Off above value of 200',
  },
  {
    image: images.Card10,
    title: 'Banasura Hill Resort',
    location: '1208, Spline Arcade, Flat No 102 1st Floor',
    rating: 4.5,
    distance: 3.5,
    type: 'Unisex',
    offer: 'Flat 10% Off above value of 200',
  },
  {
    image: images.Card11,
    title: "Joy's Spa, Le Pondy",
    location: '1208, Spline Arcade, Flat No 102 1st Floor',
    rating: 4.5,
    distance: 3.5,
    type: 'Unisex',
    offer: 'Flat 10% Off above value of 200',
  },
  {
    image: images.Card12,
    title: 'Park Hyatt Resort and Spa',
    location: '1208, Spline Arcade, Flat No 102 1st Floor',
    rating: 4.5,
    distance: 3.5,
    type: 'Unisex',
    offer: 'Flat 10% Off above value of 200',
  },
];

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [location, setLocation] = useState('');

  const filteredItems = featuredItems.filter(item =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="App">
      <MobileStatusBar />
      <Header />
      <div className="main-content">
        <LocationSearchBar
          searchValue={searchValue}
          onSearchChange={setSearchValue}
          location={location}
          onLocationChange={setLocation}
        />
        <div className="categories">
          {categories.map((cat, idx) => (
            <CategoryCard key={idx} iconSrc={cat.iconSrc} label={cat.label} />
          ))}
        </div>
        <PromoBanner />
        <UpcomingAppointment />
        <FeaturedList items={filteredItems} />
      </div>
      <BottomNav />
    </div>
  );
}

export default App;
