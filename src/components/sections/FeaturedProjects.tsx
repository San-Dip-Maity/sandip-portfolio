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
} from "lucide-react";

export function FeaturedProjects() {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(PROJECTS[0].id);

  // SyncSpace Interactive Demo State
  const [collaborativeText, setCollaborativeText] = useState(
    "SyncSpace enables low-latency multi-user authoring with optimistic state conflict resolution..."
  );
  const [activeUsersCount] = useState(3);

  // PeopleOS Interactive RBAC Role Demo State
  const [currentRole, setCurrentRole] = useState<"admin" | "hr" | "staff">("admin");

  const currentProject = PROJECTS.find((p) => p.id === selectedProjectId) || PROJECTS[0];

  return (
    <section
      id="projects"
      className="py-24 sm:py-32 relative bg-[#090a0f] border-t border-white/5"
      aria-label="Selected Production Systems"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="section-tag">
              <span>02</span>
              <span>—</span>
              <span>Production Systems</span>
            </div>
            <h2 className="section-title">
              Selected engineering systems &{" "}
              <span className="section-serif-accent">flagship platforms.</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-sm">
            Deep-dive into real-world architectures, live interactive prototypes, and production metrics.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-10 pb-2 border-b border-white/10">
          {PROJECTS.map((proj) => {
            const isSelected = selectedProjectId === proj.id;
            return (
              <button
                key={proj.id}
                onClick={() => setSelectedProjectId(proj.id)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl font-telemetry text-xs tracking-wide transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#00e5ff]/15 text-[#00e5ff] font-bold border border-[#00e5ff]/40 shadow-sm"
                    : "bg-[#131620] text-slate-400 hover:text-white border border-white/5 hover:border-white/15"
                }`}
              >
                <span className="text-[10px] opacity-60">{proj.index}</span>
                <span>{proj.title}</span>
                {proj.featured && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Main Project Showcase Card */}
        <div className="rounded-3xl bg-[#131620] border border-white/10 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left 7 Columns: Architecture & Details */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10">
              <div>
                {/* Header Metadata */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 font-telemetry text-xs text-slate-300">
                    {currentProject.period}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/20 font-telemetry text-xs text-[#00e5ff]">
                    {currentProject.category}
                  </span>
                  <span className="text-xs font-telemetry text-slate-400">
                    Role: {currentProject.role}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                  {currentProject.title}
                </h3>
                <p className="text-sm font-telemetry text-[#00e5ff] mb-6">
                  // {currentProject.kicker}
                </p>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                  {currentProject.description}
                </p>

                {/* Architecture Highlights */}
                <div className="space-y-3 mb-8">
                  <h4 className="text-xs font-telemetry uppercase tracking-wider text-slate-400 flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 text-[#00e5ff]" />
                    <span>Architectural Highlights & Engineering Solutions</span>
                  </h4>
                  <div className="grid grid-cols-1 gap-2.5">
                    {currentProject.architectureHighlights.map((hl, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-200"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="grid grid-cols-3 gap-3 mb-8">
                  {currentProject.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-[#090a0f] border border-white/5"
                    >
                      <span className="block text-[10px] font-telemetry uppercase text-slate-400 mb-1">
                        {m.label}
                      </span>
                      <span className="block font-telemetry font-bold text-sm sm:text-base text-white">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Badges & Links */}
              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {currentProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-telemetry text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  {currentProject.githubUrl && (
                    <a
                      href={currentProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-telemetry text-white transition-all"
                    >
                      <Github className="w-4 h-4" />
                      <span>View Code</span>
                    </a>
                  )}
                  {currentProject.liveUrl && (
                    <a
                      href={currentProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#00e5ff]/15 hover:bg-[#00e5ff]/25 border border-[#00e5ff]/30 text-xs font-telemetry text-[#00e5ff] font-semibold transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo / Docs</span>
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Live Interactive Feature Simulator */}
            <div className="lg:col-span-5 p-6 sm:p-10 bg-[#0d0f17] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                  <span className="text-xs font-telemetry uppercase tracking-wider text-[#00e5ff] flex items-center gap-2">
                    <Activity className="w-4 h-4 animate-pulse" />
                    <span>Live Interactive Simulator</span>
                  </span>
                  <span className="text-[10px] font-telemetry text-slate-400">
                    Client Sandbox
                  </span>
                </div>

                {/* Specific Simulator for SyncSpace */}
                {currentProject.id === "syncspace" && (
                  <div className="space-y-4">
                    <div className="p-4 rounded-2xl bg-[#131620] border border-white/10">
                      <div className="flex items-center justify-between mb-3 text-xs font-telemetry">
                        <span className="flex items-center gap-2 text-slate-300">
                          <Radio className="w-3.5 h-3.5 text-emerald-400 animate-ping" />
                          <span>WebSocket Status: Connected</span>
                        </span>
                        <span className="text-emerald-400 font-bold">Latency: 28ms</span>
                      </div>

                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-[11px] font-telemetry text-slate-400">Active Peers:</span>
                        <div className="flex -space-x-1.5">
                          <span className="w-6 h-6 rounded-full bg-cyan-500 text-[10px] flex items-center justify-center font-bold text-black border border-black">
                            SM
                          </span>
                          <span className="w-6 h-6 rounded-full bg-violet-500 text-[10px] flex items-center justify-center font-bold text-white border border-black">
                            AL
                          </span>
                          <span className="w-6 h-6 rounded-full bg-emerald-500 text-[10px] flex items-center justify-center font-bold text-black border border-black">
                            RK
                          </span>
                        </div>
                        <span className="text-[10px] font-telemetry text-slate-400 ml-1">
                          (3 peers streaming)
                        </span>
                      </div>

                      <label className="block text-[11px] font-telemetry text-slate-400 mb-1">
                        Live Collaborative Editor:
                      </label>
                      <textarea
                        value={collaborativeText}
                        onChange={(e) => setCollaborativeText(e.target.value)}
                        rows={5}
                        className="w-full p-3 rounded-xl bg-[#090a0f] border border-white/10 text-xs font-telemetry text-white focus:outline-none focus:border-[#00e5ff] resize-none"
                      />
                      <span className="block text-[10px] font-telemetry text-slate-400 mt-1">
                        Try editing above — changes broadcast via WebSocket state machine.
                      </span>
                    </div>

                    <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-300">
                      <div className="font-semibold text-white mb-1 flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-[#00e5ff]" />
                        <span>Optimistic Sync Guarantee</span>
                      </div>
                      <p className="text-[11px] text-slate-400">
                        Local client mutations apply instantly. If the WebSocket server receives an overlapping operational delta, vector clocks reconcile order deterministically.
                      </p>
                    </div>
                  </div>
                )}

                {/* Specific Simulator for PeopleOS */}
                {currentProject.id === "peopleos" && (
                  <div className="space-y-4">
                    <div className="p-4 rounded-2xl bg-[#131620] border border-white/10">
                      <span className="block text-[11px] font-telemetry text-slate-400 mb-2">
                        Toggle Enterprise RBAC Tier:
                      </span>
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        <button
                          onClick={() => setCurrentRole("admin")}
                          className={`p-2 rounded-xl text-xs font-telemetry transition-all cursor-pointer ${
                            currentRole === "admin"
                              ? "bg-red-500/20 text-red-300 border border-red-500/40 font-bold"
                              : "bg-white/5 text-slate-400 border border-white/5"
                          }`}
                        >
                          Super Admin
                        </button>
                        <button
                          onClick={() => setCurrentRole("hr")}
                          className={`p-2 rounded-xl text-xs font-telemetry transition-all cursor-pointer ${
                            currentRole === "hr"
                              ? "bg-[#00e5ff]/20 text-[#00e5ff] border border-[#00e5ff]/40 font-bold"
                              : "bg-white/5 text-slate-400 border border-white/5"
                          }`}
                        >
                          HR Manager
                        </button>
                        <button
                          onClick={() => setCurrentRole("staff")}
                          className={`p-2 rounded-xl text-xs font-telemetry transition-all cursor-pointer ${
                            currentRole === "staff"
                              ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold"
                              : "bg-white/5 text-slate-400 border border-white/5"
                          }`}
                        >
                          Employee
                        </button>
                      </div>

                      {/* Dynamic Permissions Matrix display based on role */}
                      <div className="space-y-2 text-xs font-telemetry">
                        <div className="flex items-center justify-between p-2 rounded-lg bg-[#090a0f]">
                          <span className="text-slate-300">View Payroll & Salary:</span>
                          <span
                            className={
                              currentRole === "staff"
                                ? "text-amber-400"
                                : "text-emerald-400 font-bold"
                            }
                          >
                            {currentRole === "staff" ? "Self Only" : "All Employees"}
                          </span>
                        </div>
                        <div className="flex items-center justify-between p-2 rounded-lg bg-[#090a0f]">
                          <span className="text-slate-300">Edit Company RBAC Policies:</span>
                          <span
                            className={
                              currentRole === "admin"
                                ? "text-emerald-400 font-bold"
                                : "text-red-400"
                            }
                          >
                            {currentRole === "admin" ? "Authorized" : "Forbidden (403)"}
                          </span>
                        </div>
                        <div className="flex items-center justify-between p-2 rounded-lg bg-[#090a0f]">
                          <span className="text-slate-300">Leave Approval Engine:</span>
                          <span
                            className={
                              currentRole === "staff" ? "text-slate-400" : "text-emerald-400 font-bold"
                            }
                          >
                            {currentRole === "staff" ? "Request Only" : "Full Approval Rights"}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-300">
                      <div className="font-semibold text-white mb-1 flex items-center gap-1.5">
                        <Lock className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Tenant & Role Isolation</span>
                      </div>
                      <p className="text-[11px] text-slate-400">
                        Prisma client middleware injects tenant and role guards on every MongoDB query, preventing privilege escalations at the persistence layer.
                      </p>
                    </div>
                  </div>
                )}

                {/* Specific Simulator for Tedekstra ERP & Tangent */}
                {currentProject.id !== "syncspace" && currentProject.id !== "peopleos" && (
                  <div className="space-y-4">
                    <div className="p-5 rounded-2xl bg-[#131620] border border-white/10">
                      <span className="block text-[11px] font-telemetry text-slate-400 mb-3">
                        Microservices Topology:
                      </span>
                      <div className="space-y-2.5 font-telemetry text-xs">
                        <div className="p-2.5 rounded-lg bg-[#090a0f] border border-white/5 flex items-center justify-between">
                          <span className="text-slate-300">Client Gateway:</span>
                          <span className="text-[#00e5ff]">Next.js 15 (Edge SSR)</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-[#090a0f] border border-white/5 flex items-center justify-between">
                          <span className="text-slate-300">Reverse Proxy & SSL:</span>
                          <span className="text-emerald-400">Nginx Ingress</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-[#090a0f] border border-white/5 flex items-center justify-between">
                          <span className="text-slate-300">Services Container:</span>
                          <span className="text-purple-400">NestJS / Node.js Microservices</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-[#090a0f] border border-white/5 flex items-center justify-between">
                          <span className="text-slate-300">Data Persistence:</span>
                          <span className="text-amber-400">MongoDB Replica Set</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-300">
                      <div className="font-semibold text-white mb-1 flex items-center gap-1.5">
                        <Database className="w-3.5 h-3.5 text-[#00e5ff]" />
                        <span>High Availability & Zero Downtime</span>
                      </div>
                      <p className="text-[11px] text-slate-400">
                        Dockerized deployments orchestrated through automated CI/CD runners ensure consistent test coverage and seamless rolling container restarts.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Sandbox Status */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-telemetry text-slate-400">
                <span>Architecture Verified</span>
                <span className="text-[#00e5ff]">Ready for Audit</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
