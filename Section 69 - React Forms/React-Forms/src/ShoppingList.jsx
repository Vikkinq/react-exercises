import { useState } from "react";

import NewItem from "./NewItem";

function ShoppingList({ addItem }) {
  const [formData, setFormData] = useState({ product: "", quantity: 0 });
  const [isValid, setIsValid] = useState(false);

  const validate = () => {
    if (formData.product.length === 0) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };

  const handleChange = (event) => {
    validate();
    setFormData((currData) => {
      return {
        ...currData,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addItem(formData);
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <h1>
        {formData.quantity} {formData.product}
      </h1>

      <label htmlFor="product"></label>
      <input
        onChange={handleChange}
        type="text"
        name="product"
        id="product"
        placeholder="product name"
        value={formData.product}
      />
      {!isValid && <p style={{ color: "red" }}>Product cannot be Empty</p>}

      <label htmlFor="quantity"></label>
      <input
        onChange={handleChange}
        type="number"
        name="quantity"
        id="quantity"
        placeholder="quantity name"
        value={formData.quantity}
      />

      <button>Submit</button>
    </form>
  );
}

export default ShoppingList;
