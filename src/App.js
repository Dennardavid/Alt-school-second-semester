import "./App.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import MyRepos from "./pages/myrepos";
import ErrorPage from "./pages/Errorpage";
import RepoDetails from "./pages/repodetails";

function App() {
  /* Page routing using react-router-dom */
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/myrepos",
      element: <MyRepos />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/repodetails/:id",
      element: <RepoDetails />,
      errorElement: <ErrorPage />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
