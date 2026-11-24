import React from 'react';

interface TornDividerProps {
  variant?: 'torn' | 'double' | 'ornate' | 'triple';
  className?: string;
}

export const TornDivider: React.FC<TornDividerProps> = ({ variant = 'double', className = '' }) => {
  if (variant === 'torn') {
    return (
      <div className={`w-full overflow-hidden my-6 select-none opacity-85 dark:opacity-40 ${className}`}>
        <svg
          viewBox="0 0 1200 16"
          preserveAspectRatio="none"
          className="w-full h-3 text-ink-800 dark:text-night-700 fill-current"
        >
          <path d="M0,0 L25,12 L50,2 L75,14 L100,3 L125,11 L150,1 L175,13 L200,4 L225,10 L250,2 L275,14 L300,5 L325,11 L350,1 L375,13 L400,3 L425,12 L450,4 L475,14 L500,2 L525,11 L550,5 L575,13 L600,2 L625,12 L650,4 L675,14 L700,3 L725,11 L750,2 L775,13 L800,5 L825,11 L850,2 L875,14 L900,4 L925,12 L950,1 L975,13 L1000,4 L1025,11 L1050,3 L1075,14 L1100,2 L1125,12 L1150,5 L1175,13 L1200,0 L1200,16 L0,16 Z" />
        </svg>
      </div>
    );
  }

  if (variant === 'ornate') {
    return (
      <div className={`flex items-center justify-center my-6 text-ink-900 dark:text-night-text ${className}`}>
        <div className="flex-1 h-[2px] bg-ink-900 dark:bg-night-600"></div>
        <div className="flex-1 h-[1px] bg-ink-900 dark:bg-night-600 mt-[3px] -ml-[100%]"></div>
        <span className="px-4 font-headline text-lg italic tracking-wider select-none flex items-center gap-2">
          <span>§</span>
          <span className="text-xs tracking-widest uppercase font-typewriter">The Anish Times</span>
          <span>§</span>
        </span>
        <div className="flex-1 h-[2px] bg-ink-900 dark:bg-night-600"></div>
        <div className="flex-1 h-[1px] bg-ink-900 dark:bg-night-600 mt-[3px] -ml-[100%]"></div>
      </div>
    );
  }

  if (variant === 'triple') {
    return (
      <div className={`w-full my-4 flex flex-col gap-[2px] text-ink-900 dark:text-night-600 ${className}`}>
        <div className="h-[3px] bg-current"></div>
        <div className="h-[1px] bg-current"></div>
        <div className="h-[1px] bg-current"></div>
      </div>
    );
  }

  // Default broadsheet double-rule
  return (
    <div className={`w-full my-4 flex flex-col gap-[3px] text-ink-900 dark:text-night-600 ${className}`}>
      <div className="h-[2.5px] bg-current"></div>
      <div className="h-[1px] bg-current"></div>
    </div>
  );
};
