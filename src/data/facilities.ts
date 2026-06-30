import {
  Activity,
  BookOpenCheck,
  Bus,
  Cctv,
  FlaskConical,
  HeartPulse,
  Laptop,
  Mic2,
  MonitorPlay,
  ShieldCheck,
  Trophy
} from "lucide-react";
import type { Facility } from "@/types";

export const facilities: Facility[] = [
  {
    id: "smart-classrooms",
    title: "Smart Classrooms",
    description: "Bright digital rooms with multimedia lessons and structured class routines.",
    icon: MonitorPlay
  },
  {
    id: "science-lab",
    title: "Science Laboratory",
    description: "Practical lab environment for Physics, Chemistry, Biology, and project work.",
    icon: FlaskConical
  },
  {
    id: "computer-lab",
    title: "Computer Lab",
    description: "Networked ICT lab for coding, digital literacy, and HSC practical preparation.",
    icon: Laptop
  },
  {
    id: "library",
    title: "Library",
    description: "Curated books, journals, and quiet reading support for every class level.",
    icon: BookOpenCheck
  },
  {
    id: "transport",
    title: "Transport Service",
    description: "Managed routes for nearby Dhaka neighborhoods with guardian communication.",
    icon: Bus
  },
  {
    id: "playground",
    title: "Playground",
    description: "Safe outdoor space for sports, drills, assemblies, and annual programs.",
    icon: Trophy
  },
  {
    id: "cctv-security",
    title: "CCTV Security",
    description: "Controlled entry, visitor logging, and monitored campus security.",
    icon: Cctv
  },
  {
    id: "auditorium",
    title: "Auditorium",
    description: "Modern hall for seminars, cultural programs, debate, and orientation.",
    icon: Mic2
  },
  {
    id: "prayer-room",
    title: "Prayer Room",
    description: "Clean, calm prayer space maintained for students and staff.",
    icon: ShieldCheck
  },
  {
    id: "first-aid",
    title: "First Aid & Health Care",
    description: "First-aid support, health awareness, and emergency contact readiness.",
    icon: HeartPulse
  },
  {
    id: "student-wellbeing",
    title: "Student Wellbeing",
    description: "Counseling guidance and activity support for balanced growth.",
    icon: Activity
  }
];
