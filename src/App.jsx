import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { FavoritesProvider } from './context/FavoritesContext';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <FavoritesProvider>
        <Router>
          <div className="app-container">
            <Navbar />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/favorites" element={<FavoritesPage />} />
              </Routes>
            </main>
          </div>
        </Router>
      </FavoritesProvider>
    </ThemeProvider>
  );
}

export default App;
