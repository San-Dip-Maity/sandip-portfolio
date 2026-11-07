"use client";

import React, { useState } from "react";
import { PROJECTS, ProjectItem } from "@/lib/data";
import {
  ExternalLink,
  Github,
  CheckCircle2,
  Users,
  Shield,
  Layers,
  Activity,
  ArrowRight,
  Database,
  Radio,
  Lock,
  Plus,
} from "lucide-react";

export function FeaturedProjects() {
  const [activeProjectId, setActiveProjectId] = useState<string>(PROJECTS[0].id);

  // SyncSpace Interactive Demo State
  const [collaborativeText, setCollaborativeText] = useState(
    "SyncSpace enables low-latency multi-user authoring with optimistic state conflict resolution..."
  );

  // PeopleOS Interactive RBAC Role Demo State
  const [currentRole, setCurrentRole] = useState<"admin" | "hr" | "staff">("admin");

  return (
    <section
      id="projects"
      className="py-24 sm:py-32 relative bg-[var(--bg-primary)] border-t border-[var(--border-subtle)] transition-colors duration-300"
      aria-label="Selected Production Systems"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="section-tag">
              <span>02</span>
              <span>—</span>
              <span>Production Systems</span>
            </div>
            <h2 className="section-title">
              Selected engineering work &amp;{" "}
              <span className="section-serif-accent">flagship systems.</span>
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] text-sm max-w-sm font-telemetry">
            Expand any system below to inspect architectural topology and test live interactive sandboxes.
          </p>
        </div>

        {/* Desktop Side-by-Side Folding Gallery (From portfolio-1) */}
        <div className="hidden lg:flex gap-3.5 h-[640px] min-h-[640px] w-full select-none">
          {PROJECTS.map((project) => {
            const isOpen = activeProjectId === project.id;

            return (
              <div
                key={project.id}
                tabIndex={0}
                role="button"
                aria-expanded={isOpen}
                aria-label={`Project: ${project.title}`}
                onClick={() => setActiveProjectId(project.id)}
                onFocus={() => setActiveProjectId(project.id)}
                className={`relative rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-card)] overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer select-none ${
                  isOpen
                    ? "flex-[8] shadow-2xl border-[var(--border-accent)]"
                    : "flex-[1] min-w-[54px] hover:bg-[var(--bg-elevated)]"
                }`}
              >
                {/* Folded Spine View (When closed) */}
                {!isOpen && (
                  <div className="h-full w-full py-8 px-2 flex flex-col justify-between items-center text-center">
                    <span className="font-telemetry text-xs font-semibold text-[var(--text-muted)]">
                      {project.index}
                    </span>
                    <div className="[writing-mode:vertical-rl] rotate-180 font-bold text-sm tracking-tight text-[var(--text-primary)] whitespace-nowrap overflow-hidden text-ellipsis max-h-[400px]">
                      {project.title}
                    </div>
                    <div className="w-8 h-8 rounded-full border border-[var(--border-subtle)] flex items-center justify-center font-telemetry text-xs text-[var(--accent-cyan)] group-hover:rotate-90 transition-transform">
                      <Plus className="w-4 h-4" />
                    </div>
                  </div>
                )}

                {/* Expanded Panel View (When open) */}
                {isOpen && (
                  <div className="h-full w-full p-8 grid grid-cols-12 gap-8 items-stretch overflow-hidden">
                    {/* Left 7 Columns: Metadata, Architecture & Tech Chips */}
                    <div className="col-span-7 flex flex-col justify-between overflow-hidden h-full pr-2">
                      <div className="overflow-y-auto pr-1">
                        {/* Kicker + Index */}
                        <div className="flex items-center gap-3 font-telemetry text-xs text-[var(--text-secondary)] uppercase tracking-wider mb-2">
                          <span className="text-[var(--accent-cyan)] font-bold">{project.index}</span>
                          <span>—</span>
                          <span>{project.kicker}</span>
                          <span>•</span>
                          <span>{project.period}</span>
                        </div>

                        {/* Title */}
                        <h3 className="text-3xl font-extrabold tracking-tight text-[var(--text-primary)] mb-2 leading-tight">
                          {project.title}
                        </h3>

                        {/* Summary */}
                        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                          {project.description}
                        </p>

                        {/* Architecture Highlights */}
                        <div className="space-y-2 mb-6">
                          <span className="text-[11px] font-telemetry uppercase tracking-wider text-[var(--accent-cyan)] font-semibold flex items-center gap-1.5">
                            <Layers className="w-3.5 h-3.5" />
                            <span>Architecture Highlights</span>
                          </span>
                          <div className="space-y-1.5">
                            {project.architectureHighlights.map((hl, i) => (
                              <div
                                key={i}
                                className="flex items-start gap-2 p-2.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)]"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                                <span>{hl}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Metrics */}
                        <div className="grid grid-cols-3 gap-2.5 mb-6">
                          {project.metrics.map((m, idx) => (
                            <div
                              key={idx}
                              className="p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)]"
                            >
                              <span className="block text-[10px] font-telemetry uppercase text-[var(--text-muted)] mb-0.5">
                                {m.label}
                              </span>
                              <span className="block font-telemetry font-bold text-xs text-[var(--text-primary)]">
                                {m.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Tech Stack & Action Links */}
                      <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
                        <div className="flex flex-wrap gap-1.5">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 rounded-md bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[11px] font-telemetry text-[var(--text-secondary)]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-2">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs font-telemetry text-[var(--text-primary)] hover:border-[var(--accent-cyan)] transition-all"
                            >
                              <Github className="w-3.5 h-3.5" />
                              <span>Code</span>
                            </a>
                          )}
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--accent-cyan)]/15 border border-[var(--accent-cyan)]/30 text-xs font-telemetry text-[var(--accent-cyan)] font-bold hover:brightness-125 transition-all"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                              <span>Live</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Right 5 Columns: Live Interactive Simulator */}
                    <div className="col-span-5 p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] flex flex-col justify-between overflow-hidden">
                      <div>
                        <div className="flex items-center justify-between pb-3 mb-4 border-b border-[var(--border-subtle)]">
                          <span className="text-xs font-telemetry uppercase tracking-wider text-[var(--accent-cyan)] flex items-center gap-1.5 font-bold">
                            <Activity className="w-3.5 h-3.5 animate-pulse" />
                            <span>Client Sandbox</span>
                          </span>
                          <span className="text-[10px] font-telemetry text-[var(--text-muted)]">
                            Interactive Prototype
                          </span>
                        </div>

                        {/* SyncSpace Simulator */}
                        {project.id === "syncspace" && (
                          <div className="space-y-3">
                            <div className="p-3.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-xs font-telemetry">
                              <div className="flex items-center justify-between mb-2">
                                <span className="flex items-center gap-1.5 text-emerald-500 font-semibold">
                                  <Radio className="w-3.5 h-3.5 animate-ping" />
                                  <span>WS: Connected</span>
                                </span>
                                <span className="text-[var(--accent-cyan)] font-bold">28ms Latency</span>
                              </div>

                              <div className="flex items-center gap-2 mb-2 text-[11px] text-[var(--text-secondary)]">
                                <span>Active Peers:</span>
                                <div className="flex -space-x-1">
                                  <span className="w-5 h-5 rounded-full bg-cyan-500 text-[9px] flex items-center justify-center font-bold text-black">SM</span>
                                  <span className="w-5 h-5 rounded-full bg-indigo-500 text-[9px] flex items-center justify-center font-bold text-white">UK</span>
                                  <span className="w-5 h-5 rounded-full bg-emerald-500 text-[9px] flex items-center justify-center font-bold text-black">IN</span>
                                </div>
                              </div>

                              <textarea
                                value={collaborativeText}
                                onChange={(e) => setCollaborativeText(e.target.value)}
                                rows={4}
                                className="w-full p-2.5 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-xs font-telemetry text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-cyan)] resize-none"
                              />
                              <span className="block text-[10px] text-[var(--text-muted)] mt-1">
                                Edits broadcast with conflict-free operational transforms.
                              </span>
                            </div>
                          </div>
                        )}

                        {/* PeopleOS Simulator */}
                        {project.id === "peopleos" && (
                          <div className="space-y-3">
                            <div className="p-3.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)]">
                              <span className="block text-[11px] font-telemetry text-[var(--text-secondary)] mb-2">
                                Switch Enterprise RBAC Tier:
                              </span>
                              <div className="grid grid-cols-3 gap-1.5 mb-3">
                                <button
                                  onClick={() => setCurrentRole("admin")}
                                  className={`p-1.5 rounded-lg text-xs font-telemetry transition-all cursor-pointer ${
                                    currentRole === "admin"
                                      ? "bg-red-500/20 text-red-500 border border-red-500/40 font-bold"
                                      : "bg-[var(--bg-secondary)] text-[var(--text-muted)] border border-[var(--border-subtle)]"
                                  }`}
                                >
                                  Admin
                                </button>
                                <button
                                  onClick={() => setCurrentRole("hr")}
                                  className={`p-1.5 rounded-lg text-xs font-telemetry transition-all cursor-pointer ${
                                    currentRole === "hr"
                                      ? "bg-[var(--accent-cyan)]/20 text-[var(--accent-cyan)] border border-[var(--accent-cyan)]/40 font-bold"
                                      : "bg-[var(--bg-secondary)] text-[var(--text-muted)] border border-[var(--border-subtle)]"
                                  }`}
                                >
                                  HR Mgr
                                </button>
                                <button
                                  onClick={() => setCurrentRole("staff")}
                                  className={`p-1.5 rounded-lg text-xs font-telemetry transition-all cursor-pointer ${
                                    currentRole === "staff"
                                      ? "bg-emerald-500/20 text-emerald-500 border border-emerald-500/40 font-bold"
                                      : "bg-[var(--bg-secondary)] text-[var(--text-muted)] border border-[var(--border-subtle)]"
                                  }`}
                                >
                                  Staff
                                </button>
                              </div>

                              <div className="space-y-1.5 text-xs font-telemetry">
                                <div className="flex items-center justify-between p-2 rounded bg-[var(--bg-primary)]">
                                  <span className="text-[var(--text-secondary)]">Payroll Access:</span>
                                  <span className={currentRole === "staff" ? "text-amber-500" : "text-emerald-500 font-bold"}>
                                    {currentRole === "staff" ? "Self Only" : "All Employees"}
                                  </span>
                                </div>
                                <div className="flex items-center justify-between p-2 rounded bg-[var(--bg-primary)]">
                                  <span className="text-[var(--text-secondary)]">RBAC Policy Edit:</span>
                                  <span className={currentRole === "admin" ? "text-emerald-500 font-bold" : "text-red-500"}>
                                    {currentRole === "admin" ? "Granted" : "Denied (403)"}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Tedekstra & Tangent Topology */}
                        {project.id !== "syncspace" && project.id !== "peopleos" && (
                          <div className="space-y-2 font-telemetry text-xs">
                            <div className="p-2.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border-subtle)] flex items-center justify-between">
                              <span className="text-[var(--text-secondary)]">Edge Gateway:</span>
                              <span className="text-[var(--accent-cyan)]">Next.js 15 SSR</span>
                            </div>
                            <div className="p-2.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border-subtle)] flex items-center justify-between">
                              <span className="text-[var(--text-secondary)]">Reverse Proxy:</span>
                              <span className="text-emerald-500">Nginx + SSL</span>
                            </div>
                            <div className="p-2.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border-subtle)] flex items-center justify-between">
                              <span className="text-[var(--text-secondary)]">Service Layer:</span>
                              <span className="text-purple-500">NestJS Container</span>
                            </div>
                            <div className="p-2.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border-subtle)] flex items-center justify-between">
                              <span className="text-[var(--text-secondary)]">Cluster DB:</span>
                              <span className="text-amber-500">MongoDB Replica</span>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-[11px] font-telemetry text-[var(--text-muted)]">
                        <span>Architecture Verified</span>
                        <span className="text-[var(--accent-cyan)] font-semibold">100% Production Grade</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile Accordion Stack (For small screens) */}
        <div className="lg:hidden space-y-4">
          {PROJECTS.map((proj) => {
            const isOpen = activeProjectId === proj.id;
            return (
              <div
                key={proj.id}
                className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] overflow-hidden"
              >
                <button
                  onClick={() => setActiveProjectId(proj.id)}
                  className="w-full p-5 flex items-center justify-between text-left cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-telemetry text-xs text-[var(--accent-cyan)] font-bold">{proj.index}</span>
                    <span className="font-bold text-base text-[var(--text-primary)]">{proj.title}</span>
                  </div>
                  <span className="text-xs font-telemetry text-[var(--text-muted)]">{proj.period}</span>
                </button>

                {isOpen && (
                  <div className="p-5 pt-0 border-t border-[var(--border-subtle)] space-y-4">
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed mt-4">
                      {proj.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {proj.techStack.map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded bg-[var(--bg-secondary)] text-[10px] font-telemetry text-[var(--text-secondary)]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
