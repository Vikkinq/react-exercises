import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function ScoreKeeper({ numPlayers = 2, target = 5 }) {
  const [score, setScore] = useState(new Array(numPlayers).fill(0));

  //   const incrementScore = (index) => {
  //     setScore((prevScore) => {
  //       const copy = [...prevScore];
  //       copy[index] += 1;
  //       return copy;
  //     });
  //   };

  // Recommended
  const incrementScore = (index) => {
    setScore((prevScore) => {
      return prevScore.map((score, i) => {
        if (i === index) return score + 1;
        return score;
      });
    });
  };

  const reset = () => {
    setScore(new Array(numPlayers).fill(0));
  };

  return (
    <div>
      <h1>Score Keeper</h1>
      <div>
        {score.map((s, index) => {
          return (
            <div key={index}>
              <h2>
                Player {index + 1}: {s} {s === target ? <p>Winner!</p> : null}
              </h2>
              <button onClick={() => incrementScore(index)}>+1</button>
            </div>
          );
        })}
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
