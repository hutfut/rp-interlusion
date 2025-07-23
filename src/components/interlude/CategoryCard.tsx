import './CategoryCard.css'

interface Category {
  title: string;
  description: string;
  icon: string;
}

interface CategoryCardProps {
  category: Category;
  onClick: (title: string) => void;
}

export function CategoryCard({ category, onClick }: CategoryCardProps) {
  return (
    <button 
      onClick={() => onClick(category.title)}
      className="card"
    >
      <div className="card-content">
        <span className="card-icon">{category.icon}</span>
        <h3 className="card-title">{category.title}</h3>
        <p className="card-description">{category.description}</p>
      </div>
    </button>
  );
} 