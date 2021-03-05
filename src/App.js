import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Cart from "./Components/Cart/Cart.js";
// import Navbar from "./Components/Navabar/Navbar";
import HomeContainer from "./Components/Home/HomeContainer";
import NavbarContainer from "./Components/Navabar/NavbarContainer";
function App() {
  return (
    <Router>
      <NavbarContainer />
      <Switch>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/">
          <HomeContainer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
