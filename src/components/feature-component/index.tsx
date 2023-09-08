import React from "react";
import "./styles.scss";

function FeatureComponent({ image, header, text, direction }: any) {
  return (
    <div className="custom-component">
      {direction === "left" ? (
        <>
          <div className="custom-component-image">
            <img src={image} alt="" />
          </div>
          <div className="custom-component-content">
            <h2 className="custom-component-header">{header}</h2>
            <p className="custom-component-text">{text}</p>
          </div>
        </>
      ) : (
        <>
          <div className="custom-component-content">
            <h2 className="custom-component-header">{header}</h2>
            <p className="custom-component-text">{text}</p>
          </div>
          <div className="custom-component-image">
            <img src={image} alt="" />
          </div>
        </>
      )}
    </div>
  );
}

export default FeatureComponent;
