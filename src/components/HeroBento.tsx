"use client";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

export function HeroBento() {
  const tagline = "Automating workflows & engineering financial solutions.";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(tagline.slice(0, i));
      i++;
      if (i > tagline.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 rounded-3xl bg-white dark:bg-[#121214] p-8 border border-slate-200 dark:border-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] flex flex-col justify-between overflow-hidden relative group"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-rose-100/50 to-purple-100/50 dark:from-rose-900/20 dark:to-purple-900/20 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3 group-hover:scale-110 transition-transform duration-700"></div>
      
      <div className="relative z-10 flex items-center justify-between mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-rose-200 dark:border-rose-900/50 bg-rose-50 dark:bg-rose-900/20">
          <Sparkles className="w-4 h-4 text-rose-500" />
          <span className="text-xs font-bold tracking-wide text-rose-600 dark:text-rose-400 uppercase">
            Riya Travel
          </span>
        </div>
        <span className="text-sm font-medium text-slate-400">Jun 22, 2026 — Present</span>
      </div>

      <div className="relative z-10 mt-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2 text-slate-800 dark:text-white">
          Intern Name
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-slate-500 dark:text-slate-400 mb-6">
          Automation Engineer Intern
        </h2>
        <div className="h-14">
          <p className="text-lg md:text-xl font-medium bg-gradient-to-r from-purple-500 via-rose-500 to-pink-500 bg-clip-text text-transparent">
            {displayedText}
            <span className="animate-pulse">|</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
}
