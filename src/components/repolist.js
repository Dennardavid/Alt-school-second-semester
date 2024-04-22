import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./repolist.css";
import { FaGithub } from "react-icons/fa6";

function RepoListComponent() {
  /* states used in the code */
  const [repo, setUserRepo] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [, setPrevPage] = useState(currentPage);

  /* API fetch to return 12 repos on the current page */
  const fetchMyRepos = () => {
    fetch(
      `https://api.github.com/users/Dennardavid/repos?per_page=12&page=${currentPage}`
    )
      .then((response) => response.json())
      .then((data) => {
        setUserRepo(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /* useEffect calling the fetched repo */
  useEffect(() => {
    fetchMyRepos();
  }, [currentPage]);

  /* Mapping through the fetched repos and returning them in articles  */
  const repoElements = repo.map((repoElement) => {
    return (
      <Link
        key={repoElement.id}
        to={`/repodetails/${repoElement.name}`}
        className="repolink"
      >
        <article className="card" key={repoElement.id}>
          <div className="just">
            <FaGithub className="justimg" />
          </div>

          <h2 className="repoheader">{repoElement.name}</h2>
          <p className="visibility">Visibility: {repoElement.visibility}</p>
          <div className="buttondiv">
            <button className="page_buttons">View details</button>
          </div>
        </article>
      </Link>
    );
  });

  return (
    <section className="repos">
      <u>
        <h2 className="repo_header">
          <span>MY</span> REPOSITORIES
        </h2>
      </u>
      <section className="repo-container">{repoElements}</section>

      {/* Buttons to handle pagination */}
      <div className="buttondiv">
        <button
          onClick={() => {
            if (currentPage > 1) {
              setPrevPage(currentPage - 1);
              setCurrentPage(currentPage - 1);
            }
          }}
          className="page_buttons below"
        >
          Previous page
        </button>

        <button
          onClick={() => {
            if (currentPage < 4) {
              setCurrentPage(currentPage + 1);
            }
          }}
          className="page_buttons below"
        >
          next page
        </button>
      </div>
    </section>
  );
}

export default RepoListComponent;
