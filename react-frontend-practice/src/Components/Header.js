import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <h1>Welcome to practice site</h1>
      <ul className="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
