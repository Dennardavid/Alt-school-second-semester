import Errorpic from "../assets/pngwing.com.png";
import "./Errorpage.css";

function ErrorFetchingPage({ error }) {
  /* Error boundary to return incase of code break */
  return (
    <div className="fullpage">
      <img src={Errorpic} alt="Error" className="errorimg " />
      <h1 className="errorheader">Error!!</h1>
      <p>{error.message}</p>
    </div>
  );
}

export default ErrorFetchingPage;
