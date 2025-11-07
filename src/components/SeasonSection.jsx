import React from 'react';
import { motion } from 'framer-motion';

const palettes = {
  spring: {
    from: 'from-emerald-200/40',
    to: 'to-emerald-600/60',
    accent: 'bg-emerald-500/20',
    title: 'Spring',
    emoji: '🌸',
  },
  summer: {
    from: 'from-orange-200/40',
    to: 'to-orange-600/60',
    accent: 'bg-orange-500/20',
    title: 'Summer',
    emoji: '🌞',
  },
  autumn: {
    from: 'from-amber-200/40',
    to: 'to-amber-700/60',
    accent: 'bg-amber-500/20',
    title: 'Autumn',
    emoji: '🍂',
  },
  winter: {
    from: 'from-sky-200/40',
    to: 'to-sky-700/60',
    accent: 'bg-sky-500/20',
    title: 'Winter',
    emoji: '❄️',
  },
};

export default function SeasonSection({ season = 'spring', index = 0 }) {
  const palette = palettes[season];

  return (
    <section
      className={`relative min-h-screen flex items-center py-24 ${
        index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
      }`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${palette.from} ${palette.to} -z-0`} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 text-white max-w-2xl shadow-2xl"
        >
          <div className="flex items-center gap-3">
            <span className="text-3xl md:text-4xl">{palette.emoji}</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              {palette.title}
            </h2>
          </div>
          <p className="mt-4 text-white/85 leading-relaxed">
            {season === 'spring' &&
              'Fresh beginnings and vibrant growth. Soft greens and blossoms set a hopeful tone for new projects.'}
            {season === 'summer' &&
              'Bold energy and bright ideas. Warm sunshine hues highlight your most exciting, high-impact work.'}
            {season === 'autumn' &&
              'Reflective and refined. Deep ambers and rustic textures frame thoughtful case studies and process.'}
            {season === 'winter' &&
              'Calm clarity. Crisp blues and clean space showcase minimal, elegant design and focus.'}
          </p>
          <div className={`mt-6 grid grid-cols-2 gap-4`}>
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`aspect-video rounded-xl ${palette.accent} border border-white/20`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
