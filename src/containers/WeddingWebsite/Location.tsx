import { Location } from "assets/icons";
import { InvitationLocation } from "assets/images";
import React from "react";

const WeddingInvitationLocation = () => {
  return (
    <>
      <div className="event-photo-container">
        <img src={InvitationLocation} alt="home" className="image"></img>
      </div>
      <div className="event-details-container">
        <div className="event-header-container">ENGAGEMENT</div>
        <div className="event-location-container">
          Neel Kamal at Royal Albert's Palace
        </div>
        <div className="location-flex">
          <img src={Location} alt="location" className="location-icon"></img>
          <a
            className="event-location-link"
            href="https://twitter.com/X"
            target="_blank"
            rel="noopener noreferrer"
          >
            1050 King Georges Post Rd, Fords, NJ, 08863, US{" "}
          </a>
        </div>
      </div>
      <div className="event-details-container">
        <div className="event-header-container">Bridal/Groom Ceremony</div>
        <div className="event-location-container">The Ballroom</div>
        <div className="location-flex">
          <img src={Location} alt="location" className="location-icon"></img>

          <a
            className="event-location-link"
            href="https://twitter.com/X"
            target="_blank"
            rel="noopener noreferrer"
          >
            6 Brookside Rd, Edison, NJ, 08817
          </a>
        </div>
      </div>
      <div className="event-details-container">
        <div className="event-header-container">Wedding</div>
        <div className="event-location-container">The High Palace</div>
        <div className="location-flex">
          <img src={Location} alt="location" className="location-icon"></img>
          <a
            className="event-location-link"
            href="https://twitter.com/X"
            target="_blank"
            rel="noopener noreferrer"
          >
            10 Appleman Rd, Franklin Township, NJ, 08863, US
          </a>
        </div>
      </div>
      <div className="event-details-container last-div">
        <div className="event-header-container">Cocktail</div>
        <div className="event-location-container">
          The Plaza at Royal Albert's Palace
        </div>
        <div className="location-flex">
          <img src={Location} alt="location" className="location-icon"></img>
          <a
            className="event-location-link"
            href="https://twitter.com/X"
            target="_blank"
            rel="noopener noreferrer"
          >
            1050 King Georges Post Rd, Fords, NJ, 08863, US
          </a>
        </div>
      </div>
      //TODO Map Integration
    </>
  );
};

export default WeddingInvitationLocation;
