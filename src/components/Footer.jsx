import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white/80">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-semibold text-lg">Let’s work together</h3>
            <p className="mt-2">Available for freelance projects and collaborations.</p>
          </div>
          <div>
            <p className="mb-2">Email</p>
            <a className="text-white hover:underline" href="mailto:hello@seasons.studio">hello@seasons.studio</a>
          </div>
          <div>
            <p className="mb-2">Social</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white">Twitter</a>
              <a href="#" className="hover:text-white">LinkedIn</a>
              <a href="#" className="hover:text-white">Dribbble</a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/60">© {new Date().getFullYear()} Seasons Portfolio</div>
      </div>
    </footer>
  );
}
