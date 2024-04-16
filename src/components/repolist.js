import React from "react";
import { useEffect, useState } from "react";
import "./repolist.css";

function RepoListComponent() {
  /* states */
  const [repo, setUserRepo] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [prevPage, setPrevPage] = useState();

  /* API fetch n */
  const fetchMyRepos = () => {
    fetch(
      `https://api.github.com/users/Dennardavid/repos?per_page=12&page=${currentPage}`
    )
      .then((response) => response.json())
      .then((data) => {
        setUserRepo(data);
      });
  };

  useEffect(() => {
    fetchMyRepos();
  }, [currentPage]);

  const repoElements = repo.map((repoElement) => {
    return (
      <article className="card" key={repoElement.id}>
        <h2 className="repoheader">{repoElement.name}</h2>
        <p className="Language">
          Langauge:{" "}
          {repoElement.language === null ? "none" : repoElement.language}
        </p>
        <p className="date">Date created: {repoElement.created_at}</p>
        <p className="visibility">Visibility: {repoElement.visibility}</p>
      </article>
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
      <div className="buttondiv">
        <button
          onClick={() => setPrevPage(currentPage - 1)}
          className="page_buttons"
        >
          Previous page
        </button>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          className="page_buttons"
        >
          next page
        </button>
      </div>
    </section>
  );
}

export default RepoListComponent;
