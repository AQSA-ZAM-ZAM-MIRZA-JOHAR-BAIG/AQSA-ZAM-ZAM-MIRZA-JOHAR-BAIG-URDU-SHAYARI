import { useMemo } from 'react';
import ShayariCard from './ShayariCard';
import shayariData from '../data/shayari.json';
import './DailyShayari.css';

export default function DailyShayari() {
  const dailyShayari = useMemo(() => {
    // Pick a "daily" shayari based on the day of the year so it changes at midnight
    const today = new Date();
    const start = new Date(today.getFullYear(), 0, 0);
    const diff = today - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    
    // Use modulo to cycle through the dataset
    const index = dayOfYear % shayariData.length;
    return shayariData[index];
  }, []);

  if (!dailyShayari) return null;

  return (
    <div className="daily-shayari-section">
      <h2 className="section-title">
        <span className="text-gradient">Sher of the Day</span>
        <span className="sparkle">✨</span>
      </h2>
      <div className="daily-card-wrapper">
        <ShayariCard shayari={dailyShayari} />
      </div>
    </div>
  );
}
