import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  console.warn("navbar", props);
  const [text, setText] = useState("");
  return (
    <nav className="nav-wrapper">
      <div className="nav-container">
        <Link to="/">
          <h2>Redux Shopping Cart App</h2>
        </Link>
        <div className="search">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></input>
          <button onClick={() => props.searchItem(text.toLocaleLowerCase())}>
            Search
          </button>
          {console.log("search", text)}
        </div>
        <ul className="nav-right">
          <li>
            <Link to="/cart">your cart</Link>
          </li>
          <li>
            <Link to="/cart">
              <i className="fa fa-shopping-cart"></i>
            </Link>
            <span className="cart-number">{props.cartItems}</span>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
