import React from "react";

import { useParams } from "react-router-dom";

function List(props) {
  const params = useParams();

  const thing = props.item.find((r) => r.id === params.id);

  if (!thing) {
    return <h4>Loading...</h4>;
  }

  return (
    <div>
      <h3>{thing.fields.item}</h3>
      <h4>{thing.fields.quantity}</h4>
      <h5>{thing.fields.purchaseDate}</h5>
      <h6>{thing.fields.expirationDate}</h6>
    </div>
  );
}

export default List;
