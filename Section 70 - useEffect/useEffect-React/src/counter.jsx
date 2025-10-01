import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(function myEffect() {
    console.log("EFFECT");
  });

  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <div>
      <h3>{count}</h3>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
