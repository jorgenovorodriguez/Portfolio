import { ReactNode } from "react";

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

export interface TechItemProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

export interface MessageData {
  name: string;
  email: string;
  message: string;
}

export interface ProjectData {
  title: string;
  category: string;
  imageSrc: string;
  description: string;
  skills: string[];
  gitLinkFront: string;
  gitLinkBack?: string;
}

export interface ProjectProps {
  project: ProjectData;
}

export interface NavigationButtonProps {
  direction: 'left' | 'right'; 
  onClick: () => void;
  hidden: boolean; 
}

export interface FooterLinkProps {
  iconSrc: string;
  altText: string;
  text: string;
  href?: string;
}

export interface NavItemProps {
  Icon: React.FC<{ color: string; width: string }>;
  label: string;
  href: string;
  width?: string;
}

export interface ErrorContextType {
  setError: (message: string) => void;
}

export interface ErrorProviderProps {
  children: ReactNode;
}