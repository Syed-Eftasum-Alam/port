
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Research from '../components/Research';
import Projects from '../components/Projects';
import Achievements from '../components/Achievements';
import Interest from '../components/Interest';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-200">
      <Header />
      <Hero />
      <About />
      <Research />
      <Projects />
      <Skills />
      <Achievements />
      <Interest />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
