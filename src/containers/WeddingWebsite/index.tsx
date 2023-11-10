import React, { useState, useEffect } from "react";
import WeddingInvitationHome from "./Home";
import WeddingInvitationStory from "./Story";
import WeddingInvitationEvent from "./Event";
import WeddingInvitationLocation from "./Location";
import ButtonTabs from "components/ButtonTabs";
import BackButton from "components/backButton";
import { useNavigate } from "react-router-dom";
import { edit } from "assets/images";
import DropdownTabs from "components/DropdownTabs";
import ViewToggleButtons from "components/ViewToggleButtons";

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
  const [showDropdown, setShowDropdown] = useState(false);

  const [selectedTab, setSelectedTab] = useState<any>([navBarTypes.home]);
  const [userData, setUserData] = useState<any>(null);
  const navigate = useNavigate();

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

  const handleBackClick = () => {
    navigate("/");
  };

  const handleSelectChange = (selectedValue: any) => {
    console.log("Selected:", selectedValue); // Do something with the selected value
    setSelectedTab([selectedValue]);
  };

  return (
    <div className="website-container">
      <div className="website-content">
        <div className="header">
          <div className="left">
            <BackButton
              onBackClick={handleBackClick}
              themedButton={false}
              text="Back to Home"
            />
          </div>
          <div className="middle">
            {userData
              ? `${userData?.firstName} & ${userData?.partnerFirstName}`
              : `${brideName} & ${groomName}`}
          </div>
          <div className="right">
            <div
              className="back-button-container"
              onClick={() => navigate("/details-form")}
            >
              <img
                className="back-logo"
                src={edit}
                alt={"back"}
                style={{ height: 20, width: 20 }}
              />

              <p className={`bold-text text-black`} style={{ padding: "2px" }}>
                {" "}
                {"  "}Edit Details
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            marginRight: "40px",
          }}
        >
          {" "}
          <ViewToggleButtons
            showDropdown={showDropdown}
            setShowDropdown={setShowDropdown}
          />
        </div>

        {showDropdown ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <DropdownTabs
              options={[
                navBarTypes.home,
                navBarTypes.story,
                navBarTypes.event,
                navBarTypes.location,
              ]}
              onSelectChange={handleSelectChange}
              selected={selectedTab[0]} // Pass the currently selected tab
            />
          </div>
        ) : (
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
        )}

        {render_content()}
      </div>
    </div>
  );
};

export default WeddingWebsite;
