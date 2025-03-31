import { CategoryCard } from './CategoryCard'

interface Category {
  title: string
  description: string
  icon: string
}

interface CategorySelectionProps {
  categories: Category[]
  onCategorySelect: (category: string) => void
  isTransitioning: boolean
}

export function CategorySelection({ categories, onCategorySelect, isTransitioning }: CategorySelectionProps) {
  return (
    <>
      <h2 className="title">Select Interlude Type</h2>
      <div className={`content ${isTransitioning ? 'fade' : ''}`}>
        <div className="grid">
          {categories.map(category => (
            <CategoryCard
              key={category.title}
              category={category}
              onClick={onCategorySelect}
            />
          ))}
        </div>
      </div>
    </>
  )
} 