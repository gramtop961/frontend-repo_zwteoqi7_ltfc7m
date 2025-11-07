import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const palettes = {
  spring: {
    title: 'Spring',
    emoji: '🌸',
    gradient: 'from-emerald-400/20 via-teal-400/10 to-transparent',
    char: '🧑‍💻',
    action: 'Prototyping new ideas',
    hue: 'emerald'
  },
  summer: {
    title: 'Summer',
    emoji: '🌞',
    gradient: 'from-amber-400/20 via-orange-500/10 to-transparent',
    char: '🚀',
    action: 'Shipping hot releases',
    hue: 'amber'
  },
  autumn: {
    title: 'Autumn',
    emoji: '🍂',
    gradient: 'from-rose-400/20 via-amber-700/10 to-transparent',
    char: '🛠️',
    action: 'Refactoring architecture',
    hue: 'rose'
  },
  winter: {
    title: 'Winter',
    emoji: '❄️',
    gradient: 'from-sky-400/20 via-indigo-500/10 to-transparent',
    char: '📚',
    action: 'Deep studying & algorithms',
    hue: 'sky'
  },
};

export default function SeasonSection({ season = 'spring', idProp, active = false }) {
  const cfg = palettes[season] ?? palettes.spring;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  // Parallax layers
  const starsY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const mistY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, -10]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const cardRotate = useTransform(scrollYProgress, [0, 1], [0, -8]);
  const cardLift = useTransform(scrollYProgress, [0, 1], [0, -20]);

  return (
    <section ref={ref} id={idProp} className="relative min-h-[120vh] w-full border-t border-white/10 overflow-hidden">
      {/* Far stars */}
      <motion.div style={{ y: starsY }} className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.08),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.06),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.05),transparent_40%)]" />
      </motion.div>

      {/* Mid mist */}
      <motion.div style={{ y: mistY }} className={`pointer-events-none absolute inset-0 bg-gradient-to-b ${cfg.gradient}`} />

      {/* Near grid glow */}
      <motion.div style={{ y: gridY }} className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.16) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          backgroundPosition: 'center'
        }} />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 to-transparent" />
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          style={{ y: titleY }}
          className="text-3xl font-semibold sm:text-4xl"
        >
          {cfg.emoji} {cfg.title}
        </motion.h2>

        <div className="mt-10 [perspective:1200px]">
          <motion.div
            style={{ rotateX: cardRotate, y: cardLift }}
            className={`grid items-stretch gap-8 md:grid-cols-2`}
          >
            {/* Character scene card */}
            <motion.div
              whileHover={{ rotateY: 6, rotateX: -2, scale: 1.015 }}
              transition={{ type: 'spring', stiffness: 250, damping: 20 }}
              className={`relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-lg ${active ? 'ring-1 ring-white/30' : ''}`}
            >
              <motion.div
                animate={{ y: active ? [0, -8, 0] : 0 }}
                transition={{ repeat: active ? Infinity : 0, duration: 2.6 }}
                className="text-6xl select-none"
                aria-hidden
              >
                {cfg.char}
              </motion.div>
              <p className="mt-3 text-white/80">{cfg.action}</p>
              <p className="mt-2 text-sm text-white/60">
                People evolve through seasons: ideate → build → refine → master. This section mirrors that journey.
              </p>
            </motion.div>

            {/* Journey projects with 3D tilt */}
            <div className="grid gap-4 sm:grid-cols-2">
              {[1, 2, 3, 4].map((i) => (
                <motion.a
                  key={i}
                  href="#"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  whileHover={{ rotateX: -3, rotateY: 5, scale: 1.02 }}
                  className="group block overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 [transform-style:preserve-3d]"
                >
                  <div className="relative h-28 w-full rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                    <motion.div
                      aria-hidden
                      className="pointer-events-none absolute -inset-10 rounded-full bg-white/20 blur-2xl opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.6 }}
                    />
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <h3 className="font-medium">{cfg.title} Journey {i}</h3>
                    <span className="text-xs text-white/60">Open →</span>
                  </div>
                  <p className="mt-1 text-xs text-white/60">
                    Step {i}: {season === 'spring' ? 'Ideation' : season === 'summer' ? 'Execution' : season === 'autumn' ? 'Refinement' : 'Mastery'}
                  </p>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
