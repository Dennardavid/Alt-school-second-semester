import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
  /* List rendering for the footer */

  /* const socialLinks = socials.map((socials) => {
    return <li key={socials}>{socials}</li>;
  }); */
  return (
    <footer className="footer">
      <h2>DOUBLED</h2>
      <ul className="footer-list">
        <li>
          <a href="https://github.com/Dennardavid" className="socials">
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/david-dennar/"
            className="socials"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/dennar_david" className="socials">
            <FaSquareXTwitter />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
