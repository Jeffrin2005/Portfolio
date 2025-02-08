import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CompetitiveProgramming from "./components/CompetitiveProgramming";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import About from "./components/About";
import Interests from "./components/Interests";
import Portfolio from "./components/Portfolio";
import OpenSourceContributions from "./components/OpenSourceContributions";

function App() {
  const competitiveProgrammingRef = useRef(null);

  return (
    <div className="bg-black">
      <Navbar />
      <Hero competitiveProgrammingRef={competitiveProgrammingRef} />
      <CompetitiveProgramming ref={competitiveProgrammingRef} />
      <OpenSourceContributions />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;