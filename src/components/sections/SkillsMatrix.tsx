"use client";

import React, { useState } from "react";
import { SKILLS, SKILL_CATEGORIES, SkillItem } from "@/lib/data";
import {
  Code,
  Layers,
  Sparkles,
  CheckCircle,
  ExternalLink,
  Cpu,
} from "lucide-react";

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
        return "text-[#00e5ff] border-[#00e5ff]/30 bg-[#00e5ff]/10";
      case "Backend":
        return "text-emerald-400 border-emerald-400/30 bg-emerald-400/10";
      case "Database":
        return "text-amber-400 border-amber-400/30 bg-amber-400/10";
      case "Cloud & DevOps":
        return "text-violet-400 border-violet-400/30 bg-violet-400/10";
      case "Security & Auth":
        return "text-rose-400 border-rose-400/30 bg-rose-400/10";
      default:
        return "text-slate-300 border-white/10 bg-white/5";
    }
  };

  return (
    <section
      id="skills"
      className="py-24 sm:py-32 relative bg-[#090a0f] border-t border-white/5"
      aria-label="Technical Skills Matrix"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="section-tag">
            <span>03</span>
            <span>—</span>
            <span>Skills & Periodic Elements</span>
          </div>
          <h2 className="section-title mb-4">
            Periodic elements of modern{" "}
            <span className="section-serif-accent">system engineering.</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
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
                    ? "bg-[#00e5ff] text-[#090a0f] font-bold shadow-md shadow-[#00e5ff]/20"
                    : "bg-[#131620] text-slate-400 hover:text-white border border-white/10"
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
                  className={`p-4 rounded-2xl bg-[#131620] border transition-all duration-300 cursor-pointer text-left flex flex-col justify-between h-36 ${
                    isInspected
                      ? "border-[#00e5ff] shadow-lg shadow-[#00e5ff]/15 bg-[#1a1e2c] scale-[1.02]"
                      : "border-white/10 hover:border-white/25 hover:bg-[#161a25]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-telemetry text-[11px] font-semibold text-slate-500">
                      #{String(skill.atomicNumber).padStart(2, "0")}
                    </span>
                    <span
                      className={`text-[9px] font-telemetry uppercase tracking-wider px-2 py-0.5 rounded-full border ${colorClasses}`}
                    >
                      {skill.level}
                    </span>
                  </div>

                  <div>
                    <div className="font-telemetry font-extrabold text-2xl text-white mb-0.5 group-hover:text-[#00e5ff] transition-colors">
                      {skill.symbol}
                    </div>
                    <div className="font-bold text-xs text-slate-200 truncate">
                      {skill.name}
                    </div>
                  </div>

                  <div className="text-[10px] font-telemetry text-slate-400 truncate">
                    {skill.category}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right 4 Cols: Live Inspector Panel */}
          <div className="lg:col-span-4 sticky top-24">
            <div className="rounded-3xl bg-[#131620] border border-white/15 p-6 sm:p-7 shadow-2xl relative overflow-hidden">
              {/* Background ambient glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00e5ff]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                <span className="text-[11px] font-telemetry uppercase tracking-wider text-[#00e5ff] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Element Inspector</span>
                </span>
                <span className="text-xs font-telemetry text-slate-400">
                  #{String(activeSkill.atomicNumber).padStart(2, "0")}
                </span>
              </div>

              {/* Big Element Header */}
              <div className="flex items-center gap-4 mb-5">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00e5ff]/20 to-[#6366f1]/20 border border-[#00e5ff]/40 flex items-center justify-center font-telemetry font-extrabold text-2xl text-[#00e5ff]">
                  {activeSkill.symbol}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {activeSkill.name}
                  </h3>
                  <span className="inline-block text-xs font-telemetry text-slate-300">
                    {activeSkill.category} • {activeSkill.level}
                  </span>
                </div>
              </div>

              {/* In-Depth Description */}
              <div className="mb-6">
                <span className="block text-[11px] font-telemetry uppercase tracking-wider text-slate-400 mb-1.5">
                  Production Application:
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-[#090a0f] p-3.5 rounded-xl border border-white/5">
                  {activeSkill.description}
                </p>
              </div>

              {/* Deployed In Systems */}
              <div className="mb-6">
                <span className="block text-[11px] font-telemetry uppercase tracking-wider text-slate-400 mb-1.5">
                  Key Projects Deployed:
                </span>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2 text-xs font-telemetry text-[#00e5ff]">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{activeSkill.highlightIn}</span>
                </div>
              </div>

              {/* Mastery Level Gauge */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-telemetry">
                <span className="text-slate-400">Production Experience:</span>
                <span className="text-emerald-400 font-bold">
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
