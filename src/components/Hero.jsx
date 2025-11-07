import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4YqVJv2f0Uqg-3g1/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent pointer-events-none" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-white"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            A Portfolio Through The Seasons
          </h1>
          <p className="mt-4 text-white/80 max-w-xl">
            Scroll to journey across spring, summer, autumn, and winter — each section blends motion and color to reflect the mood of the season.
          </p>
          <a href="#seasons" className="inline-block mt-8 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur text-white">
            Start Scrolling
          </a>
        </motion.div>
      </div>
    </section>
  );
}
