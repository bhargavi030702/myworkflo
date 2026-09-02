"use client";
import { motion } from "framer-motion";

export function SkillsBento() {
  const tools = [
    { name: "Apps Script", icon: "📝" },
    { name: "Google Sheets", icon: "📊" },
    { name: "JavaScript", icon: "⚡" },
    { name: "Python", icon: "🐍" },
    { name: "GitHub", icon: "🔧" },
    { name: "Claude AI", icon: "🤖" },
    { name: "Node.js", icon: "🟢" },
    { name: "Playwright", icon: "🎭" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 rounded-3xl bg-white dark:bg-[#121214] p-8 border border-slate-200 dark:border-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)]"
    >
      <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6">Tech Stack</h3>
      <div className="grid grid-cols-4 gap-4">
        {tools.map((t, i) => (
          <div key={i} className="flex flex-col items-center justify-center p-4 rounded-2xl bg-slate-50 dark:bg-[#18181b] border border-slate-100 dark:border-slate-800 hover:scale-105 transition-transform cursor-pointer">
            <span className="text-3xl mb-2">{t.icon}</span>
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 text-center">{t.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
