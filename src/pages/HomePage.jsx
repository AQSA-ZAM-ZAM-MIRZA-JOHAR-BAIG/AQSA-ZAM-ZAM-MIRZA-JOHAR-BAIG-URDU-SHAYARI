import { useState, useMemo } from 'react';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';
import ShayariCard from '../components/ShayariCard';
import DailyShayari from '../components/DailyShayari';
import shayariData from '../data/shayari.json';
import './HomePage.css';

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPoet, setSelectedPoet] = useState('All');

  // Extract unique categories and poets to pass to the FilterBar
  const categories = useMemo(() => {
    const cats = new Set(shayariData.map(s => s.category));
    return Array.from(cats).sort();
  }, []);

  const poets = useMemo(() => {
    const pts = new Set(shayariData.map(s => s.poet));
    return Array.from(pts).sort();
  }, []);

  // Filter logic
  const filteredShayari = useMemo(() => {
    return shayariData.filter(shayari => {
      const matchesSearch = shayari.text.includes(searchTerm) || 
                            shayari.poet.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || shayari.category === selectedCategory;
      const matchesPoet = selectedPoet === 'All' || shayari.poet === selectedPoet;

      return matchesSearch && matchesCategory && matchesPoet;
    });
  }, [searchTerm, selectedCategory, selectedPoet]);

  return (
    <div className="container page-container animate-fade-in">
      {/* Search and Filters */}
      <section className="search-section">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <FilterBar 
          categories={categories}
          poets={poets}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedPoet={selectedPoet}
          setSelectedPoet={setSelectedPoet}
        />
      </section>

      {/* Only show Daily Shayari if no filters are active (cleaner UX) */}
      {!searchTerm && selectedCategory === 'All' && selectedPoet === 'All' && (
        <DailyShayari />
      )}

      {/* Results Section */}
      <section className="results-section">
        <div className="results-header">
          <h3 className="results-title">
            {searchTerm || selectedCategory !== 'All' || selectedPoet !== 'All' 
              ? 'Search Results' 
              : 'Discover Shayari'}
          </h3>
          <span className="results-count">{filteredShayari.length} sher found</span>
        </div>

        {filteredShayari.length > 0 ? (
          <div className="shayari-grid">
            {filteredShayari.map((shayari) => (
              <ShayariCard key={shayari.id} shayari={shayari} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p>No shayari found matching your criteria.</p>
            <button 
              className="clear-filters-btn"
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
                setSelectedPoet('All');
              }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
