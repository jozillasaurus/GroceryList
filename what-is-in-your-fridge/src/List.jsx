import React, { useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

function List(props) {
  const params = useParams();
  const history = useHistory();
  const thing = props.item.find((r) => r.id === params.id);
  const [deleted, setDeleted] = useState(false);

  const handleDelete = async (id) => {
    setDeleted(true);
    setTimeout(async () => {
      // let's get the airtableURL...
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/fridge/${id}`;
      // ...and make an axios delete request for a particular record
      await axios.delete(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      props.setFetchFridge((prevFetchFridge) => !prevFetchFridge);
      setDeleted(false);
      history.push("/fridge");
    }, 2000);
  };
  if (!thing) {
    return <h4>Loading...</h4>;
  }

  return (
    <div>
      <h3>{thing.fields.item}</h3>
      <h4>Quantity:{thing.fields.quantity}</h4>
      <h5>Date of Purchase:{thing.fields.purchaseDate}</h5>
      <h6>Expiration Date:{thing.fields.expirationDate}</h6>
      <button onClick={() => handleDelete(thing.id)}>
        {deleted ? "Deleted" : "Delete"}
      </button>
    </div>
  );
}

export default List;
