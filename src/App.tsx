import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/hero";

function App() {
  return (
    <div className="min-h-screen bg-light text-dark font-sans">
      <Header />
      <Hero />
    </div>
  );
}

export default App;
