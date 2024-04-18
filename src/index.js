import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import App from "./App";
// import ErrorPage from "./pages/Errorpage";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./Errorboundary";
// import { ErrorBoundary } from "react-error-boundary";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <ErrorBoundary fallback="<div>Hello I work</div>">
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  </BrowserRouter>
);
