import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/main";

function Home() {
  /* Home page that displays Navbar, HeroSection and Footer */
  return (
    <>
      <Navbar />
      <HeroSection />
      <Footer />
    </>
  );
}
export default Home;
