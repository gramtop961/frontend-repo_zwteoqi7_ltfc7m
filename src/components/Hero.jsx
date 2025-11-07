import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const seasonCopy = {
  spring: {
    title: 'Spring of Ideas',
    subtitle: 'Blooming projects, fresh algorithms, and a curious mindset.'
  },
  summer: {
    title: 'Summer of Shipping',
    subtitle: 'Hot sprints, optimized builds, and blazing UI polish.'
  },
  autumn: {
    title: 'Autumn of Architecture',
    subtitle: 'Refactoring leaves fall away—strong systems remain.'
  },
  winter: {
    title: 'Winter of Focus',
    subtitle: 'Calm, deep work: systems, compilers, and clean APIs.'
  }
};

export default function Hero({ currentSeason = 'spring', onSelectSeason }) {
  const copy = seasonCopy[currentSeason] ?? seasonCopy.spring;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  // Parallax transforms
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const subY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  return (
    <section id="home" ref={ref} className="relative min-h-screen w-full bg-black text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Parallax cosmic glows - keep interactions free for Spline */}
      <motion.div style={{ opacity: glowOpacity }} className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(147,51,234,0.28),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/30 to-black/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.2em] text-white/70"
          >
            CSE Portfolio — Season: {currentSeason}
          </motion.p>

          <motion.h1
            key={currentSeason}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ y: titleY }}
            className="mt-2 text-4xl font-bold sm:text-6xl"
          >
            {copy.title}
          </motion.h1>

          <motion.p
            key={`sub-${currentSeason}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ y: subY }}
            className="mt-4 text-lg text-white/85"
          >
            {copy.subtitle}
          </motion.p>

          {/* Season Switcher */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-8 flex flex-wrap items-center gap-2"
          >
            {['spring', 'summer', 'autumn', 'winter'].map((s) => (
              <button
                key={s}
                onClick={() => onSelectSeason && onSelectSeason(s)}
                className={`rounded-full border px-4 py-2 text-sm transition backdrop-blur hover:bg-white/10 ${
                  currentSeason === s ? 'border-white bg-white/10' : 'border-white/20'
                }`}
                aria-pressed={currentSeason === s}
              >
                {s}
              </button>
            ))}
            <a href="#seasons" className="ml-2 rounded-full bg-white/10 px-4 py-2 text-sm transition hover:bg-white/20">
              Explore Sections
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
