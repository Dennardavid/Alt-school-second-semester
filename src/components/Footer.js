import React from "react";
import "./Footer.css";

function Footer() {
  /* List rendering for the footer */
  const socials = ["Email", "Contact", "Twitter", "LinkedIn"];

  const socialLinks = socials.map((socials) => {
    return <li key={socials}>{socials}</li>;
  });
  return (
    <footer className="footer">
      <h2>DOUBLED</h2>
      <ul className="footer-list">{socialLinks}</ul>
    </footer>
  );
}

export default Footer;
