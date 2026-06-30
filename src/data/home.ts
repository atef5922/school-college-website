import {
  ArrowRight,
  Award,
  BookOpen,
  Building2,
  CalendarDays,
  ClipboardList,
  FileCheck2,
  GraduationCap,
  Megaphone,
  School,
  ShieldCheck,
  Sparkles,
  Trophy,
  UserRoundCheck,
  UsersRound
} from "lucide-react";
import aboutSchoolImage from "../../about your school.webp";
import academicCurriculumImage from "../../Academic Curriculum.webp";
import admissionProcessImage from "../../Admission Process.webp";
import campusFacilitiesImage from "../../Campus Facilities.webp";

export const quickActions = [
  {
    title: "Admission Info",
    subtitle: "Requirements & process",
    href: "/admission",
    icon: GraduationCap
  },
  {
    title: "Notice Board",
    subtitle: "Latest announcements",
    href: "/notice",
    icon: Megaphone
  },
  {
    title: "Exam Routine",
    subtitle: "Schedules & timetables",
    href: "/academics/exam-routine",
    icon: CalendarDays
  },
  {
    title: "Results",
    subtitle: "SSC, HSC & others",
    href: "/academics/results",
    icon: FileCheck2
  },
  {
    title: "Academic Programs",
    subtitle: "Curriculum & subjects",
    href: "/academics/programs",
    icon: BookOpen
  },
  {
    title: "Our Teachers",
    subtitle: "Qualified & experienced",
    href: "/teachers",
    icon: UserRoundCheck
  }
];

export const stats = [
  { label: "Years of Excellence", value: 28, icon: Building2 },
  { label: "Students", value: 8600, icon: UsersRound },
  { label: "Teachers", value: 520, icon: UserRoundCheck },
  { label: "Academic Programs", value: 45, icon: BookOpen },
  { label: "Pass Rate (2024)", value: 98.6, suffix: "%", icon: Sparkles },
  { label: "National Awards", value: 25, icon: Trophy }
];

export const featureCards = [
  {
    title: "About Our School",
    description: "Learn about our mission, vision, values, and journey of excellence.",
    href: "/about",
    label: "Learn More",
    icon: School,
    image: aboutSchoolImage
  },
  {
    title: "Academic Curriculum",
    description:
      "From Playgroup to HSC, we follow an updated and student-centered curriculum.",
    href: "/academics",
    label: "Explore Curriculum",
    icon: BookOpen,
    image: academicCurriculumImage
  },
  {
    title: "Admission Process",
    description:
      "Easy and transparent admission process for 2026 academic year. Apply online today.",
    href: "/admission",
    label: "How to Apply",
    icon: ClipboardList,
    image: admissionProcessImage
  },
  {
    title: "Campus Facilities",
    description:
      "Modern classrooms, science labs, library, ICT lab, transport, and more.",
    href: "/academics#facilities",
    label: "Explore Facilities",
    icon: Building2,
    image: campusFacilitiesImage
  }
];

export const whyChoosePoints = [
  "Experienced and caring teachers",
  "Modern academic curriculum",
  "Digital classroom facilities",
  "Safe and disciplined campus",
  "Parent communication system",
  "Co-curricular activities",
  "Strong SSC/HSC result record",
  "Moral and leadership development"
];

export const admissionSteps = [
  "Collect Information",
  "Submit Application",
  "Admission Test / Interview",
  "Result & Confirmation",
  "Payment & Enrollment"
];

export const policyHighlights = [
  "Transparent fee structure and payment timeline",
  "Merit scholarship consideration for eligible students",
  "Guardian orientation before the academic session",
  "Document verification before final enrollment"
];

export const innerValueCards = [
  { title: "Discipline", description: "Consistent routines, respectful behavior, and guided responsibility.", icon: ShieldCheck },
  { title: "Excellence", description: "Focused academic planning for board results and lifelong learning.", icon: Award },
  { title: "Leadership", description: "Debate, clubs, sports, volunteering, and public presentation.", icon: ArrowRight }
];
