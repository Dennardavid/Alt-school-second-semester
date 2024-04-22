import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa6";

function Navbar() {
  /* List rendering for the navbar linking to other pages */
  const pages = [
    /*  Navlink to enable link styling*/
    <NavLink
      style={({ isActive }) =>
        isActive
          ? { color: "#f05323", textDecoration: "underline" }
          : { color: "#ffff" }
      }
      to="/"
      className="list-item"
    >
      Home
    </NavLink>,
    <NavLink
      style={({ isActive }) =>
        isActive
          ? { color: "#f05323", textDecoration: "underline" }
          : { color: "#ffff" }
      }
      to="/myrepos"
      className="list-item"
    >
      MyRepos
    </NavLink>,
  ];

  const navbarItems = pages.map((pages) => {
    return (
      <li key={crypto.randomUUID()} className="pageloader">
        {pages}
      </li>
    );
  });
  return (
    <header>
      <nav className="Nav">
        <h2>DOUBLED</h2>
        <ul className="list">{navbarItems}</ul>
        <FaBars className="Hamburger" />
      </nav>
    </header>
  );
}

export default Navbar;
