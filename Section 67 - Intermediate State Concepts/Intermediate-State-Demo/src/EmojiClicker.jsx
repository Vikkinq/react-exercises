import { useState } from "react";
import { v4 as uuid } from "uuid";

function randomEmoji() {
  const data = ["🥳", "🤓", "🙂", "🥹", "👿", "💀", "😂"];
  return data[Math.floor(Math.random() * data.length)];
}

export default function EmojiClicker() {
  const [emoji, setEmoji] = useState([{ id: uuid(), emoji: randomEmoji() }]);

  const addEmoji = () => {
    setEmoji((prevEmoji) => [...prevEmoji, { id: uuid(), emoji: randomEmoji() }]);
  };

  const deleteEmoji = (id) => {
    setEmoji((prevEmoji) => {
      console.log(id);
      return prevEmoji.filter((e) => e.id !== id);
    });
  };

  const replaceEmoji = () => {
    setEmoji((preEmoji) => {
      return preEmoji.map((e) => {
        return { ...e, emoji: "👻" };
      });
    });
  };

  return (
    <div>
      <div>
        {emoji.map((e) => (
          <span onClick={() => deleteEmoji(e.id)} key={e.id} style={{ fontSize: "4rem" }}>
            {e.emoji}
          </span>
        ))}
      </div>
      <button onClick={addEmoji}>Add Emoji</button>
      <button onClick={replaceEmoji}>Replace Emoji</button>
    </div>
  );
}
