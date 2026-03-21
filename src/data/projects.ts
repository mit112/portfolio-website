export interface Project {
  slug: string;
  key: "Q" | "W" | "E" | "R";
  abilityName: string;
  name: string;
  tagline: string;
  description: string;
  techStack: string[];
  cooldown: string;
  manaCost: "Low" | "Medium" | "High";
  rarity: "mythical" | "legendary" | "immortal";
  isLive: boolean;
  highlights: string[];
  links: {
    appStore?: string;
    github?: string;
  };
}

export const projects: Project[] = [
  {
    slug: "streaksync",
    key: "Q",
    abilityName: "Streak Protocol",
    name: "StreakSync",
    tagline: "Never lose your streak again",
    description:
      "A puzzle game streak tracker that helps players maintain their daily streaks across multiple games. Built with SwiftUI and synced via Firebase for seamless cross-device tracking.",
    techStack: ["Swift", "SwiftUI", "Firebase", "MVVM"],
    cooldown: "3 months",
    manaCost: "Medium",
    rarity: "mythical",
    isLive: false,
    highlights: [
      "Real-time streak sync across devices via Firebase",
      "Custom SwiftUI animations for streak milestones",
      "Protocol-oriented architecture for testability",
    ],
    links: {
      github: "https://github.com/mit112",
    },
  },
  {
    slug: "flickswiper",
    key: "W",
    abilityName: "Flick Judgment",
    name: "FlickSwiper",
    tagline: "Swipe right on your next favorite movie",
    description:
      "A Tinder-style movie discovery app live on the App Store. Swipe to discover, save favorites, and get personalized recommendations powered by TMDB API.",
    techStack: ["Swift", "SwiftUI", "TMDB API", "Core Data"],
    cooldown: "4 months",
    manaCost: "High",
    rarity: "legendary",
    isLive: true,
    highlights: [
      "Live on the App Store with active users",
      "Custom gesture-driven card stack UI",
      "Offline support with Core Data persistence",
    ],
    links: {
      appStore: "https://apps.apple.com",
      github: "https://github.com/mit112",
    },
  },
  {
    slug: "fond",
    key: "E",
    abilityName: "Fond Bond",
    name: "Fond",
    tagline: "Your relationship, encrypted",
    description:
      "An end-to-end encrypted couples app for sharing moments privately. Built with CryptoKit for zero-knowledge encryption and Firebase for real-time sync.",
    techStack: ["Swift", "SwiftUI", "CryptoKit", "Firebase"],
    cooldown: "4 months",
    manaCost: "High",
    rarity: "mythical",
    isLive: false,
    highlights: [
      "End-to-end encryption with Apple CryptoKit",
      "Real-time shared timeline via Firebase",
      "Zero-knowledge architecture — server never sees plaintext",
    ],
    links: {
      github: "https://github.com/mit112",
    },
  },
  {
    slug: "birthdayquest",
    key: "R",
    abilityName: "Quest Spark",
    name: "BirthdayQuest",
    tagline: "Make every birthday legendary",
    description:
      "A gamified birthday celebration app that turns birthday wishes into interactive quests. Features custom animations, shared party rooms, and achievement systems.",
    techStack: ["Swift", "SwiftUI", "Firebase", "Push Notifications"],
    cooldown: "3 months",
    manaCost: "Medium",
    rarity: "mythical",
    isLive: false,
    highlights: [
      "Gamified quest system with achievement badges",
      "Real-time party rooms with Firebase",
      "Rich push notification integration",
    ],
    links: {
      github: "https://github.com/mit112",
    },
  },
];
