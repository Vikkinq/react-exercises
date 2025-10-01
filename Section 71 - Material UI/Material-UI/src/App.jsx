import "./App.css";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Form from "./Form";

function App() {
  return (
    <>
      <h1>Section 71 - Material UI</h1>
      <hr />
      {/* <Button onClick={() => console.log("Clicked")} variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button> */}
      <Form />
    </>
  );
}

export default App;
