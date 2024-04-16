import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Dennar from "./assets/me.jpg";
import HeroSection from "./components/main";
import RepoList from "./components/repolist";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <RepoList />
      <Footer />
    </div>
  );
}

export default App;
