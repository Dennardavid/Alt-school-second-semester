import React from "react";
import "./Navbar.css";

function Navbar() {
  /* List rendering for the navbar  */
  const pages = ["Home", "My Repos"];

  const navbarItems = pages.map((pages) => {
    return <li key={pages}>{pages}</li>;
  });
  return (
    <header>
      <nav className="Nav">
        <h2>DOUBLED</h2>
        <ul className="list">{navbarItems}</ul>
      </nav>
    </header>
  );
}

export default Navbar;
