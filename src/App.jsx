import { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SeasonSection from './components/SeasonSection';
import Footer from './components/Footer';

const SEASONS = ['spring', 'summer', 'autumn', 'winter'];

function App() {
  const [season, setSeason] = useState('spring');

  // Auto-rotate seasons every 7 seconds for a lively portfolio feel
  useEffect(() => {
    const id = setInterval(() => {
      setSeason((prev) => {
        const idx = SEASONS.indexOf(prev);
        const next = (idx + 1) % SEASONS.length;
        return SEASONS[next];
      });
    }, 7000);
    return () => clearInterval(id);
  }, []);

  const handleSelectSeason = (s) => setSeason(s);

  const sections = useMemo(
    () => [
      { key: 'spring', title: 'Spring' },
      { key: 'summer', title: 'Summer' },
      { key: 'autumn', title: 'Autumn' },
      { key: 'winter', title: 'Winter' },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero currentSeason={season} onSelectSeason={handleSelectSeason} />

        {/* Seasons gallery sections */}
        {sections.map((s, idx) => (
          <SeasonSection
            key={s.key}
            season={s.key}
            idProp={idx === 0 ? 'seasons' : undefined}
            active={s.key === season}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;
