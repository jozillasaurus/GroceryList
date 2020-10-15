import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="Nav">
      <Link to="/">Home</Link>
      <Link to="/fridge">Fridge</Link>
      <Link to="/new">Add Item</Link>
    </nav>
  );
}
export default Navbar;
