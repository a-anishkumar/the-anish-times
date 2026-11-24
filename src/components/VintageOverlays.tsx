import React, { useState } from 'react';
import { PenTool, Search } from 'lucide-react';
import { soundFx } from '../utils/soundEffects';

interface VintageOverlaysProps {
  cursorMode: 'pen' | 'lens' | 'default';
  setCursorMode: (mode: 'pen' | 'lens' | 'default') => void;
}

export const VintageOverlays: React.FC<VintageOverlaysProps> = ({
  cursorMode,
  setCursorMode,
}) => {
  const toggleCursor = () => {
    soundFx.playTypewriterKey();
    if (cursorMode === 'pen') {
      setCursorMode('lens');
    } else if (cursorMode === 'lens') {
      setCursorMode('default');
    } else {
      setCursorMode('pen');
    }
  };

  return (
    <>
      {/* Coffee Stain Graphic Overlay in top right */}
      <div
        className="fixed top-12 right-6 w-36 h-36 md:w-48 md:h-48 pointer-events-none opacity-20 dark:opacity-8 select-none z-10"
        aria-hidden="true"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full fill-none stroke-current text-press-sepia">
          {/* Coffee Ring Rings & Splatters */}
          <circle cx="100" cy="100" r="75" strokeWidth="5" opacity="0.6" strokeDasharray="30 8 10 5" />
          <circle cx="98" cy="102" r="73" strokeWidth="2.5" opacity="0.4" />
          <circle cx="104" cy="97" r="78" strokeWidth="1.5" opacity="0.3" strokeDasharray="15 15" />
          {/* Splatter dots */}
          <circle cx="45" cy="55" r="2.5" fill="currentColor" opacity="0.5" />
          <circle cx="160" cy="70" r="1.5" fill="currentColor" opacity="0.4" />
          <circle cx="150" cy="140" r="3" fill="currentColor" opacity="0.3" />
          <circle cx="60" cy="150" r="1.8" fill="currentColor" opacity="0.4" />
        </svg>
      </div>

      {/* Center Horizontal Paper Fold Crease Simulation */}
      <div className="paper-crease z-15" aria-hidden="true" />

      {/* Floating Cursor Mode Toggle Widget in bottom left */}
      <div className="fixed bottom-4 left-4 z-40 hidden sm:flex items-center gap-1.5 p-1 bg-paper-100/90 dark:bg-night-900/90 border-2 border-ink-900 dark:border-night-600 rounded-sm shadow-paper-flat backdrop-blur-xs font-typewriter text-xs">
        <button
          onClick={toggleCursor}
          className="flex items-center gap-1.5 px-2 py-1 hover:bg-ink-900 hover:text-white dark:hover:bg-stone-200 dark:hover:text-ink-950 transition-colors"
          title="Switch Custom Press Cursor"
        >
          {cursorMode === 'pen' ? (
            <>
              <PenTool className="w-3.5 h-3.5 text-press-red" />
              <span className="text-[10px] uppercase font-bold">Cursor: Pen</span>
            </>
          ) : cursorMode === 'lens' ? (
            <>
              <Search className="w-3.5 h-3.5 text-press-blue" />
              <span className="text-[10px] uppercase font-bold">Cursor: Loupe</span>
            </>
          ) : (
            <>
              <span className="text-[10px] uppercase font-bold">Cursor: Default</span>
            </>
          )}
        </button>
      </div>
    </>
  );
};

