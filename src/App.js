import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import HomeContainer from "./Components/Home/HomeContainer";
import NavbarContainer from "./Components/Navabar/NavbarContainer";
import CartContainer from "./Components/Cart/CartContainer";
function App() {
  return (
    <Router>
      <NavbarContainer />
      <Switch>
        <Route path="/cart">
          <CartContainer />
        </Route>
        <Route path="/">
          <HomeContainer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
