import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CompetitiveProgramming from "./components/CompetitiveProgramming";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import OpenSourceContributions from "./components/OpenSourceContributions";
import Experience from "./components/Experience";

function App() {
  const competitiveProgrammingRef = useRef(null);

  return (
    <div className="bg-black">
      <Navbar />
      <Hero competitiveProgrammingRef={competitiveProgrammingRef} />
      <CompetitiveProgramming ref={competitiveProgrammingRef} />
      <Experience />
      <OpenSourceContributions />
      <Projects />
      <Skills />
      <Contact />
   
    </div>
  );
}

export default App;