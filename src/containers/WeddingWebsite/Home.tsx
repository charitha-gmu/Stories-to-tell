import React from "react";
import { InvitationWebsiteHomePage } from "assets/images";
import moment from "moment";
import { getRandomWithProbability } from "resources/utils";

type WeddingWebsiteHomeProps = {
  date: string;
  location: string;
  userData: any;
};

const WeddingInvitationHome = (props: WeddingWebsiteHomeProps) => {
  const { date, location, userData } = props;

  const formattedDate = moment(userData?.weddingDate || Date.now).format(
    "dddd, MMMM D, YYYY"
  );

  return (
    <>
      <div className="event-photo-container">
        <img
          src={getRandomWithProbability(InvitationWebsiteHomePage, "")}
          alt="home"
        ></img>
      </div>
      <div className="date-container">{userData ? formattedDate : date}</div>
      <div className="location-container">
        {userData ? userData?.location : location}
      </div>
      <div className="tagline-container">
        We can't wait to share our special day with you. <br />
        Help us capture our wedding with Joy.
      </div>
    </>
  );
};

export default WeddingInvitationHome;
