export type Attribute = "str" | "agi" | "int";

export interface SkillCategory {
  attribute: Attribute;
  name: string;
  plainName: string;
  color: string;
  percentage: number;
  skills: string[];
}

export interface InventoryItem {
  name: string;
  description: string;
  slot: "main" | "backpack" | "tp" | "neutral";
  category: string;
}

export const attributes: SkillCategory[] = [
  {
    attribute: "str",
    name: "Strength",
    plainName: "Engineering & Architecture",
    color: "var(--color-attr-str)",
    percentage: 85,
    skills: ["Swift", "SwiftUI", "UIKit", "Core Data", "MVVM", "Protocol-Oriented Design"],
  },
  {
    attribute: "agi",
    name: "Agility",
    plainName: "Shipping & Velocity",
    color: "var(--color-attr-agi)",
    percentage: 80,
    skills: ["Firebase", "Git", "CI/CD", "App Store Connect", "TestFlight", "Agile"],
  },
  {
    attribute: "int",
    name: "Intelligence",
    plainName: "Design & Problem Solving",
    color: "var(--color-attr-int)",
    percentage: 90,
    skills: ["HIG Compliance", "UX Patterns", "async/await", "Combine", "Algorithm Design"],
  },
];

export const inventory: InventoryItem[] = [
  { name: "Swift", description: "Primary language of choice. Type-safe, protocol-oriented, blazing fast.", slot: "main", category: "Language" },
  { name: "SwiftUI", description: "Declarative UI framework for building beautiful, responsive interfaces.", slot: "main", category: "UI Framework" },
  { name: "UIKit", description: "Veteran framework for pixel-perfect control when needed.", slot: "main", category: "UI Framework" },
  { name: "Firebase", description: "Auth, Firestore, Storage — the backend toolkit for rapid shipping.", slot: "main", category: "Backend" },
  { name: "MVVM", description: "Architecture pattern with protocol-oriented design for testability.", slot: "main", category: "Architecture" },
  { name: "async/await", description: "Modern concurrency with Combine for reactive data flows.", slot: "main", category: "Async" },
  { name: "Git & Xcode", description: "Version control and IDE mastery. Instruments for profiling.", slot: "backpack", category: "Tools" },
  { name: "XCTest & OSLog", description: "Testing and structured logging for reliable, debuggable code.", slot: "backpack", category: "Testing" },
  { name: "App Store Connect", description: "TestFlight distribution, CI/CD pipelines, release management.", slot: "backpack", category: "Services" },
  { name: "Can Relocate", description: "Houston, TX — open to relocation and remote opportunities.", slot: "tp", category: "Location" },
  { name: "IEEE Research", description: "Published researcher with Best Paper Award. Technical writing expertise.", slot: "neutral", category: "Wild Card" },
];
