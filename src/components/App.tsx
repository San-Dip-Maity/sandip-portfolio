"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
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
import ContributionSkyline from "@/components/ui/contribution-skyline";
import { X, Box, Sparkles } from "lucide-react";

// Dynamic import for Three.js Agentic Factory to ensure smooth client-side hydration
const AgenticFactory3D = dynamic(
  () => import("@/components/ui/agentic-factory-3d"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-96 flex items-center justify-center font-telemetry text-xs text-[var(--text-muted)] animate-pulse">
        Initializing Three.js Autonomous Agent Pipeline...
      </div>
    ),
  }
);

export function App() {
  const [openDemo, setOpenDemo] = useState<"skyline" | "agentic-factory" | null>(null);

  // Lock body scroll when 3D modal is active
  useEffect(() => {
    if (openDemo) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setOpenDemo(null);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = prevOverflow;
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [openDemo]);

  return (
    <SmoothScrollProvider>
      <div className="relative min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] selection:bg-[var(--accent)] selection:text-white overflow-x-hidden transition-colors duration-300">
        {/* Fixed Navigation */}
        <Navigation onOpen3D={() => setOpenDemo("skyline")} />

        {/* Main Content Flow */}
        <main id="main-content" role="main" className="relative">
          {/* Unified Full-Bleed Editorial Hero */}
          <Hero onOpen3D={() => setOpenDemo("skyline")} />

          {/* About Section with Physics Pendulum ID Lanyard */}
          <About />

          {/* Projects with Desktop Horizontal Folding Accordion */}
          <FeaturedProjects />

          {/* Technical Periodic Stack Matrix */}
          <SkillsMatrix />

          {/* Chronological Career & Education Timeline */}
          <ExperienceTimeline />

          {/* Interactive Developer CLI Terminal */}
          <InteractiveTerminal />

          {/* Direct Channels & Contact Gateway */}
          <ContactSection />
        </main>

        {/* Technical Minimalist Footer */}
        <Footer />

        {/* 3D Modal: Contribution Skyline */}
        {openDemo === "skyline" && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label="3D Skyline Viewport"
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 select-none"
            onClick={() => setOpenDemo(null)}
          >
            <div
              className="relative w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-[28px] bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="px-6 py-4 border-b border-[var(--border-subtle)] flex items-center justify-between bg-[var(--bg-secondary)] shrink-0">
                <div className="flex items-center gap-3">
                  <Box className="w-4 h-4 text-[var(--accent)]" />
                  <h3 className="text-sm font-bold text-[var(--text-primary)] font-telemetry">
                    GitHub Contribution Skyline 3D Isometric Viewport
                  </h3>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setOpenDemo("agentic-factory")}
                    className="text-xs font-telemetry text-[var(--accent)] hover:underline"
                  >
                    Switch to Agentic Factory 3D →
                  </button>
                  <button
                    onClick={() => setOpenDemo(null)}
                    className="w-8 h-8 rounded-full bg-[var(--bg-elevated)] hover:bg-[var(--accent)] hover:text-white text-[var(--text-primary)] flex items-center justify-center transition-colors cursor-pointer text-xs"
                    aria-label="Close"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="overflow-y-auto p-4 sm:p-8 flex-1">
                <ContributionSkyline endDate="2026-11-08" />
              </div>
            </div>
          </div>
        )}

        {/* 3D Modal: Three.js Agentic Factory */}
        {openDemo === "agentic-factory" && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Three.js Agentic Factory Viewport"
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 select-none"
            onClick={() => setOpenDemo(null)}
          >
            <div
              className="relative w-full max-w-6xl h-[88vh] overflow-hidden rounded-[28px] bg-[#121417] border border-white/15 shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="px-6 py-3 border-b border-white/10 flex items-center justify-between bg-black/60 backdrop-blur-sm shrink-0 text-white">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-4 h-4 text-[var(--accent)]" />
                  <h3 className="text-sm font-bold font-telemetry">
                    Three.js Autonomous Agentic Factory 3D Pipeline
                  </h3>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setOpenDemo("skyline")}
                    className="text-xs font-telemetry text-[var(--accent)] hover:underline"
                  >
                    Switch to Skyline 3D →
                  </button>
                  <button
                    onClick={() => setOpenDemo(null)}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-[var(--accent)] text-white flex items-center justify-center transition-colors cursor-pointer text-xs"
                    aria-label="Close"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="relative flex-1 w-full h-full overflow-hidden">
                <AgenticFactory3D height="100%" onBack={() => setOpenDemo(null)} />
              </div>
            </div>
          </div>
        )}
      </div>
    </SmoothScrollProvider>
  );
}
