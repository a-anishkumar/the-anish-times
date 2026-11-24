import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { RubberStamp } from './RubberStamp';
import { TornDivider } from './TornDivider';
import { GraduationCap, Calendar, MapPin, CheckCircle, Award } from 'lucide-react';

export const ChronicleEducation: React.FC = () => {
  return (
    <section id="chronicle" className="w-full relative py-8">
      {/* Section Header */}
      <div className="flex flex-wrap items-center justify-between border-b-2 border-ink-900 dark:border-night-600 pb-2 mb-6 gap-3">
        <div className="flex items-center gap-3">
          <GraduationCap className="w-5 h-5 text-press-blue dark:text-sky-400" />
          <h3 className="font-headline font-black text-2xl sm:text-3xl uppercase tracking-wider text-ink-950 dark:text-stone-100">
            Page 6 • The Academic Chronicle
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <RubberStamp text="SCHOLASTIC RECORD" variant="black" rotation={-2} size="sm" />
          <span className="font-typewriter text-xs uppercase tracking-widest text-ink-600 dark:text-night-muted">
            Institutional History (2021 — 2027)
          </span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <p className="font-subhead italic text-sm text-ink-700 dark:text-stone-300 mb-8 text-center">
          “A structured retrospective of academic scholarship, computational curriculum, and rigorous coursework across institutions of higher learning.”
        </p>

        {/* Vertical Newspaper Timeline */}
        <div className="relative border-l-2 border-dashed border-ink-900/50 dark:border-night-600 ml-4 md:ml-32 pl-6 md:pl-10 space-y-10">
          {PORTFOLIO_DATA.education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group"
            >
              {/* Timeline Node Stamp */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-7 h-7 rounded-full bg-paper-100 dark:bg-night-900 border-2 border-ink-900 dark:border-night-600 flex items-center justify-center text-xs font-bold font-typewriter text-press-red shadow-xs group-hover:scale-110 transition-transform">
                {index + 1}
              </div>

              {/* Year Stamp on left (desktop) */}
              <div className="hidden md:block absolute -left-44 top-1.5 w-32 text-right">
                <span className="font-typewriter text-xs font-bold uppercase tracking-wider text-press-red dark:text-red-400 block">
                  {item.year}
                </span>
                <span className="font-typewriter text-[10px] text-ink-600 dark:text-night-muted">
                  ACADEMIC EPOCH
                </span>
              </div>

              {/* Content Broadsheet Card */}
              <div className="border-2 border-ink-900 dark:border-night-600 bg-paper-100 dark:bg-night-850 p-5 sm:p-6 shadow-paper-flat hover:shadow-paper-lift transition-all">
                {/* Mobile Year Badge */}
                <div className="md:hidden font-typewriter text-xs font-bold text-press-red dark:text-red-400 uppercase tracking-wider mb-2">
                  Epoch: {item.year}
                </div>

                {/* Institution & Degree */}
                <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-ink-900/30 dark:border-night-700 pb-2 mb-3">
                  <div>
                    <h4 className="font-headline font-black text-xl sm:text-2xl text-ink-950 dark:text-stone-100">
                      {item.institution}
                    </h4>
                    <p className="font-subhead italic text-sm text-press-red dark:text-red-400 font-bold">
                      {item.degree}
                    </p>
                  </div>

                  {/* Score / Grade Badge */}
                  <div className="bg-paper-200 dark:bg-night-800 border border-ink-900/40 dark:border-night-600 px-3 py-1 font-typewriter text-xs font-bold text-ink-950 dark:text-stone-100 uppercase">
                    {item.scoreOrGrade}
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-1.5 font-typewriter text-xs text-ink-600 dark:text-night-muted mb-3">
                  <MapPin className="w-3.5 h-3.5 text-press-gold" />
                  <span>{item.location}</span>
                </div>

                {/* Summary */}
                <p className="font-body text-xs sm:text-sm text-ink-800 dark:text-stone-300 leading-relaxed mb-4 text-justify">
                  {item.summary}
                </p>

                {/* Achievements List */}
                <div className="border-t border-dashed border-ink-900/20 dark:border-night-700 pt-3">
                  <h5 className="font-typewriter text-[11px] font-bold uppercase tracking-wider text-ink-700 dark:text-night-muted mb-2">
                    Key Scholastic Milestones:
                  </h5>
                  <ul className="space-y-1.5 text-xs font-body text-ink-800 dark:text-stone-300">
                    {item.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2">
                        <span className="text-press-green font-bold">▪</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <TornDivider variant="torn" />
    </section>
  );
};

