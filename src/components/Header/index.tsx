import React, { Dispatch, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./header.scss";
import { Logo } from "assets/images";
import DropdownTabs from "components/DropdownTabs";
// import { getViewInvitationText } from "resources/utils";

type HeaderProps = {
  selectedTab: string[];
  setSelectedOption: Dispatch<SetStateAction<string>>;
  setSelectedTab: Dispatch<SetStateAction<string[]>>;
};

const options = {
  learnMore: "Learn More",
  story: "Story",
  contactUs: "Contact Us",
  faqs: "Faqs",
  termsAndPrivacy: "Terms and Privacy",
};

function Header(props: HeaderProps) {
  const { setSelectedOption, setSelectedTab, selectedTab } = props;
  const navigate = useNavigate();

  const isUserLoggedIn = localStorage.getItem("signedIn") === "true";

  const handleSignInAndSignOut = () => {
    if (isUserLoggedIn) {
      // navigate("/details-form");
      localStorage.removeItem("signedIn");
      localStorage.removeItem("user");

      navigate("/login");
    } else {
      navigate("/login");
    }
  };

  const handleSelectChange = (selectedValue: any) => {
    setSelectedTab([selectedValue]);
    setSelectedOption(selectedValue);
  };

  // const handleGetStarted = () => {
  //   if (isUserLoggedIn && getViewInvitationText() === "View Invitation") {
  //     navigate("/invitation");
  //   } else if (isUserLoggedIn) {
  //     navigate("/details-form");
  //   } else {
  //     navigate(`/login`, { state: { redirect: "/details-form" } });
  //   }
  // };

  return (
    <div className={`header-container gradientBg`}>
      <div className={`header-style gradientBg`}>
        <div className="logo-layout">
          <img
            className="logo cursor-pointer"
            src={Logo}
            alt="logo"
            onClick={() => {
              navigate("/");
            }}
          />
          <div className="logo-text">Tales to Share</div>
        </div>
        {/* <div className="header-category-list">
          {headersName.map((header, index) => {
            return (
              <div key={index} className={`header-category-item`}>
                {header}
              </div>
            );
          })}
        </div> */}
        <div className="header-right-container">
          <div>
            <DropdownTabs
              options={[
                options.learnMore,
                options.story,
                options.faqs,
                options.contactUs,
                options.termsAndPrivacy,
              ]}
              onSelectChange={handleSelectChange}
              selected={selectedTab[0]} // Pass the currently selected tab
            />
          </div>

          <div className="text" onClick={handleSignInAndSignOut}>
            {isUserLoggedIn ? "Sign Out" : "Sign In"}
          </div>

          {/* <div className="text" onClick={handleGetStarted}>
            {getViewInvitationText()}
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
