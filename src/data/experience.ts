export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  highlights: string[];
  result: "victory" | "in-progress";
}

export const experiences: Experience[] = [
  {
    company: "National Internet Observatory",
    role: "iOS Engineering Co-Op",
    duration: "Jan 2024 – Jun 2024",
    location: "Northeastern University",
    highlights: [
      "Built iOS data collection tools for internet measurement research",
      "Implemented async/await patterns for network data pipelines",
      "Collaborated with research team on protocol-level analysis",
    ],
    result: "victory",
  },
  {
    company: "Nakshatra Eye Care",
    role: "Software Developer Intern",
    duration: "Jun 2022 – Aug 2022",
    location: "Mumbai, India",
    highlights: [
      "Developed patient management features for the clinic's mobile app",
      "Improved appointment scheduling workflow efficiency",
      "Integrated push notifications for patient reminders",
    ],
    result: "victory",
  },
  {
    company: "SAKEC Marathon",
    role: "Software Engineering Intern",
    duration: "Jan 2022 – Apr 2022",
    location: "Mumbai, India",
    highlights: [
      "Built registration and tracking features for marathon event app",
      "Implemented real-time participant tracking",
      "Handled event-day surge with scalable backend integration",
    ],
    result: "victory",
  },
];
