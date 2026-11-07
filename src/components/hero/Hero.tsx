"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { PROFILE } from "@/lib/data";
import { useScroll } from "@/lib/scroll";
import {
  ArrowUpRight,
  ArrowDownRight,
  Download,
  MapPin,
  Clock,
  Box,
} from "lucide-react";

interface HeroProps {
  onOpen3D?: () => void;
}

export function Hero({ onOpen3D }: HeroProps) {
  const { scrollToTarget } = useScroll();
  const [timeIST, setTimeIST] = useState("");
  const [timeUK, setTimeUK] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeIST(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
      setTimeUK(
        now.toLocaleTimeString("en-US", {
          timeZone: "Europe/London",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full pt-28 pb-16 md:pt-36 md:pb-24 flex flex-col justify-between overflow-hidden bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300 select-none"
      aria-label="Introduction Hero"
    >
      {/* Precision Swiss Grid Overlay */}
      <div className="absolute inset-0 swiss-grid-overlay pointer-events-none opacity-80" />

      {/* Coordinate Crosshairs (+) at Key Intersections */}
      <div className="crosshair-mark top-24 left-6 sm:left-12">+</div>
      <div className="crosshair-mark top-24 right-6 sm:right-12">+</div>
      <div className="crosshair-mark top-1/2 left-6 sm:left-12 -translate-y-1/2">+</div>
      <div className="crosshair-mark top-1/2 right-6 sm:right-12 -translate-y-1/2">+</div>
      <div className="crosshair-mark bottom-12 left-6 sm:left-12">+</div>
      <div className="crosshair-mark bottom-12 right-6 sm:right-12">+</div>

      {/* Monumental Typographic Watermark (Matching Reference Image) */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0"
        aria-hidden="true"
      >
        <span className="font-extrabold tracking-tighter text-[clamp(6rem,20vw,22rem)] leading-none text-[var(--watermark)] block uppercase font-body">
          SANDIP
        </span>
      </div>

      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center min-h-[580px]">
          
          {/* Left Column: Manifesto & Massive Headline */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full py-4 z-20">
            {/* Upper Manifesto (From Reference Image) */}
            <div className="max-w-sm mb-12 lg:mb-20">
              <span className="inline-flex items-center gap-2 text-[11px] font-telemetry tracking-widest uppercase text-[var(--accent)] font-semibold mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                <span>Software Engineer • UK &amp; India</span>
              </span>
              <p className="font-telemetry text-xs sm:text-sm tracking-wider uppercase text-[var(--text-secondary)] leading-relaxed font-medium">
                I DESIGN &amp; ENGINEER USER-CENTERED FULL-STACK SYSTEMS THAT ARE RESILIENT,
                HIGH-THROUGHPUT AND IMPACTFUL.
              </p>
            </div>

            {/* Bottom Headline (Exact format from reference image) */}
            <div className="mt-auto">
              <span className="font-telemetry text-xs text-[var(--text-muted)] tracking-widest block mb-1">
                ©{new Date().getFullYear()} — WEST BENGAL, IN
              </span>
              <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black tracking-tight text-[var(--text-primary)] uppercase leading-[0.9] font-body mb-2">
                SANDIP
              </h1>
              <p className="text-xs sm:text-sm font-telemetry text-[var(--accent)] tracking-widest uppercase font-bold">
                FULL STACK ARCHITECT • TEDEKSTRA UK
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 mt-6">
                <button
                  onClick={() => scrollToTarget("#projects")}
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-bold text-xs tracking-tight shadow-md transition-all cursor-pointer"
                >
                  <span>Selected Work</span>
                  <ArrowDownRight className="w-4 h-4" />
                </button>

                <a
                  href={PROFILE.resumePdf}
                  download="Sandip_Maity_Resume.pdf"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-[var(--bg-card)] hover:bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs font-telemetry text-[var(--text-primary)] hover:border-[var(--accent)]/40 transition-all shadow-sm"
                >
                  <Download className="w-3.5 h-3.5 text-[var(--accent)]" />
                  <span>Resume (PDF)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Center Column: Portrait Image (Framed with Ambient Warmth) */}
          <div className="lg:col-span-4 flex justify-center items-center relative z-10 py-6">
            <div className="relative w-full max-w-[320px] sm:max-w-[360px] aspect-[4/5] rounded-3xl overflow-hidden bg-[var(--bg-card)] border border-[var(--border-medium)] shadow-2xl group">
              {/* Subtle Ambient Radial Lighting */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent)]/20 via-transparent to-transparent pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity" />

              <Image
                src={PROFILE.avatarUrl}
                alt={PROFILE.name}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover object-top filter contrast-[1.04] transition-transform duration-700 group-hover:scale-105"
              />

              {/* Subtle bottom fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/80 via-transparent to-transparent opacity-50" />

              {/* Status Pill in Portrait */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-[var(--bg-card)]/90 backdrop-blur-md border border-[var(--border-subtle)] flex items-center justify-between">
                <div>
                  <span className="block text-xs font-bold text-[var(--text-primary)]">
                    {PROFILE.name}
                  </span>
                  <span className="block text-[10px] font-telemetry text-[var(--accent)]">
                    Software Engineer (Remote)
                  </span>
                </div>
                <span className="text-[10px] font-telemetry px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-500 font-extrabold border border-emerald-500/30">
                  {PROFILE.experienceYears}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Cards (Matching Reference Image) */}
          <div className="lg:col-span-3 flex flex-col justify-between h-full gap-6 py-4 z-20">
            {/* Floating Card 1: Featured Project Spotlight Card (Like Zentix in image) */}
            <div
              onClick={() => scrollToTarget("#projects")}
              className="w-full max-w-[260px] ml-auto p-4 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-xl hover:border-[var(--accent)]/50 transition-all duration-300 cursor-pointer group"
            >
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[var(--bg-secondary)] border border-[var(--border-subtle)] relative flex items-center justify-center p-4">
                <div className="text-center">
                  <span className="block text-xs font-mono font-bold text-[var(--accent)] mb-1">
                    01 // REAL-TIME
                  </span>
                  <h4 className="font-extrabold text-sm text-[var(--text-primary)] font-body">
                    SyncSpace
                  </h4>
                  <p className="text-[10px] font-telemetry text-[var(--text-muted)] mt-1">
                    WebSocket Collaboration
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between mt-3 px-1">
                <span className="text-[11px] font-telemetry font-bold text-[var(--text-primary)] flex items-center gap-1">
                  <span>✱</span> SYNCSPACE
                </span>
                <span className="text-[10px] font-telemetry text-[var(--accent)]">
                  /WebSockets
                </span>
              </div>
            </div>

            {/* Floating Card 2: "Let's Talk" Card (Exact Match to Reference Image) */}
            <div
              onClick={() => scrollToTarget("#contact")}
              className="w-full max-w-[280px] ml-auto p-4 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-xl hover:border-[var(--accent)]/50 transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-telemetry text-[var(--text-secondary)] font-medium">
                  Let&apos;s Talk
                </span>
                <span className="text-xs text-[var(--accent)]">✱</span>
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

                <div className="w-8 h-8 rounded-xl bg-[var(--bg-elevated)] group-hover:bg-[var(--accent)] group-hover:text-white flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-4 h-4 text-[var(--text-primary)] group-hover:text-white" />
                </div>
              </div>
            </div>

            {/* Timezone Indicator Strip */}
            <div className="p-3.5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] flex items-center justify-between text-[11px] font-telemetry text-[var(--text-secondary)]">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[var(--accent)]" />
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
