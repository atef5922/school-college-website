import type { GalleryItem } from "@/types";
import ictLabImage from "../../gallery/ict lab.webp";
import laboratoryImage from "../../gallery/laboratory.webp";
import mainCampusImage from "../../gallery/main campus.webp";

export const galleryItems: GalleryItem[] = [
  {
    id: "g-001",
    title: "Main Campus",
    category: "Campus",
    image: mainCampusImage,
    alt: "School campus building with open courtyard"
  },
  {
    id: "g-002",
    title: "Interactive Classroom",
    category: "Classroom",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=85",
    alt: "Students learning in a bright classroom"
  },
  {
    id: "g-003",
    title: "Science Laboratory",
    category: "Science Lab",
    image: laboratoryImage,
    alt: "Students working in science laboratory"
  },
  {
    id: "g-004",
    title: "ICT Lab",
    category: "Computer Lab",
    image: ictLabImage,
    alt: "Computer lab with students using desktop computers"
  },
  {
    id: "g-005",
    title: "Library Hour",
    category: "Library",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=85",
    alt: "Library shelves and reading desks"
  },
  {
    id: "g-006",
    title: "Annual Sports",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85",
    alt: "Students participating in sports day"
  },
  {
    id: "g-007",
    title: "Cultural Program",
    category: "Cultural Program",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=85",
    alt: "Students performing on stage"
  },
  {
    id: "g-008",
    title: "Morning Assembly",
    category: "Assembly",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85",
    alt: "School assembly with students"
  }
];
