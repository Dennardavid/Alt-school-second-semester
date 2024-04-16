import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import MyRepos from "./pages/myrepos";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myrepos" element={<MyRepos />} />
      </Routes>
    </div>
  );
}

export default App;
