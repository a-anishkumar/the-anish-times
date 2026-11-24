import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { RubberStamp } from './RubberStamp';
import { TornDivider } from './TornDivider';
import { soundFx } from '../utils/soundEffects';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import {
  Mail,
  Send,
  Check,
  Copy,
  AlertCircle,
  FileText,
  Sparkles,
} from 'lucide-react';

export const ClassifiedsContact: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dispatchType: 'JOB OFFER / INTERNSHIP',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleCopy = (text: string, index: number) => {
    soundFx.playTypewriterKey();
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormError('All telegraph fields must be completed prior to press dispatch.');
      return;
    }

    setFormError('');
    soundFx.playStampThud();
    setIsSubmitted(true);
  };

  return (
    <section id="classifieds" className="w-full relative py-8">
      {/* Section Header */}
      <div className="flex flex-wrap items-center justify-between border-b-2 border-ink-900 dark:border-night-600 pb-2 mb-6 gap-3">
        <div className="flex items-center gap-3">
          <FileText className="w-5 h-5 text-press-red dark:text-red-400" />
          <h3 className="font-headline font-black text-2xl sm:text-3xl uppercase tracking-wider text-ink-950 dark:text-stone-100">
            Page 7 • The Classifieds & Public Notices
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <RubberStamp text="WANTED: ROLES" variant="red" rotation={-3} size="sm" />
          <span className="font-typewriter text-xs uppercase tracking-widest text-ink-600 dark:text-night-muted">
            Commercial & Editorial Wire
          </span>
        </div>
      </div>

      {/* Main Grid: Classified Advertisements + Letter to the Editor */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Side: WANTED Box & Classified Contact Listings (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Big Vintage 'WANTED' Box */}
          <div className="border-4 border-ink-900 dark:border-night-600 bg-paper-100 dark:bg-night-850 p-6 shadow-paper-flat relative overflow-hidden">
            <div className="text-center border-b-2 border-ink-900 dark:border-night-700 pb-3 mb-4">
              <span className="font-typewriter text-xs uppercase tracking-[0.3em] font-bold text-press-red dark:text-red-400 block mb-1">
                ★ OFFICIAL GAZETTE NOTICE ★
              </span>
              <h4 className="font-masthead text-4xl sm:text-5xl font-black text-ink-950 dark:text-stone-100 uppercase tracking-tight">
                WANTED
              </h4>
              <p className="font-headline font-bold text-sm sm:text-base uppercase tracking-wider text-ink-900 dark:text-stone-200 mt-1">
                Internship or Full-Time Engineering Role
              </p>
            </div>

            <p className="font-body text-xs sm:text-sm text-ink-800 dark:text-stone-300 leading-relaxed text-justify mb-4">
              {PORTFOLIO_DATA.classifieds.wantedNotice}
            </p>

            <div className="border-t border-dashed border-ink-900/40 dark:border-night-700 pt-3 flex items-center justify-between font-typewriter text-xs">
              <span className="text-ink-600 dark:text-night-muted">Candidate: Anish Kumar A</span>
              <span className="text-press-green font-bold">READY TO DEPLOY</span>
            </div>
          </div>

          {/* Classified Ad Cutout Contacts */}
          <div className="space-y-4">
            <h5 className="font-typewriter text-xs font-bold uppercase tracking-widest text-ink-700 dark:text-night-muted border-b border-ink-900/30 pb-1">
              Direct Channels & Telegraph Links
            </h5>

            {PORTFOLIO_DATA.classifieds.contacts.map((contact, index) => (
              <div
                key={index}
                className="border-2 border-dashed border-ink-900/50 dark:border-night-600 bg-paper-50 dark:bg-night-900 p-4 relative group hover:border-ink-900 transition-colors"
              >
                <div className="font-typewriter text-[10px] uppercase tracking-wider text-ink-600 dark:text-night-muted font-bold mb-1">
                  {contact.type}
                </div>

                <div className="flex items-center justify-between gap-3">
                  <div className="font-headline font-bold text-sm text-ink-950 dark:text-stone-100 truncate">
                    {contact.value}
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {/* Copy Button */}
                    <button
                      onClick={() => handleCopy(contact.value, index)}
                      className="p-1.5 border border-ink-900/30 dark:border-night-600 hover:bg-ink-900 hover:text-white dark:hover:bg-stone-200 dark:hover:text-ink-950 transition-colors text-xs flex items-center gap-1 rounded-xs"
                      title="Copy to Clipboard"
                    >
                      {copiedIndex === index ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-press-green" />
                          <span className="text-[10px] font-typewriter hidden sm:inline">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span className="text-[10px] font-typewriter hidden sm:inline">Copy</span>
                        </>
                      )}
                    </button>

                    {/* Visit Link */}
                    <a
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => soundFx.playTypewriterKey()}
                      className="px-2.5 py-1 bg-ink-950 text-paper-100 dark:bg-stone-100 dark:text-ink-950 text-xs font-typewriter font-bold uppercase tracking-wider hover:bg-press-red dark:hover:bg-press-red dark:hover:text-white transition-colors"
                    >
                      Open
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Letter to the Editor Interactive Form (7 cols) */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="border-4 border-ink-900 dark:border-night-600 bg-paper-100 dark:bg-night-850 p-6 sm:p-8 shadow-paper-flat flex-1 flex flex-col justify-between">
            <div>
              {/* Form Broadsheet Header */}
              <div className="border-b-2 border-ink-900 dark:border-night-700 pb-3 mb-5">
                <div className="flex items-center justify-between">
                  <h4 className="font-headline font-black text-2xl sm:text-3xl text-ink-950 dark:text-stone-100 uppercase tracking-tight">
                    Letter to the Editor
                  </h4>
                  <RubberStamp text="DIRECT DISPATCH" variant="red" size="sm" rotation={2} />
                </div>
                <p className="font-subhead italic text-xs sm:text-sm text-ink-700 dark:text-stone-300 mt-1">
                  Send a missive, interview summons, or engineering inquiry directly to the chief editor's desk.
                </p>
              </div>

              {isSubmitted ? (
                /* Success State */
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="p-6 border-2 border-dashed border-press-green bg-press-green/5 dark:bg-emerald-950/20 text-center my-6"
                >
                  <RubberStamp text="TRANSMISSION SENT" variant="green" size="lg" rotation={-2} />
                  <h5 className="font-headline font-bold text-xl text-ink-950 dark:text-stone-100 mt-4 mb-2">
                    Telegraph Received with Highest Priority
                  </h5>
                  <p className="font-body text-xs sm:text-sm text-ink-800 dark:text-stone-300 max-w-md mx-auto leading-relaxed mb-4">
                    Your dispatch has been filed on the editor's ledger. Anish Kumar A will reply via returned correspondence within one solar cycle.
                  </p>
                  <button
                    onClick={() => {
                      soundFx.playPaperRustle();
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        dispatchType: 'JOB OFFER / INTERNSHIP',
                        message: '',
                      });
                    }}
                    className="font-typewriter text-xs uppercase underline tracking-wider font-bold text-press-red hover:text-press-redDark"
                  >
                    Send Another Dispatch
                  </button>
                </motion.div>
              ) : (
                /* Form Fields */
                <form onSubmit={handleSubmit} className="space-y-4">
                  {formError && (
                    <div className="p-2 border border-press-red bg-press-red/10 text-press-red text-xs font-typewriter flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{formError}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Sender Name */}
                    <div>
                      <label className="block font-typewriter text-xs font-bold uppercase tracking-wider text-ink-800 dark:text-stone-200 mb-1">
                        Correspondent's Full Name:
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        onKeyDown={() => soundFx.playTypewriterKey()}
                        placeholder="e.g. Eleanor Vance"
                        className="w-full bg-paper-50 dark:bg-night-900 border-2 border-ink-900/60 dark:border-night-600 px-3 py-2 text-xs font-body text-ink-950 dark:text-stone-100 focus:outline-none focus:border-press-red"
                        required
                      />
                    </div>

                    {/* Sender Email */}
                    <div>
                      <label className="block font-typewriter text-xs font-bold uppercase tracking-wider text-ink-800 dark:text-stone-200 mb-1">
                        Return Electronic Address:
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        onKeyDown={() => soundFx.playTypewriterKey()}
                        placeholder="e.g. correspondent@domain.com"
                        className="w-full bg-paper-50 dark:bg-night-900 border-2 border-ink-900/60 dark:border-night-600 px-3 py-2 text-xs font-body text-ink-950 dark:text-stone-100 focus:outline-none focus:border-press-red"
                        required
                      />
                    </div>
                  </div>

                  {/* Dispatch Type / Stamp Selection */}
                  <div>
                    <label className="block font-typewriter text-xs font-bold uppercase tracking-wider text-ink-800 dark:text-stone-200 mb-1">
                      Dispatch Category / Rubber Stamp:
                    </label>
                    <select
                      value={formData.dispatchType}
                      onChange={(e) => {
                        soundFx.playTypewriterKey();
                        setFormData({ ...formData, dispatchType: e.target.value });
                      }}
                      className="w-full bg-paper-50 dark:bg-night-900 border-2 border-ink-900/60 dark:border-night-600 px-3 py-2 text-xs font-typewriter text-ink-950 dark:text-stone-100 uppercase focus:outline-none focus:border-press-red"
                    >
                      <option value="JOB OFFER / INTERNSHIP">JOB OFFER / INTERNSHIP PROPOSAL</option>
                      <option value="TECHNICAL INQUIRY">TECHNICAL INQUIRY ON REPOSITORIES</option>
                      <option value="URGENT DISPATCH">URGENT DISPATCH / COLLABORATION</option>
                      <option value="EDITORIAL FAN MAIL">EDITORIAL FAN MAIL / COMMENDATION</option>
                    </select>
                  </div>

                  {/* Message textarea */}
                  <div>
                    <label className="block font-typewriter text-xs font-bold uppercase tracking-wider text-ink-800 dark:text-stone-200 mb-1">
                      Telegraph Message Body:
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      onKeyDown={() => soundFx.playTypewriterKey()}
                      placeholder="Transcribe your message here with utmost clarity..."
                      className="w-full bg-paper-50 dark:bg-night-900 border-2 border-ink-900/60 dark:border-night-600 p-3 text-xs sm:text-sm font-body text-ink-950 dark:text-stone-100 leading-relaxed focus:outline-none focus:border-press-red"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-press-red text-white hover:bg-press-redDark font-typewriter text-xs font-bold uppercase tracking-widest transition-transform active:scale-98 shadow-paper-flat"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Transmit to Press Bureau</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Micro Colophon notice */}
            <div className="font-typewriter text-[10px] text-ink-600 dark:text-night-muted border-t border-ink-900/20 pt-3 mt-4 flex items-center justify-between">
              <span>Encrypted via 256-bit broadsheet dispatch</span>
              <span>All transmissions archived securely</span>
            </div>
          </div>
        </div>
      </div>

      <TornDivider variant="ornate" />
    </section>
  );
};
