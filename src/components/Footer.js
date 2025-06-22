import React from 'react';
import './Footer.css';
import linkedin from './assets/linkedIn.svg'
import instagram from './assets/instagram.svg'
import x from './assets/x.svg'
import shofferherologo from './assets/shoffrherologo.svg'



export default function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-container">

        {/* Row 1: Logo + Address */}
        <div className="footer-row footer-logo-address">
          <img
            src={shofferherologo}
            alt="Shoffr Logo"
            className="footer-logo-img"
          />
          <p className="footer-address">
            4th Floor, Janardhan Towers, 133/2 Residency Road,<br />
            Bangalore 560025
          </p>
        </div>

        {/* Row 2: Columns */}
        <div className="footer-row footer-columns">
          {/* Column 1: Company */}
          <div className="footer-column">
            <h4>COMPANY</h4>
            <a href="https://shoffr.in/about">About Us</a>
            <a href="https://shoffr.in/privacyPolicy">Privacy & Policy</a>
            <a href="https://shoffr.in/cancellationPolicy">Cancellation & Refund</a>
            <a href="https://shoffr.in/tnc?q=electronic-media">Terms & Conditions</a>
          </div>

          {/* Column 2: Services */}
          <div className="footer-column">
            <h4>SERVICES</h4>
            <a href="https://shoffr.in/booking?operationType=airport-transfers">Airport Transfers</a>
            <a href="https://shoffr.in/booking?operationType=city-rentals">City Rentals</a>
            <a href="https://shoffr.in/booking?operationType=outstation">Outstation Trips</a>
            <a href="https://shoffr.in/events">Event Partnerships</a>
          </div>

          {/* Column 3: Contact + Social */}
          <div className="footer-column">
            <h4>CONTACT US ON</h4>
            <a href="mailto:hello@shoffr.in">hello@shoffr.in</a>
            <a href='https://api.whatsapp.com/send?phone=917065232323'>WhatsApp us</a>
          </div>
         
          <div className="footer-column">
          <h4>EXPLORE OUR WORLD</h4>
            <div className="social-icons">
              <a href="https://x.com/shoffr" target="_blank" rel="noreferrer">
                <img src={x} alt="X" />
              </a>
              <a href="https://instagram.com/shoffr" target="_blank" rel="noreferrer">
                <img src={instagram} alt="Instagram" />
              </a>
              <a href="https://linkedin.com/company/shoffr" target="_blank" rel="noreferrer">
                <img src={linkedin} alt="LinkedIn" />
              </a>
            </div>
          </div>  
        </div>
      </div>

      {/* Row 3: Bottom */}
      <div className="footer-bottom">
        <p> 2025 © All rights reserved.</p>
      </div>
    </footer>
  );
}
