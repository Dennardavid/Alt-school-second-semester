import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <header>
      <nav className="Nav">
        <h2>DOUBLED</h2>
        <ul className="list">
          <li>Home</li>
          <li>My repos</li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
