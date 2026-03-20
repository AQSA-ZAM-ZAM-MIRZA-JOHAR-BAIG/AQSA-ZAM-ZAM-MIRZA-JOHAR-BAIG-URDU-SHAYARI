import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Heart } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import './Navbar.css';

export default function Navbar() {
  const { isDarkMode, toggleTheme } = useTheme();
  const location = useLocation();

  return (
    <header className="navbar glass">
      <div className="container nav-container">
        <Link to="/" className="brand">
          <span className="brand-icon">✨</span>
          <span className="brand-text text-gradient">Urdu Shayari</span>
        </Link>

        <nav className="nav-links">
          <Link 
            to="/favorites" 
            className={`nav-link ${location.pathname === '/favorites' ? 'active' : ''}`}
            title="Favorites"
          >
            <Heart size={20} fill={location.pathname === '/favorites' ? "currentColor" : "none"} />
            <span className="link-text">Favorites</span>
          </Link>
          
          <button 
            onClick={toggleTheme} 
            className="theme-toggle"
            title="Toggle theme"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>
      </div>
    </header>
  );
}
