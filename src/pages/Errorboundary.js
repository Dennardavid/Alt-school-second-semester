import Errorpic from "../assets/pngwing.com.png";
import "./Errorpage.css";

function ErrorFetchingPage() {
  return (
    <div className="fullpage">
      <img src={Errorpic} alt="Error" className="errorimg " />
      <h1 className="errorheader">Error!!</h1>
      <p>There was an error fetching page...</p>
    </div>
  );
}

export default ErrorFetchingPage;
