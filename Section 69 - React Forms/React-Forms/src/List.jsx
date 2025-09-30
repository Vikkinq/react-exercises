import { useState } from "react";
import { v4 as uuid } from "uuid";

import ShoppingList from "./ShoppingList";

function List() {
  const [items, setItems] = useState([
    { id: uuid(), product: "Bananas", quantity: 10 },
    { id: uuid(), product: "Apples", quantity: 2 },
  ]);

  const addItem = (item) => {
    setItems((currItems) => {
      return [...currItems, { ...item, id: uuid() }];
    });
  };

  return (
    <div>
      <ShoppingList addItem={addItem} />
      <h1>Item List</h1>
      <ul>
        {items.map((i) => (
          <li key={i.id}>
            {i.product} - {i.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
