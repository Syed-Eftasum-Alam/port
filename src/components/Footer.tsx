
import React from 'react';
import { Heart, Mail, Linkedin, Github, MapPin, GraduationCap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 dark:bg-slate-950 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Syed Eftasum Alam</h3>
            <p className="text-slate-300 dark:text-slate-400 mb-4 leading-relaxed">
              Lecturer at Daffodil International University, passionate about computer science education 
              and fostering innovation in technology.
            </p>
            <div className="flex items-center text-slate-300 dark:text-slate-400">
              <MapPin size={16} className="mr-2" />
              <span className="text-sm">Dhaka, Bangladesh</span>
            </div>
          </div>

          <div>
{/*             <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-slate-300 dark:text-slate-400 hover:text-white transition-colors duration-200">Home</a></li>
              <li><a href="#about" className="text-slate-300 dark:text-slate-400 hover:text-white transition-colors duration-200">About</a></li>
              <li><a href="#skills" className="text-slate-300 dark:text-slate-400 hover:text-white transition-colors duration-200">Skills</a></li>
              <li><a href="#research" className="text-slate-300 dark:text-slate-400 hover:text-white transition-colors duration-200">Research</a></li>
              <li><a href="#projects" className="text-slate-300 dark:text-slate-400 hover:text-white transition-colors duration-200">Projects</a></li>
              <li><a href="#contact" className="text-slate-300 dark:text-slate-400 hover:text-white transition-colors duration-200">Contact</a></li>
            </ul> */}
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
            <div className="flex space-x-4 mb-4">
              <a
                href="mailto:syed.efta@gmail.com"
                className="w-10 h-10 bg-slate-700 dark:bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/syed-eftasum-alam/"
                className="w-10 h-10 bg-slate-700 dark:bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/Syed-Eftasum-Alam"
                className="w-10 h-10 bg-slate-700 dark:bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href="https://scholar.google.com/citations?user=jSP5lHUAAAAJ"
                className="w-10 h-10 bg-slate-700 dark:bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors duration-200"
              >
                <GraduationCap size={20} />
              </a>
            </div>
            <p className="text-slate-300 dark:text-slate-400 text-sm">
              Feel free to reach out for academic collaborations, research opportunities, or professional discussions.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-700 dark:border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400 dark:text-slate-500 text-sm mt-2">
            <p>
            
            </p>
            © {new Date().getFullYear()} Syed Eftasum Alam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
