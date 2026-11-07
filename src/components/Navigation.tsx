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
  Sparkles,
} from "lucide-react";

export function Navigation() {
  const { scrollToTarget } = useScroll();
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);

  // Initialize theme from HTML or localStorage
  useEffect(() => {
    const isHtmlLight = document.documentElement.classList.contains("light");
    const stored = localStorage.getItem("sandip_portfolio_theme");
    if (stored === "light" || isHtmlLight) {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else {
      setIsDark(true);
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    }
  }, []);

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
      localStorage.setItem("sandip_portfolio_theme", "dark");
    } else {
      html.classList.remove("dark");
      html.classList.add("light");
      localStorage.setItem("sandip_portfolio_theme", "light");
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
            ? "bg-[var(--bg-primary)]/85 backdrop-blur-md border-b border-[var(--border-subtle)] shadow-lg shadow-black/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo - High fashion minimal */}
          <button
            onClick={() => handleNavClick("hero")}
            className="group flex items-center gap-3 text-left cursor-pointer focus:outline-none"
            aria-label="Go to top"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--accent-cyan)] to-[var(--accent-secondary)] p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-md shadow-[var(--accent-cyan)]/20">
              <div className="w-full h-full bg-[var(--bg-primary)] rounded-[10px] flex items-center justify-center font-telemetry font-bold text-sm text-[var(--accent-cyan)] tracking-tight">
                SM
              </div>
            </div>
            <div>
              <span className="block font-bold text-sm tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent-cyan)] transition-colors">
                SANDIP MAITY<span className="text-[10px] font-mono ml-0.5">®</span>
              </span>
              <span className="block text-[11px] font-telemetry text-emerald-500 dark:text-emerald-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Software Engineer
              </span>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 bg-[var(--bg-card)]/90 border border-[var(--border-subtle)] rounded-full px-4 py-1.5 backdrop-blur-lg shadow-sm">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-telemetry tracking-wide transition-all cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? "bg-[var(--accent-cyan)]/15 text-[var(--accent-cyan)] font-bold border border-[var(--accent-cyan)]/30 shadow-sm"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--border-subtle)]"
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
              className="p-2 rounded-xl bg-[var(--bg-card)] hover:bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-all cursor-pointer shadow-sm"
              title="Interactive Terminal"
            >
              <TerminalIcon className="w-4 h-4" />
            </button>

            {/* Theme Toggle - Flawless Dark/Light switch */}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${isDark ? "Light" : "Dark"} mode`}
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[var(--bg-card)] hover:bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] hover:border-[var(--accent-cyan)]/40 transition-all cursor-pointer shadow-sm text-xs font-telemetry"
              title="Toggle Theme"
            >
              {isDark ? (
                <>
                  <Sun className="w-4 h-4 text-amber-400" />
                  <span className="text-[11px] font-semibold">Light</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-indigo-600" />
                  <span className="text-[11px] font-semibold">Dark</span>
                </>
              )}
            </button>

            {/* Resume Button */}
            <a
              href={PROFILE.resumePdf}
              download="Sandip_Maity_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[var(--bg-card)] hover:bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs font-telemetry text-[var(--text-primary)] hover:border-[var(--accent-cyan)]/40 transition-all shadow-sm"
            >
              <FileText className="w-3.5 h-3.5 text-[var(--accent-cyan)]" />
              <span>Resume</span>
            </a>

            {/* Contact CTA */}
            <button
              onClick={() => handleNavClick("contact")}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-secondary)] text-white dark:text-[#090a0f] hover:brightness-110 font-bold text-xs tracking-tight shadow-md shadow-[var(--accent-cyan)]/25 transition-all cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Let&apos;s Talk</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger & Theme Switch */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-primary)]"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className="p-2 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-primary)]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[var(--bg-primary)]/95 backdrop-blur-xl lg:hidden pt-24 px-6 flex flex-col justify-between pb-8">
          <nav className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center justify-between p-3.5 rounded-xl text-sm font-telemetry text-left transition-all ${
                  activeSection === item.id
                    ? "bg-[var(--accent-cyan)]/15 text-[var(--accent-cyan)] border border-[var(--accent-cyan)]/30 font-semibold"
                    : "text-[var(--text-secondary)] hover:bg-[var(--bg-card)]"
                }`}
              >
                <span>{item.label}</span>
                <span className="text-xs opacity-50">{item.index}</span>
              </button>
            ))}
          </nav>

          <div className="flex flex-col gap-3 pt-6 border-t border-[var(--border-subtle)]">
            <a
              href={PROFILE.resumePdf}
              download="Sandip_Maity_Resume.pdf"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[var(--bg-card)] text-[var(--text-primary)] font-telemetry text-sm border border-[var(--border-subtle)]"
            >
              <FileText className="w-4 h-4 text-[var(--accent-cyan)]" />
              <span>Download Resume (PDF)</span>
            </a>
            <button
              onClick={() => handleNavClick("contact")}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-secondary)] text-white dark:text-[#090a0f] font-bold text-sm shadow-lg shadow-[var(--accent-cyan)]/30"
            >
              Let&apos;s Talk
            </button>
          </div>
        </div>
      )}
    </>
  );
}
