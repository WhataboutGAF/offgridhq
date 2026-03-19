/**
 * Centralized data for the Design Class platform.
 * Used by UI components for rendering and by the AI flow for context.
 */

export interface ToolData {
  id: string;
  name: string;
  description: string;
  imageHint: string;
  highlighted?: boolean;
}

export const TOOLS_DATA: ToolData[] = [
  {
    id: "tool-daddy",
    name: "ToolDaddy",
    description: "All-in-one toolkit for everyday internet tasks. Fast, simple, and accessible.",
    imageHint: "utility tools"
  },
  {
    id: "ai-humanizer",
    name: "AI Humanizer",
    description: "Transform AI-generated text into natural, human-like writing.",
    imageHint: "writing assistant",
    highlighted: true
  },
  {
    id: "language-bridge",
    name: "Language Bridge",
    description: "Learn and translate between Nepali and Korean with real-world usage.",
    imageHint: "language learning"
  }
];

export function getProjectsContextString(): string {
  return TOOLS_DATA.map((p, i) => `${i + 1}. ${p.name}: ${p.description}`).join('\n');
}
