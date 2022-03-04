import React, { useState, useEffect } from "react";
import axios from "axios";
import ColorDataView from "../Components/ColorDataView";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [colors, setColors] = useState([]);

  const buttonStyle = {
    padding: "0.5rem 1rem",
    fontSize: "1.5rem",
    cursor: "pointer",
    backgroundColor: "#ddd",
    width: "max-content",
    margin: "1rem auto",
  };

  // ComponentDidUpdate
  // Called after every render
  useEffect(() => {
    console.log("Component Rendered Everytime any state changes");
  });

  // ComponentDidMount
  // called only once
  useEffect(() => {
    console.log("Component Rendered Only Once");
  }, []);

  useEffect(() => {
    setToggle(!toggle);
    // axios api call
    axios
      .get(`https://random-data-api.com/api/color/random_color?size=${count}`)
      .then((response) => {
        const { data } = response;
        setColors(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [count]);
  const increment = () => {
    setCount(() => count + 1);
  };

  const decrement = () => {
    setCount(() => count - 1);
  };

  const reset = () => {
    setCount(0);
  };
  return (
    <div style={{ textAlign: "center", marginTop: "1rem" }}>
      <button style={buttonStyle} onClick={increment}>
        +
      </button>
      <span style={buttonStyle}>{count}</span>
      <button style={buttonStyle} onClick={decrement}>
        -
      </button>

      <div style={buttonStyle} onClick={reset}>
        Reset
      </div>

      {toggle && <h2>You can see me!!! Toggle counter to hide me</h2>}

      {colors.map((color) => (
        <ColorDataView
          key={color.id}
          color_name={color.color_name}
          hex_value={color.hex_value}
        />
      ))}
    </div>
  );
};

export default Counter;

{
  /* {colorData.map((data) => (
        <ColorDataView
          key={data.id}
          color_name={data.color_name}
          hex_value={data.hex_value}
        />
      ))} */
}
