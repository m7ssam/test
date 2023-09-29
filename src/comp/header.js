import React from "react";
import "./css/header.css";
import { NavLink } from "react-router-dom";
import color from "./css/color.css";

const Header = () => {
  return (
    <div>
      <header className="hide-when-mobile">
        <h1 className={color.gray}>I made This React ☺</h1>
        <ul className="flex">
          <li className="main-list">
            <NavLink className="main-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/html">
              HTML
            </NavLink>
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/css">
              CSS
            </NavLink>
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/JavaScript">
              JavaScript
            </NavLink>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
