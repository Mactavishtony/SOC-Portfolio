import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-cyber-black text-white min-h-screen selection:bg-cyber-primary selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
      </main>
      <Contact />
    </div>
  );
}

export default App;