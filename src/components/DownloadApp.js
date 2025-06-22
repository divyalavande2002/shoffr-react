import React from 'react';
import './DownloadApp.css';
import gettheapp from './assets/gettheapp.png';
import applestore from './assets/applestore.svg';
import googleplay from './assets/googleplay.svg';
import bicon from './assets/bicon.png';


const DownloadApp = () => {
  return (
    <section className="download-app">
      <div className="download-app-container">
        <div className="download-left">
          <div className="app-buttons">
          <img  src={bicon} alt="Shoffr Icon" className="app-icon" />
          <h2>Download the app</h2>
          </div>
          <div className="app-buttons">
            <button className="store-btn" 
             onClick={() => window.open('https://apps.apple.com/in/app/shoffr-premium-ev-cabs/id6477756888')}>
              <img src={applestore} alt="applestore" />
              Apple Store
            </button>
            <button className="store-btn"
            onClick={() => window.open('https://play.google.com/store/apps/details?id=com.shoffrdriverapp')}
            >
              <img src={googleplay} alt="googleplay"/> Google Play
            </button>
          </div>
        </div>
        <div className="download-right">
          <img src={gettheapp} alt="Shoffr App Preview" className="phone-img" />
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
