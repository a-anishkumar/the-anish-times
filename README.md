# 🗞️ The Anish Times — Broadsheet Portfolio

> *“All the Code That’s Fit to Deploy”*  
> The official broadsheet newspaper portfolio of **Anish Kumar A**, Full-Stack Developer & Software Craftsman (B.E. Computer Science and Design, Kongu Engineering College, Class of 2027, CGPA 7.79).

[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.x-black?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

---

## 📰 Concept & Visual Aesthetic

**The Anish Times** is designed as an authentic vintage broadsheet newspaper that comes alive with interactive animations:
- **Paper Palette & Texture**: Cream/parchment background (`#f4ecd8`), grain noise overlay, vignette edges, and horizontal paper fold creases.
- **Night Edition**: Toggleable dark mode recreating an aged late-evening parchment tone with charcoal printing ink.
- **Typography**:
  - Masthead: *UnifrakturCook* & *Playfair Display*
  - Headlines: *Playfair Display* & *Old Standard TT*
  - Subheads & Columns: *Libre Baskerville* & *Merriweather*
  - Typewriter Accents: *Special Elite* & *Courier Prime*
- **Ink & Printing Effects**: Ink-bleed text shadows, double & triple broadsheet rules, drop caps, distressed rubber stamps (`EXCLUSIVE`, `BREAKING`, `HIRE ME`, `AIR-GAPPED`), and halftone-to-color interactive portraits.
- **Synthesized Audio Engine**: Zero-asset pure Web Audio API mechanical typewriter clicks, paper rustling, and stamp thuds.
- **Paper Confetti**: Custom canvas confetti simulating shredded newspaper clippings when clicking "Read Issue".

---

## 🏛️ Broadsheet Sections

1. **Header & Masthead**:
   - Volume: *Vol. 2027, Issue No. 1*
   - Weather: *“Today's Forecast: Open to Work (High: Passion, Low: Latency)”*
   - Price: *“FREE”*
   - Edition Switcher (Morning Broadsheet vs. Night Edition)
   - Printing Press reading progress bar indicator.
2. **Infinite Wire Dispatch (Breaking Ticker)**:
   - Scrolling breaking news ticker with pause-on-hover controls.
3. **Front Page & Lead Investigation**:
   - Headline: *“ANISH KUMAR A: FULL-STACK DEVELOPER & SOFTWARE CRAFTSMAN BUILDS THE FUTURE”* (Typewriter animated reveal)
   - Halftone engraved portrait with clickable halftone/sharp toggle.
   - B.E. CSD Kongu Engineering College credential highlights.
4. **Editorial Desk (About)**:
   - Column layout with drop cap, pull-quote, the 3 engineering tenets (*Resilient Architecture*, *Edge & Offline Sovereignty*, *Relational & Graph Integrity*), and editor signature.
5. **The Market Report (Skills)**:
   - Styled as the *Anish Code Exchange (ACX)* stock ticker with live candlestick-style depth bars, prices, and trend indicators for Java, React.js, Node.js, SQL, Python, Tailwind, System Design, Git, and C.
   - Sector filters: Frontend, Backend, Database & Tools, Core Engineering.
6. **Top Stories (Projects)**:
   - **Aura**: Autonomous offline AI companion with zero-cloud edge LLM & voice execution.
   - **Hostel Room Allocation System**: High-concurrency campus housing portal with ACID room assignment.
   - **ResearchGap AI**: Literature gap discovery utilizing Neo4j Knowledge Graphs and RAG.
   - **Snap2Code**: OCR + Multimodal LLM pipeline converting wireframe sketches into production React JSX.
   - Newspaper card hover lift, highlighter swipe effect, and special reprint modal scoop.
7. **Honours & Awards (Certifications)**:
   - *Oracle APEX Cloud Developer Certified Associate* (May 2025)
   - *Java SE 17 Developer Certified Professional* (May 2026)
   - Framed classified certificates with wax seals and verification rubber stamps.
8. **The Academic Chronicle (Education Timeline)**:
   - Kongu Engineering College (B.E. Computer Science & Design, 2023–2027, CGPA 7.79)
   - Higher Secondary Certificate (HSC, 2021–2023, First Class Distinction)
9. **The Classifieds (Contact & Missives)**:
   - *WANTED: Internship / Full-time Role* classified notice.
   - Tear-off quick copy contacts (Email: `anishkumar.a2006@gmail.com`, LinkedIn, GitHub).
   - Interactive *Letter to the Editor* contact form with stamp selection and instant telegram confirmation.
10. **Colophon & Footer**:
    - *“Printed with ♥ in Tamil Nadu”*, typeface credits, and return-to-top button.

---

## 🛠️ Project Structure

```
portfolio/
├── index.html                   # HTML template with Google Fonts & SEO tags
├── package.json                 # Dependencies & scripts
├── postcss.config.js            # PostCSS configuration
├── tailwind.config.js           # Newspaper broadsheet theme & typography
├── tsconfig.json                # TypeScript compiler config
├── vite.config.ts               # Vite bundler config
├── vercel.json                  # Vercel SPA routing
├── netlify.toml                 # Netlify build & redirect rules
├── src/
│   ├── main.tsx                 # React DOM mount point
│   ├── App.tsx                  # Broadsheet master shell & state
│   ├── index.css                # Broadhseet CSS, ink-bleed, drop-caps, halftone
│   ├── vite-env.d.ts            # Vite client type definitions
│   ├── data/
│   │   └── portfolioData.ts     # Content data (projects, skills, certs, bio)
│   ├── utils/
│   │   └── soundEffects.ts      # Web Audio API typewriter, rustle, stamp FX
│   └── components/
│       ├── Header.tsx           # Masthead, weather, edition & audio toggle
│       ├── BreakingTicker.tsx   # Infinite marquee wire feed
│       ├── FrontPageHero.tsx    # Lead story with typewriter headline & portrait
│       ├── EditorialAbout.tsx   # About editorial column with drop cap
│       ├── MarketReportSkills.tsx # Stock ticker skills table & depth bars
│       ├── TopStoriesProjects.tsx # Newspaper project cards
│       ├── ProjectModal.tsx     # Full reprint article scoop modal
│       ├── HonoursCertifications.tsx # Framed certificates with wax seals
│       ├── ChronicleEducation.tsx # Vertical newspaper timeline
│       ├── ClassifiedsContact.tsx # WANTED ad & Letter to Editor form
│       ├── Footer.tsx           # Colophon & press notes
│       ├── RubberStamp.tsx      # Distressed angled stamp component
│       ├── TornDivider.tsx      # SVG torn edge & double rule dividers
│       ├── SocialIcons.tsx      # GitHub & LinkedIn SVGs
│       ├── UnfoldIntro.tsx      # 3D newspaper unfold intro animation
│       └── VintageOverlays.tsx  # Coffee stain, crease, and cursor toggle
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Local Development
```bash
# 1. Clone repository or navigate to directory
cd portfolio

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Production Build
```bash
# Run TypeScript compilation and build production assets into /dist
npm run build

# Preview production build locally
npm run preview
```

---

## ✍️ How to Edit Content

All personal information, project scoops, skills, and links are neatly decoupled in a single file:
`src/data/portfolioData.ts`

- **To update projects**: Edit the `projects` array in `src/data/portfolioData.ts`.
- **To update skills / proficiency**: Edit the `skillsMarket` array.
- **To add certifications**: Modify the `certifications` array.
- **To update contact info**: Change `classifieds.contacts` and `personal`.

---

## 🌐 Deployment Instructions

### Deploy to Vercel (Recommended)
1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your repository.
4. Settings are automatically recognized:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**. The included `vercel.json` ensures full SPA support.

### Deploy to Netlify
1. Sign in to [Netlify](https://www.netlify.com).
2. Click **"Add new site"** -> **"Import an existing project"**.
3. Connect your GitHub repository.
4. Build configuration will automatically use the included `netlify.toml`:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **"Deploy site"**.

---

## 📜 License
Published under the [MIT License](LICENSE).  
Printed with care by **Anish Kumar A**.

