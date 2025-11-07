import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SeasonSection from './components/SeasonSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <SeasonSection season="spring" />
        <SeasonSection season="summer" />
        <SeasonSection season="autumn" />
        <SeasonSection season="winter" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
