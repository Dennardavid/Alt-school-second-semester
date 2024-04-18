import React from "react";
import Err404 from "../assets/pngwing.com.png";
import "./Errorpage.css";

function ErrorPage({ error }) {
  return (
    <div className="fullpage">
      <img src={Err404} alt="404" className="errorimg" />
      <h2 className="errorheader">404</h2>
      <p>Ooops page not found....</p>
      {/* <button>Refresh page</button> */}
    </div>
  );
}

export default ErrorPage;
