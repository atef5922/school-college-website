import type { LucideIcon } from "lucide-react";
import type { StaticImageData } from "next/image";

export type BadgeTone = "gold" | "green" | "blue" | "purple" | "red" | "navy";

export interface SiteInfo {
  name: string;
  tagline: string;
  location: string;
  phone: string;
  admissionPhone: string;
  email: string;
  officeTime: string;
  socials: {
    facebook: string;
    youtube: string;
    linkedin: string;
    instagram: string;
  };
}

export interface NavItem {
  label: string;
  href: string;
  items?: NavItem[];
}

export interface Notice {
  slug: string;
  title: string;
  date: string;
  category: "Admission" | "Exam" | "Result" | "Holiday" | "Event" | "General";
  excerpt: string;
  content: string;
  attachment?: string;
  isNew?: boolean;
}

export interface Event {
  slug: string;
  title: string;
  date: string;
  time: string;
  location: string;
  excerpt: string;
  content: string;
  image: string;
  status: "Upcoming" | "Past";
}

export interface Teacher {
  id: string;
  name: string;
  designation: string;
  department: string;
  experience: string;
  tagline: string;
  image: string | StaticImageData;
  education: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string | StaticImageData;
  alt: string;
}

export interface Program {
  id: string;
  title: string;
  level: string;
  description: string;
  subjects: string[];
  image: string;
  icon: LucideIcon;
}

export interface Facility {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  image: string;
  rating: number;
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
  image: string;
}

export interface DownloadItem {
  id: string;
  title: string;
  category: string;
  description: string;
  fileType: "PDF" | "DOC" | "XLS";
  size: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  tone: BadgeTone;
}

export interface GoverningBodyMember {
  id: string;
  name: string;
  role: string;
  type: string;
  image: string | StaticImageData;
  bio: string;
}

export interface QuickLink {
  label: string;
  href: string;
  icon: LucideIcon;
  tone: BadgeTone;
}
