"use client";

import React from "react";
import { PROFILE, NAV_ITEMS } from "@/lib/data";
import { useScroll } from "@/lib/scroll";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const { scrollToTarget } = useScroll();

  return (
    <footer className="py-12 bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)] text-[var(--text-secondary)] font-telemetry text-xs transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[var(--border-subtle)]">
          {/* Brand & Tag */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--accent-cyan)] to-[var(--accent-secondary)] p-[1px]">
              <div className="w-full h-full bg-[var(--bg-primary)] rounded-[7px] flex items-center justify-center font-bold text-xs text-[var(--accent-cyan)]">
                SM
              </div>
            </div>
            <div>
              <span className="font-bold text-[var(--text-primary)] text-sm block">
                {PROFILE.name}
              </span>
              <span className="text-[11px] text-[var(--text-muted)]">
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
                className="hover:text-[var(--accent-cyan)] transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Scroll to Top */}
          <button
            onClick={() => scrollToTarget("#hero")}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--bg-card)] hover:bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] transition-all cursor-pointer shadow-sm"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[var(--accent-cyan)]" />
          </button>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[var(--text-muted)]">
          <p>
            © {new Date().getFullYear()} {PROFILE.name}. Crafted with Next.js 15, React 19, TypeScript, Three.js &amp; Tailwind CSS.
          </p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-emerald-500 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              All Systems Operational
            </span>
            <span>•</span>
            <span className="text-[var(--text-muted)]">Three.js WebGL Active</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
