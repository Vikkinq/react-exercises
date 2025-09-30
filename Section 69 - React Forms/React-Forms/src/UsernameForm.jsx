import { useState } from "react";

export default function UsernameForm() {
  const [username, setUsername] = useState("");
  const updateUsername = (event) => {
    setUsername(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div>
      <label htmlFor="username">Username: </label>
      <input
        onChange={updateUsername}
        type="text"
        name="username"
        id="username"
        placeholder="username"
        value={username}
      />
      <button>Submit</button>
    </div>
  );
}
