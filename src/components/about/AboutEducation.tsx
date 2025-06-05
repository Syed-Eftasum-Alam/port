
import React from 'react';
import { GraduationCap, Calendar, Building2 } from 'lucide-react';

const AboutEducation = () => {
  const education = [
    {
      degree: "B.Sc. in Computer Science & Engineering",
      institution: "United International University",
      year: "Jan 2020 - Jan 2024",
      description: "Major: Data Science | CGPA: 3.90 (On a scale of 4)",
      logo: "/lovable-uploads/094d510f-061d-444c-8355-679f43fd37da.png",
      theme: "bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/20 dark:to-red-900/20 border-orange-300 dark:border-orange-700",
      iconColor: "text-orange-700 dark:text-orange-400"
    },
    {
      degree: "Higher Secondary School Certificate",
      institution: "Dhaka City College", 
      year: "2017 - 2019",
      description: "Group: Science | GPA: 5.00 (On a scale of 5)",
      logo: "/lovable-uploads/7d7dc953-c98f-4fb7-89f9-eb2149de0e9d.png",
      theme: "bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 border-green-300 dark:border-green-700",
      iconColor: "text-green-700 dark:text-green-400"
    },
    {
      degree: "Secondary School Certificate",
      institution: "Savar Cantonment Public School",
      year: "2015 - 2017", 
      description: "Group: Science | GPA: 5.00 (On a scale of 5)",
      logo: "/lovable-uploads/fe728535-f4a2-487b-bd37-864fe8ad70e1.png",
      theme: "bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 border-blue-300 dark:border-blue-700",
      iconColor: "text-blue-700 dark:text-blue-400"
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
