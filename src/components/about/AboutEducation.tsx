import React from 'react';
import { GraduationCap, Calendar, Building2 } from 'lucide-react';
import uiu from '../../../public/img/uiu.png';
import dcc from '../../../public/img/dcc.png';
import scpsc from '../../../public/img/scpsc.png';

const AboutEducation = () => {
  const education = [
    {
      degree: "B.Sc. in Computer Science & Engineering",
      institution: "United International University",
      year: "Jan 2020 - Jan 2024",
      description: "Major: Data Science | CGPA: 3.90 (On a scale of 4)",
      logo: uiu,
      theme: "bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/20 dark:to-red-900/20 border-orange-300 dark:border-orange-700",
      iconColor: "text-orange-700 dark:text-orange-400"
    },
    {
      degree: "Higher Secondary School Certificate",
      institution: "Dhaka City College", 
      year: "2017 - 2019",
      description: "Group: Science | GPA: 5.00 (On a scale of 5)",
      logo: dcc,
      theme: "bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-300 dark:border-blue-700",
      iconColor: "text-blue-700 dark:text-blue-400"
    },
    {
      degree: "Secondary School Certificate",
      institution: "Savar Cantonment Public School",
      year: "2015 - 2017", 
      description: "Group: Science | GPA: 5.00 (On a scale of 5)",
      logo: scpsc,
      theme: "bg-gradient-to-br from-red-100 to-pink-100 dark:from-red-900/20 dark:to-pink-900/20 border-red-300 dark:border-red-700",
      iconColor: "text-red-700 dark:text-red-400"
    }
  ];

  return (
    <div className="mt-20">
      <div className="flex items-center mb-8">
        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
          <GraduationCap size={24} className="text-blue-600 dark:text-blue-400" />
        </div>
        <h3 className="text-3xl font-bold text-slate-800 dark:text-white">Education</h3>
      </div>
      
      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
        {education.map((item, index) => (
          <div
            key={index}
            className={`p-6 ${item.theme} rounded-xl hover:shadow-lg transition-all duration-300 border`}
          >
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-lg shadow-md flex items-center justify-center mr-4 border border-gray-200 dark:border-gray-700">
                <img 
                  src={item.logo} 
                  alt={`${item.institution} logo`}
                  className="w-12 h-12 object-contain rounded-md"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <Building2 
                  size={24} 
                  className="text-gray-400 dark:text-gray-500 hidden" 
                  style={{ display: 'none' }}
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <Calendar size={16} className={`${item.iconColor} mr-2`} />
                  <span className={`text-sm font-medium ${item.iconColor}`}>{item.year}</span>
                </div>
              </div>
            </div>
            <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">{item.degree}</h4>
            <p className="text-slate-600 dark:text-slate-300 font-medium mb-2">{item.institution}</p>
            <p className="text-slate-600 dark:text-slate-400 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutEducation;
