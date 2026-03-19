'use server';
/**
 * @fileOverview This file implements a Genkit flow for the AI Project Navigator.
 * It recommends suitable OFFGRID HQ projects based on a client's natural language description of their needs.
 *
 * - aiProjectRecommendation - The main function to recommend projects.
 * - AIProjectRecommendationInput - The input type for the aiProjectRecommendation function.
 * - AIProjectRecommendationOutput - The return type for the aiProjectRecommendation function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { getProjectsContextString } from '@/lib/projects-data';

const AIProjectRecommendationInputSchema = z.object({
  userDescription: z.string().describe('A natural language description of the client\'s needs and interests.'),
});
export type AIProjectRecommendationInput = z.infer<typeof AIProjectRecommendationInputSchema>;

const RecommendedProjectSchema = z.object({
  name: z.string().describe('The name of the recommended OFFGRID HQ project.'),
  reason: z.string().describe('A brief explanation of why this project is suitable for the client\'s needs, based on their description.'),
});

const AIProjectRecommendationOutputSchema = z.object({
  recommendedProjects: z.array(RecommendedProjectSchema).describe('A list of OFFGRID HQ projects recommended for the client, along with reasons.'),
});
export type AIProjectRecommendationOutput = z.infer<typeof AIProjectRecommendationOutputSchema>;

/**
 * We inject the live projects list from our shared library directly into the prompt.
 */
const recommendProjectPrompt = ai.definePrompt({
  name: 'recommendProjectPrompt',
  input: { schema: AIProjectRecommendationInputSchema },
  output: { schema: AIProjectRecommendationOutputSchema },
  prompt: `You are an AI Project Navigator for OFFGRID HQ. Your goal is to recommend the most suitable OFFGRID HQ projects based on a client's natural language description of their needs.

Here is a list of available OFFGRID HQ projects:
{{availableProjects}}

Client needs description: {{{userDescription}}}

Based on the client's description, identify 1-3 most relevant projects from the list above. For each recommended project, provide a clear explanation of *why* it is suitable, directly linking its features to the client's expressed needs. If no projects are suitable, return an empty array.`,
});

const aiProjectRecommendationFlow = ai.defineFlow(
  {
    name: 'aiProjectRecommendationFlow',
    inputSchema: AIProjectRecommendationInputSchema,
    outputSchema: AIProjectRecommendationOutputSchema,
  },
  async (input) => {
    // Dynamically fetch the current projects list
    const availableProjects = getProjectsContextString();
    
    const { output } = await recommendProjectPrompt({
      ...input,
      availableProjects
    });
    return output!;
  }
);

export async function aiProjectRecommendation(input: AIProjectRecommendationInput): Promise<AIProjectRecommendationOutput> {
  return aiProjectRecommendationFlow(input);
}
