import React from "react";
import logo from "assets/images/logo.jpeg";
import { Link } from "react-router-dom";
import "./header.scss";

const headersName = ["Header1", "Header2", "Header3", "Header4"];

function Header() {
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
          <Link to="/">
            <button>Sign In</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
