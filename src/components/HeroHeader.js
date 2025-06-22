import React, { useState } from 'react';
import './HeroHeader.css';
import shofferherologo from './assets/shoffrherologo.svg';
import shoffricon from './assets/shoffricon.png';
import { Link } from 'react-router-dom';

export default function HeroHeader() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const selectCity = (city) => {
    setSelectedCity(city);
    setIsDropdownOpen(false);
  };

  return (
    <div className="hero-wrapper">
      {/* Header */}
      <header className="hero-header">
        <div className="left-icon">
          <img src={shoffricon} alt="Shoffr Icon" />
        </div>
        <div className="right-controls">
          <div className="city-select" onClick={toggleDropdown} tabIndex={0} role="button" aria-haspopup="listbox" aria-expanded={isDropdownOpen}>
            {selectedCity || 'Select City'} <span className="arrow">▼</span>
            {isDropdownOpen && (
              <ul className="city-dropdown" role="listbox">
                <li onClick={() => selectCity('Hyderabad')} role="option" tabIndex={-1}>Hyderabad</li>
                <li onClick={() => selectCity('Mumbai')} role="option" tabIndex={-1}>Mumbai</li>
              </ul>
            )}
          </div>
          <Link to="/login" className="login-btn">Log In</Link>
        </div>
      </header>

      {/* Hero content */}
      <div className="hero-content">
        <img src={shofferherologo} alt="Shoffr Logo" className="hero-logo" />
        <p className="hero-tagline">THE GOLD STANDARD OF RIDES</p>
      </div>
    </div>
  );
}
