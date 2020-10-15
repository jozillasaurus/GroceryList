import React, { useState } from "react";
import axios from "axios";

function Items(props) {
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");
  const [expirationDate, setExpirationDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      item,
      quantity,
      purchaseDate,
      expirationDate,
    };
    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/fridge`;
    await axios.post(
      airtableURL,
      { fields },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      }
    );
  };

  return (
    <form className="pepperoni" onSubmit={handleSubmit}>
      <label htmlFor="">Item</label>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <label htmlFor="">Quantity</label>
      <input
        type="text"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <label htmlFor="">Purchase Date</label>
      <input
        type="text"
        value={purchaseDate}
        onChange={(e) => setPurchaseDate(e.target.value)}
      />
      <label htmlFor="">Expiration Date</label>
      <input
        type="text"
        value={expirationDate}
        onChange={(e) => setExpirationDate(e.target.value)}
      />
      <button className="wax" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Items;
