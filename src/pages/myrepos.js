import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RepoListComponent from "../components/repolist";

function MyRepos() {
  return (
    <>
      <Navbar />
      <RepoListComponent />
      <Footer />
    </>
  );
}

export default MyRepos;
