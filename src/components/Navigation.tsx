"use client";

import React, { useState, useEffect } from "react";
import { PROFILE } from "@/lib/data";
import { useScroll } from "@/lib/scroll";
import {
  Menu,
  X,
  FileText,
  Moon,
  Sun,
  Box,
  Send,
} from "lucide-react";

interface NavigationProps {
  onOpen3D?: () => void;
}

export function Navigation({ onOpen3D }: NavigationProps) {
  const { scrollToTarget } = useScroll();
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);

  const navLinks = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Work (04)" },
    { id: "skills", label: "Stack (24)" },
    { id: "experience", label: "Journey" },
    { id: "contact", label: "Contact" },
  ];

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = navLinks.map((l) => l.id);
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-4 sm:px-8 lg:px-12 ${
          isScrolled
            ? "bg-[var(--bg-primary)]/90 backdrop-blur-md border-b border-[var(--border-subtle)] shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo - Minimal Editorial */}
          <button
            onClick={() => handleNavClick("hero")}
            className="group flex items-center gap-2.5 text-left cursor-pointer focus:outline-none"
            aria-label="Go to top"
          >
            <span className="font-extrabold text-base sm:text-lg tracking-tight text-[var(--text-primary)] font-body uppercase">
              SANDIP MAITY<span className="text-[11px] font-mono text-[var(--accent)] ml-0.5">®</span>
            </span>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs font-telemetry uppercase tracking-wider">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`transition-colors cursor-pointer py-1 ${
                    isActive
                      ? "text-[var(--accent)] font-bold border-b border-[var(--accent)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Utilities */}
          <div className="hidden sm:flex items-center gap-3">
            {onOpen3D && (
              <button
                onClick={onOpen3D}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--bg-card)] hover:bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs font-telemetry text-[var(--text-primary)] transition-all cursor-pointer shadow-sm"
                title="Launch 3D Skyline"
              >
                <Box className="w-3.5 h-3.5 text-[var(--accent)]" />
                <span>3D View</span>
              </button>
            )}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${isDark ? "Light" : "Dark"} mode`}
              className="p-2 rounded-full bg-[var(--bg-card)] hover:bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] transition-all cursor-pointer shadow-sm"
              title="Toggle Theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-orange-500" />}
            </button>

            {/* Resume Button */}
            <a
              href={PROFILE.resumePdf}
              download="Sandip_Maity_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[var(--bg-card)] hover:bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs font-telemetry text-[var(--text-primary)] transition-all shadow-sm"
            >
              <FileText className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>Resume</span>
            </a>

            {/* Contact CTA */}
            <button
              onClick={() => handleNavClick("contact")}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-bold text-xs font-telemetry tracking-wide transition-all cursor-pointer shadow-sm shadow-[var(--accent)]/20"
            >
              <Send className="w-3 h-3" />
              <span>Let&apos;s Talk</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-primary)]"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-orange-500" />}
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

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[var(--bg-primary)]/95 backdrop-blur-xl lg:hidden pt-24 px-6 flex flex-col justify-between pb-8">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`flex items-center justify-between p-3.5 rounded-xl text-sm font-telemetry text-left transition-all ${
                  activeSection === link.id
                    ? "bg-[var(--accent)]/15 text-[var(--accent)] font-bold"
                    : "text-[var(--text-secondary)] hover:bg-[var(--bg-card)]"
                }`}
              >
                <span>{link.label}</span>
              </button>
            ))}
          </nav>

          <div className="flex flex-col gap-3 pt-6 border-t border-[var(--border-subtle)]">
            <a
              href={PROFILE.resumePdf}
              download="Sandip_Maity_Resume.pdf"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[var(--bg-card)] text-[var(--text-primary)] font-telemetry text-sm border border-[var(--border-subtle)]"
            >
              <FileText className="w-4 h-4 text-[var(--accent)]" />
              <span>Download Resume (PDF)</span>
            </a>
            <button
              onClick={() => handleNavClick("contact")}
              className="w-full py-3 rounded-xl bg-[var(--accent)] text-white font-bold text-sm shadow-md"
            >
              Let&apos;s Talk
            </button>
          </div>
        </div>
      )}
    </>
  );
}
