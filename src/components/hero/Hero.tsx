"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { PROFILE } from "@/lib/data";
import { useScroll } from "@/lib/scroll";
import { ThreeScene3D } from "@/components/ui/ThreeScene3D";
import {
  ArrowUpRight,
  ArrowDownRight,
  Download,
  Copy,
  Check,
  MapPin,
  Clock,
  Sparkles,
  Layers,
} from "lucide-react";

export function Hero() {
  const { scrollToTarget } = useScroll();
  const [copied, setCopied] = useState(false);
  const [timeIST, setTimeIST] = useState("");
  const [timeUK, setTimeUK] = useState("");

  // Live timezone tracking
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeIST(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
      setTimeUK(
        now.toLocaleTimeString("en-US", {
          timeZone: "Europe/London",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full pt-28 pb-16 md:pt-32 md:pb-24 flex flex-col justify-between overflow-hidden bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300 select-none"
      aria-label="Introduction Hero"
    >
      {/* Background Precision Swiss Grid */}
      <div className="absolute inset-0 swiss-grid-overlay pointer-events-none opacity-80" />

      {/* Coordinate Crosshairs at Key Grid Intersections */}
      <div className="crosshair-mark top-24 left-8">+</div>
      <div className="crosshair-mark top-24 right-8">+</div>
      <div className="crosshair-mark top-1/2 left-8 -translate-y-1/2">+</div>
      <div className="crosshair-mark top-1/2 right-8 -translate-y-1/2">+</div>
      <div className="crosshair-mark bottom-12 left-8">+</div>
      <div className="crosshair-mark bottom-12 right-8">+</div>

      {/* Monumental Watermark Typography (Inspired by user's image) */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0"
        aria-hidden="true"
      >
        <span className="font-extrabold tracking-tighter text-[clamp(5rem,19vw,22rem)] leading-none text-[var(--watermark)] block uppercase font-body">
          SANDIP
        </span>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[640px]">
          
          {/* Left Column: Manifesto & Huge Headline (As in Reference Image) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full py-4 z-20">
            {/* Top Status Kicker */}
            <div className="flex items-center gap-2 mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-telemetry bg-[var(--accent-cyan-glow)] text-[var(--accent-cyan)] border border-[var(--border-accent)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)] animate-pulse" />
                <span>OPEN FOR HIGH-IMPACT OPPORTUNITIES</span>
              </span>
            </div>

            {/* Sub-Manifesto */}
            <div className="max-w-md mb-12">
              <p className="font-telemetry text-xs sm:text-sm tracking-wider uppercase text-[var(--text-secondary)] leading-relaxed border-l-2 border-[var(--accent-cyan)] pl-3">
                I DESIGN &amp; ENGINEER SCALABLE FULL-STACK SYSTEMS THAT ARE RESILIENT,
                HIGH-THROUGHPUT AND PRODUCTION-READY.
              </p>
            </div>

            {/* Bottom Bold Headline */}
            <div className="mt-auto">
              <span className="font-telemetry text-xs text-[var(--text-muted)] tracking-widest block mb-1">
                ©{new Date().getFullYear()} — WEST BENGAL, IN
              </span>
              <h1 className="text-5xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-[var(--text-primary)] uppercase leading-[0.95] mb-2 font-body">
                SANDIP
              </h1>
              <p className="text-sm sm:text-base font-telemetry text-[var(--accent-cyan)] tracking-wider uppercase font-semibold">
                SOFTWARE ENGINEER • FULL STACK ARCHITECT
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 mt-6">
                <button
                  onClick={() => scrollToTarget("#projects")}
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-secondary)] text-white dark:text-[#090a0f] font-bold text-xs tracking-tight shadow-md hover:brightness-110 transition-all cursor-pointer"
                >
                  <span>Explore Systems</span>
                  <ArrowDownRight className="w-4 h-4" />
                </button>

                <a
                  href={PROFILE.resumePdf}
                  download="Sandip_Maity_Resume.pdf"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-[var(--bg-card)] hover:bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs font-telemetry text-[var(--text-primary)] hover:border-[var(--accent-cyan)]/40 transition-all shadow-sm"
                >
                  <Download className="w-3.5 h-3.5 text-[var(--accent-cyan)]" />
                  <span>Resume (PDF)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Center Column: Portrait Image (Framed & Layered) */}
          <div className="lg:col-span-4 flex justify-center items-center relative z-10 py-6">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[4/5] rounded-3xl overflow-hidden bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-2xl group">
              {/* Subtle Ambient Radial Lighting */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent-cyan)]/20 via-transparent to-[var(--accent-secondary)]/20 pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity" />

              <Image
                src={PROFILE.avatarUrl}
                alt={PROFILE.name}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-cover object-top filter contrast-[1.03] transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient Bottom Fade for Clean Editorial Blend */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent opacity-60" />

              {/* Status Badge in Portrait */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-[var(--bg-card)]/85 backdrop-blur-md border border-[var(--border-subtle)] flex items-center justify-between">
                <div>
                  <span className="block text-xs font-bold text-[var(--text-primary)]">
                    {PROFILE.name}
                  </span>
                  <span className="block text-[10px] font-telemetry text-[var(--accent-cyan)]">
                    Tedekstra Limited (UK Remote)
                  </span>
                </div>
                <span className="text-[10px] font-telemetry px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-500 font-semibold border border-emerald-500/30">
                  {PROFILE.experienceYears}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Floating 3D Three.js Card & "Let's Talk" Card (From Reference Image) */}
          <div className="lg:col-span-3 flex flex-col justify-between h-full gap-6 py-4 z-20">
            {/* Floating Card 1: Three.js 3D Interactive Card (Like Zentix in reference) */}
            <div className="p-3.5 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-xl hover:shadow-2xl transition-all group">
              <div className="w-full h-48 rounded-2xl overflow-hidden bg-[var(--bg-secondary)] border border-[var(--border-subtle)] relative">
                <ThreeScene3D className="w-full h-full" />
              </div>
              <div className="flex items-center justify-between mt-3 px-1">
                <span className="text-[11px] font-telemetry text-[var(--text-primary)] font-bold flex items-center gap-1">
                  <span>✱</span> THREE.JS CORE
                </span>
                <span className="text-[10px] font-telemetry text-[var(--accent-cyan)]">
                  /3D Graphics
                </span>
              </div>
            </div>

            {/* Floating Card 2: "Let's Talk" Card (Exactly like reference image!) */}
            <div
              onClick={() => scrollToTarget("#contact")}
              className="p-4 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-xl hover:border-[var(--accent-cyan)]/50 transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-telemetry text-[var(--text-secondary)] font-medium">
                  Let&apos;s Talk
                </span>
                <div className="w-2 h-2 rounded-full bg-[var(--accent-cyan)] animate-pulse" />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
                    <Image
                      src={PROFILE.avatarUrl}
                      alt={PROFILE.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="block font-bold text-xs text-[var(--text-primary)]">
                      {PROFILE.name}
                    </span>
                    <span className="block text-[10px] font-telemetry text-[var(--text-muted)]">
                      Full Stack Engineer
                    </span>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-xl bg-[var(--bg-elevated)] group-hover:bg-[var(--accent-cyan)] group-hover:text-black flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-4 h-4 text-[var(--text-primary)] group-hover:text-black" />
                </div>
              </div>
            </div>

            {/* Timezone Telemetry Strip */}
            <div className="p-3.5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] flex items-center justify-between text-[11px] font-telemetry text-[var(--text-secondary)]">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[var(--accent-cyan)]" />
                <span>IST {timeIST || "--:--"}</span>
              </span>
              <span className="text-[var(--text-muted)]">|</span>
              <span>UK {timeUK || "--:--"}</span>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom Coordinate Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-t border-[var(--border-subtle)] pt-4 mt-8 flex flex-wrap items-center justify-between text-xs font-telemetry text-[var(--text-muted)]">
        <span>LOC: WEST BENGAL, INDIA [22.9868° N, 87.8550° E]</span>
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span>PRODUCTION SYSTEMS READY</span>
        </span>
      </div>
    </section>
  );
}
