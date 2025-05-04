export interface ProfileType {
  id: string;
  name: string;
  headline: string;
  avatarUrl: string;
  location: string;
  connectionCount: number;
  currentCompany: string;
  education: string;
  about: string;
  experiences: Experience[];
  educations: Education[];
  skills: Skill[];
  recommendations: Recommendation[];
  availability: Availability;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  companyLogo: string;
  duration: string;
  location: string;
  description?: string;
  startDate: string;
  endDate: string;
  skills: string[];
}

export interface Education {
  id: string;
  institution: string;
  logo: string;
  degree: string;
  years: string;
  description?: string;
  startDate: string;
  endDate: string;
  skills: string[];
}

export interface Skill {
  id: string;
  name: string;
  endorsements: number;
  videoEndorsements: VideoEndorsement[];
  firstLearned: string;
  lastUsed: string;
}

export interface VideoEndorsement {
  id: string;
  endorserName: string;
  endorserTitle: string;
  endorserAvatar: string;
  videoUrl: string;
  date: string;
}

export interface Recommendation {
  id: string;
  recommenderName: string;
  recommenderTitle: string;
  recommenderAvatar: string;
  text: string;
  date: string;
}

export interface Availability {
  isAvailable: boolean;
  availableDates: string[];
  preferredHours: {
    start: string;
    end: string;
  };
}