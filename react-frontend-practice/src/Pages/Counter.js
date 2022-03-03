import React, { useState, useEffect } from "react";
import axios from "axios";
import ColorDataView from "../Components/ColorDataView";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [colorData, setColorData] = useState([]);

  useEffect(() => {
    if (counter === 0) {
      setColorData([]);
    } else {
      axios
        .get(
          `https://random-data-api.com/api/color/random_color?size=${counter}`
        )
        .then(({ data }) => {
          setColorData(colorData.concat(data));
        })
        .catch((error) => console.log(error));
    }
  }, [counter]);

  return (
    <div className="counter">
      <h1>Counter and Api Calls</h1>
      <div>
        <p>{counter}</p>
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            setCounter(0);
          }}
        >
          Reset
        </button>
      </div>

      {colorData.map((data) => (
        <ColorDataView
          key={data.id}
          color_name={data.color_name}
          hex_value={data.hex_value}
        />
      ))}
    </div>
  );
};

{
  /* <ColorDataView colorData={data} /> */
}
export default Counter;
