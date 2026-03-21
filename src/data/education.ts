export interface Education {
  degree: string;
  school: string;
  gpa: string;
  duration: string;
  location: string;
}

export interface Publication {
  title: string;
  venue: string;
  year: number;
  award?: string;
}

export const education: Education[] = [
  {
    degree: "MS Software Engineering Systems",
    school: "Northeastern University",
    gpa: "3.8 / 4.0",
    duration: "2023 – 2025",
    location: "Boston, MA",
  },
  {
    degree: "BE Computer Engineering",
    school: "University of Mumbai",
    gpa: "8.81 / 10",
    duration: "2019 – 2023",
    location: "Mumbai, India",
  },
];

export const publications: Publication[] = [
  {
    title: "IEEE Research Publication",
    venue: "ICACTA 2023",
    year: 2023,
    award: "Best Paper Award",
  },
];
