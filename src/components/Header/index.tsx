import React from "react";
import { useNavigate } from "react-router-dom";
import "./header.scss";
import { Logo } from "assets/images";
import { getViewInvitationText } from "resources/utils";

// const headersName = ["Header1", "Header2", "Header3", "Header4"];

function Header() {
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

  const handleGetStarted = () => {
    if (isUserLoggedIn && getViewInvitationText() === "View Invitation") {
      navigate("/invitation");
    } else if (isUserLoggedIn) {
      navigate("/details-form");
    } else {
      navigate(`/login`, { state: { redirect: "/details-form" } });
    }
  };

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
          <div className="logo-text" style={{ cursor: "pointer" }}>
            Tales to Share
          </div>
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
          <div className="text" onClick={handleSignInAndSignOut}>
            {isUserLoggedIn ? "Sign Out" : "Sign In"}
          </div>

          <div className="text" onClick={handleGetStarted}>
            {getViewInvitationText()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
