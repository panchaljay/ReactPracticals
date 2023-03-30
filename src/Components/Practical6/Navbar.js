import React from "react";
import Home from "./Home";
import Collection from "./Collection";
import Contact from "./Contact";
import About from "./About";

import "./Style/navbar.css";
import { Router, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="main">
      <div className="navbar">
        <Link to="/home">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <div className="dropdown">
          <Link to="/collection" className="dropbtn">
            Collection
          </Link>
          <div className="dropdown-content">
            <Link to="/c1">C1</Link>
            <div className="second-drop">
              <Link to="/p1">P1</Link>
              <Link to="/p2">P2</Link>
              <Link to="/p3">P3</Link>
            </div>
            <Link to="/c2">C2</Link>
            <Link to="/c3">C3</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
