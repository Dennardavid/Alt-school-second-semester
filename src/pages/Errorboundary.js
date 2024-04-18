import Errorpic from "../assets/pngwing.com.png";

function ErrorFetchingPage() {
  return (
    <div>
      <img src={Errorpic} alt="Error" />
      <h1>Error!!</h1>
      <p>There was an error fetching page...</p>
    </div>
  );
}

export default ErrorFetchingPage;
