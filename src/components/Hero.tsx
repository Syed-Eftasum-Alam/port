
import React from 'react';
import { ChevronDown, Mail, Linkedin, Github, GraduationCap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img
                src="/img/d5dbd55f-c822-4fc4-b2de-70c3c6bd086b.png"
                alt="Syed Eftasum Alam"
                className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover shadow-2xl border-4 border-white dark:border-slate-700"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent to-blue-600/20 dark:to-blue-400/20"></div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 dark:text-white mb-6 leading-tight">
            Syed Eftasum
            <span className="block text-blue-600 dark:text-blue-400">Alam</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-4 font-light">
            Lecturer, Department of Computer Science & Engineering
          </p>
          
          <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 mb-8">
            Daffodil International University
          </p>
          
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate educator and researcher dedicated to advancing computer science education 
            and fostering innovation in technology.
          </p>

          <div className="flex justify-center space-x-6 mb-16">
            <a
              href="#contact"
              className="bg-blue-600 dark:bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </a>
            <a
              href="#about"
              className="border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-400 hover:text-white dark:hover:text-slate-900 transition-all duration-200 transform hover:scale-105"
            >
              Learn More
            </a>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="mailto:syed.efta@gmail.com" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
              <Mail size={24} />
            </a>
            <a href="https://www.linkedin.com/in/syed-eftasum-alam/" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/Syed-Eftasum-Alam" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
              <Github size={24} />
            </a>
            <a href="https://scholar.google.com/citations?user=jSP5lHUAAAAJ" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
              <GraduationCap size={24} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
