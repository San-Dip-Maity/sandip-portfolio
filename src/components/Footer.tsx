"use client";

import React from "react";
import { PROFILE, NAV_ITEMS } from "@/lib/data";
import { useScroll } from "@/lib/scroll";
import { ArrowUp, Heart, Terminal, Shield, Code } from "lucide-react";

export function Footer() {
  const { scrollToTarget } = useScroll();

  return (
    <footer className="py-12 bg-[#06070a] border-t border-white/10 text-slate-400 font-telemetry text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Brand & Tag */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00e5ff] to-[#6366f1] p-[1px]">
              <div className="w-full h-full bg-[#090a0f] rounded-[7px] flex items-center justify-center font-bold text-xs text-[#00e5ff]">
                SM
              </div>
            </div>
            <div>
              <span className="font-bold text-white text-sm block">
                {PROFILE.name}
              </span>
              <span className="text-[11px] text-slate-500">
                {PROFILE.role} • {PROFILE.currentCompany}
              </span>
            </div>
          </div>

          {/* Quick Section Jump */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToTarget(`#${item.id}`)}
                className="hover:text-[#00e5ff] transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Scroll to Top */}
          <button
            onClick={() => scrollToTarget("#hero")}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all cursor-pointer"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#00e5ff]" />
          </button>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>
            © {new Date().getFullYear()} {PROFILE.name}. Crafted with Next.js 15, React 19, TypeScript & Tailwind CSS.
          </p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              All Systems Operational
            </span>
            <span>•</span>
            <span className="text-slate-400">Multi-Project Isolated</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
