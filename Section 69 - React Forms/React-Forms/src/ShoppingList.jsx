import { useState } from "react";
import { useForm } from "react-hook-form";

import NewItem from "./NewItem";

function ShoppingList({ addItem }) {
  const [formData, setFormData] = useState({ product: "", quantity: 0 });
  const [isValid, setIsValid] = useState(false);

  const validate = (product) => {
    if (product.length < 5) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };

  const handleChange = (event) => {
    if (event.target.name === "product") {
      validate(event.target.value);
    }
    setFormData((currData) => {
      return {
        ...currData,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      addItem(formData);
      setFormData({ product: "", quantity: 0 });
    }
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
