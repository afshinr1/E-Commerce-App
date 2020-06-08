import React from "react";
import { Link } from "react-router-dom";
import Cookies from 'universal-cookie';

function logout(){
  const cookies = new Cookies();
  console.log('remove cookies');
  cookies.remove('username');
  cookies.remove('email');
  cookies.remove('name');
  cookies.remove('role');
  cookies.remove('profileimg');
}
export default function Navbar(props) {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={window.location.origin + "/logo.png"} alt="" />

        <h2>
          <em>Shoprite</em>
        </h2>
      </div>
      <ul className="nav-items">
        <Link className="nav-link" to={"/app/profile"}>
          <li className="nav-item">Profile</li>
        </Link>
        <Link className="nav-link" to={"/app/shop"}>
          <li className="nav-item">Shop</li>
        </Link>
        <Link className="nav-link" to={"/app/cart"}>
          <li className="nav-item">Cart</li>
        </Link>
        <Link className="nav-link" to={"/app/purchased"}>
          <li className="nav-item">Purchased Items</li>
        </Link>
        <Link className="nav-link" to={"/signin"} onClick={logout}>
          <li className="nav-item">{props.condition}</li>
        </Link>
      </ul>
    </nav>
  );
}
