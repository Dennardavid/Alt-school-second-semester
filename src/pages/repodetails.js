import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";
import "../App.css";
import { FaCodeFork, FaEye, FaGithub, FaRegStar } from "react-icons/fa6";

function RepoDetails() {
  /* States used in the code */
  const { id } = useParams();
  const [details, setDetails] = useState({});

  /* Use effeect to fetch repo details by id */
  useEffect(() => {
    fetch(`https://api.github.com/repos/Dennardavid/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setDetails(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  /* Return of each repo details on a single page as a card */
  return (
    <div id="repodetail">
      <Navbar />
      <div className="repodetail-card">
        <section className="repo_card">
          <div className="just">
            <FaGithub className="justimg" />
          </div>

          <h1 className="repo-name">{details.name}</h1>
          <div className="repo-mini-details">
            <p className="repo-stats">
              <FaRegStar />
              Stars: {details.stargazers_count}
            </p>
            <p className="repo-stats">
              <FaEye />
              Watch: {details.watchers}
            </p>
            <p className="repo-stats">
              <FaCodeFork />
              Forks: {details.forks}
            </p>
          </div>
          <p>
            Main Language:{" "}
            {details.language === null ? "none" : details.language}
          </p>
          <p>License: {details.license === null ? "none" : details.license}</p>
          <p>Date created: {details.created_at}</p>
          <p>Visibility: {details.visibility}</p>

          {/* Button to view repo on github */}
          <div className="buttondiv">
            <button className="page_buttons">
              <a
                href={`https://github.com/${details.full_name}`}
                target="_blank"
                rel="noreferrer"
                className="viewongit"
              >
                View on Github
              </a>
            </button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default RepoDetails;
