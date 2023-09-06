import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "assets/images/logo.jpeg";
import "./header.scss";

const headersName = ["Header1", "Header2", "Header3", "Header4"];

function Header() {
  const navigate = useNavigate();

  const isUserLoggedIn = localStorage.getItem("signedIn") === "true";

  const handleSignInAndSignOut = () => {
    if (isUserLoggedIn) {
      localStorage.removeItem("signedIn");
      navigate("/login");

    } else {
      navigate("/login");
    }
  };
  return (
    <div className={`header-container gradientBg`}>
      <div className={`header-style gradientBg`}>
        <div className="logo-layout">
          <img
            className="logo cursor-pointer"
            src={logo}
            // onClick={() => {
            //   setSearchValue('')
            //   dispatch(resetSearchInfoRequest())
            //   navigate('/')
            // }}
          />
        </div>
        <div className="header-category-list">
          {headersName.map((header, index) => {
            return (
              <div key={index} className={`header-category-item`}>
                {header}
              </div>
            );
          })}
        </div>
        <div className="header-right-container">
          <button onClick={handleSignInAndSignOut}>
            {isUserLoggedIn ? "Sign Out" : "Sign In"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
