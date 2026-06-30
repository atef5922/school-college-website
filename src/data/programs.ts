import {
  Atom,
  BarChart3,
  BookOpen,
  Brain,
  GraduationCap,
  Landmark
} from "lucide-react";
import type { Program } from "@/types";

export const programs: Program[] = [
  {
    id: "primary",
    title: "Playgroup to Class V",
    level: "Primary Education",
    description:
      "Foundation learning with literacy, numeracy, creative expression, values, and guided discovery.",
    subjects: ["English", "Bangla", "Mathematics", "Science", "Art"],
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=85",
    icon: BookOpen
  },
  {
    id: "secondary",
    title: "Class VI to Class X",
    level: "Secondary Education",
    description:
      "Board-aligned academic preparation with strong exam practice and co-curricular growth.",
    subjects: ["English", "Mathematics", "Science", "ICT", "Bangladesh Studies"],
    image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1000&q=85",
    icon: GraduationCap
  },
  {
    id: "higher-secondary",
    title: "Class XI to Class XII",
    level: "Higher Secondary",
    description:
      "Focused HSC preparation, university readiness, lab work, and subject-based mentoring.",
    subjects: ["Physics", "Accounting", "Civics", "English", "ICT"],
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=85",
    icon: Landmark
  },
  {
    id: "science",
    title: "Science Group",
    level: "HSC Pathway",
    description:
      "Analytical learning with lab-intensive Physics, Chemistry, Biology, Mathematics, and ICT.",
    subjects: ["Physics", "Chemistry", "Biology", "Higher Math", "ICT"],
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=85",
    icon: Atom
  },
  {
    id: "business",
    title: "Business Studies Group",
    level: "HSC Pathway",
    description:
      "Commerce-focused learning with accounting, finance, entrepreneurship, and communication.",
    subjects: ["Accounting", "Finance", "Business Organization", "Economics"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=85",
    icon: BarChart3
  },
  {
    id: "humanities",
    title: "Humanities Group",
    level: "HSC Pathway",
    description:
      "Critical thinking through civics, sociology, history, geography, and social responsibility.",
    subjects: ["Civics", "Sociology", "History", "Geography", "Economics"],
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1000&q=85",
    icon: Brain
  }
];
