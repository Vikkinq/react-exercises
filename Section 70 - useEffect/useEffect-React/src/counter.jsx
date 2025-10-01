import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(function myEffect() {
    console.log("EFFECT"), [name];
  });

  const increment = () => {
    setCount((c) => c + 1);
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <h3>{count}</h3>
      <button onClick={increment}>Increment</button>
      <input value={name} onChange={handleChange} type="name" name="name" id="name" />
    </div>
  );
}
