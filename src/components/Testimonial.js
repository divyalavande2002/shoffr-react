import React from 'react';
import './Testimonial.css';
import xicon from './assets/xicon.png'
import guest1 from './assets/guest1.png'
import avatar1 from './assets/avatar1.png'
import guest2 from './assets/guest2.png'
import avatar2 from './assets/avatar2.png'
import guest3 from './assets/guest3.png'
import avatar3 from './assets/avatar3.png'
import guest4 from './assets/guest4.png'
import avatar4 from './assets/avatar4.png'


const guests = [
  {
    name: 'Kryptosaurus.eth',
    handle: '@Saurab9290',
    text: 'Zooming to Bangalore airport in style with a spacious and premium @BYDCompany EV and a super friendly driver, all booked via the @shoffr_in app!',
    image: avatar1,
    avatar: guest1,
  },
  {
    name: 'Satish Suggala',
    handle: '@SatishSuggala',
    text: 'Folks flying to/from Blr, try @shoffr_in for your next ride.\n\nAll electric fleet, polite drivers & stellar in-cab experience.\n\nTop job @kislayverma and team',
    image: avatar2,
    avatar: guest2,
  },
  {
    name: 'Chitra Singh',
    handle: '@chit_raa',
    text: 'The @shoffr_in cab experience today to the airport has been the best I’ve had in years! The promise UberBlack started with. Spacious Xuv, working AC, courteous driver who wasn’t on call with anyone, something 99% #blr cab drivers are infamous for!\n\nExcellent driving, affordable cabs.',
    image: avatar3,
    avatar: guest3,
  },
  {
    name: 'IncEnd1ary',
    handle: '@PabloEkshobaar',
    text: 'Absolutely brilliant service by @shoffr_in Effortless booking, impeccable car !!\n\nAs I was carrying Gus, my pup, absolutely no hassles & absolutely stress free time. The car accidentally broke down, they sent another car within 15 mins!',
    image: avatar4,
    avatar: guest4,
  },
];

export default function LoveFromGuests() {
  return (
   <section className="love-section">
  <h2 className="love-heading">Love From Guests</h2>
  <div className="love-cards-wrapper">
    <div className="love-cards">
      {[...guests, ...guests].map((guest, i) => (
        <div className="love-card" key={i}>
          <div className="love-header">
            <img src={guest.avatar} alt={guest.name} className="guest-avatar" />
            <div className="guest-info">
              <h4>{guest.name}</h4>
              <span>{guest.handle}</span>
            </div>
            <div className="x-icon"><img src={xicon} alt="X" /></div>
          </div>
          <p className="guest-text">{guest.text}</p>
          <img src={guest.image} alt="Guest Post" className="guest-image" />
        </div>
      ))}
    </div>
  </div>
</section>

  );
}
