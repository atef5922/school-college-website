import type { GoverningBodyMember } from "@/types";
import academicAdvisorPhoto from "../../Governing Body/Academic Advisor.webp";
import chairmanPhoto from "../../chairman.webp";
import guardianRepresentativePhoto from "../../Governing Body/Guardian Representative.webp";
import principalPhoto from "../../principle.webp";
import teacherRepresentativePhoto from "../../Governing Body/Teacher Representative.webp";
import teacherRepresentativeTwoPhoto from "../../Governing Body/Teacher Representative2.webp";

export const governingBody: GoverningBodyMember[] = [
  {
    id: "gb-001",
    name: "Mr. Md. Abdul Karim",
    role: "Chairman",
    type: "Chairman",
    image: chairmanPhoto,
    bio: "Education patron and policy advisor focused on responsible school governance."
  },
  {
    id: "gb-002",
    name: "Dr. Farhana Rahman",
    role: "Principal",
    type: "Principal",
    image: principalPhoto,
    bio: "Academic leader overseeing instruction, discipline, and student development."
  },
  {
    id: "gb-003",
    name: "Prof. Mahfuz Rahman",
    role: "Academic Advisor",
    type: "Member",
    image: academicAdvisorPhoto,
    bio: "Former college teacher supporting curriculum review and teacher development."
  },
  {
    id: "gb-004",
    name: "Engr. Tanvir Hasan",
    role: "Guardian Representative",
    type: "Guardian Representative",
    image: guardianRepresentativePhoto,
    bio: "Guardian voice for campus safety, communication, and digital readiness."
  },
  {
    id: "gb-005",
    name: "Farhana Sultana",
    role: "Teacher Representative",
    type: "Teacher Representative",
    image: teacherRepresentativeTwoPhoto,
    bio: "Represents teacher feedback on classroom resources and academic planning."
  },
  {
    id: "gb-006",
    name: "Mahmudul Karim",
    role: "Teacher Representative",
    type: "Teacher Representative",
    image: teacherRepresentativePhoto,
    bio: "Supports exam policy, routine planning, and student discipline initiatives."
  }
];
