import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import Items from "./Items";
import Fridge from "./Fridge";
import List from "./List";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./App.css";

function App() {
  const [fridge, setFridge] = useState([]);
  const [fetchFridge, setFetchFridge] = useState(false);

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
  }, [fetchFridge]);

  return (
    <div className="App">
      <div>
        <h2 id="head">What's in your Fridge?</h2>
      </div>
      <Navbar />
      <Route exact path="/"></Route>
      <Route path="/fridge">
        <Fridge fridge={fridge} />
      </Route>
      <Route path="/new">
        <Items />
      </Route>
      <Route path="/item/:id">
        <List item={fridge} setFetchFridge={setFetchFridge} />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
