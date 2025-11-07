import { motion } from 'framer-motion';

const palettes = {
  spring: {
    title: 'Spring',
    emoji: '🌸',
    gradient: 'from-emerald-400/20 via-teal-400/10 to-transparent',
    char: '🧑‍💻',
    action: 'Prototyping new ideas'
  },
  summer: {
    title: 'Summer',
    emoji: '🌞',
    gradient: 'from-amber-400/20 via-orange-500/10 to-transparent',
    char: '🚀',
    action: 'Shipping hot releases'
  },
  autumn: {
    title: 'Autumn',
    emoji: '🍂',
    gradient: 'from-rose-400/20 via-amber-700/10 to-transparent',
    char: '🛠️',
    action: 'Refactoring architecture'
  },
  winter: {
    title: 'Winter',
    emoji: '❄️',
    gradient: 'from-sky-400/20 via-indigo-500/10 to-transparent',
    char: '📚',
    action: 'Deep studying & algorithms'
  },
};

export default function SeasonSection({ season = 'spring', idProp, active = false }) {
  const cfg = palettes[season] ?? palettes.spring;

  return (
    <section id={idProp} className="relative min-h-[80vh] w-full border-t border-white/10">
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

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`mt-8 grid items-center gap-8 md:grid-cols-2`}
        >
          {/* Character card mimicking season-specific behavior */}
          <div className={`relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-lg ${active ? 'ring-1 ring-white/30' : ''}`}>
            <motion.div
              animate={{ y: active ? [0, -6, 0] : 0 }}
              transition={{ repeat: active ? Infinity : 0, duration: 2.4 }}
              className="text-6xl select-none"
              aria-hidden
            >
              {cfg.char}
            </motion.div>
            <p className="mt-3 text-white/80">{cfg.action}</p>
            <p className="mt-2 text-sm text-white/60">
              Focus areas: React, FastAPI, DB design, systems thinking.
            </p>
          </div>

          {/* Project placeholders */}
          <div className="grid gap-4 sm:grid-cols-2">
            {[1, 2, 3, 4].map((i) => (
              <motion.a
                key={i}
                href="#"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="group block overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10"
              >
                <div className="h-28 w-full rounded-lg bg-gradient-to-br from-white/10 to-transparent" />
                <div className="mt-3 flex items-center justify-between">
                  <h3 className="font-medium">{cfg.title} Project {i}</h3>
                  <span className="text-xs text-white/60">Open →</span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
