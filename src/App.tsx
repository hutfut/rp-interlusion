import { useState } from 'react'
import { CategoryCard } from './components/CategoryCard'
import './styles.css'

const categories = [
  {
    title: 'Trek',
    description: 'Generate prompts for traveling adventures and road encounters',
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
  }
]

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  return (
    <div className="container">
      <h2 className="title">Select Interlude Type</h2>
      
      <div className="grid">
        {categories.map(category => (
          <CategoryCard
            key={category.title}
            category={category}
            onClick={setSelectedCategory}
          />
        ))}
      </div>

      <footer className="footer">
        <p>Created with ❤️ for the TTRPG community</p>
      </footer>
    </div>
  )
}

export default App
