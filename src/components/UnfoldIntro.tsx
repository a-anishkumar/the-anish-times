import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { soundFx } from '../utils/soundEffects';
import { Newspaper, Sparkles, BookOpen } from 'lucide-react';

interface UnfoldIntroProps {
  onComplete: () => void;
}

export const UnfoldIntro: React.FC<UnfoldIntroProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<'folded' | 'unfolding' | 'done'>('folded');

  // Trigger newspaper unfold
  const handleUnfold = () => {
    soundFx.playPaperRustle();
    setStage('unfolding');

    // Confetti burst of paper clippings
    confetti({
      particleCount: 80,
      spread: 100,
      origin: { y: 0.5 },
      colors: ['#f4ecd8', '#151311', '#8b1e0f', '#c8963e', '#e7dcbe'],
      shapes: ['square'],
      scalar: 1.2,
      ticks: 200,
    });

    setTimeout(() => {
      soundFx.playStampThud();
    }, 600);

    setTimeout(() => {
      setStage('done');
      onComplete();
    }, 1100);
  };

  // If user prefers reduced motion, skip straight to finished
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setStage('done');
      onComplete();
    }
  }, [onComplete]);

  if (stage === 'done') return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink-950/90 backdrop-blur-md p-4 select-none">
      <div className="relative w-full max-w-lg perspective-1000">
        <motion.div
          initial={{ rotateX: 25, scale: 0.9, y: 20 }}
          animate={
            stage === 'unfolding'
              ? { rotateX: 0, scale: 1.05, opacity: 0, y: -60 }
              : { rotateX: 0, scale: 1, y: 0 }
          }
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-paper-100 border-4 border-ink-900 p-8 shadow-2xl relative text-center origin-top transform-style-3d overflow-hidden"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at center, #faf6ee 0%, #f4ecd8 80%, #ebdcb8 100%)',
          }}
        >
          {/* Paper Fold Crease Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-b from-black/20 to-white/40 shadow-xs pointer-events-none" />

          {/* Issue Header */}
          <div className="border-b-2 border-ink-900 pb-3 mb-4">
            <span className="font-typewriter text-xs font-bold uppercase tracking-widest text-press-red block mb-1">
              ★ FRESH OFF THE PRINTING PRESS ★
            </span>
            <h1
              className="font-masthead text-4xl sm:text-5xl font-black text-ink-950 tracking-tight"
              style={{ fontFamily: "'UnifrakturCook', 'Playfair Display', serif" }}
            >
              {PORTFOLIO_DATA.meta.paperName}
            </h1>
            <p className="font-typewriter text-xs text-ink-600 mt-1 uppercase">
              {PORTFOLIO_DATA.meta.volume} • {PORTFOLIO_DATA.meta.issueNo} • {PORTFOLIO_DATA.meta.todayDate}
            </p>
          </div>

          {/* Front page teaser */}
          <div className="my-6">
            <h2 className="font-headline font-black text-xl sm:text-2xl text-ink-950 leading-tight uppercase mb-2">
              {PORTFOLIO_DATA.personal.headline}
            </h2>
            <p className="font-subhead italic text-xs sm:text-sm text-ink-700">
              {PORTFOLIO_DATA.personal.subhead}
            </p>
          </div>

          {/* Unfold Action Button */}
          <div className="pt-2">
            <button
              onClick={handleUnfold}
              className="inline-flex items-center gap-2 px-6 py-3 bg-press-red hover:bg-press-redDark text-white font-typewriter text-xs sm:text-sm font-bold uppercase tracking-widest shadow-paper-lift transition-all active:scale-95 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Unfold & Read This Issue</span>
            </button>
            <p className="font-typewriter text-[10px] text-ink-500 mt-2">
              [Click to unfold the broadsheet edition]
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

