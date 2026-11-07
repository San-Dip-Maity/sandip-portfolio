"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { PROFILE } from "@/lib/data";
import { useScroll } from "@/lib/scroll";
import {
  ArrowDownRight,
  Download,
  Copy,
  Check,
  MapPin,
  Clock,
  Sparkles,
  ShieldCheck,
  Cpu,
  Layers,
} from "lucide-react";

export function Hero() {
  const { scrollToTarget } = useScroll();
  const [copied, setCopied] = useState(false);
  const [timeIST, setTimeIST] = useState("");
  const [timeUK, setTimeUK] = useState("");

  // Update live timezone clocks
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
      className="relative min-h-screen pt-28 pb-16 md:py-36 flex items-center bg-grid-cyber overflow-hidden"
      aria-label="Introduction and Overview"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00e5ff]/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-1/4 right-1/4 w-[32rem] h-[32rem] bg-[#6366f1]/10 rounded-full blur-3xl pointer-events-none translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Status / Availability Kicker */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="section-tag">
                <span className="w-2 h-2 rounded-full bg-[#00e5ff] animate-pulse"></span>
                <span>OPEN FOR HIGH-IMPACT OPPORTUNITIES</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-telemetry text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-[#00e5ff]" />
                <span>{PROFILE.location}</span>
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
              Architecting resilient{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] via-sky-400 to-[#6366f1]">
                full-stack systems
              </span>
              ,{" "}
              <span className="font-editorial italic font-normal text-slate-200">
                enterprise platforms
              </span>{" "}
              & real-time engines.
            </h1>

            {/* Role & Mission Summary */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8">
              I&apos;m <strong className="text-white font-semibold">{PROFILE.name}</strong>, a Software Engineer currently engineering scalable ERP, HRMS, and CRM architectures at{" "}
              <span className="text-[#00e5ff] font-medium">{PROFILE.currentCompany}</span>. I specialize in high-concurrency Node.js/NestJS backends, reactive Next.js 15 frontends, WebSockets, and enterprise RBAC security.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <button
                onClick={() => scrollToTarget("#projects")}
                className="group flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#00e5ff] to-[#6366f1] text-[#090a0f] font-bold text-sm shadow-lg shadow-[#00e5ff]/25 hover:brightness-110 transition-all cursor-pointer"
              >
                <span>Explore Systems & Work</span>
                <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </button>

              <a
                href={PROFILE.resumePdf}
                download="Sandip_Maity_Resume.pdf"
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#131620] hover:bg-[#1a1e2c] border border-white/10 hover:border-[#00e5ff]/40 text-slate-200 text-sm font-telemetry transition-all"
              >
                <Download className="w-4 h-4 text-[#00e5ff]" />
                <span>Resume (PDF)</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-2 px-4 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-telemetry text-slate-300 hover:text-white transition-all cursor-pointer"
                title="Click to copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>{PROFILE.email}</span>
                  </>
                )}
              </button>
            </div>

            {/* Live System Telemetry Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-[#131620]/70 border border-white/10 backdrop-blur-md max-w-2xl">
              <div>
                <span className="block text-[10px] font-telemetry uppercase tracking-wider text-slate-400 mb-0.5 flex items-center gap-1">
                  <Cpu className="w-3 h-3 text-[#00e5ff]" /> Production Stack
                </span>
                <span className="font-semibold text-xs text-white">
                  Next.js • NestJS • MongoDB
                </span>
              </div>

              <div>
                <span className="block text-[10px] font-telemetry uppercase tracking-wider text-slate-400 mb-0.5 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" /> Current Enterprise
                </span>
                <span className="font-semibold text-xs text-white truncate block">
                  Tedekstra Limited (UK)
                </span>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <span className="block text-[10px] font-telemetry uppercase tracking-wider text-slate-400 mb-0.5 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-amber-400" /> Dual Timezone
                </span>
                <span className="font-telemetry text-xs text-slate-200">
                  IST {timeIST || "--:--"}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Sandip's Photo & Interactive Dimensions */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Decorative background framing */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#00e5ff]/30 via-[#6366f1]/20 to-transparent blur-md opacity-80" />

              {/* Main Card Frame */}
              <div className="relative rounded-3xl overflow-hidden bg-[#131620] border border-white/15 p-3.5 shadow-2xl">
                {/* Image Container with Aspect Ratio */}
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-900 border border-white/10 group">
                  <Image
                    src={PROFILE.avatarUrl}
                    alt={PROFILE.name}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 420px"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient overlay for text contrast at the bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-transparent to-transparent opacity-80" />

                  {/* Corner Tech Badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#090a0f]/80 backdrop-blur-md border border-white/15 text-[11px] font-telemetry text-white">
                    <Sparkles className="w-3 h-3 text-[#00e5ff]" />
                    <span>Software Engineer</span>
                  </div>

                  <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 text-[10px] font-telemetry text-emerald-300 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Remote Ready</span>
                  </div>

                  {/* Bottom Info Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-[#090a0f]/85 backdrop-blur-md border border-white/10">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-sm text-white tracking-tight">
                        {PROFILE.name}
                      </span>
                      <span className="text-[10px] font-telemetry text-[#00e5ff] px-2 py-0.5 rounded bg-[#00e5ff]/10 border border-[#00e5ff]/20">
                        {PROFILE.experienceYears} Exp
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 line-clamp-1">
                      Full-Stack Architect & Enterprise ERP/HRMS Specialist
                    </p>
                  </div>
                </div>

                {/* Bottom Card Badges */}
                <div className="grid grid-cols-2 gap-2 mt-3 text-center">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                    <span className="block text-[10px] font-telemetry text-slate-400">
                      Primary Backend
                    </span>
                    <span className="font-bold text-xs text-white">
                      Node.js / NestJS
                    </span>
                  </div>
                  <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                    <span className="block text-[10px] font-telemetry text-slate-400">
                      Primary Client
                    </span>
                    <span className="font-bold text-xs text-white">
                      Next.js & React 19
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
