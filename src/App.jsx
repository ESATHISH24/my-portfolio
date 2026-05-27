import { useState,useRef } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import Footer from './components/Footer.jsx'
import Skills from './components/Skills.jsx'


function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <Header scrollToSection={scrollToSection} />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Education />
      </main>
      <Footer />
    </div>
  );
}

export default App;