import React from 'react';
import { Trophy, Award, Medal, Star, Target, Zap, ExternalLink } from 'lucide-react';

interface Achievement {
  title: string;
  organization: string;
  year: string;
  description: string;
  type: 'award' | 'recognition' | 'certification' | 'competition' | 'scholarship' | 'publication';
  icon?: React.ReactNode;
  link?: string;
  badgeLink?: string;
}

const Achievements = () => {
  const achievements: Achievement[] = [  {
      title: "Scholarship for Academic Excellence",
      organization: "United International University",
      year: "2020-2024",
      description: "Achieved academic excellence with outstanding GPA performance throughout the academic year. Maintained a CGPA of 3.90+ in CSE program.\n\n• Received 100% scholarship on the basis of my result in 5 trimesters\n• Received 50% scholarship on the basis of my result in 3 trimesters\n• 25% scholarship on the basis of my result in 1 trimester",
      type: "scholarship",
      icon: <Star size={24} className="text-blue-600 dark:text-blue-400" />,
      link: "https://drive.google.com/file/d/1t3O5lMVXxydtAkKK77XdC365CMUyTmoG/view?usp=sharing"
    },
    {
      title: "Achieved CCNA Badge : Introduction to Networks",
      organization: "Cisco Networking Academy", 
      year: "2023",
      description: "Completed The Introduction to Networks course which was arraged by cisco & got full scholarship on that course. Passed the final exam obtaining 90% marks.",
      type: "certification",
      icon: <Award size={24} className="text-green-600 dark:text-green-400" />,
      link: "https://drive.google.com/file/d/1BKjiA5nNTNnMTxI7V5KxGEhwHM1o56I1/view",
      badgeLink: "https://www.credly.com/badges/4b6eaea7-f63f-4d20-858c-03f3aa69ca25/public_url"
    },
    {
      title: "Project Show Champion Spring 2023",
      organization: "United International University",
      year: "2023",
      description: "Compete against 30+ teams and we came out on top with our project in System Analysis and Design course.",
      type: "competition",
      icon: <Medal size={24} className="text-purple-600 dark:text-purple-400" />,
      link: "https://drive.google.com/file/d/1OOnAaUWEdhVje-I0ON9RX8I3KCMvkJEM/view?usp=sharing"
    },
    {
      title: "Published Research Papers",
      organization: "IEEE Xplore & MDPI",
      year: "2023",
      description: "Successfully published multiple research papers in prestigious journals and conferences in AI and IoT domains.",
      type: "publication",
      icon: <Zap size={24} className="text-indigo-600 dark:text-indigo-400" />,
      link: "https://drive.google.com/file/d/1YeVQ3hu9BCol5M0qYlf5p8wIKpq4qp-H/view"
    }
  ];

  const getTypeColor = (type: string) => {
    const colors = {
      award: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
      recognition: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      certification: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      competition: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
      scholarship: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
      publication: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
  };

  return (
    <section id="achievements" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">Achievements</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Recognition and milestones that reflect dedication, excellence, and continuous growth in academics and research.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white dark:bg-slate-700 rounded-lg flex items-center justify-center mr-4 shadow-md">
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${getTypeColor(achievement.type)}`}>
                    {achievement.type.charAt(0).toUpperCase() + achievement.type.slice(1)}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                {achievement.title}
              </h3>

              <div className="mb-3">
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  {achievement.organization}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {achievement.year}
                </p>              </div>              <div className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed text-justify">
                {achievement.description.split('\n').map((paragraph, idx) => (
                  <p key={idx} className={idx > 0 ? 'mt-3' : ''}>
                    {paragraph}
                  </p>
                ))}
              </div>

              {(achievement.link || achievement.badgeLink) && (
                <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-600">
                  <div className="flex flex-wrap gap-3">
                    {achievement.link && (
                      <a
                        href={achievement.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200 text-sm font-medium"
                      >
                        <span>View Certificate</span>
                        <ExternalLink size={14} className="ml-1" />
                      </a>
                    )}
                    {achievement.badgeLink && (
                      <a
                        href={achievement.badgeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 transition-colors duration-200 text-sm font-medium"
                      >
                        <span>View Badge</span>
                        <ExternalLink size={14} className="ml-1" />
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
        
        </div>
      </div>
    </section>
  );
};

export default Achievements;
