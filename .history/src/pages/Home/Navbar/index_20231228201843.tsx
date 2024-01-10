import React from "react";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <div className="nav">
      <div className="container">
        <div className="nav-content">
          <div className="nav-logo"></div>
          <ul className="nav-list">
            <li className="nav-item">Home</li>
            <li className="nav-item">Services</li>
            <li className="nav-item">About us</li>
            <li className="nav-item">Contact us</li>
            <li className="nav-item">Blog</li>
            <li className="nav-login">Login</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
