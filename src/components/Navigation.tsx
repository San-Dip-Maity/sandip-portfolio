"use client";

import React, { useState, useEffect } from "react";
import { NAV_ITEMS, PROFILE } from "@/lib/data";
import { useScroll } from "@/lib/scroll";
import {
  Menu,
  X,
  FileText,
  Moon,
  Sun,
  Send,
  Terminal as TerminalIcon,
} from "lucide-react";

export function Navigation() {
  const { scrollToTarget } = useScroll();
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);

  // Scroll detection for navbar background & active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = NAV_ITEMS.map((item) => item.id);
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    const html = document.documentElement;
    if (nextDark) {
      html.classList.remove("light");
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
      html.classList.add("light");
    }
  };

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    scrollToTarget(`#${id}`);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3.5 px-4 sm:px-6 lg:px-8 ${
          isScrolled
            ? "bg-[#090a0f]/85 dark:bg-[#090a0f]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick("hero")}
            className="group flex items-center gap-3 text-left cursor-pointer focus:outline-none"
            aria-label="Go to top"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00e5ff] to-[#6366f1] p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-md shadow-[#00e5ff]/20">
              <div className="w-full h-full bg-[#090a0f] rounded-[10px] flex items-center justify-center font-telemetry font-bold text-sm text-[#00e5ff] tracking-tight">
                SM
              </div>
            </div>
            <div>
              <span className="block font-bold text-sm tracking-tight text-white group-hover:text-[#00e5ff] transition-colors">
                {PROFILE.name}
              </span>
              <span className="block text-[11px] font-telemetry text-emerald-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Software Engineer
              </span>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#131620]/80 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-lg">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-telemetry tracking-wide transition-all cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? "bg-[#00e5ff]/15 text-[#00e5ff] font-semibold border border-[#00e5ff]/30 shadow-sm"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span className="text-[10px] opacity-60">{item.index}</span>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Utilities */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Quick Terminal Trigger */}
            <button
              onClick={() => handleNavClick("terminal")}
              aria-label="Open Interactive Terminal"
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-[#00e5ff] transition-all cursor-pointer"
              title="Interactive Terminal"
            >
              <TerminalIcon className="w-4 h-4" />
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-amber-400 transition-all cursor-pointer"
              title="Toggle Theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Resume Button */}
            <a
              href={PROFILE.resumePdf}
              download="Sandip_Maity_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-telemetry text-white hover:border-[#00e5ff]/40 transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-[#00e5ff]" />
              <span>Resume</span>
            </a>

            {/* Contact CTA */}
            <button
              onClick={() => handleNavClick("contact")}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#00e5ff] to-[#6366f1] text-[#090a0f] hover:brightness-110 font-bold text-xs tracking-tight shadow-md shadow-[#00e5ff]/25 transition-all cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Let&apos;s Connect</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#090a0f]/95 backdrop-blur-xl lg:hidden pt-24 px-6 flex flex-col justify-between pb-8">
          <nav className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center justify-between p-3.5 rounded-xl text-sm font-telemetry text-left transition-all ${
                  activeSection === item.id
                    ? "bg-[#00e5ff]/15 text-[#00e5ff] border border-[#00e5ff]/30 font-semibold"
                    : "text-slate-300 hover:bg-white/5"
                }`}
              >
                <span>{item.label}</span>
                <span className="text-xs opacity-50">{item.index}</span>
              </button>
            ))}
          </nav>

          <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
            <a
              href={PROFILE.resumePdf}
              download="Sandip_Maity_Resume.pdf"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/10 text-white font-telemetry text-sm"
            >
              <FileText className="w-4 h-4 text-[#00e5ff]" />
              <span>Download Resume (PDF)</span>
            </a>
            <button
              onClick={() => handleNavClick("contact")}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#00e5ff] to-[#6366f1] text-[#090a0f] font-bold text-sm shadow-lg shadow-[#00e5ff]/30"
            >
              Contact Sandip
            </button>
          </div>
        </div>
      )}
    </>
  );
}
