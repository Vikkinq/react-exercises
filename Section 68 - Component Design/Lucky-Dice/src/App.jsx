import "./App.css";

import Dice from "./Dice";
import LuckyNumber from "./LuckyNumber";
import { sum } from "./utility";
import BoxGrid from "./BoxGrid";

function lessThan4(dice) {
  return sum(dice) < 4;
}

function sameNumber(dice) {
  return dice.every((v) => v === dice[0]);
}

function equalToSeven(dice) {
  return sum(dice) === 7;
}

function App() {
  return (
    <>
      <h1>Section 68 - Component Design</h1>
      <hr />
      {/* <LuckyNumber winCheck={lessThan4} />
      <LuckyNumber winCheck={sameNumber} />
      <LuckyNumber winCheck={equalToSeven} /> */}
      <BoxGrid numBoxes={[false, false, false]} />
    </>
  );
}

export default App;
