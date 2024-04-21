import React from "react";
import Err404 from "../assets/pngwing.com.png";
import { useRouteError, Link } from "react-router-dom";
import "./Errorpage.css";

function ErrorPage() {
  /* 404 error page return when a non primary route is entered */
  const error = useRouteError();
  console.error(error);

  return (
    <div className="fullpage">
      <img src={Err404} alt="404" className="errorimg" />
      <h2 className="errorheader">404</h2>
      <p>Ooops page not found....</p>
      <Link to="/">
        <button className="page_buttons">Back to home</button>
      </Link>
    </div>
  );
}

export default ErrorPage;
