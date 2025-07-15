import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ContentGrid from "./components/ContentGrid";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="bg-light min-h-screen font-sans text-dark">
      <Header />
      <Hero />
      <ContentGrid />
      <Projects />
    </div>
  );
}

export default App;
