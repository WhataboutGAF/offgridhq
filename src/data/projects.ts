export type ThemeColors = {
  colorHex: string;
  shadowHex: string;
  bgClass: string;
  textClass: string;
  oppositeBgClass: string;
};

// True Neo Brutalism themes matching exact opposite/complementary color theory
export const cardThemes: Record<string, ThemeColors> = {
  emerald: { 
    colorHex: "#22c55e", shadowHex: "#d946ef", 
    bgClass: "bg-[#22c55e]", textClass: "text-[#22c55e]", oppositeBgClass: "bg-[#d946ef]" 
  },
  purple: { 
    colorHex: "#a855f7", shadowHex: "#eab308", 
    bgClass: "bg-[#a855f7]", textClass: "text-[#a855f7]", oppositeBgClass: "bg-[#eab308]" 
  },
  rose: { 
    colorHex: "#f43f5e", shadowHex: "#06b6d4", 
    bgClass: "bg-[#f43f5e]", textClass: "text-[#f43f5e]", oppositeBgClass: "bg-[#06b6d4]" 
  },
  sky: { 
    colorHex: "#0ea5e9", shadowHex: "#f97316", 
    bgClass: "bg-[#0ea5e9]", textClass: "text-[#0ea5e9]", oppositeBgClass: "bg-[#f97316]" 
  },
  orange: { 
    colorHex: "#f97316", shadowHex: "#0ea5e9", 
    bgClass: "bg-[#f97316]", textClass: "text-[#f97316]", oppositeBgClass: "bg-[#0ea5e9]" 
  },
};

export interface ProjectCard {
  id: string;
  name: string;
  description: string;
  logoUrl: string; // Place images in public/logos directory!
  theme: ThemeColors;
}

export const heroProjects: ProjectCard[] = [
  { 
    id: "tooldaddy", 
    name: "ToolDaddy", 
    description: "All-in-one toolkit for everyday internet tasks. Fast and accessible.",
    logoUrl: "/logos/tooldaddy.svg", // Replace with valid logo
    theme: cardThemes.purple,
  },
  { 
    id: "humanizer", 
    name: "AI Humanizer", 
    description: "Transform AI-generated text into natural, human-like writing easily.",
    logoUrl: "/logos/humanizer.svg",
    theme: cardThemes.rose,
  },
  { 
    id: "chat", 
    name: "Chat Platform", 
    description: "Connect with friends deeply through secure real-time messaging.",
    logoUrl: "/logos/chat.svg",
    theme: cardThemes.sky,
  },
  { 
    id: "social", 
    name: "Social App", 
    description: "Share your life updates with a vibrant and active community.",
    logoUrl: "/logos/social.svg",
    theme: cardThemes.emerald,
  },
  { 
    id: "language", 
    name: "Language App",
    description: "Learn and translate between languages with real-world contextual usage.",
    logoUrl: "/logos/language.svg",
    theme: cardThemes.orange,
  },
];
