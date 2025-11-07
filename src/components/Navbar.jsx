import React from 'react';
import { motion } from 'framer-motion';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#seasons', label: 'Seasons' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 140, damping: 16 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between backdrop-blur-xl bg-black/30 rounded-b-2xl border-b border-white/10">
        <a href="#home" className="text-white font-semibold tracking-wide">
          Seasons Portfolio
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/80 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="text-xs md:text-sm px-3 py-2 rounded-full border border-white/10 bg-white/10 hover:bg-white/20 text-white transition-colors"
        >
          Say Hello
        </a>
      </div>
    </motion.header>
  );
}
