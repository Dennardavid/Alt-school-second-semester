import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function RepoDetails() {
  const { id } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    fetch(`https://api.github.com/repos/Dennardavid/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setDetails(data);
      });
  }, []);

  return (
    <div id="repodetail">
      <div className="repodetail-card">
        <h2 className="repo-name">{details.name}</h2>
        <div className="repo-mini-details">
          <p>Stars: {details.stargazers_count}</p>
          <p>Watch: {details.watchers}</p>
          <p>Forks: {details.forks}</p>
        </div>
        <p>
          Main Language: {details.language === null ? "none" : details.language}
        </p>
        {/* <p>
          Live site:{" "}
          {deployment.length === 0 ? (
            `none`
          ) : (
            <a href={`https://mbonamensa.github.io/${details.name}`}>
              mbonamensa.github.io/{details.name}
            </a>
          )}
        </p> */}
        <p>
          <a href={`https://github.com/${details.full_name}`}>View on Github</a>
        </p>
      </div>
    </div>
  );
}

export default RepoDetails;
