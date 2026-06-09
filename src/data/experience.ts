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
    role: "Software Engineering Co-Op",
    duration: "Jul 2024 – Feb 2025",
    location: "Boston, MA",
    highlights: [
      "Built production iOS features in Swift/SwiftUI for an NSF-funded research app with integrated VPN for packet-level traffic analysis",
      "Improved startup performance and battery efficiency by 40% through custom caching, background task scheduling, and concurrency tuning",
      "Enhanced data richness by 75% by integrating SensorKit with fault-tolerant, scalable processing pipelines",
    ],
    result: "victory",
  },
  {
    company: "Nakshatra Eye Care",
    role: "Software Developer Intern",
    duration: "Mar 2021 – Feb 2022",
    location: "Mumbai, India",
    highlights: [
      "Led design and development of a distributed patient management system, reducing clerical errors by 93%",
      "Partnered with doctors to translate requirements into automated workflows, increasing patient throughput by 78%",
    ],
    result: "victory",
  },
  {
    company: "SAKEC Marathon",
    role: "Software Engineering Intern",
    duration: "Feb 2021 – Apr 2021",
    location: "Mumbai, India",
    highlights: [
      "Delivered an Android app with sensor-based algorithms (accelerometer, gyroscope) tracking marathon performance for 1,000+ active users",
      "Implemented real-time speed, step, and distance tracking to ensure fair and accurate competition results",
    ],
    result: "victory",
  },
];
