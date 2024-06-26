import React, { useState, useEffect } from "react";
import WeddingInvitationHome from "./Home";
import WeddingInvitationStory from "./Story";
import WeddingInvitationEvent from "./Event";
import WeddingInvitationLocation from "./Location";
import ButtonTabs from "components/ButtonTabs";

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

  const [selectedTab, setSelectedTab] = useState<any>([navBarTypes.home]);
  const [userData, setUserData] = useState<any>(null);

  const onPressButtonGroup = (tab: any) => {
    setSelectedTab(tab);
  };

  const render_content = () => {
    switch (selectedTab[0]) {
      case navBarTypes.home:
        return (
          <WeddingInvitationHome
            date={date}
            location={location}
            userData={userData}
          />
        );
      case navBarTypes.story:
        return <WeddingInvitationStory userData={userData} />;
      case navBarTypes.event:
        return <WeddingInvitationEvent userData={userData} />;
      case navBarTypes.location:
        return <WeddingInvitationLocation />;
    }
  };

  useEffect(() => {
    const storedUserData = localStorage.getItem("user");
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      setUserData(parsedUserData);
    }
  }, []);

  return (
    <div className="website-container">
      <div className="website-content">
        <div className="header">
          {userData
            ? `${userData?.firstName} & ${userData?.partnerFirstName}`
            : `${brideName} & ${groomName}`}
        </div>
        <div className="tab-container">
          <ButtonTabs
            options={[
              navBarTypes.home,
              navBarTypes.story,
              navBarTypes.event,
              navBarTypes.location,
            ]}
            selected={selectedTab}
            onPressButtonGroup={onPressButtonGroup}
          />
        </div>

        {render_content()}
      </div>
    </div>
  );
};

export default WeddingWebsite;
