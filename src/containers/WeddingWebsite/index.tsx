import React, { useState } from "react";
import WeddingInvitationHome from "./Home";
import WeddingInvitationStory from "./Story";
import WeddingInvitationEvent from "./Event";
import WeddingInvitationLocation from "./Location";

type WeddingWebsiteProps = {
  brideName: string;
  groomName: string;
  date: string;
  location: string;
  children?: JSX.Element | React.ReactNode;
};

const navBarTypes = {
  home: "HOME",
  story: "STORY",
  event: "EVENT",
  location: "LOCATION",
};

const WeddingWebsite = (props: WeddingWebsiteProps) => {
  const { brideName, groomName, date, location } = props;

  const [activeScreen, setActiveScreen] = useState<String>(navBarTypes.home);

  const render_content = () => {
    switch (activeScreen) {
      case navBarTypes.home:
        return <WeddingInvitationHome date={date} location={location} />;
      case navBarTypes.story:
        return <WeddingInvitationStory />;
      case navBarTypes.event:
        return <WeddingInvitationEvent />;
      case navBarTypes.location:
        return <WeddingInvitationLocation />;
    }
  };

  return (
    <div className="website-container">
      <div className="website-content">
        <div className="header">{`${brideName} & ${groomName}`}</div>
        <div className="nav-bar"></div>

        <>{render_content()}</>
      </div>
    </div>
  );
};

export default WeddingWebsite;
