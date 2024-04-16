import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/main";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
}

export default App;
