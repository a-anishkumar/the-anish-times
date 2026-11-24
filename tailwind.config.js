/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        paper: {
          50: '#fcf9f2',
          100: '#faf6ee',
          200: '#f4ecd8',
          300: '#ebdcb8',
          400: '#dfcba0',
          500: '#cbaf7c',
          aged: '#d8c49e',
          crease: '#cbb68e',
        },
        night: {
          950: '#0e0d0c',
          900: '#161412',
          850: '#1e1b18',
          800: '#26221e',
          700: '#38322c',
          600: '#4a433b',
          text: '#dfd7ca',
          muted: '#a39988',
        },
        ink: {
          950: '#0a0908',
          900: '#151311',
          800: '#23201c',
          700: '#38332c',
          600: '#524b41',
          500: '#71675a',
        },
        press: {
          red: '#8b1e0f',
          redDark: '#6b1407',
          blue: '#1c3d5a',
          sepia: '#5c4033',
          gold: '#b48a3c',
          green: '#2d5a3f',
        },
      },
      fontFamily: {
        masthead: ['UnifrakturCook', 'Playfair Display', 'serif'],
        headline: ['"Playfair Display"', '"Old Standard TT"', 'serif'],
        subhead: ['"Libre Baskerville"', 'serif'],
        body: ['Merriweather', 'Georgia', 'serif'],
        typewriter: ['"Special Elite"', '"Courier Prime"', 'monospace'],
        oldstyle: ['"Old Standard TT"', 'serif'],
      },
      boxShadow: {
        'paper-flat': '0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06)',
        'paper-lift': '0 10px 25px -5px rgba(26,20,14,0.18), 0 8px 10px -6px rgba(26,20,14,0.12)',
        'paper-deep': '0 20px 35px -10px rgba(20,15,10,0.3)',
        'stamp': 'inset 0 0 0 2px rgba(139,30,15,0.7)',
      },
      backgroundImage: {
        'halftone-dots': 'radial-gradient(circle, currentColor 1px, transparent 1.5px)',
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'marquee-fast': 'marquee 18s linear infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
      },
    },
  },
  plugins: [],
};
