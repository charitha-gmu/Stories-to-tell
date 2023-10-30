import React from "react";
import { Location } from "assets/icons";
import { InvitationLocation } from "assets/images";
import GoogleMap from "components/MapView";

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
            href="https://www.google.com/maps/place/1050+King+Georges+Post+Rd,+Edison,+NJ+08837/@40.5233425,-74.324997,17z/data=!3m1!4b1!4m6!3m5!1s0x89c3c9fd3ca9ee43:0x6faac4a878053c0a!8m2!3d40.5233385!4d-74.3224221!16s%2Fg%2F11b8v4j8hx?entry=ttu"
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
            href="https://www.google.com/maps/place/6+Brookside+Rd,+Edison,+NJ+08817/@40.5122038,-74.3756405,17z/data=!3m1!4b1!4m6!3m5!1s0x89c3c84783e55bbf:0x204edbfdb7050d01!8m2!3d40.5121998!4d-74.3730656!16s%2Fg%2F11c145yfbk?entry=ttu"
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
            href="https://www.google.com/maps/place/10+Appleman+Rd,+Somerset,+NJ+08873/@40.5015305,-74.4853376,17z/data=!3m1!4b1!4m6!3m5!1s0x89c3c6db92d98a83:0xc7a1ecc0b5be4457!8m2!3d40.5015264!4d-74.4827627!16s%2Fg%2F11c5f60vfk?entry=ttu"
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
            href="https://www.google.com/maps/place/1050+King+Georges+Post+Rd,+Edison,+NJ+08837/@40.5233425,-74.324997,17z/data=!3m1!4b1!4m6!3m5!1s0x89c3c9fd3ca9ee43:0x6faac4a878053c0a!8m2!3d40.5233385!4d-74.3224221!16s%2Fg%2F11b8v4j8hx?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
          >
            1050 King Georges Post Rd, Fords, NJ, 08863, US
          </a>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "500px",
            margin: "25px",
          }}
          onClick={() => {
            const url = `https://www.google.com/maps/search/?api=1&query=38.852276,-77.3224375`;
            window.open(url, "_blank");
          }}
        >
          <GoogleMap />
        </div>
      </div>
    </>
  );
};

export default WeddingInvitationLocation;
