import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

import List from "@mui/material/List";
import ToDoItem from "./ToDoItem";
import Form from "./Form";

// const data = [
//   { id: uuid(), text: "Play Games", completed: false },
//   { id: uuid(), text: "Learn React", completed: true },
// ];

const getData = () => {
  const data = JSON.parse(localStorage.getItem("todos"));
  if (!data) {
    return [];
  }
  return data;
};

export default function ToDoList() {
  const [todos, setTodos] = useState(getData);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const remove = (id) => {
    setTodos((prev) => {
      return prev.filter((t) => t.id !== id);
    });
  };

  const add = (text) => {
    setTodos((prev) => {
      return [...prev, { text: text, id: uuid() }];
    });
  };

  const toggle = (id) => {
    setTodos((prev) => {
      return prev.map((t) => {
        if (t.id === id) {
          return { ...t, completed: !t.completed };
        } else {
          return t;
        }
      });
    });
  };

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {todos.map((t) => (
        <ToDoItem data={t} key={t.id} remove={() => remove(t.id)} toggle={toggle} />
      ))}
      <hr />
      <Form add={add} />
    </List>
  );
}
