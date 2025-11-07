export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-black py-12 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-white/70">Designed for a cosmic, seasonal journey.</p>
          <div className="flex gap-4 text-sm">
            <a href="mailto:hello@example.com" className="text-white/80 hover:text-white">Email</a>
            <a href="https://x.com" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white">X</a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white">GitHub</a>
          </div>
        </div>
        <p className="mt-6 text-xs text-white/50">© {new Date().getFullYear()} Cosmic Seasons</p>
      </div>
    </footer>
  );
}
