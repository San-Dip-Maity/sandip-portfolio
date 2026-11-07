"use client";

import React from "react";
import { PROFILE } from "@/lib/data";
import {
  ShieldCheck,
  Zap,
  Boxes,
  Server,
  Code2,
  Globe,
  GraduationCap,
  Sparkles,
} from "lucide-react";

export function About() {
  const pillars = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#00e5ff]" />,
      title: "Enterprise Multi-Tenancy & RBAC",
      description:
        "Architecting strict role-based access control hierarchies (Super Admin, HR Manager, Staff) with zero cross-tenant data leakage, Microsoft Entra ID (Azure AD) token federation, and complete audit logging.",
      tag: "Security & Governance",
    },
    {
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      title: "Real-Time Event Streams & WebSockets",
      description:
        "Building sub-40ms bidirectional sync pipelines with state machine reconciliation, heartbeat monitoring, exponential reconnection backoff, and concurrent multi-client presence.",
      tag: "Real-Time Systems",
    },
    {
      icon: <Boxes className="w-5 h-5 text-[#6366f1]" />,
      title: "Decoupled Microservices & Clean Architecture",
      description:
        "Structuring modular backend services in NestJS and Node.js that isolate domain entities, enforce contract boundaries, and maintain high throughput under burst traffic.",
      tag: "Scalable Architecture",
    },
    {
      icon: <Server className="w-5 h-5 text-emerald-400" />,
      title: "DevOps, Containerization & Linux",
      description:
        "Optimizing multi-stage Docker container builds, configuring high-performance Nginx reverse proxies, Linux server hardening, and executing automated zero-downtime CI/CD deployments.",
      tag: "DevOps & Infrastructure",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 sm:py-32 relative bg-[#090a0f] border-t border-white/5"
      aria-label="About Sandip Maity and Engineering Philosophy"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="section-tag">
            <span>01</span>
            <span>—</span>
            <span>Architectural Philosophy</span>
          </div>
          <h2 className="section-title mb-6">
            Building systems with mathematical rigor &{" "}
            <span className="section-serif-accent">production resilience.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Software engineering is more than writing code; it&apos;s about designing durable, maintainable ecosystems that can reliably scale under enterprise demands. Whether architecting human resource management platforms for UK enterprises or low-latency collaborative document canvases, I focus on clean boundaries, defensive security, and fluid user experiences.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-[#131620] border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-black/40 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {pillar.icon}
                  </div>
                  <span className="text-[11px] font-telemetry text-slate-400 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                    {pillar.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00e5ff] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-telemetry text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff]" />
                <span>Production Tested</span>
              </div>
            </div>
          ))}
        </div>

        {/* Key Verification Metrics Banner */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#131620] to-[#1a1e2c] border border-white/10">
          <div className="border-r border-white/5 pr-4 last:border-none">
            <span className="block font-telemetry text-3xl sm:text-4xl font-extrabold text-[#00e5ff] mb-1">
              2+ Years
            </span>
            <span className="text-xs sm:text-sm font-semibold text-white block">
              Remote Full-Stack Experience
            </span>
            <span className="text-xs text-slate-400 mt-1 block">
              UK & Indian Enterprise Teams
            </span>
          </div>

          <div className="border-r border-white/5 pr-4 last:border-none">
            <span className="block font-telemetry text-3xl sm:text-4xl font-extrabold text-white mb-1">
              B.Tech CSE
            </span>
            <span className="text-xs sm:text-sm font-semibold text-white block">
              Computer Science & Engineering
            </span>
            <span className="text-xs text-slate-400 mt-1 block">
              MAKAUT (2021 – 2025)
            </span>
          </div>

          <div className="border-r border-white/5 pr-4 last:border-none">
            <span className="block font-telemetry text-3xl sm:text-4xl font-extrabold text-emerald-400 mb-1">
              3
            </span>
            <span className="text-xs sm:text-sm font-semibold text-white block">
              Spoken Languages
            </span>
            <span className="text-xs text-slate-400 mt-1 block">
              English • Hindi • Bengali
            </span>
          </div>

          <div>
            <span className="block font-telemetry text-3xl sm:text-4xl font-extrabold text-[#6366f1] mb-1">
              100%
            </span>
            <span className="text-xs sm:text-sm font-semibold text-white block">
              Agile & Delivery Discipline
            </span>
            <span className="text-xs text-slate-400 mt-1 block">
              Code Reviews & Testing CI/CD
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
