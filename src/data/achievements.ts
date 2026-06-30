import { Award, Medal, Star, Trophy } from "lucide-react";
import type { Achievement } from "@/types";

export const achievements: Achievement[] = [
  {
    id: "ssc-pass-rate",
    title: "98.6% SSC Pass Rate 2024",
    description: "Consistent board result support through routine revision and mentoring.",
    icon: Trophy,
    tone: "gold"
  },
  {
    id: "hsc-pass-rate",
    title: "96.4% HSC Pass Rate 2024",
    description: "Strong higher secondary performance across Science, Business, and Humanities.",
    icon: Award,
    tone: "green"
  },
  {
    id: "science-fair",
    title: "1st Place in Science Fair",
    description: "Student innovation project recognized at district level.",
    icon: Medal,
    tone: "blue"
  },
  {
    id: "debate-champion",
    title: "District Debate Champion",
    description: "Debate club students earned top position in inter-school competition.",
    icon: Star,
    tone: "purple"
  },
  {
    id: "national-award",
    title: "National Award Winner",
    description: "Recognition for academic culture, discipline, and student leadership.",
    icon: Award,
    tone: "red"
  },
  {
    id: "national-awards",
    title: "25+ National Awards",
    description: "Achievements in academics, culture, sports, and co-curricular programs.",
    icon: Trophy,
    tone: "navy"
  }
];
