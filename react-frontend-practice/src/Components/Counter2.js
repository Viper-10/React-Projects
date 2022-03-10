import { useState, useEffect } from "react";

const CounterWithReset = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  let buttonStyle = {
    padding: "0.25em 0.5em",
    marginInline: "0.5em",
    fontSize: "1.25rem",
    cursor: "pointer",
    backgroundColor: "orange",
    width: "max-content",
  };

  useEffect(() => {
    if (toggle % 2 === 0) {
      setToggle(true);
    } else {
      setToggle(false);
    }
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
  if (toggle === true) {
    buttonStyle = {
      ...buttonStyle,
      backgroundColor: "#ddd",
      color: "black",
    };
  }
  return (
    <div style={{ textAlign: "center", marginTop: "1rem" }}>
      <button style={buttonStyle} onClick={increment}>
        +
      </button>
      <span style={buttonStyle}>{count}</span>
      <button style={buttonStyle} onClick={decrement}>
        -
      </button>
      <div style={{ textAlign: "center", marginTop: "1rem" }}>
        <button style={buttonStyle} onClick={reset}>
          Reset
        </button>
      </div>
      <div style={{ marginBottom: "1rem" }}></div>
    </div>
  );
};

export default CounterWithReset;
