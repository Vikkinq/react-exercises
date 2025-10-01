import { useState } from "react";

import TextField from "@mui/material/TextField";

export default function Form() {
  const [name, setName] = useState("Tae");

  const handleChange = (event) => {
    setName(event.target.value);
    console.log(event.target.value);
  };

  return (
    <TextField value={name} onChange={handleChange} name="name" id="filled-basic" label="First Name" variant="filled" />
  );
}
