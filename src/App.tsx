import { useState } from 'react'
import { CategorySelection, PromptDisplay } from './components/interlude'
import { categories } from './data/categories'
import { generatePrompt } from './data/prompts'
import { SlidingTrayNav } from './components/common'
import { Scorecard } from './components/scorecard'
import Tokens from './components/tokens/Tokens'
import './styles.css'

function App() {
  const [selectedApp, setSelectedApp] = useState<'interlude' | 'scorecard' | 'tokens'>('interlude')
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
    <div>
      <SlidingTrayNav selectedApp={selectedApp} onSelectApp={setSelectedApp} />
      <div className="app-content">
        {selectedApp === 'interlude' ? (
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
          </div>
        ) : selectedApp === 'scorecard' ? (
          <Scorecard />
        ) : selectedApp === 'tokens' ? (
          <Tokens />
        ) : null}
        <footer className="footer">
          <p>
            <a href="mailto:the.josh.myers@gmail.com">Contact</a>
            <span className="footer-separator">|</span>
            <a href="https://github.com/hutfut/rp-interlusion" target="_blank" rel="noopener noreferrer"> GitHub</a>
          </p>
        </footer>
      </div>
    </div>
  )
}

export default App
