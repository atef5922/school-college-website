import type { Teacher } from "@/types";
import principalPhoto from "../../principle.webp";
import teacherOnePhoto from "../../teacher/t1.webp";
import teacherTwoPhoto from "../../teacher/t2.webp";
import teacherThreePhoto from "../../teacher/t3.webp";
import teacherFourPhoto from "../../teacher/t4.webp";

export const teachers: Teacher[] = [
  {
    id: "t-001",
    name: "Dr. Farhana Rahman",
    designation: "Principal",
    department: "Administration",
    experience: "24 Years",
    tagline: "Guiding academic excellence with discipline and compassion.",
    image: principalPhoto,
    education: "PhD in Education"
  },
  {
    id: "t-002",
    name: "Nusrat Jahan",
    designation: "Senior Teacher",
    department: "English",
    experience: "14 Years",
    tagline: "Helping students communicate with clarity and confidence.",
    image: teacherOnePhoto,
    education: "MA in English"
  },
  {
    id: "t-003",
    name: "Arif Rahman",
    designation: "Lecturer",
    department: "Mathematics",
    experience: "11 Years",
    tagline: "Making problem solving practical, visual, and joyful.",
    image: teacherTwoPhoto,
    education: "MSc in Mathematics"
  },
  {
    id: "t-004",
    name: "Farhana Sultana",
    designation: "Lecturer",
    department: "Science",
    experience: "10 Years",
    tagline: "Encouraging curiosity through experiments and observation.",
    image: teacherThreePhoto,
    education: "MSc in Physics"
  },
  {
    id: "t-005",
    name: "Sabbir Hossain",
    designation: "Teacher",
    department: "ICT",
    experience: "9 Years",
    tagline: "Preparing learners for digital skills and responsible technology use.",
    image: teacherFourPhoto,
    education: "BSc in CSE"
  },
  {
    id: "t-006",
    name: "Tanjina Akter",
    designation: "Teacher",
    department: "Bangla",
    experience: "12 Years",
    tagline: "Building language confidence through literature and expression.",
    image: teacherOnePhoto,
    education: "MA in Bangla"
  },
  {
    id: "t-007",
    name: "Mahmudul Karim",
    designation: "Senior Teacher",
    department: "Business Studies",
    experience: "16 Years",
    tagline: "Connecting commerce lessons with real-world decision making.",
    image: teacherFourPhoto,
    education: "MBA"
  },
  {
    id: "t-008",
    name: "Samia Islam",
    designation: "Teacher",
    department: "Social Science",
    experience: "8 Years",
    tagline: "Helping students understand society, citizenship, and history.",
    image: teacherThreePhoto,
    education: "MSS in Sociology"
  }
];
