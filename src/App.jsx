import React from "react";
import Contact from "./Components/Contact/Contact";
import Intro from "./Components/Intro/Intro";
import Portfolio from "./Components/Portfolio/Portfolio";
import TopBar from "./Components/TopBar/TopBar";
import "./App.scss";

export default function App() {
  return (
    <div className="app">
      <TopBar />
      <div className="section">
        <Intro />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}
