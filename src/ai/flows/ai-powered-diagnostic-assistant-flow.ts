'use server';

/**
 * @fileOverview An AI-powered diagnostic assistant for mechanics.
 *
 * - aiPoweredDiagnosticAssistant - A function that generates probable causes and troubleshooting steps for vehicle issues.
 * - AIPoweredDiagnosticAssistantInput - The input type for the aiPoweredDiagnosticAssistant function.
 * - AIPoweredDiagnosticAssistantOutput - The return type for the aiPoweredDiagnosticAssistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIPoweredDiagnosticAssistantInputSchema = z.object({
  symptoms: z
    .string()
    .describe(
      'A detailed description of the symptoms reported by the customer for the vehicle problem.'
    ),
  make: z.string().describe('The make of the vehicle.'),
  model: z.string().describe('The model of the vehicle.'),
  mediaDataUris: z
    .array(z.string())
    .optional()
    .describe(
      "An array of photos or videos of the vehicle's issue, each as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type AIPoweredDiagnosticAssistantInput = z.infer<
  typeof AIPoweredDiagnosticAssistantInputSchema
>;

const AIPoweredDiagnosticAssistantOutputSchema = z.object({
  probableCauses: z
    .array(z.string())
    .describe(
      'A list of probable causes for the reported vehicle symptoms, ordered by likelihood.'
    ),
  troubleshootingSteps: z
    .array(z.string())
    .describe(
      'A list of recommended troubleshooting steps for each probable cause, providing clear instructions for a mechanic.'
    ),
});
export type AIPoweredDiagnosticAssistantOutput = z.infer<
  typeof AIPoweredDiagnosticAssistantOutputSchema
>;

export async function aiPoweredDiagnosticAssistant(
  input: AIPoweredDiagnosticAssistantInput
): Promise<AIPoweredDiagnosticAssistantOutput> {
  return aiPoweredDiagnosticAssistantFlow(input);
}

const diagnosticPrompt = ai.definePrompt({
  name: 'aiPoweredDiagnosticAssistantPrompt',
  input: {schema: AIPoweredDiagnosticAssistantInputSchema},
  output: {schema: AIPoweredDiagnosticAssistantOutputSchema},
  model: 'googleai/gemini-2.5-flash-image',
  prompt: `You are a highly experienced and knowledgeable automotive diagnostic technician. Your task is to analyze vehicle problems based on symptom descriptions, vehicle make and model, and any provided media.

  Based on the following information, identify the most probable causes for the reported issue and provide clear, actionable troubleshooting steps for each cause. Focus on common failure points for the specified make and model.

  Vehicle Information:
  Make: {{{make}}}
  Model: {{{model}}}

  Symptoms: {{{symptoms}}}

  Visual Media (if provided):
  {{#if mediaDataUris}}
    {{#each mediaDataUris}}
      {{media url=this}}
    {{/each}}
  {{else}}
    No additional visual media provided.
  {{/if}}

  Output your response as a JSON object with the following structure:
  {{jsonSchema AIPoweredDiagnosticAssistantOutputSchema}}
  `,
});

const aiPoweredDiagnosticAssistantFlow = ai.defineFlow(
  {
    name: 'aiPoweredDiagnosticAssistantFlow',
    inputSchema: AIPoweredDiagnosticAssistantInputSchema,
    outputSchema: AIPoweredDiagnosticAssistantOutputSchema,
  },
  async input => {
    const {output} = await diagnosticPrompt(input);
    return output!;
  }
);
