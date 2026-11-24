import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { soundFx } from '../utils/soundEffects';
import { RubberStamp } from './RubberStamp';
import { TornDivider } from './TornDivider';
import { Fingerprint, RefreshCw, Share2, AlertTriangle, Gavel } from 'lucide-react';

// ─────────────────────────────────────────────────────────────
// CONTENT POOLS — easy to extend in future updates
// ─────────────────────────────────────────────────────────────

const CRIMES: string[] = [
  'Illegally writing semicolons in Python files',
  'Grand theft of Wi-Fi passwords at coffee shops',
  'Deploying to production on a Friday afternoon',
  'Using Comic Sans in a Figma prototype',
  'Pushing code directly to the main branch',
  'Forgetting to close 47 browser tabs',
  'Naming variables "data", "data2", and "data_final_v3"',
  'Commenting out code instead of deleting it',
  'Using 100% !important overrides in CSS',
  'Copy-pasting from Stack Overflow without reading it',
  'Promising "it works on my machine"',
  'Writing a TODO comment and never returning',
  'Shipping a hotfix at 11:58 PM',
  'Declaring victory before writing unit tests',
  'Storing passwords in plain text (simulated, obviously)',
  'Excessive use of console.log() in production',
  'Submitting a pull request with 2,347 changed files',
  'Rebasing main into a feature branch during a demo',
];

const REWARDS: string[] = [
  '₹1,00,000',
  '₹2,50,000',
  '₹75,000',
  '50,000 GitHub Stars',
  '₹5,00,000 (or equivalent in Stack Overflow reputation)',
  '1 Lifetime Supply of Coffee',
  '₹99,999 and a rubber duck',
  '3,14,159 Credits (π Reward Program)',
];

const ALIASES: string[] = [
  'The Semicolon Strangler',
  'The Infinite Looper',
  'Captain Undefined',
  'The Stack Overflow Bandit',
  'El Null Pointer',
  'The Merge Conflict',
  'The Runtime Error',
  'The Dark Mode Vandal',
  'The Rogue Debugger',
  'The Async Avenger',
];

const CASE_PREFIXES = ['TAT', 'KEC', 'CSD', 'AKA', 'TN'];

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateCaseNumber() {
  const prefix = pick(CASE_PREFIXES);
  const num = Math.floor(10000 + Math.random() * 89999);
  const suffix = String.fromCharCode(65 + Math.floor(Math.random() * 26));
  return `${prefix}-${num}-${suffix}`;
}

// ─────────────────────────────────────────────────────────────
// SVG Fingerprint — decorative
// ─────────────────────────────────────────────────────────────
const FingerprintSVG: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 80 80" className={className} aria-hidden="true">
    <ellipse cx="40" cy="40" rx="30" ry="30" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4" strokeDasharray="3 2" />
    <ellipse cx="40" cy="40" rx="23" ry="22" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.5" strokeDasharray="4 2" />
    <ellipse cx="40" cy="40" rx="16" ry="15" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.6" strokeDasharray="3 3" />
    <ellipse cx="40" cy="40" rx="10" ry="9" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.7" />
    <ellipse cx="40" cy="40" rx="5"  ry="4"  fill="none" stroke="currentColor" strokeWidth="1" opacity="0.8" />
    <circle  cx="40" cy="40" r="2" fill="currentColor" opacity="0.6" />
    {/* Ridge lines crossing */}
    <line x1="10" y1="40" x2="30" y2="40" stroke="currentColor" strokeWidth="1" opacity="0.25" />
    <line x1="50" y1="40" x2="70" y2="40" stroke="currentColor" strokeWidth="1" opacity="0.25" />
  </svg>
);

// ─────────────────────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────────────────────
interface WantedPosterData {
  name: string;
  crime: string;
  reward: string;
  alias: string;
  caseNumber: string;
  date: string;
}

export const MostWantedGame: React.FC = () => {
  const [inputName, setInputName] = useState('');
  const [poster, setPoster] = useState<WantedPosterData | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [shareMsg, setShareMsg] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = inputName.trim();
    if (!trimmed) return;

    setIsGenerating(true);
    soundFx.playPaperRustle();

    // Slight delay for dramatic effect
    setTimeout(() => {
      soundFx.playStampThud();
      const now = new Date();
      const dateStr = now.toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      });

      setPoster({
        name: trimmed.toUpperCase(),
        crime: pick(CRIMES),
        reward: pick(REWARDS),
        alias: pick(ALIASES),
        caseNumber: generateCaseNumber(),
        date: dateStr,
      });
      setIsGenerating(false);
    }, 700);
  };

  const handleReset = () => {
    soundFx.playPaperRustle();
    setPoster(null);
    setInputName('');
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const handleShare = async () => {
    if (!poster) return;
    const text = `🗞️ THE ANISH TIMES — MOST WANTED BULLETIN\n\n👤 NAME: ${poster.name}\n⚠️ ALIAS: "${poster.alias}"\n🚨 CRIME: ${poster.crime}\n💰 REWARD: ${poster.reward}\n📋 CASE: ${poster.caseNumber}\n\nCheck out The Anish Times Portfolio → https://github.com/a-anishkumar/the-anish-times`;
    try {
      if (navigator.share) {
        await navigator.share({ title: 'The Anish Times — MOST WANTED', text });
      } else {
        await navigator.clipboard.writeText(text);
        setShareMsg('Copied to clipboard!');
        setTimeout(() => setShareMsg(''), 2000);
      }
    } catch {
      // Silently ignore share errors
    }
  };

  return (
    <section
      id="most-wanted-game"
      className="w-full relative py-10"
      aria-label="Most Wanted Bulletin Board Game"
    >
      {/* Section Header */}
      <div className="flex flex-wrap items-center justify-between border-b-2 border-ink-900 dark:border-night-600 pb-2 mb-6 gap-3">
        <div className="flex items-center gap-3">
          <AlertTriangle className="w-5 h-5 text-press-red dark:text-red-400" />
          <h3 className="font-headline font-black text-2xl sm:text-3xl uppercase tracking-wider text-ink-950 dark:text-stone-100">
            Page 8 • The Criminal Gazette
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <RubberStamp text="PUBLIC NOTICE" variant="red" rotation={-2} size="sm" />
          <span className="font-typewriter text-xs uppercase tracking-widest text-ink-600 dark:text-night-muted">
            Bureau of Press Records, Tamil Nadu Division
          </span>
        </div>
      </div>

      {/* Gazette Sub-Header Intro */}
      <p className="font-subhead italic text-sm text-center text-ink-700 dark:text-stone-300 mb-8 max-w-2xl mx-auto">
        The Anish Times Criminal Records Division hereby publishes this week's Most Wanted Bulletin.
        Citizens are urged to submit their names for official gazetting.
      </p>

      {/* Two-Panel Layout: Entry Form + Poster */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

        {/* ── LEFT: Name Entry Form ── */}
        <div className="border-4 border-ink-900 dark:border-night-600 bg-paper-100 dark:bg-night-850 p-6 sm:p-8 shadow-paper-flat relative">
          {/* Corner ornaments */}
          {['top-1 left-1', 'top-1 right-1 rotate-90', 'bottom-1 left-1 -rotate-90', 'bottom-1 right-1 rotate-180'].map((pos, i) => (
            <div key={i} className={`absolute ${pos} text-ink-500 dark:text-night-600 font-headline text-sm select-none`}>
              ✦
            </div>
          ))}

          <div className="text-center border-b-2 border-ink-900 dark:border-night-700 pb-4 mb-6">
            <span className="font-typewriter text-xs font-bold uppercase tracking-widest text-press-red dark:text-red-400 block mb-1">
              ★ OFFICIAL RECORDS BUREAU ★
            </span>
            <h4 className="font-masthead text-3xl sm:text-4xl font-black text-ink-950 dark:text-stone-100 uppercase">
              SUBMIT YOUR NAME
            </h4>
            <p className="font-body text-xs text-ink-600 dark:text-night-muted mt-1 italic">
              For inclusion in The Anish Times Criminal Gazette Vol. 2027
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="wanted-name"
                className="block font-typewriter text-xs font-bold uppercase tracking-widest text-ink-800 dark:text-stone-200 mb-2"
              >
                Full Name of Suspect:
              </label>
              <input
                ref={inputRef}
                id="wanted-name"
                type="text"
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
                onKeyDown={() => soundFx.playTypewriterKey()}
                placeholder="e.g. John Doe"
                maxLength={40}
                autoComplete="off"
                className="w-full bg-paper-50 dark:bg-night-900 border-2 border-ink-900/60 dark:border-night-600 px-4 py-3 font-body text-sm text-ink-950 dark:text-stone-100 focus:outline-none focus:border-press-red placeholder:text-ink-400 dark:placeholder:text-night-600 uppercase tracking-wider"
                required
              />
              <span className="font-typewriter text-[10px] text-ink-500 dark:text-night-muted mt-1 block">
                {inputName.length}/40 characters
              </span>
            </div>

            <button
              type="submit"
              disabled={isGenerating || !inputName.trim()}
              className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 font-typewriter text-sm font-black uppercase tracking-widest shadow-paper-lift transition-all active:scale-98 ${
                isGenerating || !inputName.trim()
                  ? 'bg-ink-600 text-paper-300 cursor-not-allowed'
                  : 'bg-press-red hover:bg-press-redDark text-white cursor-pointer'
              }`}
            >
              <Gavel className="w-4 h-4" />
              <span>{isGenerating ? 'Processing Records…' : 'Submit to Records Bureau'}</span>
            </button>
          </form>

          {/* Disclaimer Footer */}
          <div className="mt-6 pt-4 border-t border-dashed border-ink-900/30 dark:border-night-700 font-typewriter text-[10px] text-ink-500 dark:text-night-muted text-center leading-relaxed">
            ⚠ This gazette entry is entirely fictional and produced in jest for entertainment purposes only.
            No actual criminal record is generated or stored. The Anish Times assumes zero legal liability.
          </div>
        </div>

        {/* ── RIGHT: MOST WANTED Poster (shown after submission) ── */}
        <AnimatePresence mode="wait">
          {!poster && !isGenerating && (
            <motion.div
              key="placeholder"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="border-4 border-dashed border-ink-900/30 dark:border-night-700 bg-paper-50/50 dark:bg-night-900/50 p-6 flex flex-col items-center justify-center min-h-80 text-center"
            >
              <FingerprintSVG className="w-20 h-20 text-ink-700 dark:text-stone-500 mb-4 opacity-40" />
              <p className="font-typewriter text-xs uppercase tracking-widest text-ink-500 dark:text-night-muted">
                Poster will appear here after submission
              </p>
              <p className="font-body text-xs italic text-ink-400 dark:text-night-600 mt-1">
                Bureau of Records awaiting your registration…
              </p>
            </motion.div>
          )}

          {isGenerating && (
            <motion.div
              key="generating"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="border-4 border-ink-900 dark:border-night-600 bg-paper-100 dark:bg-night-850 p-6 flex flex-col items-center justify-center min-h-80 text-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
              >
                <Fingerprint className="w-12 h-12 text-press-red dark:text-red-400 opacity-70" />
              </motion.div>
              <p className="font-typewriter text-sm font-bold uppercase tracking-widest text-ink-900 dark:text-stone-200 mt-4">
                Searching criminal archives…
              </p>
              <p className="font-body text-xs italic text-ink-600 dark:text-night-muted mt-1">
                Typesetting your warrant now…
              </p>
            </motion.div>
          )}

          {poster && !isGenerating && (
            <motion.div
              key="poster"
              initial={{ scale: 0.88, opacity: 0, rotate: -1.5 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ type: 'spring', damping: 18, stiffness: 220 }}
              className="relative"
            >
              {/* The Poster */}
              <div
                className="border-8 border-double border-ink-900 dark:border-night-500 bg-paper-100 dark:bg-night-850 p-5 sm:p-6 shadow-paper-deep relative overflow-hidden"
                style={{
                  backgroundImage: 'radial-gradient(ellipse at center, #faf6ee 0%, #f4ecd8 70%, #ebdcb8 100%)',
                }}
              >
                {/* Background texture watermark */}
                <div
                  className="absolute inset-0 opacity-[0.04] pointer-events-none select-none"
                  style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, #000 1px, transparent 0)',
                    backgroundSize: '5px 5px',
                  }}
                />

                {/* Header strip */}
                <div className="text-center border-b-4 border-double border-ink-900 dark:border-night-500 pb-3 mb-4">
                  <span className="font-typewriter text-[10px] font-bold uppercase tracking-[0.4em] text-ink-800 dark:text-stone-300 block">
                    The Anish Times — Criminal Gazette Division
                  </span>
                  <h2
                    className="font-masthead text-5xl sm:text-6xl font-black text-press-red dark:text-red-400 uppercase mt-1 leading-none"
                    style={{ textShadow: '2px 2px 0 rgba(139,30,15,0.2)' }}
                  >
                    MOST WANTED
                  </h2>
                  <div className="flex items-center justify-center gap-2 mt-1">
                    <div className="flex-1 h-[1.5px] bg-ink-900 dark:bg-night-500" />
                    <span className="font-typewriter text-[9px] uppercase tracking-widest text-ink-700 dark:text-stone-400 px-2">
                      By Order of the Press Magistrate
                    </span>
                    <div className="flex-1 h-[1.5px] bg-ink-900 dark:bg-night-500" />
                  </div>
                </div>

                {/* Mug-shot + details row */}
                <div className="flex gap-4 mb-4">
                  {/* Mug-shot placeholder box */}
                  <div className="shrink-0 w-28 h-36 sm:w-32 sm:h-40 border-4 border-ink-900 dark:border-night-500 bg-paper-300 dark:bg-night-800 relative overflow-hidden flex flex-col items-center justify-center">
                    {/* Halftone dots */}
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.3) 1px, transparent 0)',
                        backgroundSize: '5px 5px',
                      }}
                    />
                    <span className="font-masthead text-5xl text-ink-800 dark:text-stone-300 opacity-80 relative z-10">
                      {poster.name.charAt(0)}
                    </span>
                    <span className="font-typewriter text-[8px] uppercase tracking-wider text-ink-600 dark:text-stone-400 relative z-10 mt-1 text-center px-1">
                      MUG SHOT
                    </span>
                    {/* Future update: replace above with <img> for real photo */}
                    <div className="absolute bottom-0 left-0 right-0 bg-ink-900 dark:bg-night-900 text-paper-100 text-[8px] font-typewriter text-center py-0.5">
                      CASE: {poster.caseNumber}
                    </div>
                  </div>

                  {/* Profile details */}
                  <div className="flex-1 space-y-2 text-left">
                    <div>
                      <span className="font-typewriter text-[9px] uppercase tracking-widest text-ink-500 dark:text-night-muted block">
                        Suspect's Name:
                      </span>
                      <span className="font-headline font-black text-2xl sm:text-3xl text-ink-950 dark:text-stone-100 leading-tight block ink-bleed">
                        {poster.name}
                      </span>
                    </div>

                    <div>
                      <span className="font-typewriter text-[9px] uppercase tracking-widest text-ink-500 dark:text-night-muted block">
                        Known Alias:
                      </span>
                      <span className="font-subhead italic text-sm text-press-red dark:text-red-400 font-bold block">
                        "{poster.alias}"
                      </span>
                    </div>

                    <div>
                      <span className="font-typewriter text-[9px] uppercase tracking-widest text-ink-500 dark:text-night-muted block">
                        Threat Level:
                      </span>
                      <div className="flex gap-0.5 mt-0.5">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div key={i} className="w-4 h-2 bg-press-red dark:bg-red-500 opacity-90" />
                        ))}
                        <span className="font-typewriter text-[9px] ml-1 text-press-red dark:text-red-400 font-bold uppercase">
                          EXTREME
                        </span>
                      </div>
                    </div>

                    <FingerprintSVG className="w-10 h-10 text-ink-700 dark:text-stone-400 opacity-60" />
                  </div>
                </div>

                {/* Crime Description */}
                <div className="border-2 border-ink-900 dark:border-night-500 p-3 mb-4 bg-paper-50 dark:bg-night-900 relative">
                  <span className="font-typewriter text-[9px] uppercase tracking-widest font-bold text-ink-700 dark:text-stone-400 block mb-1">
                    Charges Filed:
                  </span>
                  <p className="font-headline font-bold text-sm sm:text-base text-ink-950 dark:text-stone-100 leading-snug">
                    {poster.crime}
                  </p>
                </div>

                {/* Reward Banner */}
                <div className="border-4 border-press-red dark:border-red-500 bg-press-red/8 dark:bg-red-950/30 p-2 text-center mb-4">
                  <span className="font-typewriter text-[9px] uppercase tracking-widest text-ink-700 dark:text-stone-400 block">
                    Reward for Information Leading to Apprehension:
                  </span>
                  <span className="font-masthead text-2xl sm:text-3xl font-black text-press-red dark:text-red-400">
                    {poster.reward}
                  </span>
                </div>

                {/* Footer row */}
                <div className="flex items-center justify-between font-typewriter text-[9px] text-ink-500 dark:text-night-muted border-t border-ink-900/30 dark:border-night-700 pt-2">
                  <span>Gazette Date: {poster.date}</span>
                  <span>File: {poster.caseNumber}</span>
                  <span>Jurisdiction: Tamil Nadu Press</span>
                </div>

                {/* WANTED Rubber Stamp (overlaid) */}
                <motion.div
                  initial={{ scale: 3, opacity: 0, rotate: -20 }}
                  animate={{ scale: 1, opacity: 0.88, rotate: -18 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 18, delay: 0.2 }}
                  className="absolute top-6 right-4 pointer-events-none select-none"
                >
                  <div className="border-[3px] border-press-red dark:border-red-500 px-2 py-0.5 text-press-red dark:text-red-500 font-typewriter font-black text-2xl uppercase tracking-widest rounded-sm opacity-85"
                    style={{ textShadow: '0 0 1px currentColor' }}>
                    WANTED
                  </div>
                </motion.div>
              </div>

              {/* Poster Action Buttons */}
              <div className="flex items-center justify-between mt-3 gap-3 flex-wrap">
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 px-4 py-2 border-2 border-ink-900 dark:border-night-600 font-typewriter text-xs font-bold uppercase tracking-wider text-ink-900 dark:text-stone-200 hover:bg-ink-900 hover:text-white dark:hover:bg-stone-200 dark:hover:text-ink-950 transition-all"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>New Suspect</span>
                </button>

                <button
                  onClick={handleShare}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-press-red hover:bg-press-redDark text-white font-typewriter text-xs font-bold uppercase tracking-wider transition-all"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>{shareMsg || 'Share Wanted Poster'}</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <TornDivider variant="torn" className="mt-10" />
    </section>
  );
};
