import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div style={{ color: "white" }}>
      <header className="hide-when-mobile">
        <h1>I made This React ☺</h1>
        <ul className="flex">
          <li className="main-list">
            <Link className="main-link" to="/">
              Home
            </Link>
          </li>
          <li className="main-list">
            <Link className="main-link" to="/html">
              HTML
            </Link>
          </li>
          <li className="main-list">
            <Link className="main-link" to="/css">
              CSS
            </Link>
          </li>
          <li className="main-list">
            <Link className="main-link" to="/JavaScript">
              JavaScript
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
