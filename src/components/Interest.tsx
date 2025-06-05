import React from 'react';
import { BookOpen, Heart, Brain, Code, Database, Globe, Music, Camera, Gamepad2, Coffee, Dumbbell, Book, ExternalLink } from 'lucide-react';

interface InterestItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  tags?: string[];
  link?: string;
}

const Interest = () => {
  const researchInterests: InterestItem[] = [
    {
      title: "Artificial Intelligence & Machine Learning",
      description: "Exploring deep learning algorithms, neural networks, and their applications in solving real-world problems.",
      icon: <Brain size={24} className="text-blue-600 dark:text-blue-400" />,
      tags: ["Deep Learning", "Neural Networks", "Computer Vision", "NLP"]
    },
    {
      title: "Internet of Things (IoT)",
      description: "Developing smart systems and connected devices for automation and data collection in various domains.",
      icon: <Globe size={24} className="text-green-600 dark:text-green-400" />,
      tags: ["Smart Systems", "Sensors", "Automation"]
    },
    {
      title: "Data Science & Analytics",
      description: "Analyzing large datasets to extract meaningful insights and patterns for decision-making processes.",
      icon: <Database size={24} className="text-purple-600 dark:text-purple-400" />,
      tags: ["Big Data", "Data Mining", "Statistical Analysis", "Visualization"]
    },
 
  ];

  const hobbies: InterestItem[] = [
    {
      title: "Music & Audio",
      description: "Hearing various genres",
      icon: <Music size={24} className="text-red-600 dark:text-red-400" />
    },    {
      title: "Photography",
      description: "Capturing moments through lens, exploring nature photography, street photogrphy and digital photo editing.",
      icon: <Camera size={24} className="text-indigo-600 dark:text-indigo-400" />,
      link: "https://www.flickr.com/photos/193843476@N02/"
    },
    {
      title: "Gaming",
      description: "FPS games, strategy games, and sports games. Enjoying the immersive experiences and challenges they offer.",
      icon: <Gamepad2 size={24} className="text-pink-600 dark:text-pink-400" />,
      link: "https://steamcommunity.com/id/spixiiii/"
    },

  ];

  return (
    <section id="interest" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">Interests</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A glimpse into my research passions and personal hobbies that drive my curiosity and creativity.
          </p>
        </div>

        {/* Research Interest Section */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <BookOpen size={32} className="text-blue-600 dark:text-blue-400 mr-4" />
            <h3 className="text-3xl font-bold text-slate-800 dark:text-white">Research Interest</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {researchInterests.map((interest, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center mr-4">
                    {interest.icon}
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 dark:text-white">{interest.title}</h4>
                </div>
                
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed text-justify mb-4">
                  {interest.description}
                </p>
                
                {interest.tags && (
                  <div className="flex flex-wrap gap-2">
                    {interest.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Hobby Section */}
        <div>
          <div className="flex items-center mb-8">
            <Heart size={32} className="text-red-600 dark:text-red-400 mr-4" />
            <h3 className="text-3xl font-bold text-slate-800 dark:text-white">Hobbies</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hobbies.map((hobby, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center mr-4">
                    {hobby.icon}
                  </div>
                  <h4 className="text-lg font-bold text-slate-800 dark:text-white">{hobby.title}</h4>
                </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed text-justify">
                  {hobby.description}
                </p>
                  {hobby.link && (
                  <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-600">
                    <a
                      href={hobby.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors duration-200 text-sm font-medium"
                    >
                      {hobby.link.includes('flickr.com') && (
                        <>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                            <path d="M5.5 8.5c-1.933 0-3.5 1.567-3.5 3.5s1.567 3.5 3.5 3.5 3.5-1.567 3.5-3.5-1.567-3.5-3.5-3.5zm13 0c-1.933 0-3.5 1.567-3.5 3.5s1.567 3.5 3.5 3.5 3.5-1.567 3.5-3.5-1.567-3.5-3.5-3.5z"/>
                          </svg>
                          <span>View on Flickr</span>
                        </>
                      )}
                      {hobby.link.includes('steamcommunity.com') && (
                        <>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                            <path d="M12 2.4L5.4 14.4l1.2.8 4.8-8.4V2.4zm0 0v4.4l4.8 8.4 1.2-.8L12 2.4zM8.4 15.6l-1.2.8c.8 1.2 2.4 2 4 2h1.6c1.6 0 3.2-.8 4-2l-1.2-.8c-.4.8-1.2 1.2-2.8 1.2h-1.6c-1.6 0-2.4-.4-2.8-1.2z"/>
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                          </svg>
                          <span>View on Steam</span>
                        </>
                      )}
                      {!hobby.link.includes('flickr.com') && !hobby.link.includes('steamcommunity.com') && (
                        <>
                          <span>View Gallery</span>
                          <ExternalLink size={14} className="ml-1" />
                        </>
                      )}
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          
        </div>
      </div>
    </section>
  );
};

export default Interest;
