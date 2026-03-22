import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import ShayariCard from '../components/ShayariCard';
import SEO from '../components/SEO';
import shayariData from '../data/shayari.json';
import './FavoritesPage.css';

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  // Filter shayariData to only include favorited items
  const favoriteShayari = shayariData.filter(shayari => 
    favorites.includes(shayari.id)
  );

  return (
    <div className="container page-container animate-fade-in">
      <SEO 
        title="Your Favorites"
        description="Your personal collection of beautiful hand-picked Urdu Shayari and poetry."
      />
      <div className="favorites-header">
        <h2 className="section-title text-gradient">Your Favorites</h2>
        <span className="results-count">{favoriteShayari.length} saved</span>
      </div>

      {favoriteShayari.length > 0 ? (
        <div className="shayari-grid">
          {favoriteShayari.map((shayari) => (
            <ShayariCard key={shayari.id} shayari={shayari} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <div className="empty-icon">💔</div>
          <h3>No favorites yet</h3>
          <p>You haven't added any shayari to your favorites.</p>
          <Link to="/" className="browse-btn">
            Browse Shayari
          </Link>
        </div>
      )}
    </div>
  );
}
