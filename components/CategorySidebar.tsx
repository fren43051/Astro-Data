
import React from 'react';

interface CategorySidebarProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategorySidebar: React.FC<CategorySidebarProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  const baseButtonClass =
    'w-full text-left px-4 py-2.5 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-blue-500';
  const activeButtonClass = 'bg-blue-500/20 text-white';
  const inactiveButtonClass = 'text-gray-400 hover:bg-gray-700/50 hover:text-white';

  return (
    <aside className="w-full md:w-1/4 lg:w-1/5 xl:w-1/6 md:sticky md:top-8 self-start">
      {/* Mobile/Tablet Horizontal Scroll View */}
      <div className="md:hidden mb-6">
        <div className="flex space-x-2 overflow-x-auto pb-2 -mx-4 px-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop Vertical View */}
      <div className="hidden md:block bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700/50">
        <h2 className="text-lg font-bold mb-4 text-gray-200 px-2">Categorías</h2>
        <nav className="space-y-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={`${baseButtonClass} ${
                selectedCategory === category ? activeButtonClass : inactiveButtonClass
              }`}
              aria-current={selectedCategory === category ? 'page' : undefined}
            >
              {category}
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default CategorySidebar;