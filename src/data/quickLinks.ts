import {
  BookOpen,
  CalendarDays,
  ClipboardCheck,
  CreditCard,
  Download,
  FileText,
  GraduationCap,
  Phone,
  UserRound
} from "lucide-react";
import type { QuickLink } from "@/types";

export const quickLinks: QuickLink[] = [
  { label: "Student Portal", href: "/student-portal", icon: UserRound, tone: "blue" },
  { label: "Parent Portal", href: "/parent-portal", icon: GraduationCap, tone: "green" },
  { label: "Online Admission", href: "/admission/apply", icon: FileText, tone: "green" },
  { label: "Pay Fees Online", href: "/student-portal", icon: CreditCard, tone: "purple" },
  { label: "Results Archive", href: "/academics/results", icon: ClipboardCheck, tone: "gold" },
  { label: "Library", href: "/library", icon: BookOpen, tone: "gold" },
  { label: "Class Routine", href: "/academics/routine", icon: CalendarDays, tone: "blue" },
  { label: "Download Forms", href: "/downloads", icon: Download, tone: "green" },
  { label: "Contact Us", href: "/contact", icon: Phone, tone: "purple" }
];
