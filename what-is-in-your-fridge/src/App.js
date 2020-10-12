import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Route } from "react-router-dom";
import Items from "./Items";
import List from "./List";
import "./App.css";

function App() {
  const [fridge, setFridge] = useState([]);

  useEffect(() => {
    const getFridge = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/fridge`;
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      setFridge(response.data.records);
    };
    getFridge();
  }, []);

  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/item/:id">Fridge</Link>
        <Link to="/new">Add Item</Link>
      </nav>
      <Route exact path="/">
        <div>
          {fridge.map((item) => (
            <Link to={`/item/${item.id}`}>{item.fields.item}</Link>
          ))}
        </div>
      </Route>
      <Route path="/new">
        <Items />
      </Route>
      <Route path="/item/:id">
        <List item={fridge} />
      </Route>
    </div>
  );
}

export default App;
