import { Tag, Prompt, CategoryPrompts } from './types';
import { tags } from './types';
import { trekPrompts } from './trek';
import { backstoryPrompts } from './backstory';
import { downtimePrompts } from './downtime';
import { socialPrompts } from './social';
import { bondPrompts } from './bonds';
import { localPrompts } from './local';
import { recoveryPrompts } from './recovery';
import { marketPrompts } from './market';

export const prompts: CategoryPrompts = {
  'Trek': trekPrompts,
  'Backstory': backstoryPrompts,
  'Downtime': downtimePrompts,
  'Social Encounter': socialPrompts,
  'Character Bond': bondPrompts,
  'Local Color': localPrompts,
  'Recovery': recoveryPrompts,
  'Market Day': marketPrompts
};

// Helper function to get all prompts with a specific tag
export function getPromptsByTag(tagId: string): Prompt[] {
  return Object.values(prompts).flat().filter(prompt => prompt.tags.includes(tagId));
}

// Generate a random prompt for a category
export function generatePrompt(category: string): string {
  const categoryPrompts = prompts[category] || [];
  const selectedPrompt = categoryPrompts[Math.floor(Math.random() * categoryPrompts.length)];
  return selectedPrompt?.text || "Generate a custom prompt here...";
}

// Get all tags for a specific prompt
export function getPromptTags(category: string, promptText: string): Tag[] {
  const prompt = prompts[category]?.find(p => p.text === promptText);
  if (!prompt) return [];
  return prompt.tags.map(tagId => tags.find(tag => tag.id === tagId)!).filter(Boolean);
}

export { tags };
export type { Tag, Prompt, CategoryPrompts }; 