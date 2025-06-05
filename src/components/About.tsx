
import React from 'react';
import AboutHighlights from './about/AboutHighlights';
import AboutEducation from './about/AboutEducation';
import AboutExperience from './about/AboutExperience';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
        </div>        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
              Computer Science graduate and university lecturer with expertise in team management, 
              problem-solving, and exploring emerging fields like Artificial Intelligence and Deep Learning.
            </p>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
              I am enthusiastic about embracing technological advancements and contributing to 
              innovative solutions that address practical challenges.
            </p>

            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
              I believe in fostering an environment of curiosity, innovation, and collaborative 
              learning, where students are encouraged to think critically and develop solutions 
              to real-world problems.
            </p>
          </div>

          <AboutHighlights />
        </div>

        <AboutEducation />
        <AboutExperience />
      </div>
    </section>
  );
};

export default About;
