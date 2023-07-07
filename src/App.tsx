import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutMePage from "./pages/AboutMePage";
import PortfolioPage from "./pages/PortfolioPage";
import Project3QHMPage from "./pages/Project3QHMPage";
import Project2KeepSharingPage from "./pages/Project2KeepSharingPage";
import Project1GetOutPage from "./pages/Project1GetOutPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <HomePage /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutme" element={<AboutMePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route
          path="/portfolio/queerhistorymonth"
          element={<Project3QHMPage />}
        />
        <Route
          path="/portfolio/keepsharing"
          element={<Project2KeepSharingPage />}
        />
        <Route path="/portfolio/getout" element={<Project1GetOutPage />} />
      </Routes>
    </div>
  );
}

export default App;
