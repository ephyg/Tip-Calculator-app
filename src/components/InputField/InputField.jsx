import React from "react";
import "./input-style.scss";
function InputField({ icon }) {
  return (
    <div className="inputs-container">
      <img src={icon} alt="" />
      <input type="number" placeholder="0" />
    </div>
  );
}

export default InputField;
