import { motion } from 'framer-motion';

const palettes = {
  spring: {
    title: 'Spring',
    emoji: '🌸',
    gradient: 'from-emerald-400/20 via-teal-400/10 to-transparent',
  },
  summer: {
    title: 'Summer',
    emoji: '🌞',
    gradient: 'from-amber-400/20 via-orange-500/10 to-transparent',
  },
  autumn: {
    title: 'Autumn',
    emoji: '🍂',
    gradient: 'from-rose-400/20 via-amber-700/10 to-transparent',
  },
  winter: {
    title: 'Winter',
    emoji: '❄️',
    gradient: 'from-sky-400/20 via-indigo-500/10 to-transparent',
  },
};

export default function SeasonSection({ season = 'spring' }) {
  const cfg = palettes[season] ?? palettes.spring;

  return (
    <section id="seasons" className="relative min-h-[80vh] w-full border-t border-white/10">
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-b ${cfg.gradient}`} />
      <div className="relative mx-auto max-w-7xl px-6 py-16 text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold sm:text-4xl"
        >
          {cfg.emoji} {cfg.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-3 max-w-2xl text-white/80"
        >
          A seasonal showcase blending color, motion, and space-inspired textures.
        </motion.p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group rounded-xl border border-white/10 bg-white/5 p-5 shadow-lg backdrop-blur hover:bg-white/10"
            >
              <div className="mb-3 h-32 w-full rounded-lg bg-gradient-to-br from-white/10 to-transparent" />
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Concept {i}</h3>
                <span className="text-sm text-white/60">View</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
