import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RepoListComponent from "../components/repolist";
import "../App.css";

function MyRepos() {
  return (
    <div className="repopage">
      <Navbar />
      <RepoListComponent />
      <Footer />
    </div>
  );
}

export default MyRepos;
