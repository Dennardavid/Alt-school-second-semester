import React from "react";
import { useEffect, useState } from "react";
import "./repolist.css";

function RepoListComponent() {
  /* Use state */
  const [repo, userRepo] = useState([]);

  const fetchMyRepos = () => {
    fetch(`https://api.github.com/users/Dennardavid/repos`)
      .then((response) => response.json())
      .then((data) => {
        userRepo(data);
      });
  };

  useEffect(() => {
    fetchMyRepos();
  }, []);

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
    </section>
  );
}

export default RepoListComponent;
