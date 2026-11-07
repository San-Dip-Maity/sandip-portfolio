"use client";

import React, { useState, useEffect } from "react";
import { PROFILE } from "@/lib/data";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Copy,
  Check,
  Download,
  Send,
  MapPin,
  Clock,
  Sparkles,
} from "lucide-react";

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Form state
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formSubject, setFormSubject] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [sentSuccess, setSentSuccess] = useState(false);

  const [timeIndia, setTimeIndia] = useState("");
  const [timeUK, setTimeUK] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTimeIndia(
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

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PROFILE.phoneDisplay);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formEmail || !formMessage) return;

    // Build mailto link
    const mailtoUrl = `mailto:${PROFILE.email}?subject=${encodeURIComponent(
      formSubject || `Portfolio Inquiry from ${formName || "Visitor"}`
    )}&body=${encodeURIComponent(
      `Name: ${formName}\nEmail: ${formEmail}\n\nMessage:\n${formMessage}`
    )}`;

    window.location.href = mailtoUrl;
    setSentSuccess(true);
    setTimeout(() => setSentSuccess(false), 4000);
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 relative bg-[#090a0f] border-t border-white/5"
      aria-label="Contact Information and Direct Channels"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="section-tag">
            <span>06</span>
            <span>—</span>
            <span>Direct Channels</span>
          </div>
          <h2 className="section-title mb-4">
            Let&apos;s architect something{" "}
            <span className="section-serif-accent">exceptional.</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            I am currently open to high-impact software engineering roles, enterprise platform architecture, and specialized remote contracts. Reach out directly via email, phone, or the console below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Direct Email Card */}
            <div className="p-6 rounded-3xl bg-[#131620] border border-white/10 hover:border-white/20 transition-all flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#00e5ff]/10 border border-[#00e5ff]/20 flex items-center justify-center text-[#00e5ff]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[11px] font-telemetry uppercase tracking-wider text-slate-400">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="font-telemetry text-xs sm:text-sm font-bold text-white hover:text-[#00e5ff] transition-colors"
                  >
                    {PROFILE.email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all cursor-pointer"
                title="Copy email address"
              >
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Direct Phone Card */}
            <div className="p-6 rounded-3xl bg-[#131620] border border-white/10 hover:border-white/20 transition-all flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[11px] font-telemetry uppercase tracking-wider text-slate-400">
                    Phone / WhatsApp
                  </span>
                  <a
                    href={`tel:${PROFILE.phone}`}
                    className="font-telemetry text-xs sm:text-sm font-bold text-white hover:text-emerald-400 transition-colors"
                  >
                    {PROFILE.phoneDisplay}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyPhone}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all cursor-pointer"
                title="Copy phone number"
              >
                {copiedPhone ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Location & Timezones */}
            <div className="p-6 rounded-3xl bg-[#131620] border border-white/10">
              <div className="flex items-center gap-2 font-telemetry text-xs text-slate-400 mb-4">
                <MapPin className="w-4 h-4 text-[#00e5ff]" />
                <span>Operating from West Bengal, India • Remote Global</span>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-[#090a0f] border border-white/5">
                  <span className="block text-[10px] font-telemetry uppercase text-slate-400 mb-1">
                    India Standard Time
                  </span>
                  <span className="font-telemetry font-bold text-sm text-white">
                    IST {timeIndia}
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#090a0f] border border-white/5">
                  <span className="block text-[10px] font-telemetry uppercase text-slate-400 mb-1">
                    Liverpool / UK Time
                  </span>
                  <span className="font-telemetry font-bold text-sm text-white">
                    BST/UTC {timeUK}
                  </span>
                </div>
              </div>
            </div>

            {/* Social & Resume Hub */}
            <div className="grid grid-cols-3 gap-3">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-[#131620] border border-white/10 hover:border-white/20 flex flex-col items-center justify-center gap-2 text-slate-300 hover:text-white transition-all group"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-[11px] font-telemetry font-bold">GitHub</span>
              </a>

              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-[#131620] border border-white/10 hover:border-white/20 flex flex-col items-center justify-center gap-2 text-slate-300 hover:text-white transition-all group"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-[11px] font-telemetry font-bold">LinkedIn</span>
              </a>

              <a
                href={PROFILE.resumePdf}
                download="Sandip_Maity_Resume.pdf"
                className="p-4 rounded-2xl bg-gradient-to-br from-[#00e5ff]/15 to-[#6366f1]/15 border border-[#00e5ff]/30 flex flex-col items-center justify-center gap-2 text-[#00e5ff] hover:brightness-125 transition-all group"
              >
                <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-[11px] font-telemetry font-bold">Resume PDF</span>
              </a>
            </div>
          </div>

          {/* Right Column: Direct Message Composer */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-[#131620] border border-white/10 shadow-2xl relative">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                <span className="text-xs font-telemetry uppercase tracking-wider text-[#00e5ff] flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Direct Message Gateway</span>
                </span>
                <span className="text-[11px] font-telemetry text-emerald-400">
                  ● Inbox Monitored Daily
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-telemetry text-slate-300 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="e.g. Alex Mercer"
                      className="w-full px-4 py-3 rounded-xl bg-[#090a0f] border border-white/10 text-white text-xs sm:text-sm font-telemetry focus:outline-none focus:border-[#00e5ff] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-telemetry text-slate-300 mb-1.5">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      placeholder="e.g. alex@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#090a0f] border border-white/10 text-white text-xs sm:text-sm font-telemetry focus:outline-none focus:border-[#00e5ff] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-telemetry text-slate-300 mb-1.5">
                    Subject / Discussion Topic
                  </label>
                  <input
                    type="text"
                    value={formSubject}
                    onChange={(e) => setFormSubject(e.target.value)}
                    placeholder="e.g. Engineering Role / System Architecture"
                    className="w-full px-4 py-3 rounded-xl bg-[#090a0f] border border-white/10 text-white text-xs sm:text-sm font-telemetry focus:outline-none focus:border-[#00e5ff] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-telemetry text-slate-300 mb-1.5">
                    Message Details
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    placeholder="Describe your project, team requirements, or role specifications..."
                    className="w-full p-4 rounded-xl bg-[#090a0f] border border-white/10 text-white text-xs sm:text-sm font-telemetry focus:outline-none focus:border-[#00e5ff] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#00e5ff] to-[#6366f1] text-[#090a0f] font-bold text-sm shadow-lg shadow-[#00e5ff]/25 hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message to Sandip Maity</span>
                </button>

                {sentSuccess && (
                  <div className="p-3.5 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-telemetry text-center flex items-center justify-center gap-2">
                    <Check className="w-4 h-4" />
                    <span>Opening your mail client with message pre-filled...</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
