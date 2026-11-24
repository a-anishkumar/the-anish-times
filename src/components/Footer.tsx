import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { soundFx } from '../utils/soundEffects';
import { ArrowUp, Heart, Printer, Shield, Compass } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    soundFx.playPaperRustle();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full relative border-t-4 border-ink-900 dark:border-night-600 bg-paper-100 dark:bg-night-900 pt-8 pb-12 mt-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Newspaper Colophon 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-8 border-b-2 border-ink-900/30 dark:border-night-700 font-typewriter text-xs text-ink-700 dark:text-stone-300">
          {/* Column 1: Publication Data */}
          <div>
            <h5 className="font-headline font-black text-sm uppercase text-ink-950 dark:text-stone-100 mb-2 border-b border-ink-900/20 pb-1">
              Colophon & Press Registry
            </h5>
            <p className="leading-relaxed">
              Published and circulated by <strong>{PORTFOLIO_DATA.personal.name}</strong>, Department of Computer Science & Design, Kongu Engineering College.
            </p>
            <p className="mt-2 text-press-red dark:text-red-400 font-bold">
              Class of 2027 • CGPA 7.79
            </p>
          </div>

          {/* Column 2: Typography & Mechanics */}
          <div>
            <h5 className="font-headline font-black text-sm uppercase text-ink-950 dark:text-stone-100 mb-2 border-b border-ink-900/20 pb-1">
              Typography & Grid
            </h5>
            <p className="leading-relaxed">
              Typeset in <em>UnifrakturCook</em>, <em>Playfair Display</em>, <em>Libre Baskerville</em>, <em>Merriweather</em>, and <em>Special Elite</em>. Formatted on a responsive broadsheet column grid.
            </p>
          </div>

          {/* Column 3: Regional Heart & Origin */}
          <div>
            <h5 className="font-headline font-black text-sm uppercase text-ink-950 dark:text-stone-100 mb-2 border-b border-ink-900/20 pb-1">
              Press Location
            </h5>
            <p className="leading-relaxed flex items-center gap-1.5">
              <span>Printed with</span>
              <Heart className="w-3.5 h-3.5 fill-press-red text-press-red inline" />
              <span>in Tamil Nadu, India.</span>
            </p>
            <p className="mt-2 text-ink-600 dark:text-night-muted">
              Broadsheet Edition distributed globally under MIT License.
            </p>
          </div>

          {/* Column 4: Quick Telemetry & Return */}
          <div className="flex flex-col justify-between items-start md:items-end">
            <div>
              <h5 className="font-headline font-black text-sm uppercase text-ink-950 dark:text-stone-100 mb-2 border-b border-ink-900/20 pb-1">
                Return to Masthead
              </h5>
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-3 py-1.5 border-2 border-ink-900 dark:border-night-600 font-bold uppercase tracking-wider text-xs hover:bg-ink-900 hover:text-white dark:hover:bg-stone-200 dark:hover:text-ink-950 transition-colors shadow-xs"
                title="Scroll to Top of Broadsheet"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Top of Page</span>
              </button>
            </div>

            <div className="mt-4 font-typewriter text-[11px] text-ink-600 dark:text-night-muted">
              Vol. 2027 • Final Edition
            </div>
          </div>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="pt-4 flex flex-wrap items-center justify-between gap-2 font-typewriter text-[11px] text-ink-600 dark:text-night-muted">
          <div>
            © {new Date().getFullYear()} {PORTFOLIO_DATA.meta.paperName}. All Rights Reserved across all editions.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-press-red cursor-pointer">Privacy & Data Sovereignty</span>
            <span>•</span>
            <span className="hover:text-press-red cursor-pointer">Air-Gapped Archives</span>
            <span>•</span>
            <span className="hover:text-press-red cursor-pointer">Open Source Wire</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
