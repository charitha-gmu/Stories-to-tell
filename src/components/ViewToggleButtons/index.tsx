import React from "react";
import "./styles.scss";
import { dropdown, menu } from "assets/images";

const ViewToggleButtons = ({ showDropdown, setShowDropdown }: any) => {
  return (
    <div className="view-toggle-buttons">
      <div className="tooltip-container">
        <img
          onClick={() => setShowDropdown(false)}
          className={`toggle-button ${!showDropdown ? "active" : ""}`}
          alt="Tab View"
          src={menu}
          style={{ height: 50, width: 50 }}
        />
        <span className="tooltip-text">Tab View</span>
      </div>
      <div className="tooltip-container">
        <img
          onClick={() => setShowDropdown(true)}
          className={`toggle-button ${showDropdown ? "active" : ""}`}
          alt="Dropdown View"
          src={dropdown}
          style={{ height: 50, width: 50 }}
        />
        <span className="tooltip-text">Dropdown View</span>
      </div>
    </div>
  );
};

export default ViewToggleButtons;
