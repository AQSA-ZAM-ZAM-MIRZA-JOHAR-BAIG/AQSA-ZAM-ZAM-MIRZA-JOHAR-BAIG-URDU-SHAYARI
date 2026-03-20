import './FilterBar.css';

export default function FilterBar({ 
  categories, 
  poets, 
  selectedCategory, 
  setSelectedCategory, 
  selectedPoet, 
  setSelectedPoet 
}) {
  return (
    <div className="filter-bar">
      <div className="filter-group">
        <label htmlFor="poet-select" className="filter-label">Poet</label>
        <select 
          id="poet-select"
          className="filter-select glass"
          value={selectedPoet}
          onChange={(e) => setSelectedPoet(e.target.value)}
        >
          <option value="All">All Poets</option>
          {poets.map(poet => (
            <option key={poet} value={poet}>{poet}</option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label className="filter-label">Category</label>
        <div className="category-chips">
          <button
            className={`chip ${selectedCategory === 'All' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('All')}
          >
            All
          </button>
          {categories.map(cat => (
            <button
              key={cat}
              className={`chip ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
