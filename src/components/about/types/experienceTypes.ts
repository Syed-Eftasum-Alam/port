export interface ExperienceData {
  position: string;
  organization: string;
  department: string;
  year: string;
  description: string;
  theme: string;
  iconTheme: string;
  Conducted_Courses: string[];
  responsibilities: string[];
  logo?: string;
  profileUrl?: string;
  contentsCovered?: string[];
}

export type ExperienceKeys = 'lecturer' | 'Instructor' | 'Instructor_SPL' | 'teachingAssistant';
