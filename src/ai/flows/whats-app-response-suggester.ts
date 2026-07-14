'use server';
/**
 * @fileOverview A Genkit flow that suggests appropriate, pre-drafted responses or generates drafts
 * for common customer inquiries received via WhatsApp, such as service quotes or diagnostic questions.
 *
 * - whatsAppResponseSuggester - A function that handles the response suggestion process.
 * - WhatsAppResponseSuggesterInput - The input type for the whatsAppResponseSuggester function.
 * - WhatsAppResponseSuggesterOutput - The return type for the whatsAppResponseSuggester function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const WhatsAppResponseSuggesterInputSchema = z.object({
  customerInquiry: z
    .string()
    .describe("The customer's message received via WhatsApp."),
  customerVehicleInfo: z
    .string()
    .optional()
    .describe(
      'Optional: Vehicle make, model, and year (e.g., "Honda Civic 2018").'
    ),
  previousConversation: z
    .string()
    .optional()
    .describe('Optional: A string containing previous messages for context.'),
});
export type WhatsAppResponseSuggesterInput = z.infer<
  typeof WhatsAppResponseSuggesterInputSchema
>;

const WhatsAppResponseSuggesterOutputSchema = z.object({
  suggestedResponse: z
    .string()
    .describe(
      'A drafted response for the customer inquiry, ready for review and sending.'
    ),
  responseCategory: z
    .enum([
      'Quote Request',
      'Diagnostic Question',
      'Appointment Scheduling',
      'General Inquiry',
      'Complaint / Feedback',
      'Other',
    ])
    .describe('The categorized type of the customer inquiry.'),
  confidenceScore: z
    .number()
    .min(0)
    .max(1)
    .describe('A score from 0 to 1 indicating the AI\'s confidence in the suggested response.'),
});
export type WhatsAppResponseSuggesterOutput = z.infer<
  typeof WhatsAppResponseSuggesterOutputSchema
>;

export async function whatsAppResponseSuggester(
  input: WhatsAppResponseSuggesterInput
): Promise<WhatsAppResponseSuggesterOutput> {
  return whatsAppResponseSuggesterFlow(input);
}

const prompt = ai.definePrompt({
  name: 'whatsAppResponseSuggesterPrompt',
  input: {schema: WhatsAppResponseSuggesterInputSchema},
  output: {schema: WhatsAppResponseSuggesterOutputSchema},
  prompt: `You are an AI assistant for a car repair shop named Alpha Car Service. Your role is to help service advisors quickly and consistently respond to customer inquiries received via WhatsApp.

Your task is to analyze the customer's inquiry and suggest a polite, professional, and helpful draft response. You should also categorize the inquiry and provide a confidence score for your suggestion.

When drafting responses:
- If it's a diagnostic question, acknowledge the issue and suggest next steps like scheduling an inspection or asking for more details (e.g., specific symptoms, sounds, warning lights, photos/videos).
- If it's a quote request, explain that a precise quote often requires an inspection, but you can provide an estimate if enough details are given. If specific pricing isn't available, suggest asking for more details or inviting them to the shop.
- If it's about scheduling, guide them on how to book an appointment (e.g., suggesting a link or asking for preferred times).
- Keep responses concise and to the point, suitable for WhatsApp.
- Maintain a friendly and reassuring tone.

Customer Inquiry: {{{customerInquiry}}}
{{#if customerVehicleInfo}}
Customer Vehicle Info: {{{customerVehicleInfo}}}
{{/if}}
{{#if previousConversation}}
Previous Conversation Context: {{{previousConversation}}}
{{/if}}

Based on the above, please provide a suggested response, categorize the inquiry, and give a confidence score (0-1).`,
});

const whatsAppResponseSuggesterFlow = ai.defineFlow(
  {
    name: 'whatsAppResponseSuggesterFlow',
    inputSchema: WhatsAppResponseSuggesterInputSchema,
    outputSchema: WhatsAppResponseSuggesterOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    return output!;
  }
);
