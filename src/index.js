import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ErrorFetchingPage from "./pages/Errorboundary";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ErrorBoundary
    FallbackComponent={<ErrorFetchingPage />}
    onError={() => {
      console.log("An error occurred");
    }}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ErrorBoundary>
);
