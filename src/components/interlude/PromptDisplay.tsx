import { PromptCard } from './PromptCard'
import './PromptCard.css'

interface PromptDisplayProps {
  category: string
  prompt: string
  isTransitioning: boolean
  onBack: () => void
  onNewPrompt: () => void
}

export function PromptDisplay({ 
  category, 
  prompt, 
  isTransitioning,
  onBack,
  onNewPrompt 
}: PromptDisplayProps) {
  return (
    <div className={`content ${isTransitioning ? 'fade' : ''}`}>
      <PromptCard
        category={category}
        prompt={prompt}
      />
      <div className="prompt-actions">
        <button onClick={onBack} className="action-button">
          ← Back
        </button>
        <button onClick={onNewPrompt} className="action-button">
          Generate New Prompt
        </button>
      </div>
    </div>
  )
} 