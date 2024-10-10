
export interface SvgIconProps {
    color: string;
    width: string;
  }

 export interface UseFieldProps {
    type: string;
    validate?: (value: string) => boolean;
}

export interface ModalProps {
  text: string;
  onClose: () => void;
}

export interface ExperienceData {
  id: number; 
  role: string;
  organisation: string;
  startDate: string;
  endDate: string;
  experiences: string;
  imageSrc: string;
  link: string;
  referenceLink?: string; 
}

export interface MessageData {
  name: string;
  email: string;
  message: string;
}

export interface Project {
  title: string;
  category: string;
  imageSrc: string;
  description: string;
  skills: string[];
  gitLinkFront: string;
  gitLinkBack: string;
}

export interface ProjectProps {
  project: Project;
}