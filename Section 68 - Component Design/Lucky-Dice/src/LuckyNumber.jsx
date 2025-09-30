import { useState } from "react";

import Dice from "./Dice";
import { getRolls } from "./utility";
import Button from "./Button";

// Function as Props
function LuckyNumber({ numDice = 2, winCheck }) {
  const [dice, setDice] = useState(getRolls(numDice));
  const isWinner = winCheck(dice);

  const reroll = () => {
    setDice(getRolls(numDice));
  };

  return (
    <main>
      <h2>Lucky</h2>
      {isWinner ? <h3>You have Won!</h3> : null}
      <Dice dice={dice} />
      <Button rollDice={reroll} />
      <hr />
    </main>
  );
}

// Vanilla Common
// function LuckyNumber({ numDice = 2, goal = 7 }) {
//   const [dice, setDice] = useState(getRolls(numDice));
//   const isWinner = sum(dice) === goal;

//   const reroll = () => {
//     setDice(getRolls(numDice));
//   };

//   return (
//     <main>
//       <h2>Lucky {goal}</h2>
//       {isWinner ? <h3>You have Won!</h3> : null}
//       <Dice dice={dice} />
//       <button onClick={reroll}>Reroll Dice</button>
//       <hr />
//     </main>
//   );
// }

export default LuckyNumber;
