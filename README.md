# RP Interlusion

A React-based application for managing role-playing game interludes, character tokens, and scene scoring.

## Project Structure

The project is organized by features to improve maintainability and separation of concerns:

```
src/
├── components/
│   ├── common/           # Shared components used across features
│   │   ├── SlidingTrayNav.tsx
│   │   ├── SlidingTrayNav.css
│   │   └── index.ts
│   ├── interlude/        # Interlude feature components
│   │   ├── CategoryCard.tsx
│   │   ├── CategoryCard.css
│   │   ├── CategorySelection.tsx
│   │   ├── PromptCard.tsx
│   │   ├── PromptCard.css
│   │   ├── PromptDisplay.tsx
│   │   └── index.ts
│   ├── scorecard/        # Scorecard feature components
│   │   ├── ActiveSceneCard.tsx
│   │   ├── ActiveSceneCard.css
│   │   ├── Scorecard.tsx
│   │   ├── Scorecard.css
│   │   └── index.ts
│   └── tokens/           # Token management components
│       ├── Tokens.tsx
│       ├── Tokens.css
│       └── index.ts
├── data/                 # Data and prompt generation
│   ├── categories.ts
│   └── prompts/
└── styles.css           # Global styles
```

## Features

### Interlude
- Category selection for different types of prompts
- Dynamic prompt generation
- Smooth transitions between views

### Scorecard
- Scene creation and management
- Real-time scoring with intensity and engagement sliders
- Individual character engagement tracking
- Scene history and playback controls

### Tokens
- Character token creation and management
- Image upload support
- Token selection for scenes

## Development

### CSS Organization
- All CSS has been externalized from TSX files
- Feature-based CSS organization
- Consistent naming conventions
- No inline styles in components

### Component Organization
- Feature-based directory structure
- Index files for clean imports
- Shared components in common directory
- Clear separation of concerns

## Getting Started

1. Install dependencies: `npm install`
2. Start development server: `npm run dev`
3. Open browser to the displayed URL

## Technologies Used

- React 18
- TypeScript
- Vite
- CSS3
