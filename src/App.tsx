import { useState } from 'react'
import { CategorySelection } from './components/CategorySelection'
import { PromptDisplay } from './components/PromptDisplay'
import { categories, Category } from './data/categories'
import { generatePrompt } from './data/prompts'
import './styles.css'

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [currentPrompt, setCurrentPrompt] = useState<string>("")
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleCategorySelect = (category: string) => {
    setIsTransitioning(true)
    setTimeout(() => {
      setSelectedCategory(category)
      setCurrentPrompt(generatePrompt(category))
      setIsTransitioning(false)
    }, 300)
  }

  const handleNewPrompt = () => {
    if (selectedCategory) {
      setCurrentPrompt(generatePrompt(selectedCategory))
    }
  }

  const handleBack = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setSelectedCategory(null)
      setCurrentPrompt("")
      setIsTransitioning(false)
    }, 300)
  }

  return (
    <div className="container">
      {!selectedCategory ? (
        <CategorySelection
          categories={categories}
          onCategorySelect={handleCategorySelect}
          isTransitioning={isTransitioning}
        />
      ) : (
        <PromptDisplay
          category={selectedCategory}
          prompt={currentPrompt}
          isTransitioning={isTransitioning}
          onBack={handleBack}
          onNewPrompt={handleNewPrompt}
        />
      )}

      <footer className="footer">
        <p>Created with ❤️ for the TTRPG community</p>
      </footer>
    </div>
  )
}

export default App
