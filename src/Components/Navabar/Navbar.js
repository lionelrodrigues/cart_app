import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  console.warn("navbar", props);
  return (
    <nav className="nav-wrapper">
      <div className="container">
        <Link to="/">
          <h2>Redux Shopping Cart App</h2>
        </Link>
        <ul className="nav-right">
          <li>
            <Link to="/cart">your cart</Link>
          </li>
          <li>
            <Link to="/cart">cartlogo</Link>
            <span>{props.cartItems}</span>
            {/* <b>
              <span>{props.items.length}</span>
            </b> */}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
