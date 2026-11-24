import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { RubberStamp } from './RubberStamp';
import { TornDivider } from './TornDivider';
import { Feather, ShieldCheck, Cpu, Database, Award } from 'lucide-react';

export const EditorialAbout: React.FC = () => {
  return (
    <section id="editorial" className="w-full relative py-8">
      {/* Editorial Header Masthead Strip */}
      <div className="flex flex-wrap items-center justify-between border-b-2 border-ink-900 dark:border-night-600 pb-2 mb-6 gap-3">
        <div className="flex items-center gap-3">
          <Feather className="w-5 h-5 text-press-red dark:text-red-400" />
          <h3 className="font-headline font-black text-2xl sm:text-3xl uppercase tracking-wider text-ink-950 dark:text-stone-100">
            Page 2 • The Editorial Desk
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <RubberStamp text="OPINION & PERSPECTIVE" variant="black" rotation={2} size="sm" />
          <span className="font-typewriter text-xs uppercase tracking-widest text-ink-600 dark:text-night-muted">
            The Anish Times Editorial Board
          </span>
        </div>
      </div>

      {/* Main Editorial Article */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Editor's Note & Core Principles (4 cols) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {/* Framed Notice */}
          <div className="border-2 border-ink-900 dark:border-night-600 p-4 bg-paper-100 dark:bg-night-850 shadow-paper-flat">
            <h4 className="font-headline font-bold text-sm uppercase tracking-widest border-b border-ink-900/40 pb-2 mb-3 text-press-red dark:text-red-400 flex items-center justify-between">
              <span>EDITOR-IN-CHIEF'S NOTICE</span>
              <span className="font-typewriter text-[10px]">DISPATCH #02</span>
            </h4>
            <p className="font-body text-xs text-ink-800 dark:text-stone-300 leading-relaxed mb-3">
              “Modern software is too often fragile, bloated, and entirely beholden to centralized clouds. True engineering maturity lies in building systems that run efficiently on modest resources, respect user privacy implicitly, and withstand adversarial probes.”
            </p>
            <div className="font-typewriter text-[11px] text-ink-900 dark:text-stone-200 border-t border-ink-900/20 pt-2 flex flex-col gap-0.5">
              <span className="font-bold">Anish Kumar A</span>
              <span className="text-ink-600 dark:text-night-muted">Computer Science & Design Scholar</span>
              <span className="text-press-gold font-bold">Kongu Engineering College, TN</span>
            </div>
          </div>

          {/* Core Architectural Pillars */}
          <div className="border border-ink-900/40 dark:border-night-700 p-4 bg-paper-50 dark:bg-night-900 space-y-4">
            <h5 className="font-headline font-bold text-xs uppercase tracking-widest border-b border-ink-900/20 pb-1 text-ink-900 dark:text-stone-200">
              The Three Engineering Tenets
            </h5>

            <div className="flex items-start gap-3">
              <div className="p-1.5 bg-ink-900 text-paper-100 dark:bg-night-800 rounded shrink-0">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
              </div>
              <div>
                <h6 className="font-headline font-bold text-xs text-ink-950 dark:text-stone-100">
                  1. Defensive by Design
                </h6>
                <p className="font-body text-[11px] text-ink-700 dark:text-night-muted leading-tight mt-0.5">
                  Security is not a final-layer bandaid. Input sanitation, zero-trust state checks, and encryption are built in from line one.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-1.5 bg-ink-900 text-paper-100 dark:bg-night-800 rounded shrink-0">
                <Cpu className="w-4 h-4 text-press-gold" />
              </div>
              <div>
                <h6 className="font-headline font-bold text-xs text-ink-950 dark:text-stone-100">
                  2. Edge & Offline Sovereignty
                </h6>
                <p className="font-body text-[11px] text-ink-700 dark:text-night-muted leading-tight mt-0.5">
                  Demonstrated with Aura: compute should live where the human is, guaranteeing low latency and total privacy.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-1.5 bg-ink-900 text-paper-100 dark:bg-night-800 rounded shrink-0">
                <Database className="w-4 h-4 text-sky-400" />
              </div>
              <div>
                <h6 className="font-headline font-bold text-xs text-ink-950 dark:text-stone-100">
                  3. Relational & Graph Integrity
                </h6>
                <p className="font-body text-[11px] text-ink-700 dark:text-night-muted leading-tight mt-0.5">
                  From ACID transactions in hostel allocations to Neo4j knowledge graphs in ResearchGap AI, structured data wins every time.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Columns: Multi-Column Essay Layout (8 cols) */}
        <div className="lg:col-span-8 flex flex-col justify-between">
          <div>
            <h4 className="font-headline font-black text-2xl sm:text-3xl text-ink-950 dark:text-stone-100 mb-2 leading-tight">
              ON THE ARCHITECTURE OF PERMANENCE IN A TRANSIENT DIGITAL WORLD
            </h4>
            <div className="font-typewriter text-xs text-ink-600 dark:text-night-muted mb-4 border-b border-ink-900/20 pb-1">
              By Anish Kumar A • Editorial Dispatch from the Perundurai Workshops
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-justify">
              <div className="font-body text-sm text-ink-900 dark:text-stone-200 leading-relaxed drop-cap">
                <p className="mb-4">
                  When Gutenberg invented the movable-type printing press in Mainz, he did more than cast metal letters—he democratized access to verified truth and created an enduring artifact that defied time. Software engineering today stands at a comparable crossroad.
                </p>
                <p className="mb-4">
                  In our rush to deploy web applications and generative wrappers overnight, foundational principles of reliability, algorithmic rigor, and cryptographic defense are too easily sidelined. I believe that an application should behave like a well-bound broadsheet newspaper: robust to withstand folding, readable in any light, and honest in its presentation.
                </p>
              </div>

              <div className="font-body text-sm text-ink-900 dark:text-stone-200 leading-relaxed">
                <p className="mb-4">
                  At Kongu Engineering College, studying Computer Science and Design (CSD) has taught me that aesthetics and engineering are not opposing forces. The cleanest user interface in React is useless if the underlying REST API buckles under concurrent load or leaks authentication tokens.
                </p>
                <p className="mb-4">
                  Conversely, the most impenetrable Java backend is wasted if human users cannot intuitively navigate its corridors. True craftsmanship is the harmonic synthesis of both: resilient database schema design, defensive cybersecurity postures, and delightful typography that respects the human eye.
                </p>
              </div>
            </div>

            {/* Editorial Pull Quote */}
            <blockquote className="my-6 p-4 border-l-4 border-press-red bg-paper-100 dark:bg-night-850 font-headline italic text-base sm:text-lg text-ink-900 dark:text-stone-100 font-semibold shadow-xs">
              “We do not merely write instructions for microprocessors; we shape the digital environments in which future humans will think, communicate, and preserve their knowledge.”
            </blockquote>
          </div>

          {/* Editor's Signature Box */}
          <div className="pt-4 border-t-2 border-ink-900/30 dark:border-night-700 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="font-typewriter text-sm font-bold tracking-wider text-ink-950 dark:text-stone-100">
                {PORTFOLIO_DATA.personal.editorialSignature}
              </div>
              <div className="font-typewriter text-xs text-ink-600 dark:text-night-muted">
                B.E. Computer Science & Design • Class of 2027 • CGPA 7.79
              </div>
            </div>

            <div className="font-masthead text-3xl sm:text-4xl text-press-red dark:text-red-400 select-none opacity-85">
              Anish Kumar A
            </div>
          </div>
        </div>
      </div>

      <TornDivider variant="double" />
    </section>
  );
};
