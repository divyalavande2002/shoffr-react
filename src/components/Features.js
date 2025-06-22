import React from 'react';
import './Features.css';

export default function Features() {
  const features = [
    {
      title: 'Premium Service',
      description:
        'Fleet of electric BYD e6 cars and polite drivers who take care of guests.',
      details: [
        { icon: '➕', text: 'Water, tissues included' },
        { icon: '🧳', text: 'Seats 4 adults, fits 6 bags' },
      ],
    },
    {
      title: 'We Empathise',
      description:
        'Empathetic human support on WhatsApp, calls, and e-mail. No bots, no spam.',
      icons: ['🔗', '👤', '📞', '🔗'], // placeholder emojis for visual
    },
    {
      title: 'Pet Friendly',
      description:
        'The purr-fect choice for hassle free travel with your furry family members.',
      icons: ['🐾', '🐶', '🐾', '🐱'],
    },
  ];

  return (
    <section className="delight-section">
      <h2 className="delight-heading">Experience Delight</h2>
      <div className="delight-cards">
        {features.map((item, index) => (
          <div className="delight-card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>

            {item.details && (
              <div className="delight-details">
                {item.details.map((d, i) => (
                  <div className="detail-item" key={i}>
                    <span className="detail-icon">{d.icon}</span>
                    <span className="detail-text">{d.text}</span>
                  </div>
                ))}
              </div>
            )}

            {item.icons && (
              <div className="delight-icons">
                {item.icons.map((icon, i) => (
                  <span className="icon-circle" key={i}>
                    {icon}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="faq-button-container"
      onClick={() => window.open('https://shoffr.in/faq', '_self')}
      >
        <button className="faq-button">Read The FAQs</button>
      </div>
    </section>
  );
}
