
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Art_Patio",
      description: "Art_patio is a digital platform aimed at bridging the gap between artists, art enthusiasts, and gallery owners. This online art gallery provides a space where artists can upload and showcase their creations, allowing them to reach a wider audience and sell their artworks directly. At the same time, customers can easily browse, select, and purchase pieces of art through the platform. Additionally, gallery owners can use Art_patio to promote and announce upcoming exhibitions or events, making it a comprehensive hub for the art community. The project reflects a strong vision of supporting artistic expression in the digital age while leveraging technology to connect creative individuals.",
      technologies: ["Web Development", "Digital Gallery", "E-commerce"],
      link: "https://github.com/Syed-Eftasum-Alam/Art_patio"
    },
    {
      title: "Pawsitive",
      description: "Pawsitive is a JavaFX-based desktop applications to facilitate pet adoption. The platform allows users to sign up, log in, search for pets, submit adoption requests, and manage a list of favorite animals. It also enables users to add new pets for adoption and automatically sends email notifications upon adoption requests. The user interface is built with JavaFX and SceneBuilder, and the application requires a separate pet server (also available in the developer’s GitHub profile) to function. While the app includes core features like pet listings and email notifications, it currently lacks a built-in chat system for real-time communication between adopters and pet owners",
      technologies: ["JavaFX", "SceneBuilder", "Desktop Application"],
      link: "https://github.com/Syed-Eftasum-Alam/Pawsitive"
    },
    {
      title: "Currency-Converter",
      description: "Currency Converter is a lightweight command-line application developed in pure C . Designed for Windows systems, it offers real-time currency conversion using free APIs, enabling users to convert between various currencies, view historical exchange rates, and receive notifications on rate changes. The application supports features like viewing the highest rates from history and accessing full exchange rate histories. However, due to limitations of the free API used, historical data is restricted to the past year, and rates for volatile currencies like Bitcoin may not always be up-to-date. The project includes a MainMenu.c file for compilation, and utilizes external libraries such as rlutil and cJSON for enhanced functionality. It's a practical tool for users seeking a straightforward currency conversion utility without the need for a graphical interface",
      technologies: ["C Programming", "CLI", "Financial Tools"],
      link: "https://github.com/Syed-Eftasum-Alam/Currency-Converter"
    },
    {
      title: "HireHub",
      description: "HireHub is a streamlined job platform connecting employers with qualified candidates quickly and efficiently. It offers intuitive job posting, smart candidate matching, and seamless application tracking to simplify the hiring process for businesses and job seekers alike.",
      technologies: ["Job Platform", "Web Development", "Matching Algorithm"],
      link: "https://github.com/Syed-Eftasum-Alam/HireHub"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">Academic Projects</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Personal and academic development projects showcasing various programming skills and technologies
          </p>
          <div className="mt-8">
            <a
              href="https://github.com/Syed-Eftasum-Alam"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
            >
              <Github size={20} className="mr-2" />
              <span className="font-medium">View All Projects on GitHub</span>
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-50 dark:bg-slate-800 rounded-xl p-8 hover:bg-white dark:hover:bg-slate-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-slate-100 dark:border-slate-700"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <Github size={24} className="text-blue-600 dark:text-blue-400" />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">
                {project.title}
              </h3>            <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed text-justify">
                {project.description}
              </p>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                >
                  <Github size={16} className="mr-2" />
                  <span className="text-sm font-medium">View on GitHub</span>
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-slate-600 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 transition-colors duration-200"
                >
                  <ExternalLink size={16} className="mr-2" />
                  <span className="text-sm font-medium">Learn More</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
