export interface Category {
  title: string;
  description: string;
  icon: string;
}

export const categories: Category[] = [
  {
    title: 'Trek',
    description: 'Events that happen on the road as characters travel extended distances',
    icon: '🗺️'
  },
  {
    title: 'Backstory',
    description: 'Explore character histories and past events',
    icon: '📚'
  },
  {
    title: 'Downtime',
    description: 'Create memorable moments during breaks from the main quest',
    icon: '🌙'
  },
  {
    title: 'Social Encounter',
    description: 'Develop interesting NPC interactions and diplomatic scenarios',
    icon: '🗣️'
  },
  {
    title: 'Character Bond',
    description: 'Build relationships between party members',
    icon: '🤝'
  },
  {
    title: 'Local Color',
    description: 'Add flavor to locations and discover local customs',
    icon: '🎨'
  },
  {
    title: 'Recovery',
    description: 'Create scenes focused on rest, healing, and recuperation',
    icon: '❤️'
  },
  {
    title: 'Market Day',
    description: 'Generate shopping, trading, and merchant interaction scenarios',
    icon: '🛍️'
  }
]; 