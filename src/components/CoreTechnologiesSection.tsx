"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, X } from "lucide-react";

function TechCard({ t, i }: { t: any, i: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.5, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ type: "spring", bounce: 0.5, delay: i * 0.1 }}
      onClick={() => setIsOpen(!isOpen)}
      whileHover={{ y: -5, backgroundColor: "#1c1c1c", borderColor: "rgba(225,29,72,0.4)" }}
      className="flex flex-col items-start p-8 bg-[#151515] border border-white/5 transition-all duration-300 cursor-pointer group rounded-2xl shadow-lg relative overflow-hidden"
    >
      <div className="absolute top-8 right-8 text-slate-500 group-hover:text-rose-500 transition-colors duration-300">
        {isOpen ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
      </div>

      <motion.span 
        whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl mb-6"
      >
        {t.icon}
      </motion.span>
      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white group-hover:text-rose-500 transition-colors">
        {t.name}
      </span>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: 16 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-xs text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
              {t.desc}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function CoreTechnologiesSection() {
  const tools = [
    { 
      name: "Playwright", 
      icon: "🎭",
      desc: "Automated legacy web portal navigation, iframe handling, and data extraction."
    },
    { 
      name: "Node.js", 
      icon: "🟢",
      desc: "Powered the headless backend RPA scripts and automated daily pipelines."
    },
    { 
      name: "Apps Script", 
      icon: "📝",
      desc: "Built the 800+ line backend processing engine for real-time, 2-way data sync."
    },
    { 
      name: "Google Sheets", 
      icon: "📊",
      desc: "Engineered not just as a database, but as a fully interactive financial canvas UI."
    },
    { 
      name: "Python", 
      icon: "🐍",
      desc: "Handled aggressive data parsing and auxiliary backend automation scripts."
    },
    { 
      name: "JavaScript", 
      icon: "⚡",
      desc: "Core logic for custom date parsers, array manipulations, and API integrations."
    },
    { 
      name: "GitHub", 
      icon: "🔧",
      desc: "Version control management and automated Netlify deployment pipelines."
    },
    { 
      name: "Claude AI", 
      icon: "🤖",
      desc: "AI-assisted pair programming, algorithmic generation, and code optimization."
    },
  ];

  return (
    <section className="w-full bg-[#0F0F0F] text-white py-32 border-t border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto px-8 text-center">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-bold uppercase tracking-[0.3em] mb-4 text-slate-500"
        >
          Tech Stack
        </motion.h2>
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl font-extrabold text-white mb-16 tracking-tight"
        >
          Core Technologies
        </motion.h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {tools.map((t, i) => (
            <TechCard key={i} t={t} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
