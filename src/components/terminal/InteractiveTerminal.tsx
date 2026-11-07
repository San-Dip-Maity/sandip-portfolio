"use client";

import React, { useState, useRef, useEffect } from "react";
import { TERMINAL_COMMANDS, PROFILE } from "@/lib/data";
import { Terminal as TerminalIcon, CornerDownLeft, Sparkles, Trash2 } from "lucide-react";

interface LogEntry {
  command?: string;
  output: string;
}

export function InteractiveTerminal() {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<LogEntry[]>([
    {
      output: `Sandip Maity Systems Terminal [Version 2.4.0]\nType 'help' or click any command shortcut below to explore.`,
    },
    {
      command: "status",
      output: TERMINAL_COMMANDS["status"],
    },
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>(["status"]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);

  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const quickPills = ["help", "about", "skills", "projects", "exp", "contact", "resume", "clear"];

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const executeCommand = (cmdText: string) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    // Add to history
    setCommandHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    if (trimmed === "clear") {
      setHistory([]);
      setInputVal("");
      return;
    }

    if (trimmed === "resume") {
      window.open(PROFILE.resumePdf, "_blank");
      setHistory((prev) => [
        ...prev,
        {
          command: trimmed,
          output: `Opening official resume PDF in new tab... [${PROFILE.resumePdf}]`,
        },
      ]);
      setInputVal("");
      return;
    }

    const response =
      TERMINAL_COMMANDS[trimmed] ||
      `Command not found: '${trimmed}'. Type 'help' to see available commands.`;

    setHistory((prev) => [
      ...prev,
      {
        command: trimmed,
        output: response,
      },
    ]);
    setInputVal("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      executeCommand(inputVal);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIndex =
        historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInputVal(commandHistory[nextIndex]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= commandHistory.length) {
        setHistoryIndex(-1);
        setInputVal("");
      } else {
        setHistoryIndex(nextIndex);
        setInputVal(commandHistory[nextIndex]);
      }
    }
  };

  return (
    <section
      id="terminal"
      className="py-24 sm:py-32 relative bg-[#090a0f] border-t border-white/5"
      aria-label="Interactive Developer Terminal"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="section-tag">
            <span>05</span>
            <span>—</span>
            <span>Developer Shell</span>
          </div>
          <h2 className="section-title mb-4">
            Interactive developer console &{" "}
            <span className="section-serif-accent">telemetry.</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Query the engineer portfolio directly via this simulated interactive CLI terminal.
          </p>
        </div>

        {/* Terminal Container */}
        <div className="rounded-3xl bg-[#0d0f15] border border-white/15 shadow-2xl overflow-hidden max-w-5xl mx-auto">
          {/* Header Bar */}
          <div className="bg-[#141721] px-4 py-3 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="text-xs font-telemetry text-slate-400 ml-2">
                sandip@production-core: ~ (bash)
              </span>
            </div>

            <button
              onClick={() => executeCommand("clear")}
              className="text-xs font-telemetry text-slate-400 hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
              title="Clear terminal"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear</span>
            </button>
          </div>

          {/* Terminal Screen Body */}
          <div
            className="p-6 font-telemetry text-xs sm:text-sm h-96 overflow-y-auto space-y-4 text-slate-200"
            onClick={() => inputRef.current?.focus()}
          >
            {history.map((item, index) => (
              <div key={index} className="space-y-1">
                {item.command && (
                  <div className="flex items-center gap-2 text-[#00e5ff]">
                    <span className="text-emerald-400">sandip@core:~$</span>
                    <span className="font-bold">{item.command}</span>
                  </div>
                )}
                <div className="whitespace-pre-wrap text-slate-300 leading-relaxed font-mono">
                  {item.output}
                </div>
              </div>
            ))}

            {/* Current Active Input Prompt */}
            <div className="flex items-center gap-2 text-white pt-1">
              <span className="text-emerald-400 shrink-0">sandip@core:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type a command (e.g. 'help', 'skills', 'projects')..."
                className="w-full bg-transparent text-white font-telemetry text-xs sm:text-sm focus:outline-none placeholder:text-slate-600"
              />
              <button
                onClick={() => executeCommand(inputVal)}
                className="p-1 rounded bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </div>

            <div ref={terminalEndRef} />
          </div>

          {/* Quick Command Pills Bar */}
          <div className="p-4 bg-[#141721] border-t border-white/10 flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-telemetry text-slate-400 mr-2 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#00e5ff]" />
              <span>Quick execute:</span>
            </span>
            {quickPills.map((pill) => (
              <button
                key={pill}
                onClick={() => executeCommand(pill)}
                className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-[#00e5ff]/20 border border-white/10 hover:border-[#00e5ff]/30 text-xs font-telemetry text-slate-300 hover:text-[#00e5ff] transition-all cursor-pointer"
              >
                {pill}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
