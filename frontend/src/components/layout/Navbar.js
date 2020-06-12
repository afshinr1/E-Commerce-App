import React from "react";
import { NavLink } from "react-router-dom";
import Cookies from "universal-cookie";

function logout() {
  const cookies = new Cookies();
  console.log("remove cookies");
  cookies.remove("username");
  cookies.remove("email");
  cookies.remove("name");
  cookies.remove("role");
  cookies.remove("profileimg");
}
export default function Navbar(props) {
  const cookies = new Cookies();
  let role = cookies.get("role");

  if (role === "customer") {
    return (
      <nav className="navbar">
        <div className="logo">
          <img src={window.location.origin + "/logo.png"} alt="" />
          <h2>
            <em>Shoprite</em>
          </h2>
        </div>
        <ul className="nav-items">
          <NavLink className="nav-link" to={"/app/profile"}>
            <li className="nav-item">Profile</li>
          </NavLink>
          <NavLink className="nav-link" to={"/app/shop"}>
            <li className="nav-item">Shop</li>
          </NavLink>
          <NavLink className="nav-link" to={"/app/cart"}>
            <li className="nav-item">Cart</li>
          </NavLink>
          <NavLink className="nav-link" to={"/app/purchased"}>
            <li className="nav-item">Purchased Items</li>
          </NavLink>
          <NavLink className="nav-link" to={"/signin"} onClick={logout}>
            <li className="nav-item">{props.condition}</li>
          </NavLink>
        </ul>
      </nav>
    );
  } else {
    return (
      <nav className="navbar">
        <div className="logo">
          <img src={window.location.origin + "/logo.png"} alt="" />
          <h2>
            <em>Shoprite</em>
          </h2>
        </div>
        <ul className="nav-items">
          <NavLink className="nav-link" to={"/app/profile"}>
            <li className="nav-item">Profile</li>
          </NavLink>
          <NavLink className="nav-link" to={"/app/myitems"}>
            <li className="nav-item">My Items</li>
          </NavLink>
          <NavLink className="nav-link" to={"/app/additem"}>
            <li className="nav-item">Add Item</li>
          </NavLink>
          <NavLink className="nav-link" to={"/app/customers"}>
            <li className="nav-item">Customers</li>
          </NavLink>
          <NavLink className="nav-link" to={"/signin"} onClick={logout}>
            <li className="nav-item">{props.condition}</li>
          </NavLink>
        </ul>
      </nav>
    );
  }
}
