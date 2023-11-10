import React, { useState } from "react";
import "./styles.scss";

const DropdownTabs = ({ options, onSelectChange, selected = "" }: any) => {
  const [selectedOption, setSelectedOption] = useState(selected);

  const handleChange = (event: any) => {
    const newValue = event.target.value;
    setSelectedOption(newValue);
    onSelectChange(newValue); // Assuming you want to call this function when an option is selected
  };

  return (
    <div className="dropdown-container">
      <select
        value={selectedOption}
        onChange={handleChange}
        className="customDropdown"
      >
        {options.map((optionLabel: any, index: any) => (
          <option key={index} value={optionLabel}>
            {optionLabel}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownTabs;
