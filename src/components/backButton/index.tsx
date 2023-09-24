import React from "react";
import { coloredBackImage } from "assets/images";
import "./styles.scss";

const BackButton = ({ onBackClick }: any) => {
  return (
    <div className="back-button-container" onClick={onBackClick}>
      <img className="back-logo" src={coloredBackImage} alt={"back"} />
      <p className="bold-text">Back</p>
    </div>
  );
};

export default BackButton;
