import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { BreakingTicker } from './components/BreakingTicker';
import { FrontPageHero } from './components/FrontPageHero';
import { EditorialAbout } from './components/EditorialAbout';
import { MarketReportSkills } from './components/MarketReportSkills';
import { TopStoriesProjects } from './components/TopStoriesProjects';
import { HonoursCertifications } from './components/HonoursCertifications';
import { ChronicleEducation } from './components/ChronicleEducation';
import { ClassifiedsContact } from './components/ClassifiedsContact';
import { Footer } from './components/Footer';
import { VintageOverlays } from './components/VintageOverlays';
import { UnfoldIntro } from './components/UnfoldIntro';
import { soundFx } from './utils/soundEffects';

export const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('anish_times_theme') === 'dark';
    }
    return false;
  });

  const [soundEnabled, setSoundEnabled] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('anish_times_audio') === 'true';
    }
    return false;
  });

  const [cursorMode, setCursorMode] = useState<'pen' | 'lens' | 'default'>('pen');
  const [hasUnfolded, setHasUnfolded] = useState<boolean>(false);

  // Synchronize dark mode class on documentElement
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('anish_times_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('anish_times_theme', 'light');
    }
  }, [darkMode]);

  // Synchronize sound system enabled state
  useEffect(() => {
    soundFx.enabled = soundEnabled;
    localStorage.setItem('anish_times_audio', String(soundEnabled));
  }, [soundEnabled]);

  // Cursor styling class
  const cursorClass =
    cursorMode === 'pen'
      ? 'cursor-pen'
      : cursorMode === 'lens'
      ? 'cursor-lens'
      : '';

  return (
    <div
      className={`min-h-screen relative font-body transition-colors duration-300 selection:bg-press-red selection:text-white ${cursorClass} ${
        darkMode ? 'bg-night-950 text-night-text' : 'bg-paper-200 text-ink-950'
      }`}
    >
      {/* 3D Newspaper Initial Unfold Intro */}
      {!hasUnfolded && <UnfoldIntro onComplete={() => setHasUnfolded(true)} />}

      {/* Breaking News Telegraph Ticker */}
      <BreakingTicker />

      {/* Main Vintage Masthead Header */}
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
      />

      {/* Broadsheet Newspaper Inner Paper Shell */}
      <main className="max-w-7xl mx-auto px-3 sm:px-6 md:px-8 py-6 relative">
        {/* Paper texture overlay container with edge vignette */}
        <div className="relative">
          {/* Section 1: Front Page & Lead Investigation */}
          <FrontPageHero />

          {/* Section 2: Page 2 • Editorial Desk */}
          <EditorialAbout />

          {/* Section 3: Page 3 • Market Report (Skills) */}
          <MarketReportSkills />

          {/* Section 4: Page 4 • Top Stories & Key Inventions (Projects) */}
          <TopStoriesProjects />

          {/* Section 5: Page 5 • Honours, Awards & Decrees (Certifications) */}
          <HonoursCertifications />

          {/* Section 6: Page 6 • The Academic Chronicle (Education) */}
          <ChronicleEducation />

          {/* Section 7: Page 7 • The Classifieds (Contact & Letter to Editor) */}
          <ClassifiedsContact />
        </div>
      </main>

      {/* Broadsheet Footer & Colophon */}
      <Footer />

      {/* Vintage Overlays: Coffee Stain, Crease, and Cursor Controls */}
      <VintageOverlays cursorMode={cursorMode} setCursorMode={setCursorMode} />
    </div>
  );
};

export default App;
