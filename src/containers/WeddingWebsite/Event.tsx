import { InvitationEvent } from "assets/images";
import React from "react";

const WeddingInvitationEvent = () => {
  return (
    <>
      <div className="event-photo-container">
        <img src={InvitationEvent} alt="home" className="image"></img>
      </div>
      <div className="event-details-container">
        <div className="event-header-container">ENGAGEMENT</div>
        <div className="event-date-container">Monday, September 4, 2023</div>
        <div className="event-date-container">6:00 PM</div>
        <div className="event-location-container">
          Neel Kamal at Royal Albert's Palace
        </div>
        {/* <div className="event-attire-container">Attire: Floral</div> */}
      </div>

      <div className="event-details-container">
        <div className="event-header-container">Bridal/Groom Ceremony</div>
        <div className="event-date-container">Wednesday, September 6, 2023</div>
        <div className="event-date-container">10:00 AM</div>
        <div className="event-location-container">
          6 Brookside Rd, Edison, NJ, 08817
        </div>
        {/* <div className="event-attire-container">
          Attire: Traditional Half Saree/Kurta
        </div> */}
      </div>

      <div className="event-details-container">
        <div className="event-header-container">Wedding</div>
        <div className="event-date-container">Thursday, September 7, 2023</div>
        <div className="event-date-container">9:00 AM</div>
        <div className="event-location-container">
          The Ballroom at Royal Albert's Palace
        </div>
        {/* <div className="event-attire-container">Attire: Floral</div> */}
      </div>

      <div className="event-details-container last-div">
        <div className="event-header-container">Cocktail</div>
        <div className="event-date-container">Friday, September 8, 2023</div>
        <div className="event-date-container">6:00 PM</div>
        <div className="event-location-container">
          The Plaza at Royal Albert's Palace
        </div>
        {/* <div className="event-attire-container">Attire: Floral</div> */}
      </div>
    </>
  );
};

export default WeddingInvitationEvent;
