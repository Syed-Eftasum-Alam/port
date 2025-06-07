
import React from 'react';
import { GraduationCap, BookOpen, Users, Award } from 'lucide-react';

const AboutHighlights = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description: "Committed to delivering high-quality education in computer science"
    },
    {
      icon: BookOpen,
      title: "Research Focus",
      description: "Active researcher in emerging technologies like Computer Vision, Deep Learning and VLM"
    },
    {
      icon: Users,
      title: "Student Mentorship",
      description: "Dedicated to guiding students towards successful careers in technology"
    },
    {
      icon: Award,
      title: "Professional Growth",
      description: "Continuously updating knowledge with latest industry trends"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {highlights.map((item, index) => (
        <div
          key={index}
          className="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl hover:bg-blue-50 dark:hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
        >
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
            <item.icon size={24} className="text-blue-600 dark:text-blue-400" />
          </div>
          <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">{item.title}</h4>
          <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutHighlights;
