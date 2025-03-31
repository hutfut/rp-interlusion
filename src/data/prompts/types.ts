export type Tag = {
  id: string;
  name: string;
  description?: string;
};

export type Prompt = {
  text: string;
  tags: string[]; // Array of tag IDs
};

export type CategoryPrompts = {
  [key: string]: Prompt[];
};

// Define available tags
export const tags: Tag[] = [
  { id: 'combat', name: 'Combat', description: 'Involves fighting or physical conflict' },
  { id: 'roleplay', name: 'Roleplay', description: 'Focus on character interaction and development' },
  { id: 'exploration', name: 'Exploration', description: 'Discovering new places or information' },
  { id: 'mystery', name: 'Mystery', description: 'Involves solving puzzles or uncovering secrets' },
  { id: 'emotional', name: 'Emotional', description: 'Deals with feelings and relationships' },
  { id: 'survival', name: 'Survival', description: 'Focuses on overcoming environmental challenges' },
  { id: 'diplomacy', name: 'Diplomacy', description: 'Negotiation and political interaction' },
  { id: 'lore', name: 'Lore', description: 'Involves world history and knowledge' },
  { id: 'comedy', name: 'Comedy', description: 'Situations that lean towards humor and lighthearted moments' },
  { id: 'trade', name: 'Trade', description: 'Involves commerce, bartering, or economic interactions' },
  { id: 'supernatural', name: 'Supernatural', description: 'Encounters with the mystical or unexplained' },
  { id: 'cultural', name: 'Cultural', description: 'Deals with customs, traditions, and social norms' },
  { id: 'skill', name: 'Skill', description: 'Focuses on specific abilities or expertise' },
  { id: 'fortune', name: 'Fortune', description: 'Involves luck, fate, or unexpected opportunities' }
]; 