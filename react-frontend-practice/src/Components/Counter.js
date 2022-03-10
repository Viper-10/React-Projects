import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    // implement a card effect
    <div className="background-for-project">
      <div>
        <button>Inc</button>
        <span>{count}</span>
        <button>Dec</button>
      </div>
    </div>
  );
};
export default Counter;
