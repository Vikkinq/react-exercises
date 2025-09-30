import Box from "./Box";
import { useState } from "react";

function BoxGrid({ numBoxes }) {
  const [boxes, setBoxes] = useState(numBoxes);

  const reset = () => {
    setBoxes([false, false, false]);
  };

  const toggleBox = (index) => {
    setBoxes((oldBoxes) => {
      return oldBoxes.map((value, i) => {
        if (i === index) {
          return !value;
        } else {
          return value;
        }
      });
    });
  };

  return (
    <div className="BoxGrid">
      {boxes.map((box, index) => (
        <Box key={index} isActive={box} toggle={() => toggleBox(index)} />
      ))}
      <br />
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default BoxGrid;
