import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { soundFx } from '../utils/soundEffects';
import {
  Moon,
  Sun,
  Volume2,
  VolumeX,
  Newspaper,
  CloudSun,
  Sparkles,
  Search,
} from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  soundEnabled: boolean;
  setSoundEnabled: (val: boolean) => void;
  onSearchClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  darkMode,
  setDarkMode,
  soundEnabled,
  setSoundEnabled,
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Printing press scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerPaperConfetti = () => {
    soundFx.playPaperRustle();

    // Newspaper clippings palette: aged cream, charcoal ink, vintage red, sepia, antique gold
    const colors = darkMode
      ? ['#dfd7ca', '#4a433b', '#8b1e0f', '#c8963e', '#161412']
      : ['#f4ecd8', '#151311', '#8b1e0f', '#5c4033', '#e7dcbe'];

    confetti({
      particleCount: 75,
      spread: 90,
      origin: { y: 0.15 },
      colors,
      shapes: ['square'],
      scalar: 1.2,
      ticks: 220,
      gravity: 0.8,
      drift: 0.1,
    });

    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 70,
        origin: { x: 0.05, y: 0.2 },
        colors,
        shapes: ['square'],
        scalar: 1.1,
      });
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 70,
        origin: { x: 0.95, y: 0.2 },
        colors,
        shapes: ['square'],
      });
    }, 180);
  };

  const toggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    soundFx.enabled = nextState;
    if (nextState) {
      soundFx.playTypewriterKey();
    }
  };

  const toggleEdition = () => {
    soundFx.playPaperRustle();
    setDarkMode(!darkMode);
  };

  return (
    <header className="w-full relative z-20 border-b-4 border-ink-900 dark:border-night-600 bg-paper-100 dark:bg-night-900 transition-colors duration-300">
      {/* Top Printing Press Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-press-red dark:bg-red-500 z-50 transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 pt-3 pb-2">
        {/* Top Control Bar & Weather / Forecast */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center text-xs border-b border-ink-900/30 dark:border-night-700/60 pb-2 mb-2 gap-2 font-typewriter">
          {/* Weather / Forecast widget */}
          <div className="flex items-center gap-2 text-ink-700 dark:text-night-muted">
            <CloudSun className="w-4 h-4 text-press-gold shrink-0" />
            <span className="font-semibold">{PORTFOLIO_DATA.meta.forecast}</span>
          </div>

          {/* Issue Meta center */}
          <div className="text-center hidden md:block uppercase tracking-widest text-[11px] text-ink-600 dark:text-night-muted">
            <span>{PORTFOLIO_DATA.meta.tagline}</span>
          </div>

          {/* Edition & Audio Toggles */}
          <div className="flex items-center justify-end gap-2 sm:gap-3">
            {/* Audio Toggle */}
            <button
              onClick={toggleSound}
              className="flex items-center gap-1 px-2 py-1 border border-ink-800/40 dark:border-night-600 hover:bg-ink-900/5 dark:hover:bg-night-800 rounded transition-colors text-[11px]"
              title={soundEnabled ? 'Mute Vintage Audio' : 'Enable Vintage Press Audio'}
              aria-label={soundEnabled ? 'Mute Vintage Audio' : 'Enable Vintage Press Audio'}
            >
              {soundEnabled ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-press-green" />
                  <span className="hidden sm:inline">Audio: On</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 opacity-60" />
                  <span className="hidden sm:inline">Audio: Off</span>
                </>
              )}
            </button>

            {/* Edition Switcher (Dark Mode) */}
            <button
              onClick={toggleEdition}
              className="flex items-center gap-1.5 px-2.5 py-1 border border-ink-900 dark:border-night-600 font-typewriter text-[11px] font-bold hover:bg-ink-900 hover:text-paper-100 dark:hover:bg-paper-100 dark:hover:text-night-950 transition-all rounded-sm shadow-xs"
              title="Toggle Broadsheet Edition"
            >
              {darkMode ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-press-gold" />
                  <span>Morning Broadsheet</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-press-blue" />
                  <span>Night Edition</span>
                </>
              )}
            </button>

            {/* Confetti 'Read Issue' Button */}
            <button
              onClick={triggerPaperConfetti}
              className="flex items-center gap-1 px-2.5 py-1 bg-press-red text-white hover:bg-press-redDark text-[11px] font-bold rounded-sm tracking-wider uppercase transition-transform active:scale-95 shadow-xs"
              title="Celebrate & Unfold Broadsheet"
            >
              <Sparkles className="w-3 h-3" />
              <span className="hidden sm:inline">Read Issue</span>
            </button>
          </div>
        </div>

        {/* Vintage Masthead Main */}
        <div className="text-center py-2 sm:py-4 select-none relative">
          {/* Subtle Vintage Ear Badges (left and right of masthead) */}
          <div className="hidden lg:flex flex-col justify-between absolute left-0 top-1/2 -translate-y-1/2 w-44 p-2 text-left border border-ink-900/30 dark:border-night-700 text-[11px] font-typewriter leading-tight bg-paper-50 dark:bg-night-850">
            <span className="font-bold border-b border-ink-900/20 pb-0.5 mb-1 text-press-red dark:text-red-400">
              GAZETTE DISPATCH
            </span>
            <span>Kongu Engineering College • Computer Science & Design</span>
            <span className="mt-1 font-bold">Class of 2027</span>
          </div>

          <div className="hidden lg:flex flex-col justify-between absolute right-0 top-1/2 -translate-y-1/2 w-44 p-2 text-right border border-ink-900/30 dark:border-night-700 text-[11px] font-typewriter leading-tight bg-paper-50 dark:bg-night-850">
            <span className="font-bold border-b border-ink-900/20 pb-0.5 mb-1 text-press-green dark:text-emerald-400">
              CAREER OUTLOOK
            </span>
            <span>Available for Internship & High-Impact Software Engineering</span>
            <span className="mt-1 font-bold">Price: FREE</span>
          </div>

          {/* Latin / Heritage subtitle above masthead */}
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-typewriter text-ink-600 dark:text-night-muted mb-1">
            {PORTFOLIO_DATA.meta.established} • {PORTFOLIO_DATA.meta.circulation}
          </p>

          {/* THE ANISH TIMES Big Title */}
          <h1
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-masthead tracking-tight text-ink-950 dark:text-stone-100 ink-bleed transition-transform hover:scale-[1.008] duration-300"
            style={{ fontFamily: "'UnifrakturCook', 'Playfair Display', serif" }}
          >
            {PORTFOLIO_DATA.meta.paperName}
          </h1>

          <p className="font-headline italic text-sm sm:text-base text-ink-700 dark:text-stone-300 mt-1">
            “The Premier Broadsheet of Computing Innovations, Full-Stack Architecture, and Software Craftsmanship”
          </p>
        </div>

        {/* Issue Details Double-Rule Bar */}
        <div className="border-y-2 border-ink-900 dark:border-night-600 py-1.5 px-1 font-typewriter text-[11px] sm:text-xs flex flex-wrap items-center justify-between gap-2 uppercase tracking-wider text-ink-800 dark:text-stone-300 bg-paper-200/50 dark:bg-night-850/50">
          <div className="flex items-center gap-3">
            <span className="font-bold">{PORTFOLIO_DATA.meta.volume}</span>
            <span>•</span>
            <span>{PORTFOLIO_DATA.meta.issueNo}</span>
            <span>•</span>
            <span className="hidden sm:inline font-bold text-press-red dark:text-red-400">
              {darkMode ? 'Late Evening Edition' : 'Morning Final Edition'}
            </span>
          </div>

          <div className="text-center font-bold text-ink-950 dark:text-stone-100">
            {PORTFOLIO_DATA.meta.todayDate}
          </div>

          <div className="flex items-center gap-3">
            <span>Price: {PORTFOLIO_DATA.meta.price}</span>
            <span>•</span>
            <span className="font-bold">Erode / Tamil Nadu</span>
          </div>
        </div>

        {/* Newspaper Section Navigation Index */}
        <nav
          aria-label="Newspaper Index"
          className="py-1.5 border-b border-ink-900/40 dark:border-night-700 font-headline text-xs sm:text-sm overflow-x-auto"
        >
          <ul className="flex items-center justify-center sm:justify-between min-w-max gap-4 sm:gap-2 px-1 text-ink-800 dark:text-stone-200">
            <li>
              <a
                href="#lead-story"
                onClick={() => soundFx.playTypewriterKey()}
                className="hover:text-press-red hover:underline decoration-1 underline-offset-4 transition-colors font-bold uppercase tracking-wider"
              >
                P.1 Front Page
              </a>
            </li>
            <span className="text-ink-400 dark:text-night-700">•</span>
            <li>
              <a
                href="#editorial"
                onClick={() => soundFx.playTypewriterKey()}
                className="hover:text-press-red hover:underline decoration-1 underline-offset-4 transition-colors font-bold uppercase tracking-wider"
              >
                P.2 Editorial Desk
              </a>
            </li>
            <span className="text-ink-400 dark:text-night-700">•</span>
            <li>
              <a
                href="#market-report"
                onClick={() => soundFx.playTypewriterKey()}
                className="hover:text-press-red hover:underline decoration-1 underline-offset-4 transition-colors font-bold uppercase tracking-wider"
              >
                P.3 Market Report (Skills)
              </a>
            </li>
            <span className="text-ink-400 dark:text-night-700">•</span>
            <li>
              <a
                href="#top-stories"
                onClick={() => soundFx.playTypewriterKey()}
                className="hover:text-press-red hover:underline decoration-1 underline-offset-4 transition-colors font-bold uppercase tracking-wider"
              >
                P.4 Top Stories (Projects)
              </a>
            </li>
            <span className="text-ink-400 dark:text-night-700">•</span>
            <li>
              <a
                href="#honours"
                onClick={() => soundFx.playTypewriterKey()}
                className="hover:text-press-red hover:underline decoration-1 underline-offset-4 transition-colors font-bold uppercase tracking-wider"
              >
                P.5 Honours & Awards
              </a>
            </li>
            <span className="text-ink-400 dark:text-night-700">•</span>
            <li>
              <a
                href="#chronicle"
                onClick={() => soundFx.playTypewriterKey()}
                className="hover:text-press-red hover:underline decoration-1 underline-offset-4 transition-colors font-bold uppercase tracking-wider"
              >
                P.6 Academic Chronicle
              </a>
            </li>
            <span className="text-ink-400 dark:text-night-700">•</span>
            <li>
              <a
                href="#classifieds"
                onClick={() => soundFx.playTypewriterKey()}
                className="hover:text-press-red hover:underline decoration-1 underline-offset-4 transition-colors font-bold uppercase tracking-wider bg-press-red/10 dark:bg-red-950/40 px-2 py-0.5 rounded"
              >
                P.7 Classifieds (Contact)
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
