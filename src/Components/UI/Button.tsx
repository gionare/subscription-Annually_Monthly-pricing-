import React from "react";
import "./button.css";

const Button: React.FC<ButtonProps> = ({ index }) => {
  return (
    <button className={`btn${index === 1 ? "-active" : ""}`}>
      <i className="animation"></i>
      learn more
      <i className="animation"></i>
    </button>
  );
};

export default Button;
