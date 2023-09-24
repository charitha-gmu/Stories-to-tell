import React from "react";
import { BackThemed, Back } from "assets/icons";
import "./styles.scss";

const BackButton = ({
  onBackClick,
  themedButton = true,
  text = "Back",
}: any) => {
  return (
    <div className="back-button-container" onClick={onBackClick}>
      {themedButton ? (
        <img className="back-logo" src={BackThemed} alt={"back"} />
      ) : (
        <img className="back-logo" src={Back} alt={"back"} />
      )}
      <p className={`bold-text ${!themedButton ? "text-black" : ""}`}>{text}</p>
    </div>
  );
};

export default BackButton;
