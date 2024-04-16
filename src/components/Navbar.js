import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  /* List rendering for the navbar linking to other pages */
  const pages = [
    <Link to="/" className="list">
      Home
    </Link>,
    <Link to="/myrepos" className="list">
      MyRepos
    </Link>,
  ];

  const navbarItems = pages.map((pages) => {
    return (
      <li key={pages} className="pageloader">
        {pages}
      </li>
    );
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
