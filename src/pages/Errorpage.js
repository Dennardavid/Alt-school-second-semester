import React from "react";
import Err404 from "../assets/pngwing.com.png";
import { useRouteError } from "react-router-dom";
import "./Errorpage.css";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="fullpage">
      <img src={Err404} alt="404" className="errorimg" />
      <h2 className="errorheader">404</h2>
      <p>Ooops page not found....</p>
    </div>
  );
}

export default ErrorPage;
