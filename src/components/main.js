import React from "react";
import Dennar from "../assets/me.jpg";
import "./main.css";

function HeroSection() {
  return (
    <main className="hero">
      <section className="hero-content">
        <p>My name is</p>
        <h1 className="my_name">DENNAR DAVID</h1>
        <div className="job-desc">
          <p>I am a Frontend developer</p>
        </div>
      </section>
      <div>
        <img src={Dennar} alt="David Dennar" className="soft-boy" />
      </div>
    </main>
  );
}

export default HeroSection;
