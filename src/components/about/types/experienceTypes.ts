
export interface ExperienceData {
  position: string;
  organization: string;
  department: string;
  year: string;
  description: string;
  theme: string;
  iconTheme: string;
  achievements: string[];
  responsibilities: string[];
  logo?: string;
  profileUrl?: string;
}

export type ExperienceKeys = 'lecturer' | 'Instructor' | 'Instructor_SPL' | 'teachingAssistant';
