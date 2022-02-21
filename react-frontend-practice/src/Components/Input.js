import React from "react";
import "../App.css";

// https://random-data-api.com/api/color/random_color

const Input = (props) => {
  return (
    <div className="input-group">
      <label>{props.labelName} : </label>
      <input type={props.type} required></input>
    </div>
  );
};
Input.defaultProps = {
  type: "text",
};
export default Input;
