"use client";

import React, { useState } from "react";
import { SKILLS, SKILL_CATEGORIES, SkillItem } from "@/lib/data";
import { Sparkles, CheckCircle } from "lucide-react";

export function SkillsMatrix() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeSkill, setActiveSkill] = useState<SkillItem>(SKILLS[0]);

  const filteredSkills =
    selectedCategory === "All"
      ? SKILLS
      : SKILLS.filter((s) => s.category === selectedCategory);

  const getCategoryColor = (category: SkillItem["category"]) => {
    switch (category) {
      case "Frontend":
        return "text-[var(--accent-cyan)] border-[var(--accent-cyan)]/30 bg-[var(--accent-cyan)]/10";
      case "Backend":
        return "text-emerald-500 border-emerald-500/30 bg-emerald-500/10";
      case "Database":
        return "text-amber-500 border-amber-500/30 bg-amber-500/10";
      case "Cloud & DevOps":
        return "text-indigo-500 border-indigo-500/30 bg-indigo-500/10";
      case "Security & Auth":
        return "text-rose-500 border-rose-500/30 bg-rose-500/10";
      default:
        return "text-[var(--text-secondary)] border-[var(--border-subtle)] bg-[var(--bg-secondary)]";
    }
  };

  return (
    <section
      id="skills"
      className="py-24 sm:py-32 relative bg-[var(--bg-primary)] border-t border-[var(--border-subtle)] transition-colors duration-300"
      aria-label="Technical Skills Matrix"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="section-tag">
            <span>03</span>
            <span>—</span>
            <span>Skills &amp; Periodic Elements</span>
          </div>
          <h2 className="section-title mb-4">
            Periodic elements of modern{" "}
            <span className="section-serif-accent">system engineering.</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed">
            Click any elemental tile below to inspect practical production applications, architectural depth, and project deployments.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {SKILL_CATEGORIES.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-telemetry tracking-wide transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[var(--accent-cyan)] text-white dark:text-[#090a0f] font-bold shadow-md shadow-[var(--accent-cyan)]/20"
                    : "bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Matrix Grid & Inspector Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left 8 Cols: Periodic Tile Matrix */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-3">
            {filteredSkills.map((skill) => {
              const isInspected = activeSkill.atomicNumber === skill.atomicNumber;
              const colorClasses = getCategoryColor(skill.category);

              return (
                <div
                  key={skill.atomicNumber}
                  tabIndex={0}
                  role="button"
                  aria-pressed={isInspected}
                  onClick={() => setActiveSkill(skill)}
                  onFocus={() => setActiveSkill(skill)}
                  className={`p-4 rounded-2xl bg-[var(--bg-card)] border transition-all duration-300 cursor-pointer text-left flex flex-col justify-between h-36 ${
                    isInspected
                      ? "border-[var(--accent-cyan)] shadow-lg shadow-[var(--accent-cyan)]/15 bg-[var(--bg-elevated)] scale-[1.02]"
                      : "border-[var(--border-subtle)] hover:border-[var(--border-medium)] hover:bg-[var(--bg-card-hover)]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-telemetry text-[11px] font-semibold text-[var(--text-muted)]">
                      #{String(skill.atomicNumber).padStart(2, "0")}
                    </span>
                    <span
                      className={`text-[9px] font-telemetry uppercase tracking-wider px-2 py-0.5 rounded-full border ${colorClasses}`}
                    >
                      {skill.level}
                    </span>
                  </div>

                  <div>
                    <div className="font-telemetry font-extrabold text-2xl text-[var(--text-primary)] mb-0.5 group-hover:text-[var(--accent-cyan)] transition-colors">
                      {skill.symbol}
                    </div>
                    <div className="font-bold text-xs text-[var(--text-primary)] truncate">
                      {skill.name}
                    </div>
                  </div>

                  <div className="text-[10px] font-telemetry text-[var(--text-muted)] truncate">
                    {skill.category}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right 4 Cols: Live Inspector Panel */}
          <div className="lg:col-span-4 sticky top-24">
            <div className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] p-6 sm:p-7 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-[var(--border-subtle)]">
                <span className="text-[11px] font-telemetry uppercase tracking-wider text-[var(--accent-cyan)] flex items-center gap-1.5 font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Element Inspector</span>
                </span>
                <span className="text-xs font-telemetry text-[var(--text-muted)]">
                  #{String(activeSkill.atomicNumber).padStart(2, "0")}
                </span>
              </div>

              {/* Big Element Header */}
              <div className="flex items-center gap-4 mb-5">
                <div className="w-16 h-16 rounded-2xl bg-[var(--accent-cyan-glow)] border border-[var(--border-accent)] flex items-center justify-center font-telemetry font-extrabold text-2xl text-[var(--accent-cyan)]">
                  {activeSkill.symbol}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)]">
                    {activeSkill.name}
                  </h3>
                  <span className="inline-block text-xs font-telemetry text-[var(--text-secondary)]">
                    {activeSkill.category} • {activeSkill.level}
                  </span>
                </div>
              </div>

              {/* In-Depth Description */}
              <div className="mb-6">
                <span className="block text-[11px] font-telemetry uppercase tracking-wider text-[var(--text-muted)] mb-1.5">
                  Production Application:
                </span>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed bg-[var(--bg-secondary)] p-3.5 rounded-xl border border-[var(--border-subtle)]">
                  {activeSkill.description}
                </p>
              </div>

              {/* Deployed In Systems */}
              <div className="mb-6">
                <span className="block text-[11px] font-telemetry uppercase tracking-wider text-[var(--text-muted)] mb-1.5">
                  Key Projects Deployed:
                </span>
                <div className="p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] flex items-center gap-2 text-xs font-telemetry text-[var(--accent-cyan)]">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{activeSkill.highlightIn}</span>
                </div>
              </div>

              {/* Mastery Level Gauge */}
              <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-telemetry">
                <span className="text-[var(--text-muted)]">Experience:</span>
                <span className="text-emerald-500 font-bold">
                  {activeSkill.experience} Verified
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
