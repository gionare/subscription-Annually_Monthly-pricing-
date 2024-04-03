import React from "react";
import "./toogle.css";

interface ToogleProps {
  selectedOption: string;
  onOptionChange: (option: string) => void;
}

const Toogle: React.FC<ToogleProps> = ({ selectedOption, onOptionChange }) => {
  const handleToggleClick = () => {
    const newOption = selectedOption === "Annually" ? "Monthly" : "Annually";
    console.log("Toggled to", newOption);
    onOptionChange(newOption);
  };

  return (
    <div className="toggle-component">
      <h1 className="headline">Our Pricing</h1>

      <div
        className={`pricing-toggle ${
          selectedOption === "Monthly" ? "active" : ""
        }`}
      >
        <p className="options">Annually</p>

        <input id="checkboxInput" type="checkbox" />
        <label
          className={`toggleSwitch ${
            selectedOption === "Monthly" ? "active" : ""
          }`}
          htmlFor="checkboxInput"
          onClick={handleToggleClick}
        ></label>

        <p className="options">Monthly</p>
      </div>
    </div>
  );
};

export default Toogle;
