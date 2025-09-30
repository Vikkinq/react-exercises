import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  console.log("Rendered!");

  const incrementByOne = () => {
    setCount(count + 1);
  };

  const incrementByThree = () => {
    setCount((currCount) => currCount + 3);
  };

  const setToTen = () => {
    setCount(10);
  };

  return (
    <div>
      <h4>Count: {count}</h4>
      <button onClick={incrementByOne}>+1</button>
      <button onClick={incrementByThree}>+3</button>
      <button onClick={setToTen}>Set 10</button>
    </div>
  );
}
