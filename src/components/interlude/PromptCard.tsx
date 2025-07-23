import './PromptCard.css'
import { getPromptTags } from '../../data/prompts'

interface PromptCardProps {
  category: string;
  prompt: string;
}

export function PromptCard({ category, prompt }: PromptCardProps) {
  const tags = getPromptTags(category, prompt);

  return (
    <div className="prompt-card">
      <div className="prompt-content">
        <p>{prompt}</p>
      </div>
      <div className="prompt-tags">
        {tags.map(tag => (
          <span key={tag.id} className="prompt-tag" title={tag.description}>
            {tag.name}
          </span>
        ))}
      </div>
    </div>
  );
} 