import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header-container">
      <img src={logo} alt="" />
      <div className="nav-item">
        <a href="/shop">Shop</a>
        <a href="/order">Order</a>
        <a href="/inventory">Manage Inventory</a>
        <a href="/login">Login</a>
      </div>
    </nav>
  );
};

export default Header;
