import React from "react";

const ColorDataView = ({ color_name, hex_value }) => {
  return (
    <div>
      <h1>Color : {color_name}</h1>
      <p>hex value : {hex_value}</p>
    </div>
  );
};

export default ColorDataView;
