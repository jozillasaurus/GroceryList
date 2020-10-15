import React from "react";
import { Link } from "react-router-dom";

const Fridge = (props) => {
  return (
    <div id="gloo">
      {props.fridge.map((item) => (
        <Link key={item.id} to={`/item/${item.id}`}>
          {item.fields.item}
        </Link>
      ))}
    </div>
  );
};

export default Fridge;
