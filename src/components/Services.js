import React, { useState } from 'react';
import './Services.css';

export default function Services() {
  const services = [
    { label: 'Hourly Rentals', icon: '🕒' },
    { label: 'Airport Transfers', icon: '✈️' },
    { label: 'Outstation Trips', icon: '🧳' },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="service-tabs-section">
      <div className="service-tabs-container">
        {services.map((service, idx) => (
          <button
            key={idx}
            className={`service-tab${idx === activeIndex ? ' active' : ''}`}
            onClick={() => setActiveIndex(idx)}
          >
            <span className="icon">{service.icon}</span>
            <span>{service.label}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
