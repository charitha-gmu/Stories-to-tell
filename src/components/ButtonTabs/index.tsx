import React, { useState } from "react";
import "./styles.scss";

const ButtonTabs = ({ options, onPressButtonGroup, selected = [] }: any) => {
  const [clickedButtons, setClickedButtons] = useState<any>(selected);
  const handleClick = (event: any, label: any) => {
    if (!clickedButtons.includes(label)) {
      // If the clicked button is not already selected, update the state
      setClickedButtons([label]);
      onPressButtonGroup([label]);
    }
  };

  return (
    <div className="button-group-container">
      {options.map((buttonLabel: any, i: any) => (
        <button
          key={i}
          type="button"
          name={buttonLabel}
          onClick={(event) => handleClick(event, buttonLabel)}
          className={
            buttonLabel ===
            clickedButtons.find((ele: any) => ele === buttonLabel)
              ? "customButton active"
              : "customButton"
          }
        >
          {buttonLabel}
        </button>
      ))}
    </div>
  );
};

export default ButtonTabs;
