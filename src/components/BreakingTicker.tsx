import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { BellRing, Pause, Play, Zap } from 'lucide-react';

export const BreakingTicker: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const items = PORTFOLIO_DATA.breakingTicker;

  return (
    <div className="w-full bg-ink-950 text-paper-100 dark:bg-night-950 dark:text-night-text border-b-2 border-ink-900 text-xs py-1.5 px-2 md:px-4 flex items-center gap-3 overflow-hidden select-none z-30 relative shadow-sm">
      {/* Red Alert Stamp Badge */}
      <div className="flex items-center gap-1.5 bg-press-red text-white font-typewriter font-bold px-2 py-0.5 rounded-sm tracking-wider uppercase shrink-0 animate-pulse text-[11px]">
        <Zap className="w-3.5 h-3.5 fill-current" />
        <span>WIRE DISPATCH</span>
      </div>

      {/* Marquee Container */}
      <div
        className="flex-1 overflow-hidden relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className={`flex whitespace-nowrap gap-12 font-typewriter tracking-wide transition-all ${
            isPaused ? '' : 'animate-marquee'
          }`}
          style={{
            animationPlayState: isPaused ? 'paused' : 'running',
          }}
        >
          {/* Double array for seamless infinite marquee loop */}
          {[...items, ...items].map((item, index) => (
            <div key={index} className="flex items-center gap-4 text-paper-200 dark:text-stone-300">
              <span className="text-press-gold font-bold">✦</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Control Buttons */}
      <div className="hidden sm:flex items-center gap-2 pl-2 border-l border-ink-700/60 shrink-0 text-paper-300">
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="hover:text-white transition-colors p-1"
          title={isPaused ? 'Resume Wire Feed' : 'Pause Wire Feed'}
          aria-label={isPaused ? 'Resume Wire Feed' : 'Pause Wire Feed'}
        >
          {isPaused ? <Play className="w-3 h-3" /> : <Pause className="w-3 h-3" />}
        </button>
        <span className="text-[10px] font-typewriter opacity-60">LIVE</span>
      </div>
    </div>
  );
};
