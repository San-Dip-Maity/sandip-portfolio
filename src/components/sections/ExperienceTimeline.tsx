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
      className="py-24 sm:py-32 relative bg-[#090a0f] border-t border-white/5"
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
            Engineering trajectory &{" "}
            <span className="section-serif-accent">proven deliveries.</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            A track record of reliable full-stack execution across distributed teams in the United Kingdom and India.
          </p>
        </div>

        {/* Timeline Container with Dynamic Spine */}
        <div className="relative max-w-4xl mx-auto">
          {/* Pale background spine line */}
          <div
            className="absolute left-4 sm:left-8 top-3 bottom-8 w-[2px] bg-white/10 -translate-x-1/2"
            aria-hidden="true"
          />

          {/* Glowing active spine drawing with scroll */}
          <div
            className="absolute left-4 sm:left-8 top-3 w-[2px] bg-gradient-to-b from-[#00e5ff] to-[#6366f1] -translate-x-1/2 transition-[height] duration-200 ease-out shadow-[0_0_8px_#00e5ff]"
            style={{ height: `${spineHeight}%` }}
            aria-hidden="true"
          />

          {/* Timeline Items */}
          <div className="space-y-12">
            {EXPERIENCES.map((item, idx) => {
              const isWork = item.type === "work";

              return (
                <div
                  key={item.id}
                  className="relative pl-12 sm:pl-20 group"
                >
                  {/* Timeline Node Dot */}
                  <div className="absolute left-4 sm:left-8 -translate-x-1/2 top-1.5 w-6 h-6 rounded-full bg-[#131620] border-2 border-[#00e5ff] flex items-center justify-center shadow-md shadow-[#00e5ff]/30 group-hover:scale-125 transition-transform">
                    {isWork ? (
                      <Briefcase className="w-2.5 h-2.5 text-[#00e5ff]" />
                    ) : (
                      <GraduationCap className="w-2.5 h-2.5 text-amber-400" />
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-8 rounded-3xl bg-[#131620] border border-white/10 group-hover:border-white/25 transition-all shadow-xl">
                    {/* Top Row: Period, Badge & Location */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2 font-telemetry text-xs text-[#00e5ff]">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{item.period}</span>
                      </div>
                      <span className="text-[10px] font-telemetry uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                        {item.badge}
                      </span>
                    </div>

                    {/* Role Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-[#00e5ff] transition-colors">
                      {item.role}
                    </h3>

                    {/* Company & Location */}
                    <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-300 mb-6">
                      <span className="font-semibold text-white flex items-center gap-1.5">
                        <Building2 className="w-4 h-4 text-slate-400" />
                        {item.company}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-slate-400 font-telemetry">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        {item.location}
                      </span>
                    </div>

                    {/* Highlights Bullet List */}
                    <div className="space-y-2.5 mb-6">
                      {item.highlights.map((point, pIdx) => (
                        <div
                          key={pIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed"
                        >
                          <CheckCircle className="w-4 h-4 text-[#00e5ff] shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2">
                      {item.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-xs font-telemetry text-slate-300"
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
