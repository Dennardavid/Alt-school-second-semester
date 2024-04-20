import "./App.css";
import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home";
import MyRepos from "./pages/myrepos";
import ErrorPage from "./pages/Errorpage";
import RepoDetails from "./pages/repodetails";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements([
      <Route path="/" element={<Home />} />,
      <Route path="/myrepos" element={<MyRepos />} />,
      <Route path="/repodetails">
        <Route path=":id" element={<RepoDetails />} />,
        <Route path="*" element={<ErrorPage />} />,
      </Route>,
      <Route path="*" element={<ErrorPage />} />,
    ])
  );
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
