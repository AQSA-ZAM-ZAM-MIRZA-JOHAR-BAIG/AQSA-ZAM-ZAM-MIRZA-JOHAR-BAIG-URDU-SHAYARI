import { Search } from 'lucide-react';
import './SearchBar.css';

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-bar-container">
      <div className="search-input-wrapper glass">
        <Search className="search-icon" size={20} />
        <input
          type="text"
          className="search-input"
          placeholder="Search shayari by keywords..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
}
