import "./App.css";

import Counter from "./Counter";
import EmojiClicker from "./EmojiClicker";
import ScoreKeeper from "./ScoreKeeper";

function App() {
  return (
    <>
      <div>
        <h1>Intermediate State Concepts</h1>
        <hr />
        <Counter />
        <hr />
        <EmojiClicker />
        <hr />
        <ScoreKeeper numPlayers={5} />
      </div>
    </>
  );
}

export default App;
