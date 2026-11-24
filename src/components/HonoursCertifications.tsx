import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { RubberStamp } from './RubberStamp';
import { TornDivider } from './TornDivider';
import { soundFx } from '../utils/soundEffects';
import { Award, ShieldCheck, CheckCircle2, Bookmark, ExternalLink } from 'lucide-react';

export const HonoursCertifications: React.FC = () => {
  return (
    <section id="honours" className="w-full relative py-8">
      {/* Section Header */}
      <div className="flex flex-wrap items-center justify-between border-b-2 border-ink-900 dark:border-night-600 pb-2 mb-6 gap-3">
        <div className="flex items-center gap-3">
          <Award className="w-5 h-5 text-press-gold dark:text-amber-400" />
          <h3 className="font-headline font-black text-2xl sm:text-3xl uppercase tracking-wider text-ink-950 dark:text-stone-100">
            Page 5 • Honours, Awards & Official Decrees
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <RubberStamp text="OFFICIAL GAZETTE" variant="black" rotation={2} size="sm" />
          <span className="font-typewriter text-xs uppercase tracking-widest text-ink-600 dark:text-night-muted">
            National Registry of Accreditations
          </span>
        </div>
      </div>

      {/* Intro Sub-bulletin */}
      <p className="font-subhead italic text-sm text-ink-700 dark:text-stone-300 mb-6">
        Public notice is hereby given that the following technical certifications and professional distinctions have been conferred upon candidate Anish Kumar A.
      </p>

      {/* Classified-ad style framed certificate boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {PORTFOLIO_DATA.certifications.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ y: -3 }}
            className="relative border-4 border-double border-ink-900 dark:border-night-600 bg-paper-100 dark:bg-night-850 p-6 sm:p-7 shadow-paper-flat hover:shadow-paper-lift transition-all flex flex-col justify-between"
          >
            {/* Ornamental Corner Flourishes */}
            <div className="absolute top-1 left-1 text-ink-500 dark:text-night-600 font-headline text-lg select-none">
              ╔
            </div>
            <div className="absolute top-1 right-1 text-ink-500 dark:text-night-600 font-headline text-lg select-none">
              ╗
            </div>
            <div className="absolute bottom-1 left-1 text-ink-500 dark:text-night-600 font-headline text-lg select-none">
              ╚
            </div>
            <div className="absolute bottom-1 right-1 text-ink-500 dark:text-night-600 font-headline text-lg select-none">
              ╝
            </div>

            <div>
              {/* Certificate Top Header */}
              <div className="flex items-center justify-between border-b border-ink-900/30 dark:border-night-700 pb-2 mb-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-press-red dark:text-red-400" />
                  <span className="font-typewriter text-[11px] font-bold uppercase tracking-widest text-ink-800 dark:text-stone-300">
                    {cert.issuer}
                  </span>
                </div>
                <span className="font-typewriter text-[10px] text-ink-600 dark:text-night-muted uppercase">
                  Registry: {cert.badgeCode}
                </span>
              </div>

              {/* Title & Date */}
              <h4 className="font-headline font-black text-xl sm:text-2xl text-ink-950 dark:text-stone-100 leading-snug mb-2">
                {cert.title}
              </h4>

              <div className="font-typewriter text-xs text-press-red dark:text-red-400 font-bold mb-3 flex items-center gap-1.5">
                <Bookmark className="w-3.5 h-3.5" />
                <span>Conferment Date: {cert.issueDate}</span>
              </div>

              {/* Description */}
              <p className="font-body text-xs sm:text-sm text-ink-800 dark:text-stone-300 leading-relaxed text-justify mb-4">
                {cert.description}
              </p>

              {/* Verified Competencies */}
              <div className="border-t border-dashed border-ink-900/30 dark:border-night-700 pt-3 mb-4">
                <span className="block font-typewriter text-[10px] uppercase tracking-wider text-ink-600 dark:text-night-muted mb-2 font-bold">
                  Verified Technical Competencies:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {cert.skillsVerified.map((skill) => (
                    <span
                      key={skill}
                      className="font-typewriter text-[10px] px-2 py-0.5 border border-ink-900/30 dark:border-night-600 bg-paper-50 dark:bg-night-900 text-ink-900 dark:text-stone-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Row: Official Seal & Verification Stamp */}
            <div className="pt-3 border-t-2 border-ink-900/40 dark:border-night-700 flex items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                {/* Vintage Wax Seal simulation */}
                <div
                  onClick={() => soundFx.playStampThud()}
                  className="w-10 h-10 rounded-full border-2 border-press-red dark:border-red-400 bg-press-red/10 dark:bg-red-950/40 flex items-center justify-center font-typewriter font-black text-[9px] text-press-red dark:text-red-400 tracking-tighter uppercase shadow-xs cursor-pointer hover:scale-105 transition-transform"
                  title="Official Wax Seal of Authentication"
                >
                  SEAL
                </div>

                <div className="font-typewriter text-[10px] text-ink-600 dark:text-night-muted leading-tight">
                  <span className="font-bold block text-ink-900 dark:text-stone-200">
                    State Validated
                  </span>
                  <span>Authenticity Affirmed</span>
                </div>
              </div>

              <RubberStamp
                text={cert.status === 'VERIFIED CREDENTIAL' ? 'VERIFIED' : 'ACTIVE'}
                variant="green"
                rotation={index % 2 === 0 ? -4 : 3}
                size="sm"
              />
            </div>
          </motion.div>
        ))}
      </div>

      <TornDivider variant="double" />
    </section>
  );
};
