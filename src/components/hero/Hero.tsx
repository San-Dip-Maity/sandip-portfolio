"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PROFILE } from "@/lib/data";
import { useScroll } from "@/lib/scroll";
import {
  ArrowUpRight,
  Download,
  Menu,
  Box,
  Layers,
  Sparkles,
} from "lucide-react";

interface HeroProps {
  onOpen3DModal?: (type: "skyline" | "agentic-factory") => void;
}

export function Hero({ onOpen3DModal }: HeroProps) {
  const { scrollToTarget } = useScroll();

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full p-3 sm:p-6 lg:p-8 flex items-center justify-center bg-[#0d0907] overflow-hidden select-none"
      aria-label="Introduction Hero"
    >
      {/* Outer ambient warm rays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#eb5424]/15 via-transparent to-transparent pointer-events-none" />

      {/* Main Radiant Vermilion Orange Canvas (Exact Match to User Reference Image) */}
      <div className="relative w-full max-w-[1440px] min-h-[680px] lg:h-[88vh] rounded-[28px] sm:rounded-[36px] bg-gradient-to-br from-[#f05523] via-[#eb5424] to-[#d44315] p-6 sm:p-10 lg:p-12 overflow-hidden shadow-2xl border border-white/20 flex flex-col justify-between">
        
        {/* Subtle Architectural Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:clamp(80px,10vw,140px)_clamp(80px,10vw,140px)] pointer-events-none" />

        {/* Precision Crosshair Marks (+) at Grid Intersections */}
        <div className="absolute top-8 left-8 font-mono text-white/60 text-sm select-none pointer-events-none">+</div>
        <div className="absolute top-8 right-8 font-mono text-white/60 text-sm select-none pointer-events-none">+</div>
        <div className="absolute top-1/2 left-8 -translate-y-1/2 font-mono text-white/60 text-sm select-none pointer-events-none">+</div>
        <div className="absolute top-1/2 right-8 -translate-y-1/2 font-mono text-white/60 text-sm select-none pointer-events-none">+</div>
        <div className="absolute bottom-8 left-8 font-mono text-white/60 text-sm select-none pointer-events-none">+</div>
        <div className="absolute bottom-8 right-8 font-mono text-white/60 text-sm select-none pointer-events-none">+</div>

        {/* Monumental Watermark Name (Matching "MICHAEL" in Reference Image) */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0"
          aria-hidden="true"
        >
          <span className="font-extrabold tracking-tighter text-[clamp(6rem,22vw,26rem)] leading-none text-white/10 block uppercase font-body">
            SANDIP
          </span>
        </div>

        {/* Top Header inside Orange Canvas (Matching Reference Image) */}
        <div className="relative z-20 flex items-center justify-between pb-4">
          {/* Brand */}
          <div className="font-extrabold text-xl sm:text-2xl tracking-tight text-white font-body flex items-center">
            <span>Portfolioa</span>
            <span className="text-xs font-mono ml-0.5">®</span>
          </div>

          {/* Center Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-telemetry tracking-wider uppercase text-white/90">
            <button
              onClick={() => scrollToTarget("#hero")}
              className="text-white font-bold border-b-2 border-white pb-0.5 cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => scrollToTarget("#about")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scrollToTarget("#projects")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Work <span className="opacity-70">(04)</span>
            </button>
            <button
              onClick={() => scrollToTarget("#skills")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Stack <span className="opacity-70">(24)</span>
            </button>
            <button
              onClick={() => scrollToTarget("#contact")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Right Action: Menu & 3D Skyline Trigger */}
          <div className="flex items-center gap-3">
            {onOpen3DModal && (
              <button
                onClick={() => onOpen3DModal("skyline")}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-[11px] font-telemetry tracking-wide transition-all border border-white/25 cursor-pointer"
                title="Open 3D Contribution Skyline"
              >
                <Box className="w-3.5 h-3.5" />
                <span>3D Skyline</span>
              </button>
            )}
            <button
              onClick={() => scrollToTarget("#contact")}
              className="text-white hover:opacity-80 transition-opacity p-1 cursor-pointer"
              aria-label="Open navigation"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Center Main Content Flow */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto py-4">
          
          {/* Left Column: Upper Manifesto & Bottom Massive "SANDIP" */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full z-20">
            {/* Left Upper Manifesto (Exact format from image) */}
            <div className="max-w-sm mb-12 lg:mb-24">
              <p className="font-telemetry text-xs sm:text-sm tracking-wider uppercase text-white/95 leading-relaxed font-semibold">
                I DESIGN &amp; ENGINEER USER-CENTERED FULL-STACK SYSTEMS THAT ARE RESILIENT,
                HIGH-THROUGHPUT AND IMPACTFUL.
              </p>
            </div>

            {/* Bottom Left Bold Headline (Exact match to "MICHAEL" in image) */}
            <div className="mt-auto">
              <span className="font-telemetry text-xs sm:text-sm text-white/80 tracking-widest block mb-1 font-semibold">
                ©{new Date().getFullYear()}
              </span>
              <h1 className="text-6xl sm:text-7xl xl:text-8xl font-black tracking-tight text-white uppercase leading-[0.9] font-body">
                SANDIP
              </h1>
              <p className="text-xs sm:text-sm font-telemetry text-white/90 tracking-widest uppercase mt-2 font-semibold">
                FULL STACK SOFTWARE ENGINEER • TEDEKSTRA UK
              </p>
            </div>
          </div>

          {/* Center Column: Portrait Image (Framed & Cleanly Blended) */}
          <div className="lg:col-span-4 flex justify-center items-center relative z-10">
            <div className="relative w-full max-w-[320px] sm:max-w-[360px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 bg-black/10 group">
              <Image
                src={PROFILE.avatarUrl}
                alt={PROFILE.name}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover object-top filter contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
              />

              {/* Bottom Subtle Gradient for clean integration */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#eb5424]/40 via-transparent to-transparent opacity-60" />

              {/* Floating Pill on Portrait */}
              <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-between text-white">
                <span className="text-xs font-bold font-body">{PROFILE.name}</span>
                <span className="text-[10px] font-telemetry px-2 py-0.5 rounded bg-emerald-500 text-black font-extrabold">
                  {PROFILE.experienceYears}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Cards (Matching Reference Image) */}
          <div className="lg:col-span-3 flex flex-col justify-between h-full gap-8 z-20">
            {/* Top-Right Floating Square Card (Like Zentix in Reference Image) */}
            <div
              onClick={() => onOpen3DModal ? onOpen3DModal("skyline") : scrollToTarget("#projects")}
              className="w-full max-w-[240px] ml-auto p-3.5 rounded-2xl bg-white border-2 border-white/80 shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer text-slate-900 group"
            >
              <div className="w-full aspect-square rounded-xl overflow-hidden bg-slate-950 relative border border-black/10 flex items-center justify-center">
                {/* 3D Skyline Teaser visual */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#eb5424] via-indigo-950 to-slate-900 opacity-90" />
                <div className="relative z-10 flex flex-col items-center justify-center text-center p-3">
                  <Box className="w-8 h-8 text-[#eb5424] mb-1 group-hover:rotate-12 transition-transform" />
                  <span className="font-telemetry text-[11px] font-bold text-white">
                    3D Skyline Engine
                  </span>
                  <span className="text-[9px] font-telemetry text-slate-300 mt-0.5">
                    Click to Inspect ↗
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between mt-2.5 px-0.5">
                <span className="text-[11px] font-telemetry font-bold text-slate-900 flex items-center gap-1">
                  <span>✱</span> 3D SKYLINE
                </span>
                <span className="text-[10px] font-telemetry text-[#eb5424] font-semibold">
                  /Interactive
                </span>
              </div>
            </div>

            {/* Bottom-Right Floating "Let's Talk" Card (Exact Match to Reference Image) */}
            <div
              onClick={() => scrollToTarget("#contact")}
              className="w-full max-w-[280px] ml-auto p-3.5 rounded-2xl bg-[#140e0b] border border-white/20 shadow-2xl hover:border-white/40 transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-telemetry text-slate-300 font-medium">
                  Let&apos;s Talk
                </span>
                <span className="text-white text-xs">✱</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-white/20 bg-slate-800">
                    <Image
                      src={PROFILE.avatarUrl}
                      alt={PROFILE.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="block font-bold text-xs text-white">
                      {PROFILE.name}
                    </span>
                    <span className="block text-[10px] font-telemetry text-slate-400">
                      Software Engineer
                    </span>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-xl bg-white text-black flex items-center justify-center group-hover:bg-[#eb5424] group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Coordinates & Resume Bar */}
        <div className="relative z-20 pt-4 border-t border-white/20 flex flex-wrap items-center justify-between text-xs font-telemetry text-white/80">
          <span className="tracking-wider">LOC: WEST BENGAL, INDIA [22.9868° N, 87.8550° E]</span>
          <div className="flex items-center gap-4">
            <a
              href={PROFILE.resumePdf}
              download="Sandip_Maity_Resume.pdf"
              className="flex items-center gap-1.5 text-white hover:underline font-semibold"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume (PDF)</span>
            </a>
            <span>•</span>
            <span className="text-white font-bold">LIVERPOOL UK (REMOTE) READY</span>
          </div>
        </div>

      </div>
    </section>
  );
}
