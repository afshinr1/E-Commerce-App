import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={window.location.origin + "/logo.png"} />

        <h2>
          <em>Shoprite</em>
        </h2>
      </div>
      <ul className="nav-items">
        <Link className="nav-link" to={"./"}>
          <li className="nav-item">Profile</li>
        </Link>
        <Link className="nav-link" to={"./shop"}>
          <li className="nav-item">Shop</li>
        </Link>
        <Link className="nav-link" to={"./cart"}>
          <li className="nav-item">Cart</li>
        </Link>
        <Link className="nav-link" to={"./purchased"}>
          <li className="nav-item">Purchased Items</li>
        </Link>
      </ul>
    </nav>
  );
}
