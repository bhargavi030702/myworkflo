"use client";
import { motion } from "framer-motion";

export function CoreTechnologiesSection() {
  const tools = [
    { name: "Playwright", icon: "🎭" },
    { name: "Node.js", icon: "🟢" },
    { name: "Apps Script", icon: "📝" },
    { name: "Google Sheets", icon: "📊" },
    { name: "Python", icon: "🐍" },
    { name: "JavaScript", icon: "⚡" },
    { name: "GitHub", icon: "🔧" },
    { name: "Claude AI", icon: "🤖" },
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
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {tools.map((t, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", bounce: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.1, backgroundColor: "#7A1F1F", borderColor: "#7A1F1F" }}
              className="flex flex-col items-center justify-center p-10 bg-[#151515] border border-white/5 transition-colors cursor-pointer group rounded-xl"
            >
              <motion.span 
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
                className="text-5xl mb-6"
              >
                {t.icon}
              </motion.span>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-white transition-colors">{t.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
