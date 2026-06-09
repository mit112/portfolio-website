export interface Project {
  slug: string;
  key: "Q" | "W" | "E" | "D" | "R";
  abilityName: string;
  name: string;
  tagline: string;
  description: string;
  techStack: string[];
  cooldown: string;
  manaCost: "Low" | "Medium" | "High";
  rarity: "mythical" | "legendary" | "immortal";
  isLive: boolean;
  isUltimate?: boolean;
  award?: string;
  screenshot?: string;
  highlights: string[];
  links: {
    appStore?: string;
    github?: string;
    linkedin?: string;
    paper?: string;
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
      "A published puzzle-game habit tracker that keeps daily streaks alive across devices. SwiftData persistence with CloudKit sync, WidgetKit home-screen widgets, and StoreKit 2 subscriptions — zero data loss.",
    techStack: ["Swift", "SwiftUI", "SwiftData", "CloudKit", "WidgetKit", "StoreKit 2"],
    cooldown: "3 months",
    manaCost: "Medium",
    rarity: "legendary",
    isLive: true,
    screenshot: "/images/projects/streaksync.jpg",
    highlights: [
      "Live on the App Store",
      "SwiftData persistence + CloudKit sync for a reliable cross-device experience",
      "WidgetKit widgets, background refresh, and StoreKit 2 subscriptions",
    ],
    links: {
      appStore: "https://apps.apple.com/us/app/streaksync-puzzle-tracker/id6755203446",
      github: "https://github.com/mit112/StreakSync",
    },
  },
  {
    slug: "flickswiper",
    key: "W",
    abilityName: "Flick Judgment",
    name: "FlickSwiper",
    tagline: "Swipe right on your next favorite movie",
    description:
      "A Tinder-style movie discovery app live on the App Store. Swipe to discover, save favorites, and get personalized recommendations powered by the TMDB API — with full offline support.",
    techStack: ["Swift", "SwiftUI", "TMDB API", "Core Data"],
    cooldown: "4 months",
    manaCost: "High",
    rarity: "legendary",
    isLive: true,
    screenshot: "/images/projects/flickswiper.jpg",
    highlights: [
      "Live on the App Store with active users",
      "Custom gesture-driven card stack UI",
      "Offline support with Core Data persistence",
    ],
    links: {
      appStore: "https://apps.apple.com/us/app/flickswiper/id6758966666",
      github: "https://github.com/mit112/FlickSwiper",
      linkedin: "https://www.linkedin.com/posts/mit-sheth_ios-swiftui-appstore-activity-7429822257792786432-tUoT",
    },
  },
  {
    slug: "fond",
    key: "E",
    abilityName: "Fond Bond",
    name: "Fond",
    tagline: "Your relationship, encrypted",
    description:
      "An end-to-end encrypted couples app for sharing moments privately. Built with CryptoKit for zero-knowledge encryption and Firebase for real-time sync — the server never sees plaintext.",
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
      github: "https://github.com/mit112/Fond",
    },
  },
  {
    slug: "birthdayquest",
    key: "D",
    abilityName: "Quest Spark",
    name: "BirthdayQuest",
    tagline: "Make every birthday legendary",
    description:
      "A gamified birthday celebration app that turns birthday wishes into interactive quests. Custom animations, shared party rooms, and achievement systems keep every celebration playable.",
    techStack: ["Swift", "SwiftUI", "Firebase", "Push Notifications"],
    cooldown: "3 months",
    manaCost: "Medium",
    rarity: "mythical",
    isLive: false,
    screenshot: "/images/projects/birthdayquest.jpg",
    highlights: [
      "Gamified quest system with achievement badges",
      "Real-time party rooms with Firebase",
      "Rich push notification integration",
    ],
    links: {
      github: "https://github.com/mit112/BirthdayQuest",
      linkedin: "https://www.linkedin.com/posts/mit-sheth_swiftui-ios-firebase-activity-7440487277350457344-zZmW",
    },
  },
  {
    slug: "crop-recommendation",
    key: "R",
    abilityName: "Wrath of Nature",
    name: "Crop Recommendation Engine",
    tagline: "Machine learning that tells farmers what to plant",
    description:
      "A farmer-centric mobile app that analyzes 676K+ location samples and 2,200 soil samples with Random Forest models to deliver personalized crop recommendations and improve yield efficiency. Published at IEEE ICACTA 2023, winning Best Paper among 300 presentations.",
    techStack: ["Python", "Random Forest", "Flutter", "AWS"],
    cooldown: "10 months",
    manaCost: "High",
    rarity: "immortal",
    isLive: false,
    isUltimate: true,
    award: "IEEE Best Paper — ICACTA 2023",
    highlights: [
      "Published in IEEE Journal at ICACTA 2023 — Best Paper among 300 presentations",
      "Analyzed 676K+ location samples and 2,200 soil samples",
      "Random Forest pipeline serving personalized, location-aware recommendations",
    ],
    links: {
      paper: "https://ieeexplore.ieee.org/document/10393121",
    },
  },
];
