"use client";

import React, { useRef, useState, useEffect } from "react";
import { EXPERIENCES } from "@/lib/data";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  CheckCircle,
  Building2,
} from "lucide-react";

export function ExperienceTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const [spineHeight, setSpineHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const start = rect.top - windowHeight * 0.7;
      const end = rect.height;
      const current = -start;
      const progress = Math.min(1, Math.max(0, current / end));

      setSpineHeight(progress * 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-24 sm:py-32 relative bg-[var(--bg-primary)] border-t border-[var(--border-subtle)] transition-colors duration-300"
      aria-label="Engineering Experience & Education Timeline"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="section-tag">
            <span>04</span>
            <span>—</span>
            <span>Chronological Journey</span>
          </div>
          <h2 className="section-title mb-4">
            Engineering trajectory &amp;{" "}
            <span className="section-serif-accent">proven deliveries.</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed">
            A track record of reliable full-stack execution across distributed teams in the United Kingdom and India.
          </p>
        </div>

        {/* Timeline Container with Dynamic Spine */}
        <div className="relative max-w-4xl mx-auto">
          {/* Pale background spine line */}
          <div
            className="absolute left-4 sm:left-8 top-3 bottom-8 w-[2px] bg-[var(--border-subtle)] -translate-x-1/2"
            aria-hidden="true"
          />

          {/* Glowing active spine drawing with scroll */}
          <div
            className="absolute left-4 sm:left-8 top-3 w-[2px] bg-gradient-to-b from-[var(--accent-cyan)] to-[var(--accent-secondary)] -translate-x-1/2 transition-[height] duration-200 ease-out shadow-[0_0_8px_var(--accent-cyan)]"
            style={{ height: `${spineHeight}%` }}
            aria-hidden="true"
          />

          {/* Timeline Items */}
          <div className="space-y-12">
            {EXPERIENCES.map((item) => {
              const isWork = item.type === "work";

              return (
                <div
                  key={item.id}
                  className="relative pl-12 sm:pl-20 group"
                >
                  {/* Timeline Node Dot */}
                  <div className="absolute left-4 sm:left-8 -translate-x-1/2 top-1.5 w-6 h-6 rounded-full bg-[var(--bg-card)] border-2 border-[var(--accent-cyan)] flex items-center justify-center shadow-md shadow-[var(--accent-cyan)]/30 group-hover:scale-125 transition-transform">
                    {isWork ? (
                      <Briefcase className="w-2.5 h-2.5 text-[var(--accent-cyan)]" />
                    ) : (
                      <GraduationCap className="w-2.5 h-2.5 text-amber-500" />
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] group-hover:border-[var(--border-medium)] transition-all shadow-xl">
                    {/* Top Row: Period, Badge & Location */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2 font-telemetry text-xs text-[var(--accent-cyan)] font-bold">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{item.period}</span>
                      </div>
                      <span className="text-[10px] font-telemetry uppercase tracking-wider px-2.5 py-1 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-secondary)] font-semibold">
                        {item.badge}
                      </span>
                    </div>

                    {/* Role Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-1 group-hover:text-[var(--accent-cyan)] transition-colors">
                      {item.role}
                    </h3>

                    {/* Company & Location */}
                    <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[var(--text-secondary)] mb-6">
                      <span className="font-semibold text-[var(--text-primary)] flex items-center gap-1.5">
                        <Building2 className="w-4 h-4 text-[var(--text-muted)]" />
                        {item.company}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-[var(--text-muted)] font-telemetry">
                        <MapPin className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                        {item.location}
                      </span>
                    </div>

                    {/* Highlights Bullet List */}
                    <div className="space-y-2.5 mb-6">
                      {item.highlights.map((point, pIdx) => (
                        <div
                          key={pIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed"
                        >
                          <CheckCircle className="w-4 h-4 text-[var(--accent-cyan)] shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-wrap gap-2">
                      {item.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-xs font-telemetry text-[var(--text-secondary)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
