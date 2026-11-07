# Sandip Maity — Personal Portfolio

> A distinctive, high-craft personal portfolio built for **Sandip Maity** (Full Stack Software Engineer). Designed with Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4, and Lenis smooth scrolling.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-black?style=flat-square&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-black?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-black?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)

---

## 1. Overview & Architecture

This portfolio is an authentic, production-grade showcase engineered specifically for **Sandip Maity**, highlighting his full-stack engineering background across UK and Indian enterprise platforms (Tedekstra Limited UK, Tangent Tech Solutions).

### Core Features
- **Modern Cyber-Obsidian & Editorial Typography**: Precision sans (`Inter Tight`), editorial display serifs (`Instrument Serif`), and monospace telemetry (`JetBrains Mono`).
- **Interactive System Architecture & Live Prototypes**:
  - **SyncSpace**: Real-time collaborative workspace with simulated multi-user WebSockets and optimistic conflict resolution.
  - **PeopleOS**: Enterprise HR & workforce management engine featuring an interactive RBAC role simulator (`Super Admin`, `HR Manager`, `Employee`).
  - **Tedekstra ERP & CRM**: Microservices topology, containerization, and data isolation.
- **The Periodic Table of My Stack**: Interactive elemental matrix covering Frontend, Backend, Database, Cloud & DevOps, and Security & Auth with an element inspector panel.
- **Chronological Path**: Animated drawing spine timeline tracking professional experience and academic milestones.
- **Developer CLI Terminal**: Interactive shell (`sandip@production-core:~$`) supporting commands like `help`, `skills`, `projects`, `exp`, `contact`, `status`, and `resume`.
- **Direct Channels Hub**: 1-click email copy, interactive message composer, live dual-timezone clocks (IST & UK), and resume download.

---

## 2. Quick Start

### Prerequisites
- Node.js 18+ or 20+ (tested on Node.js 26)
- npm or pnpm

### Development Server

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the live site.

### Production Static Export

```bash
npm run build
```

The optimized static build is emitted into `out/`, ready to deploy to GitHub Pages, Vercel, Netlify, Cloudflare Pages, or Render.

---

## 3. Directory Layout

```
sandip-portfolio/
├── public/
│   ├── sandip.jpg            # High-resolution professional portrait
│   └── Sandip_Resume.pdf     # Downloadable PDF resume
├── src/
│   ├── app/
│   │   ├── globals.css       # Design tokens, themes, glow effects
│   │   ├── layout.tsx        # SEO metadata, OpenGraph, local font loaders
│   │   └── page.tsx          # Page entry point
│   ├── components/
│   │   ├── Navigation.tsx    # Floating pill header with active section tracking
│   │   ├── hero/
│   │   │   └── Hero.tsx      # Split hero, availability badge, live timezones
│   │   ├── sections/
│   │   │   ├── About.tsx     # Architectural philosophy & 4 core pillars
│   │   │   ├── FeaturedProjects.tsx # Deep dives + live interactive simulators
│   │   │   ├── SkillsMatrix.tsx     # Periodic table & element inspector
│   │   │   ├── ExperienceTimeline.tsx # Chronological drawing spine
│   │   │   └── ContactSection.tsx   # Direct channels, timezones & mail composer
│   │   ├── terminal/
│   │   │   └── InteractiveTerminal.tsx # Interactive developer shell
│   │   ├── Footer.tsx        # Minimalist technical footer
│   │   └── App.tsx           # Main application wrapper
│   ├── fonts/                # Local zero-latency web fonts
│   └── lib/
│       ├── data.ts           # Central typed profile & portfolio dataset
│       └── scroll.tsx        # Smooth scrolling provider (Lenis)
├── next.config.mjs           # Next.js static export configuration
├── postcss.config.mjs        # PostCSS with Tailwind v4
└── tsconfig.json             # TypeScript compiler settings
```

---

## 4. Author

- **Sandip Maity**
- **Email**: [sandipmaity21052003@gmail.com](mailto:sandipmaity21052003@gmail.com)
- **Phone**: +91 7908729570
- **GitHub**: [@San-Dip-Maity](https://github.com/San-Dip-Maity)
