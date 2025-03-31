import { useState } from 'react'

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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="section bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medieval mb-6">
              Interlude Generator
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-gray-200">
              Enhance your tabletop roleplaying experience with dynamic story prompts
            </p>
            <button className="btn btn-primary text-lg">
              Generate Interlude
            </button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section">
        <div className="container-custom">
          <h2 className="text-3xl font-medieval text-center mb-12">
            Choose Your Story Path
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <div
                key={category.title}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setSelectedCategory(category.title)}
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-medieval mb-8">
              Why Use Interlude Generator?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl mb-4">🎲</div>
                <h3 className="text-xl font-semibold mb-2">Dynamic Stories</h3>
                <p className="text-gray-600">Create unique and engaging moments between major plot points</p>
              </div>
              <div>
                <div className="text-3xl mb-4">🎭</div>
                <h3 className="text-xl font-semibold mb-2">Character Development</h3>
                <p className="text-gray-600">Deepen character relationships and backstories</p>
              </div>
              <div>
                <div className="text-3xl mb-4">⚔️</div>
                <h3 className="text-xl font-semibold mb-2">Adventure Enhancement</h3>
                <p className="text-gray-600">Add depth and variety to your campaign</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-dark text-white py-8">
        <div className="container-custom text-center">
          <p>Created with ❤️ for the TTRPG community</p>
        </div>
      </footer>
    </div>
  )
}

export default App
