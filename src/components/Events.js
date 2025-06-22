import React from 'react';
import './Events.css';
import shoffereventlogo from './assets/shoffreventlogo.png'

export default function EventsSection() {
  return (
    <section className="events-section">
      <div className="events-overlay">
        <img
          src={shoffereventlogo}
          alt="Shoffr for Events"
          className="events-logo"
        />

        <div className="event-stats">
          <div className="stat-box">
            <h2>50+</h2>
            <p>Weddings Served</p>
          </div>
          <div className="stat-box">
            <h2>25+</h2>
            <p>Corporate Events</p>
          </div>
          <div className="stat-box">
            <h2>30+</h2>
            <p>Partner Event Planners</p>
          </div>
        </div>

        <button className="explore-btn"
        onClick={() => window.open('https://shoffr.in/events', '_self')}>Explore More</button>
      </div>
    </section>
  );
}
