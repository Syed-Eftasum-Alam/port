
import React from 'react';
import { Calendar, Award, Users, Building2, ExternalLink } from 'lucide-react';
import { ExperienceData } from './types/experienceTypes';

interface ExperienceCardProps {
  data: ExperienceData;
  experienceKey: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ data, experienceKey }) => {
  return (
    <div className={`p-8 ${data.theme} border rounded-2xl hover:shadow-xl transition-all duration-300`}>
      <div className="mb-6">
        <div className="flex items-center mb-4">
          {data.logo && (
            <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-lg shadow-md flex items-center justify-center mr-4 border border-gray-200 dark:border-gray-700">
              <img 
                src={data.logo} 
                alt={`${data.organization} logo`}
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
          )}          <div className="flex-1">
            <h4 className="text-2xl font-bold text-slate-800 dark:text-white">{data.position}</h4>
            <p className="text-slate-600 dark:text-slate-300 font-medium">{data.department}</p>
            <div className="flex items-center justify-between">
              <p className="text-slate-500 dark:text-slate-400 text-sm">{data.organization}</p>
              {data.profileUrl && (
                <a
                  href={data.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 text-sm font-medium"
                >
                  <span className="mr-1">View Profile</span>
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          </div>
        </div>
        
        <div className="flex items-center mb-4">
          <Calendar size={16} className="mr-2 text-blue-600 dark:text-blue-400" />
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{data.year}</span>
        </div>

        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{data.description}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h5 className="text-lg font-semibold text-slate-800 dark:text-white mb-4 flex items-center">
            <div className={`w-6 h-6 ${data.iconTheme} rounded-lg flex items-center justify-center mr-3`}>
              <Award size={14} />
            </div>
            {experienceKey === 'teachingAssistant' ? 'Affiliated Courses' : 'Courses Conducted'}
          </h5>
          <ul className="space-y-2">
            {data.achievements.map((achievement, index) => (
              <li key={index} className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="text-lg font-semibold text-slate-800 dark:text-white mb-4 flex items-center">
            <div className={`w-6 h-6 ${data.iconTheme} rounded-lg flex items-center justify-center mr-3`}>
              <Users size={14} />
            </div>
            Core Responsibilities
          </h5>
          <ul className="space-y-2">
            {data.responsibilities.map((responsibility, index) => (
              <li key={index} className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{responsibility}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
