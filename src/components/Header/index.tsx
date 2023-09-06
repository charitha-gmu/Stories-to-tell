import React from "react";
import { useNavigate } from "react-router-dom";
import "./header.scss";
import { Logo } from "assets/images";

// const headersName = ["Header1", "Header2", "Header3", "Header4"];

function Header() {
  const navigate = useNavigate();

  const isUserLoggedIn = localStorage.getItem("signedIn") === "true";

  const handleSignInAndSignOut = () => {
    if (isUserLoggedIn) {
      // localStorage.removeItem("signedIn");
      // navigate("/login");
    } else {
      // navigate("/login");
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
          <div className="logo-text" onClick={handleSignInAndSignOut}>
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

          <div className="text">Get Started</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
