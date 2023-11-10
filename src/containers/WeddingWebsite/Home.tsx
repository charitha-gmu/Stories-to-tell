import React, { useState } from "react";
import { InvitationWebsiteHomePage } from "assets/images";
import moment from "moment";

type WeddingWebsiteHomeProps = {
  date: string;
  location: string;
  userData: any;
};

const WeddingInvitationHome = (props: WeddingWebsiteHomeProps) => {
  const { date, location, userData } = props;
  const [zoom, setZoom] = useState(false);

  const formattedDate = moment(userData?.weddingDate || Date.now).format(
    "dddd, MMMM D, YYYY"
  );

  return (
    <>
      <div className="event-photo-container">
        {zoom ? (
          <img
            src={InvitationWebsiteHomePage}
            alt="home"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              height: "100%",
              width: "100%",
              objectFit: "cover",
              cursor: "zoom-out",
            }}
            onClick={() => setZoom(false)}
          ></img>
        ) : (
          <img
            src={InvitationWebsiteHomePage}
            alt="home"
            onClick={() => setZoom(true)}
            style={{
              cursor: "zoom-in",
            }}
          ></img>
        )}
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
