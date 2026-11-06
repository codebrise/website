import type { CategoryDefinition } from "@/types/content";

export const categories: CategoryDefinition[] = [
  {
    id: "software",
    number: "01 / BUILD",
    actionWord: "BUILD",
    title: "Software & products",
    description: "Small applications that solve specific, everyday problems.",
    href: "/products",
    iconName: "AppWindow",
  },
  {
    id: "developer-tool",
    number: "02 / ENABLE",
    actionWord: "ENABLE",
    title: "Developer tools",
    description: "Components, libraries, APIs and things that make building nicer.",
    href: "/developer-tools",
    iconName: "Code2",
  },
  {
    id: "ai-automation",
    number: "03 / EXPLORE",
    actionWord: "EXPLORE",
    title: "AI & automation",
    description: "Agents, bots and thoughtful ways to remove repetitive work.",
    href: "/experiments",
    iconName: "Sparkles",
  },
  {
    id: "open-source",
    number: "04 / SHARE",
    actionWord: "SHARE",
    title: "Apps & open source",
    description: "Mobile experiments, games and software shared with the community.",
    href: "/open-source",
    iconName: "Share2",
  },
];

