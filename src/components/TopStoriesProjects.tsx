import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { RubberStamp } from './RubberStamp';
import { ProjectModal } from './ProjectModal';
import { TornDivider } from './TornDivider';
import { soundFx } from '../utils/soundEffects';
import { GithubIcon } from './SocialIcons';
import {
  Newspaper,
  BookOpen,
  ArrowRight,
  ExternalLink,
  Layers,
  Sparkles,
} from 'lucide-react';

export const TopStoriesProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenModal = (project: Project) => {
    soundFx.playPaperRustle();
    setSelectedProject(project);
  };

  return (
    <section id="top-stories" className="w-full relative py-8">
      {/* Section Header Bar */}
      <div className="flex flex-wrap items-center justify-between border-b-2 border-ink-900 dark:border-night-600 pb-2 mb-6 gap-3">
        <div className="flex items-center gap-3">
          <Newspaper className="w-5 h-5 text-press-red dark:text-red-400" />
          <h3 className="font-headline font-black text-2xl sm:text-3xl uppercase tracking-wider text-ink-950 dark:text-stone-100">
            Page 4 • Top Stories & Key Inventions
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <RubberStamp text="FRONT-PAGE SCOOPS" variant="red" rotation={-3} size="sm" />
          <span className="font-typewriter text-xs uppercase tracking-widest text-ink-600 dark:text-night-muted">
            Special Investigations Bureau
          </span>
        </div>
      </div>

      {/* Projects Grid Styled as Newspaper Broadsheet Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
        {PORTFOLIO_DATA.projects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            whileHover={{ y: -4, rotate: index % 2 === 0 ? 0.35 : -0.35 }}
            className="group relative border-2 border-ink-900 dark:border-night-600 bg-paper-100 dark:bg-night-850 p-5 sm:p-6 shadow-paper-flat hover:shadow-paper-lift transition-all duration-300 flex flex-col justify-between"
          >
            {/* Top Byline & Category Bar */}
            <div>
              <div className="flex items-center justify-between border-b border-ink-900/30 dark:border-night-700 pb-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className="font-typewriter text-[11px] font-bold text-press-red dark:text-red-400 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <span className="text-ink-400">•</span>
                  <span className="font-typewriter text-[10px] text-ink-600 dark:text-night-muted">
                    {project.date}
                  </span>
                </div>

                {project.stampText && (
                  <RubberStamp text={project.stampText} variant="black" rotation={index % 2 === 0 ? -2 : 3} size="sm" />
                )}
              </div>

              {/* Halftone Image Box with Color Shift on Card Hover */}
              <div className="relative aspect-16/9 w-full overflow-hidden border border-ink-900/60 bg-paper-300 dark:bg-night-800 mb-4">
                <div className="w-full h-full halftone-image group-hover:filter-none transition-all duration-500 flex flex-col items-center justify-center p-4 bg-gradient-to-tr from-paper-200 via-paper-300 to-stone-400 dark:from-night-900 dark:via-night-800 dark:to-stone-800">
                  {/* Decorative Architectural Schematic Visual */}
                  <div className="w-full h-full border border-dashed border-ink-900/60 dark:border-night-600 flex flex-col items-center justify-center p-3 relative overflow-hidden bg-paper-100/60 dark:bg-night-850/60">
                    <span className="font-masthead text-4xl sm:text-5xl text-ink-900 dark:text-stone-200 opacity-90 mb-1">
                      {project.title.split(':')[0]}
                    </span>
                    <span className="font-typewriter text-[10px] uppercase tracking-widest text-ink-700 dark:text-stone-400">
                      Engineering Blueprint • {project.techStack.slice(0, 3).join(' • ')}
                    </span>
                    <div className="absolute inset-0 bg-halftone-dots opacity-25 pointer-events-none" />
                  </div>
                </div>

                {/* Halftone dot pattern overlay that fades on card hover */}
                <div className="absolute inset-0 halftone-overlay opacity-30 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none mix-blend-multiply dark:mix-blend-screen" />

                {/* Caption Badge */}
                <div className="absolute bottom-1 right-1 bg-ink-950/80 text-paper-100 text-[9px] font-typewriter px-1.5 py-0.5 uppercase tracking-wider backdrop-blur-xs">
                  FIG {index + 1}.0
                </div>
              </div>

              {/* Headline with Vintage Highlighter Swipe on Hover */}
              <h4 className="font-headline font-black text-xl sm:text-2xl text-ink-950 dark:text-stone-100 leading-snug mb-2 cursor-pointer">
                <span
                  onClick={() => handleOpenModal(project)}
                  className="highlight-swipe inline transition-all decoration-clone"
                >
                  {project.title}
                </span>
              </h4>

              {/* Byline */}
              <div className="font-typewriter text-[11px] text-ink-600 dark:text-night-muted italic mb-3">
                {project.byline}
              </div>

              {/* Excerpt with drop cap */}
              <p className="font-body text-xs sm:text-sm text-ink-800 dark:text-stone-300 leading-relaxed text-justify mb-4">
                {project.excerpt}
              </p>
            </div>

            {/* Bottom Card Elements: Tech Pills + Action Links */}
            <div>
              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4 border-t border-ink-900/20 dark:border-night-700 pt-3">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="font-typewriter text-[10px] px-2 py-0.5 border border-ink-900/40 dark:border-night-600 bg-paper-50 dark:bg-night-900 text-ink-900 dark:text-stone-300 uppercase"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Read Story / Links Bar */}
              <div className="flex items-center justify-between pt-3 border-t-2 border-ink-900/30 dark:border-night-700">
                <button
                  onClick={() => handleOpenModal(project)}
                  className="inline-flex items-center gap-1.5 font-typewriter text-xs font-bold uppercase tracking-wider text-press-red dark:text-red-400 hover:underline underline-offset-4 group/btn"
                >
                  <span>Read Full Scoop</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundFx.playTypewriterKey()}
                    className="p-1.5 border border-ink-900/40 dark:border-night-600 hover:bg-ink-950 hover:text-white dark:hover:bg-stone-200 dark:hover:text-ink-950 rounded-xs transition-colors"
                    title="View Source on GitHub"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                  </a>

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => soundFx.playTypewriterKey()}
                      className="p-1.5 border border-ink-900/40 dark:border-night-600 hover:bg-ink-950 hover:text-white dark:hover:bg-stone-200 dark:hover:text-ink-950 rounded-xs transition-colors"
                      title="Inspect Live Architecture"
                      aria-label={`Inspect ${project.title} Live`}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Modal Popup Scoop */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />

      <TornDivider variant="triple" />
    </section>
  );
};
