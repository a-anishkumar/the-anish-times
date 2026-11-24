import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../data/portfolioData';
import { RubberStamp } from './RubberStamp';
import { soundFx } from '../utils/soundEffects';
import { GithubIcon } from './SocialIcons';
import { X, ExternalLink, CheckCircle2, BookOpen, Layers } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop with ink wash overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            soundFx.playPaperRustle();
            onClose();
          }}
          className="fixed inset-0 bg-ink-950/75 dark:bg-black/85 backdrop-blur-xs transition-opacity"
          aria-hidden="true"
        />

        {/* Modal Broadsheet Card */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 280 }}
          className="relative w-full max-w-3xl bg-paper-100 dark:bg-night-900 border-4 border-ink-900 dark:border-night-600 p-5 sm:p-8 shadow-paper-deep z-10 my-8 max-h-[90vh] overflow-y-auto"
        >
          {/* Top Bar with Issue Scoop Notice and Close Button */}
          <div className="flex items-center justify-between border-b-2 border-ink-900 dark:border-night-700 pb-2 mb-4">
            <div className="flex items-center gap-2">
              <span className="font-typewriter text-xs font-bold uppercase tracking-wider text-press-red dark:text-red-400">
                SPECIAL REPRINT DISPATCH
              </span>
              <span className="text-ink-400">•</span>
              <span className="font-typewriter text-[11px] text-ink-600 dark:text-night-muted uppercase">
                {project.category}
              </span>
            </div>

            <button
              onClick={() => {
                soundFx.playPaperRustle();
                onClose();
              }}
              className="p-1 hover:bg-ink-900/10 dark:hover:bg-night-800 rounded transition-colors text-ink-900 dark:text-stone-200"
              aria-label="Close Story"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Headline & Byline */}
          <div className="mb-4">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              {project.stampText && (
                <RubberStamp text={project.stampText} variant="red" size="sm" rotation={-2} />
              )}
              <span className="font-typewriter text-xs text-ink-600 dark:text-night-muted">
                {project.date}
              </span>
            </div>

            <h3 className="font-headline font-black text-2xl sm:text-4xl text-ink-950 dark:text-stone-100 leading-tight">
              {project.title}
            </h3>
            <p className="font-subhead italic text-sm sm:text-base text-ink-700 dark:text-stone-300 mt-1">
              {project.tagline}
            </p>
            <div className="font-typewriter text-xs text-ink-600 dark:text-night-muted mt-2 border-t border-b border-ink-900/20 dark:border-night-700 py-1 flex items-center justify-between">
              <span>{project.byline}</span>
              <span className="uppercase text-[10px]">Archived Scoop</span>
            </div>
          </div>

          {/* Full Scoop Article Body */}
          <div className="space-y-4 font-body text-sm text-ink-900 dark:text-stone-200 leading-relaxed text-justify mb-6">
            {project.fullStory.map((paragraph, idx) => (
              <p key={idx} className={idx === 0 ? 'drop-cap' : ''}>
                {paragraph}
              </p>
            ))}
          </div>

          {/* Key Architectural Highlights */}
          <div className="my-6 p-4 border-2 border-dashed border-ink-900/50 dark:border-night-700 bg-paper-50 dark:bg-night-850">
            <h4 className="font-headline font-bold text-xs uppercase tracking-widest text-ink-950 dark:text-stone-100 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-press-green" />
              <span>Verified Engineering Highlights</span>
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-body text-ink-800 dark:text-stone-300">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-press-red font-bold">✓</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Pills */}
          <div className="mb-6">
            <h4 className="font-typewriter text-xs font-bold uppercase tracking-wider text-ink-700 dark:text-night-muted mb-2 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              <span>Technology Ledger:</span>
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="font-typewriter text-[11px] px-2 py-0.5 border border-ink-900 dark:border-night-600 bg-paper-200 dark:bg-night-800 text-ink-950 dark:text-stone-200 uppercase font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Modal Footer CTA Links */}
          <div className="pt-4 border-t-2 border-ink-900 dark:border-night-600 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playTypewriterKey()}
                className="inline-flex items-center gap-2 px-4 py-2 bg-ink-950 text-paper-50 dark:bg-stone-100 dark:text-ink-950 font-typewriter text-xs font-bold uppercase tracking-wider hover:bg-press-red dark:hover:bg-press-red dark:hover:text-white transition-all shadow-paper-flat"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Source Repository</span>
              </a>

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFx.playTypewriterKey()}
                  className="inline-flex items-center gap-2 px-4 py-2 border-2 border-ink-950 dark:border-stone-200 font-typewriter text-xs font-bold uppercase tracking-wider text-ink-950 dark:text-stone-100 hover:bg-ink-950 hover:text-paper-50 dark:hover:bg-stone-200 dark:hover:text-ink-950 transition-all shadow-paper-flat"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Inspect System</span>
                </a>
              )}
            </div>

            <button
              onClick={() => {
                soundFx.playPaperRustle();
                onClose();
              }}
              className="font-typewriter text-xs underline uppercase tracking-wider text-ink-700 dark:text-night-muted hover:text-press-red"
            >
              Return to Front Page
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
