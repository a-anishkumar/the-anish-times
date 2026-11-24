import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { RubberStamp } from './RubberStamp';
import { TornDivider } from './TornDivider';
import { soundFx } from '../utils/soundEffects';
import {
  FileText,
  Mail,
  ExternalLink,
  ShieldAlert,
  Terminal,
  Code2,
  Cpu,
} from 'lucide-react';

export const FrontPageHero: React.FC = () => {
  const fullHeadline = PORTFOLIO_DATA.personal.headline;
  const [displayedHeadline, setDisplayedHeadline] = useState('');
  const [isTypingDone, setIsTypingDone] = useState(false);
  const [isHalftoneActive, setIsHalftoneActive] = useState(true);

  // Typewriter effect for main headline
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullHeadline.length) {
        setDisplayedHeadline(fullHeadline.slice(0, index + 1));
        index++;
      } else {
        setIsTypingDone(true);
        clearInterval(timer);
      }
    }, 28);

    return () => clearInterval(timer);
  }, [fullHeadline]);

  return (
    <section id="lead-story" className="w-full relative pt-4 pb-8">
      {/* Front Page Banner Tag */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-3">
          <RubberStamp text="EXCLUSIVE SCOOP" variant="red" rotation={-2} size="md" />
          <span className="font-typewriter text-xs uppercase tracking-widest text-ink-600 dark:text-night-muted">
            Front Page • Lead Investigation
          </span>
        </div>
        <div className="flex items-center gap-2">
          <RubberStamp text="VERIFIED TALENT" variant="green" rotation={3} size="sm" />
          <RubberStamp text="HIRE ME" variant="red" rotation={-4} size="sm" />
        </div>
      </div>

      {/* Main Massive Headline with Typewriter text */}
      <div className="mb-4">
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-headline font-black leading-[1.05] tracking-tight text-ink-950 dark:text-stone-100 ink-bleed uppercase">
          {displayedHeadline}
          {!isTypingDone && (
            <span className="inline-block w-3 h-8 md:h-12 bg-press-red ml-1 animate-pulse align-middle" />
          )}
        </h2>
      </div>

      {/* Subhead with letter reveal styling */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="font-subhead italic text-lg sm:text-2xl text-ink-800 dark:text-stone-200 leading-snug border-y border-ink-900/30 dark:border-night-700 py-3 mb-6"
      >
        {PORTFOLIO_DATA.personal.subhead}
      </motion.p>

      {/* Broadsheet 3-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* Left Column: Halftone Engraving Portrait & Photo Dispatch */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="border-2 border-ink-900 dark:border-night-600 p-2 bg-paper-100 dark:bg-night-850 shadow-paper-flat group relative">
            {/* Halftone Image Container */}
            <div
              className="relative aspect-4/5 sm:aspect-square md:aspect-4/5 w-full overflow-hidden border border-ink-900/50 bg-stone-300 dark:bg-stone-800 cursor-pointer"
              onClick={() => {
                soundFx.playPaperRustle();
                setIsHalftoneActive(!isHalftoneActive);
              }}
              title="Click to toggle Halftone Print vs Modern Color"
            >
              {/* Halftone / Grayscale Portrait Illustration */}
              <div
                className={`w-full h-full transition-all duration-700 ${
                  isHalftoneActive ? 'halftone-image' : 'filter-none scale-102'
                }`}
              >
                {/* Vintage Newspaper Engraved Photo Representation */}
                <div className="w-full h-full relative flex flex-col items-center justify-center p-6 bg-gradient-to-br from-paper-100 via-paper-300 to-stone-400 dark:from-night-800 dark:via-night-850 dark:to-stone-900">
                  {/* Decorative Vintage Oval Frame */}
                  <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full border-4 border-dashed border-ink-900 dark:border-night-600 flex flex-col items-center justify-center relative overflow-hidden bg-paper-200 dark:bg-night-800 shadow-inner">
                    <span className="font-masthead text-7xl sm:text-8xl text-ink-900 dark:text-stone-100 opacity-90 select-none">
                      AK
                    </span>
                    <div className="absolute inset-0 bg-halftone-dots opacity-30 pointer-events-none" />
                  </div>

                  {/* Woodcut style ribbon banner */}
                  <div className="mt-4 px-4 py-1 border-y-2 border-ink-900 dark:border-night-600 font-headline font-bold text-center tracking-widest text-sm uppercase">
                    Anish Kumar A
                  </div>
                  <div className="font-typewriter text-[11px] text-ink-700 dark:text-stone-300 mt-1">
                    Kongu Engineering College • CSD '27
                  </div>
                </div>
              </div>

              {/* Halftone Dot Overlay Layer */}
              {isHalftoneActive && (
                <div className="absolute inset-0 halftone-overlay pointer-events-none opacity-40 mix-blend-multiply dark:mix-blend-screen" />
              )}

              {/* Live Badge in corner */}
              <div className="absolute top-2 right-2 bg-ink-950/85 text-paper-100 text-[10px] font-typewriter px-2 py-0.5 uppercase tracking-wider backdrop-blur-xs flex items-center gap-1">
                <span>{isHalftoneActive ? 'PRINT: HALFTONE' : 'PRINT: SHARP'}</span>
              </div>
            </div>

            {/* Photo Caption */}
            <div className="pt-2 font-body text-xs italic text-ink-700 dark:text-stone-400 border-t border-ink-900/20 dark:border-night-700 mt-2 flex justify-between items-center">
              <span>Portrait: The Lead Architect in his workshop.</span>
              <span className="font-typewriter text-[10px] opacity-75 font-normal">
                [Tap to switch print]
              </span>
            </div>
          </div>

          {/* Quick Dispatch Highlights Box */}
          <div className="mt-4 border-2 border-dashed border-ink-900/60 dark:border-night-700 p-3 bg-paper-50 dark:bg-night-900">
            <h4 className="font-headline font-bold text-xs uppercase tracking-widest border-b border-ink-900/30 pb-1 mb-2 flex items-center justify-between">
              <span>SPECIAL DISPATCH SUMMARY</span>
              <Terminal className="w-3.5 h-3.5 text-press-red" />
            </h4>
            <ul className="space-y-1.5 font-body text-xs text-ink-800 dark:text-stone-300">
              <li className="flex items-start gap-1.5">
                <span className="text-press-red font-bold">▪</span>
                <span>
                  <strong>Academic Merit:</strong> 7.79 CGPA in Computer Science and Design at Kongu Engineering College.
                </span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-press-red font-bold">▪</span>
                <span>
                  <strong>Core Inventions:</strong> Aura (Air-gapped AI), ResearchGap AI (Graph RAG), Snap2Code.
                </span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-press-red font-bold">▪</span>
                <span>
                  <strong>Core Focus:</strong> High-performance full-stack web engineering, scalable backends & intelligent edge systems.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Center & Right Columns: Two-Column Newspaper Article with Drop Cap */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-justify">
            {/* Column 1 with Drop Cap */}
            <div className="font-body text-sm text-ink-900 dark:text-stone-200 leading-relaxed drop-cap border-r-0 md:border-r md:border-ink-900/20 dark:md:border-night-700 md:pr-6">
              <p className="mb-4">
                {PORTFOLIO_DATA.personal.editorBio[0]}
              </p>
              <p className="mb-4">
                {PORTFOLIO_DATA.personal.editorBio[1]}
              </p>
            </div>

            {/* Column 2 with Pull-quote and CTA */}
            <div className="font-body text-sm text-ink-900 dark:text-stone-200 leading-relaxed flex flex-col justify-between">
              <div>
                {/* Pull-quote with double horizontal rules */}
                <div className="my-2 py-3 border-y-2 border-ink-900 dark:border-night-600 bg-paper-50 dark:bg-night-850 px-3 text-center">
                  <p className="font-headline italic text-base sm:text-lg font-bold text-ink-950 dark:text-stone-100 leading-snug">
                    {PORTFOLIO_DATA.personal.pullQuote}
                  </p>
                  <span className="block mt-2 font-typewriter text-[10px] uppercase tracking-widest text-press-red dark:text-red-400">
                    — From the Chief Editor's Manifesto
                  </span>
                </div>

                <p className="mt-4">
                  {PORTFOLIO_DATA.personal.editorBio[2]}
                </p>
              </div>

              {/* Action Buttons styled like vintage telegram cutouts */}
              <div className="mt-6 pt-4 border-t border-ink-900/30 dark:border-night-700 flex flex-wrap gap-3">
                <a
                  href="#classifieds"
                  onClick={() => soundFx.playTypewriterKey()}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-ink-950 text-paper-50 dark:bg-stone-100 dark:text-ink-950 font-typewriter text-xs font-bold uppercase tracking-wider hover:bg-press-red dark:hover:bg-press-red dark:hover:text-white transition-all shadow-paper-flat"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Telegram / Hire</span>
                </a>

                <a
                  href="#top-stories"
                  onClick={() => soundFx.playTypewriterKey()}
                  className="inline-flex items-center gap-2 px-4 py-2 border-2 border-ink-950 dark:border-stone-200 font-typewriter text-xs font-bold uppercase tracking-wider text-ink-950 dark:text-stone-100 hover:bg-ink-950 hover:text-paper-50 dark:hover:bg-stone-200 dark:hover:text-ink-950 transition-all shadow-paper-flat"
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Inspect Inventions</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TornDivider variant="ornate" />
    </section>
  );
};
