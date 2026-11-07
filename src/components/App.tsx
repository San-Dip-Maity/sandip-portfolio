"use client";

import React from "react";
import { SmoothScrollProvider } from "@/lib/scroll";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/sections/About";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { SkillsMatrix } from "@/components/sections/SkillsMatrix";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { InteractiveTerminal } from "@/components/terminal/InteractiveTerminal";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/Footer";

export function App() {
  return (
    <SmoothScrollProvider>
      <div className="relative min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] selection:bg-[var(--accent-cyan)] selection:text-[var(--bg-primary)] overflow-x-hidden transition-colors duration-300">
        {/* Fixed Navigation */}
        <Navigation />

        {/* Main Content Flow */}
        <main id="main-content" role="main" className="relative">
          <Hero />
          <About />
          <FeaturedProjects />
          <SkillsMatrix />
          <ExperienceTimeline />
          <InteractiveTerminal />
          <ContactSection />
        </main>

        {/* Technical Minimalist Footer */}
        <Footer />
      </div>
    </SmoothScrollProvider>
  );
}
