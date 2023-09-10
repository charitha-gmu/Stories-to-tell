import { InvitationWebsiteHomePage } from "assets/images";
import React from "react";

type WeddingWebsiteHomeProps = {
  date: string;
  location: string;
};

const WeddingInvitationHome = (props: WeddingWebsiteHomeProps) => {
  const { date, location } = props;
  return (
    <>
      <div className="event-photo-container">
        <img src={InvitationWebsiteHomePage} alt="home"></img>
      </div>
      <div className="date-container">{date}</div>
      <div className="location-container">{location}</div>
      <div className="tagline-container">
        We can't wait to share our special day with you. <br />
        Help us capture our wedding with Joy.
      </div>
    </>
  );
};

export default WeddingInvitationHome;
