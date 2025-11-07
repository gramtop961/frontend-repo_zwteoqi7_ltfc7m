import React from 'react';
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
        <section id="seasons">
          <SeasonSection season="spring" index={0} />
          <SeasonSection season="summer" index={1} />
          <SeasonSection season="autumn" index={2} />
          <SeasonSection season="winter" index={3} />
        </section>
        <section id="about" className="bg-neutral-950">
          <div className="max-w-7xl mx-auto px-4 py-24">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">About</h2>
            <p className="mt-4 text-white/80 max-w-3xl">
              I craft digital experiences that feel alive. This portfolio uses seasonal themes to showcase different moods and approaches to design and development. Smooth animations and scroll-based reveals guide you through the story.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
