import type { NavItem } from "@/types";

export const mainNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    items: [
      { label: "About School", href: "/about" },
      { label: "Principal Message", href: "/about/principal-message" },
      { label: "Mission & Vision", href: "/about/mission-vision" },
      { label: "Governing Body", href: "/about/governing-body" }
    ]
  },
  {
    label: "Academics",
    href: "/academics",
    items: [
      { label: "Academic Programs", href: "/academics/programs" },
      { label: "Class Routine", href: "/academics/routine" },
      { label: "Exam Routine", href: "/academics/exam-routine" },
      { label: "Syllabus", href: "/academics/syllabus" },
      { label: "Results", href: "/academics/results" },
      { label: "Academic Calendar", href: "/academics/calendar" }
    ]
  },
  {
    label: "Admission",
    href: "/admission",
    items: [
      { label: "Admission Process", href: "/admission" },
      { label: "Admission Requirements", href: "/admission/requirements" },
      { label: "Fee Structure", href: "/admission/fee-structure" },
      { label: "Apply Online", href: "/admission/apply" },
      { label: "Scholarship", href: "/admission#scholarship" }
    ]
  },
  { label: "Teachers", href: "/teachers" },
  { label: "Notice", href: "/notice" },
  { label: "Events", href: "/events" },
  {
    label: "Resources",
    href: "/downloads",
    items: [
      { label: "Downloads", href: "/downloads" },
      { label: "Library", href: "/library" },
      { label: "Student Portal", href: "/student-portal" },
      { label: "Parent Portal", href: "/parent-portal" }
    ]
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" }
];

export const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admission", href: "/admission" },
  { label: "Teachers", href: "/teachers" },
  { label: "Notice", href: "/notice" },
  { label: "Events", href: "/events" },
  { label: "Library", href: "/library" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
  { label: "Sitemap", href: "/downloads" }
];
