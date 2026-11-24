import React from 'react';
import { motion } from 'framer-motion';
import { soundFx } from '../utils/soundEffects';

interface RubberStampProps {
  text: string;
  variant?: 'red' | 'green' | 'blue' | 'black';
  rotation?: number;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  interactive?: boolean;
}

export const RubberStamp: React.FC<RubberStampProps> = ({
  text,
  variant = 'red',
  rotation = -4,
  className = '',
  size = 'md',
  interactive = true,
}) => {
  const colorStyles = {
    red: 'text-press-red border-press-red bg-press-red/5 dark:text-red-400 dark:border-red-400 dark:bg-red-950/20',
    green: 'text-press-green border-press-green bg-press-green/5 dark:text-emerald-400 dark:border-emerald-400 dark:bg-emerald-950/20',
    blue: 'text-press-blue border-press-blue bg-press-blue/5 dark:text-sky-400 dark:border-sky-400 dark:bg-sky-950/20',
    black: 'text-ink-900 border-ink-900 bg-ink-900/5 dark:text-night-text dark:border-night-text dark:bg-night-800/20',
  };

  const sizeStyles = {
    sm: 'text-[10px] px-2 py-0.5 border-[1.5px] tracking-wider',
    md: 'text-xs md:text-sm px-3 py-1 border-2 tracking-widest',
    lg: 'text-sm md:text-base px-4 py-1.5 border-[2.5px] tracking-[0.2em]',
  };

  const handleClick = () => {
    if (interactive) {
      soundFx.playStampThud();
    }
  };

  return (
    <motion.span
      initial={{ scale: 2, opacity: 0, rotate: rotation + 15 }}
      whileInView={{ scale: 1, opacity: 1, rotate: rotation }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={interactive ? { scale: 1.08, rotate: rotation - 2 } : undefined}
      whileTap={interactive ? { scale: 0.95 } : undefined}
      onClick={handleClick}
      className={`inline-block font-typewriter font-black uppercase rounded-sm border-dashed select-none shadow-sm ${
        colorStyles[variant]
      } ${sizeStyles[size]} ${className}`}
      style={{
        textShadow: '0 0 1px currentColor',
      }}
    >
      <span className="relative z-10 flex items-center gap-1.5">
        <span className="opacity-70 text-[0.8em]">★</span>
        {text}
        <span className="opacity-70 text-[0.8em]">★</span>
      </span>
    </motion.span>
  );
};
