import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll) * 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen text-[#f0f0f0] bg-[#050505] selection:bg-cyan-500/30 selection:text-cyan-200 tech-bg overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-600 z-[9999] shadow-[0_0_8px_rgba(255,80,0,0.5)] transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
      
      {/* Background Enhancements */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-transparent via-[#050505]/80 to-[#0a0a0a] pointer-events-none" />
      <ParticleBackground />
      
      <div className="relative z-10 w-full">
        <Navbar />
        <main className="container mx-auto px-6 md:px-12 max-w-7xl overflow-hidden">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Experience />
          <Certificates />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
