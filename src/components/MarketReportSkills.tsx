import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA, SkillItem } from '../data/portfolioData';
import { RubberStamp } from './RubberStamp';
import { TornDivider } from './TornDivider';
import { soundFx } from '../utils/soundEffects';
import { TrendingUp, BarChart3, ArrowUpRight, DollarSign, Activity, Filter } from 'lucide-react';

export const MarketReportSkills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeSkill, setActiveSkill] = useState<SkillItem | null>(null);

  const categories = ['All', 'Frontend', 'Backend', 'Database & Tools', 'Core & Security'];

  const filteredSkills =
    selectedCategory === 'All'
      ? PORTFOLIO_DATA.skillsMarket
      : PORTFOLIO_DATA.skillsMarket.filter((s) => s.category === selectedCategory);

  return (
    <section id="market-report" className="w-full relative py-8">
      {/* Section Header */}
      <div className="flex flex-wrap items-center justify-between border-b-2 border-ink-900 dark:border-night-600 pb-2 mb-4 gap-3">
        <div className="flex items-center gap-3">
          <TrendingUp className="w-5 h-5 text-press-green dark:text-emerald-400" />
          <h3 className="font-headline font-black text-2xl sm:text-3xl uppercase tracking-wider text-ink-950 dark:text-stone-100">
            Page 3 • The Market Report
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <RubberStamp text="HIGH YIELD CAPABILITIES" variant="green" rotation={-2} size="sm" />
          <span className="font-typewriter text-xs uppercase tracking-widest text-ink-600 dark:text-night-muted">
            The Anish Code Exchange (ACX)
          </span>
        </div>
      </div>

      {/* Stock Exchange Ticker Summary Board */}
      <div className="border-2 border-ink-900 dark:border-night-600 p-4 bg-paper-100 dark:bg-night-850 shadow-paper-flat mb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-ink-900/30 dark:border-night-700 pb-3 mb-4 gap-2">
          <div>
            <div className="flex items-center gap-2 font-headline font-bold text-lg sm:text-xl text-ink-950 dark:text-stone-100">
              <span>ANISH TECH COMPOSITE INDEX (ATX-100)</span>
              <span className="text-press-green font-typewriter text-sm flex items-center">
                ▲ 89.65 (+7.4%)
              </span>
            </div>
            <p className="font-typewriter text-xs text-ink-600 dark:text-night-muted">
              Market Sentiment: Strongly Bullish on Full-Stack Scalability & Defensive Hardening
            </p>
          </div>

          <div className="flex items-center gap-2 font-typewriter text-xs">
            <span className="px-2 py-1 bg-press-green/10 dark:bg-emerald-950/40 text-press-green dark:text-emerald-400 border border-press-green/30 font-bold uppercase rounded">
              TRADING ACTIVE
            </span>
            <span className="text-ink-600 dark:text-night-muted">Volume: 2,027,000 COMMITS</span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="font-typewriter text-xs uppercase text-ink-700 dark:text-night-muted flex items-center gap-1 mr-1">
            <Filter className="w-3.5 h-3.5" /> Filter Sector:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                soundFx.playTypewriterKey();
                setSelectedCategory(cat);
              }}
              className={`font-typewriter text-xs px-2.5 py-1 border transition-all uppercase ${
                selectedCategory === cat
                  ? 'bg-ink-950 text-paper-50 dark:bg-stone-200 dark:text-ink-950 font-bold border-ink-950 dark:border-stone-200 shadow-xs'
                  : 'border-ink-900/30 dark:border-night-700 text-ink-700 dark:text-stone-300 hover:border-ink-900 dark:hover:border-stone-400 bg-paper-50 dark:bg-night-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Stock Ticker Animated Bars & Table Grid */}
        <div className="overflow-x-auto">
          <table className="w-full text-left font-typewriter text-xs border-collapse">
            <thead>
              <tr className="border-b-2 border-ink-900 dark:border-night-600 text-ink-900 dark:text-stone-200 bg-paper-200/50 dark:bg-night-800/60 uppercase">
                <th className="py-2 px-3">Ticker / Asset</th>
                <th className="py-2 px-3">Sector</th>
                <th className="py-2 px-3">Index Price</th>
                <th className="py-2 px-3">24h Shift</th>
                <th className="py-2 px-3 w-1/3">Market Depth / Proficiency</th>
                <th className="py-2 px-3 text-right">Rating</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-900/15 dark:divide-night-700/60">
              {filteredSkills.map((skill) => (
                <tr
                  key={skill.symbol}
                  onClick={() => {
                    soundFx.playTypewriterKey();
                    setActiveSkill(activeSkill?.symbol === skill.symbol ? null : skill);
                  }}
                  className={`hover:bg-paper-200/70 dark:hover:bg-night-800 transition-colors cursor-pointer group ${
                    activeSkill?.symbol === skill.symbol
                      ? 'bg-paper-200 dark:bg-night-800 border-l-4 border-press-red'
                      : ''
                  }`}
                >
                  {/* Ticker Symbol & Name */}
                  <td className="py-3 px-3">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-ink-950 dark:text-stone-100 text-sm group-hover:text-press-red transition-colors">
                        {skill.symbol}
                      </span>
                      <span className="font-body text-xs text-ink-700 dark:text-stone-300">
                        {skill.name}
                      </span>
                    </div>
                  </td>

                  {/* Sector */}
                  <td className="py-3 px-3 text-ink-700 dark:text-stone-400">
                    {skill.category}
                  </td>

                  {/* Price */}
                  <td className="py-3 px-3 font-bold text-ink-900 dark:text-stone-100">
                    ${skill.price}
                  </td>

                  {/* Delta Shift */}
                  <td className="py-3 px-3 text-press-green font-bold flex items-center gap-0.5">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                    <span>{skill.delta}</span>
                  </td>

                  {/* Animated Market Depth Bar */}
                  <td className="py-3 px-3">
                    <div className="w-full bg-paper-300 dark:bg-night-700 h-3 rounded-xs overflow-hidden relative border border-ink-900/30">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                        className="h-full bg-ink-900 dark:bg-stone-300 relative group-hover:bg-press-red transition-colors"
                      >
                        {/* Striped hatching overlay simulating financial charts */}
                        <div
                          className="absolute inset-0 opacity-20"
                          style={{
                            backgroundImage:
                              'repeating-linear-gradient(45deg, transparent, transparent 3px, rgba(255,255,255,0.7) 3px, rgba(255,255,255,0.7) 6px)',
                          }}
                        />
                      </motion.div>
                    </div>
                  </td>

                  {/* Status Badge */}
                  <td className="py-3 px-3 text-right">
                    <span
                      className={`inline-block px-2 py-0.5 text-[10px] font-bold rounded-xs border ${
                        skill.status === 'BLUE-CHIP'
                          ? 'border-press-blue text-press-blue bg-press-blue/10 dark:text-sky-300 dark:border-sky-400'
                          : skill.status === 'BULLISH'
                          ? 'border-press-green text-press-green bg-press-green/10 dark:text-emerald-300 dark:border-emerald-400'
                          : 'border-press-gold text-amber-700 bg-amber-500/10 dark:text-amber-300 dark:border-amber-400'
                      }`}
                    >
                      {skill.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Expanded Ticker Scoop Detail */}
        {activeSkill && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 pt-4 border-t border-dashed border-ink-900/40 dark:border-night-700 bg-paper-50 dark:bg-night-900 p-3"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-headline font-bold text-sm uppercase text-press-red dark:text-red-400">
                ASSET ANALYSIS: {activeSkill.symbol} — {activeSkill.name}
              </span>
              <span className="font-typewriter text-[11px] text-ink-600 dark:text-night-muted">
                Strength Rating: {activeSkill.level}/100
              </span>
            </div>
            <p className="font-body text-xs text-ink-800 dark:text-stone-300 leading-relaxed">
              {activeSkill.details}
            </p>
          </motion.div>
        )}
      </div>

      {/* Financial Column Footnote */}
      <div className="font-typewriter text-xs text-ink-600 dark:text-night-muted flex flex-wrap items-center justify-between gap-2 border-t border-ink-900/20 pt-2">
        <span>* Market prices reflect tested software engineering proficiencies, verified through production code & coursework.</span>
        <span>Tap any ticker row for detailed technical analysis.</span>
      </div>

      <TornDivider variant="torn" />
    </section>
  );
};
