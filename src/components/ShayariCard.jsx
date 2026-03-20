import { useState, useEffect } from 'react';
import { Heart, Copy, Share2, Check, Volume2, Languages } from 'lucide-react';
import { useFavorites } from '../context/FavoritesContext';
import './ShayariCard.css';

export default function ShayariCard({ shayari }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const [copied, setCopied] = useState(false);
  const [showHindi, setShowHindi] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const isFav = isFavorite(shayari.id);

  // Stop audio when component unmounts
  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const handleCopy = async () => {
    try {
      const textToCopy = showHindi && shayari.hindi ? shayari.hindi : shayari.text;
      await navigator.clipboard.writeText(`${textToCopy}\n\n— ${shayari.poet}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleShare = async () => {
    const textToShare = showHindi && shayari.hindi ? shayari.hindi : shayari.text;
    const shareData = {
      title: 'Urdu Shayari',
      text: `${textToShare}\n\n— ${shayari.poet}`,
      url: window.location.href, // Or a specific URL for deep linking
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      // Fallback: try sharing to WhatsApp if Web Share API is not supported
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareData.text)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  const handleSpeech = () => {
    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      return;
    }

    // Try finding a Hindi or Urdu voice
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(voice => 
      voice.lang.includes('ur') || voice.lang.includes('hi')
    );

    const textToRead = showHindi && shayari.hindi ? shayari.hindi : shayari.text;
    const utterance = new SpeechSynthesisUtterance(textToRead);
    
    // Set parameters
    utterance.rate = 0.85; // slightly slower for poetic feel
    utterance.pitch = 1;
    if (preferredVoice) {
      utterance.voice = preferredVoice;
    } else {
      // Fallback language hint
      utterance.lang = showHindi ? 'hi-IN' : 'ur-PK'; 
    }

    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);

    setIsPlaying(true);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="shayari-card glass animate-fade-in">
      <div className="card-header">
        <span className="category-badge">{shayari.category}</span>
        <div className="header-actions">
          {shayari.hindi && (
            <button 
              onClick={() => setShowHindi(!showHindi)}
              className={`action-btn lang-btn ${showHindi ? 'active' : ''}`}
              title="Toggle Hindi/Urdu"
              aria-label="Toggle language script"
            >
              <Languages size={20} />
            </button>
          )}
          <button 
            onClick={() => toggleFavorite(shayari.id)}
            className={`action-btn fav-btn ${isFav ? 'active' : ''}`}
            aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart size={20} fill={isFav ? "currentColor" : "none"} />
          </button>
        </div>
      </div>

      <div className="card-body">
        {showHindi && shayari.hindi ? (
          <p className="hindi-text">{shayari.hindi}</p>
        ) : (
          <p className="urdu-text">{shayari.text}</p>
        )}
      </div>

      <div className="card-footer">
        <span className="poet-name">— {shayari.poet}</span>
        
        <div className="card-actions">
          <button 
            onClick={handleSpeech} 
            className={`action-btn ${isPlaying ? 'playing' : ''}`}
            title="Listen"
            aria-label="Play audio"
          >
            <Volume2 size={18} />
          </button>
          <button 
            onClick={handleCopy} 
            className="action-btn"
            title="Copy"
            aria-label="Copy shayari"
          >
            {copied ? <Check size={18} className="text-success" /> : <Copy size={18} />}
          </button>
          <button 
            onClick={handleShare} 
            className="action-btn"
            title="Share"
            aria-label="Share shayari"
          >
            <Share2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
