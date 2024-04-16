import React from "react";
import Dennar from "../assets/me.jpg";
import "./main.css";
import RepoListComponent from "./repolist";

function HeroSection() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p>My name is</p>
          <h1 className="my_name">DENNAR DAVID</h1>
          <div className="job-desc">
            <p>I am a Frontend developer</p>
          </div>
        </div>
        <div>
          <img src={Dennar} alt="David Dennar" className="soft-boy" />
        </div>
      </section>
      <RepoListComponent />
    </main>
  );
}

export default HeroSection;
