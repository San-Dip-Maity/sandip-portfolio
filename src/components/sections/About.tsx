"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
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
  RotateCw,
  Award,
} from "lucide-react";

export function About() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [swingAngle, setSwingAngle] = useState(0);
  const animationFrameRef = useRef<number | null>(null);

  // Physics state for pendulum spring swing
  const targetAngleRef = useRef(0);
  const currentAngleRef = useRef(0);
  const velocityRef = useRef(0);
  const lastMouseXRef = useRef<number | null>(null);
  const idleTimeRef = useRef(0);

  useEffect(() => {
    let lastTime = performance.now();

    const loop = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      const springK = 25; // stiffness
      const damping = 4.5; // resistance
      const displacement = currentAngleRef.current - targetAngleRef.current;
      const springForce = -springK * displacement;
      const dampingForce = -damping * velocityRef.current;
      const acceleration = springForce + dampingForce;

      velocityRef.current += acceleration * dt;
      currentAngleRef.current += velocityRef.current * dt;

      idleTimeRef.current += dt;
      const idleSway = Math.sin(idleTimeRef.current * 1.4) * 0.9;

      setSwingAngle(currentAngleRef.current + idleSway);
      targetAngleRef.current *= 0.95;

      animationFrameRef.current = requestAnimationFrame(loop);
    };

    animationFrameRef.current = requestAnimationFrame(loop);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (lastMouseXRef.current !== null) {
      const deltaX = e.clientX - lastMouseXRef.current;
      targetAngleRef.current = Math.max(-12, Math.min(12, targetAngleRef.current + deltaX * 0.1));
    }
    lastMouseXRef.current = e.clientX;
  };

  const handleMouseLeave = () => {
    lastMouseXRef.current = null;
    targetAngleRef.current = 0;
  };

  const pillars = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-[var(--accent-cyan)]" />,
      title: "Enterprise Multi-Tenancy & RBAC",
      description:
        "Architecting strict role-based access control hierarchies (Super Admin, HR Manager, Staff) with zero cross-tenant leakage, Microsoft Entra ID (Azure AD) token federation, and complete audit logging.",
      tag: "Security & Governance",
    },
    {
      icon: <Zap className="w-5 h-5 text-amber-500" />,
      title: "Real-Time Event Streams & WebSockets",
      description:
        "Building sub-40ms bidirectional sync pipelines with state machine reconciliation, heartbeat monitoring, exponential reconnection backoff, and concurrent multi-client presence.",
      tag: "Real-Time Systems",
    },
    {
      icon: <Boxes className="w-5 h-5 text-[var(--accent-secondary)]" />,
      title: "Decoupled Microservices & Clean Architecture",
      description:
        "Structuring modular backend services in NestJS and Node.js that isolate domain entities, enforce contract boundaries, and maintain high throughput under burst traffic.",
      tag: "Scalable Architecture",
    },
    {
      icon: <Server className="w-5 h-5 text-emerald-500" />,
      title: "DevOps, Containerization & Linux",
      description:
        "Optimizing multi-stage Docker container builds, configuring high-performance Nginx reverse proxies, Linux server hardening, and executing automated zero-downtime CI/CD deployments.",
      tag: "DevOps & Infrastructure",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 sm:py-32 relative bg-[var(--bg-primary)] border-t border-[var(--border-subtle)] transition-colors duration-300"
      aria-label="About Sandip Maity and Engineering Philosophy"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid: Philosophy on Left + Physics ID Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left 7 Columns: Architectural Philosophy */}
          <div className="lg:col-span-7">
            <div className="section-tag">
              <span>01</span>
              <span>—</span>
              <span>Architectural Philosophy</span>
            </div>
            <h2 className="section-title mb-6">
              Building systems with mathematical rigor &amp;{" "}
              <span className="section-serif-accent">production resilience.</span>
            </h2>
            <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed mb-6">
              Software engineering is about designing durable, maintainable ecosystems that can reliably scale under enterprise demands. Whether architecting ERP systems for UK enterprises at <strong className="text-[var(--text-primary)]">Tedekstra Limited</strong> or low-latency collaborative document canvases, I focus on clean boundaries, defensive security, and fluid user experiences.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]">
                <span className="block text-[10px] font-telemetry uppercase text-[var(--text-muted)] mb-1">
                  CURRENT ROLE
                </span>
                <span className="font-bold text-xs sm:text-sm text-[var(--text-primary)] block">
                  Software Engineer (Remote)
                </span>
                <span className="text-xs text-[var(--accent-cyan)] font-telemetry mt-0.5 block">
                  Tedekstra Limited (UK)
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]">
                <span className="block text-[10px] font-telemetry uppercase text-[var(--text-muted)] mb-1">
                  CORE SPECIALIZATION
                </span>
                <span className="font-bold text-xs sm:text-sm text-[var(--text-primary)] block">
                  Full Stack &amp; Microservices
                </span>
                <span className="text-xs text-emerald-500 font-telemetry mt-0.5 block">
                  Next.js • NestJS • MongoDB
                </span>
              </div>
            </div>
          </div>

          {/* Right 5 Columns: Physics Spring Pendulum ID Lanyard Card (From portfolio-1) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative select-none">
            {/* Lanyard Top Strap & Metallic Clip */}
            <div className="flex flex-col items-center">
              <div className="w-4 h-12 bg-gradient-to-b from-[var(--border-medium)] to-[var(--text-muted)] rounded-t-sm shadow-inner" />
              <div className="w-8 h-4 bg-gradient-to-r from-slate-400 via-slate-200 to-slate-400 rounded-sm shadow-md border border-black/20 -mt-1 flex items-center justify-center">
                <div className="w-3 h-1.5 bg-black/40 rounded-full" />
              </div>
            </div>

            {/* Pendulum Swing Rotating Card with 3D Flip */}
            <div
              style={{
                transform: `rotate(${swingAngle}deg)`,
                transformOrigin: "top center",
                transition: "transform 0.05s ease-out",
              }}
              className="relative cursor-pointer group"
              onClick={() => setIsFlipped(!isFlipped)}
              title="Click to flip engineer credential badge"
            >
              <div
                className={`w-[290px] sm:w-[320px] rounded-3xl bg-[var(--bg-card)] border-2 border-[var(--border-medium)] p-6 shadow-2xl transition-transform duration-500 [transform-style:preserve-3d] ${
                  isFlipped ? "[transform:rotateY(180deg)]" : ""
                }`}
              >
                {/* Front of ID Badge */}
                <div className="[backface-visibility:hidden]">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-[var(--border-subtle)]">
                    <span className="font-telemetry text-[11px] font-bold text-[var(--accent-cyan)] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>OFFICIAL CREDENTIAL</span>
                    </span>
                    <span className="text-[10px] font-telemetry px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-500 font-bold">
                      ACTIVE
                    </span>
                  </div>

                  {/* Photo & Identity */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-secondary)] shrink-0">
                      <Image
                        src={PROFILE.avatarUrl}
                        alt={PROFILE.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-base text-[var(--text-primary)]">
                        {PROFILE.name}
                      </h4>
                      <p className="text-xs font-telemetry text-[var(--text-secondary)]">
                        {PROFILE.role}
                      </p>
                      <p className="text-[10px] font-telemetry text-[var(--accent-cyan)]">
                        Tedekstra Ltd (UK)
                      </p>
                    </div>
                  </div>

                  {/* Metadata fields */}
                  <div className="space-y-1.5 text-[11px] font-telemetry bg-[var(--bg-secondary)] p-3 rounded-xl border border-[var(--border-subtle)] mb-4">
                    <div className="flex justify-between">
                      <span className="text-[var(--text-muted)]">ID Number:</span>
                      <span className="text-[var(--text-primary)] font-bold">SM-7908-DEV</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--text-muted)]">Education:</span>
                      <span className="text-[var(--text-primary)]">B.Tech CSE (MAKAUT)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--text-muted)]">Location:</span>
                      <span className="text-[var(--text-primary)]">West Bengal, IN</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[10px] font-telemetry text-[var(--text-muted)]">
                    <span>* Physics swing active</span>
                    <span className="text-[var(--accent-cyan)] flex items-center gap-1">
                      <RotateCw className="w-3 h-3" /> Click to flip
                    </span>
                  </div>
                </div>

                {/* Back of ID Badge */}
                <div className="absolute inset-0 p-6 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-[var(--border-subtle)]">
                      <span className="font-telemetry text-[11px] font-bold text-[var(--text-primary)]">
                        SYSTEM AUTHORIZATION
                      </span>
                      <Award className="w-4 h-4 text-[var(--accent-cyan)]" />
                    </div>

                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4">
                      Holder is cleared for full-stack architecture, production ERP/HRMS microservice deployments, and secure multi-tenant database operations.
                    </p>

                    <div className="space-y-1 text-[11px] font-telemetry text-[var(--text-muted)]">
                      <div>LANGUAGES: English • Hindi • Bengali</div>
                      <div>SECURITY: Microsoft Entra ID • RBAC • JWT</div>
                      <div>INFRA: Docker • Nginx • Linux</div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[var(--border-subtle)] text-[10px] font-telemetry text-[var(--accent-cyan)] text-center">
                    Click anywhere to flip back
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-medium)] transition-all duration-300 hover:shadow-xl group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] flex items-center justify-center group-hover:scale-110 transition-transform">
                    {pillar.icon}
                  </div>
                  <span className="text-[11px] font-telemetry text-[var(--text-muted)] px-3 py-1 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                    {pillar.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent-cyan)] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] flex items-center gap-2 text-xs font-telemetry text-[var(--text-muted)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)]" />
                <span>Production Tested</span>
              </div>
            </div>
          ))}
        </div>

        {/* Key Verification Metrics Banner */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-sm">
          <div className="border-r border-[var(--border-subtle)] pr-4 last:border-none">
            <span className="block font-telemetry text-3xl sm:text-4xl font-extrabold text-[var(--accent-cyan)] mb-1">
              2+ Years
            </span>
            <span className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] block">
              Remote Full-Stack Experience
            </span>
            <span className="text-xs text-[var(--text-muted)] mt-1 block">
              UK &amp; Indian Enterprise Teams
            </span>
          </div>

          <div className="border-r border-[var(--border-subtle)] pr-4 last:border-none">
            <span className="block font-telemetry text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] mb-1">
              B.Tech CSE
            </span>
            <span className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] block">
              Computer Science &amp; Engineering
            </span>
            <span className="text-xs text-[var(--text-muted)] mt-1 block">
              MAKAUT (2021 – 2025)
            </span>
          </div>

          <div className="border-r border-[var(--border-subtle)] pr-4 last:border-none">
            <span className="block font-telemetry text-3xl sm:text-4xl font-extrabold text-emerald-500 mb-1">
              3
            </span>
            <span className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] block">
              Spoken Languages
            </span>
            <span className="text-xs text-[var(--text-muted)] mt-1 block">
              English • Hindi • Bengali
            </span>
          </div>

          <div>
            <span className="block font-telemetry text-3xl sm:text-4xl font-extrabold text-[var(--accent-secondary)] mb-1">
              100%
            </span>
            <span className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] block">
              Agile &amp; Delivery Cadence
            </span>
            <span className="text-xs text-[var(--text-muted)] mt-1 block">
              Code Reviews &amp; Testing CI/CD
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
