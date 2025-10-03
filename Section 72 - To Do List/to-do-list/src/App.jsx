import "./App.css";
import CSSBaseline from "@mui/material/CssBaseline";

import ToDoList from "./ToDoList";

function App() {
  return (
    <>
      <CSSBaseline />
      <div>
        <h1>To Do List</h1>
        <hr />
        <ToDoList />
      </div>
    </>
  );
}

export default App;
