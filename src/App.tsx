import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ContentGrid from "./components/ContentGrid";
import Projects from "./components/Projects";
import TopNav from "./components/TopNav";
import { Toaster } from "sonner";

function App() {
  return (
    <div className="bg-light min-h-screen font-sans text-dark">
      <Toaster richColors />
      <TopNav />
      <Header />
      <Hero />
      <ContentGrid />
    </div>
  );
}

export default App;
