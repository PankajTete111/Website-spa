import React from 'react';
import './UpcomingAppointment.css';
import images from '../assets/images';

const appointments = [
  {
    img: images.mobview,
    name: 'Oasis Spa Haven',
    time: '11:30 AM',
    location: 'Lakeside Retreat, Madhapur',
    date: '15 June 22',
    services: 'Haircut, Shaving, Body Massage',
    otp: '1234',
    timer: '01 Hr 30 Mins',
  },
  {
    img: images.mobview2,
    name: 'Mystical Mantra Spa',
    time: '12:00 PM',
    location: 'Green Valley, Hitech City',
    date: '16 June 22',
    services: 'Facial, Massage',
    otp: '5678',
    timer: '02 Hr 10 Mins',
  },
  {
    img: images.mobview3,
    name: 'Bodhi Retreat Spa',
    time: '01:15 PM',
    location: 'Riverfront, Jubilee Hills',
    date: '17 June 22',
    services: 'Pedicure, Manicure',
    otp: '9101',
    timer: '00 Hr 45 Mins',
  },
];

const UpcomingAppointment = () => (
  <section className="upcoming-appointment">
    <h3 className="upcoming-title">Upcoming Appointment</h3>
    <div className="appointment-scroll">
      {appointments.map((a, idx) => (
        <div className="appointment-card" key={idx}>
          <img src={a.img} alt={a.name} className="appointment-img" />
          <div className="appointment-details">
            <div className="appointment-header">
              <span className="spa-name">{a.name}</span>
              <span className="appointment-time">🕒 {a.time}</span>
            </div>
            <div className="appointment-meta">
              <span className="location">{a.location}</span>
              <span className="date">{a.date}</span>
            </div>
            <div className="services">{a.services}</div>
            <div className="otp">Otp : <b>{a.otp}</b></div>
          </div>
          <div className="appointment-actions">
            <button className="pay-now">Pay Now</button>
            <div className="timer">{a.timer}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default UpcomingAppointment; 