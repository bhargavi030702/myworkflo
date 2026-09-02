"use client";
import { LogEntry } from "@/lib/markdown";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function GallerySection({ logs }: { logs: LogEntry[] }) {
  const [filter, setFilter] = useState<string>("All");
  const allTags = ["All", ...Array.from(new Set(logs.flatMap(log => log.tags)))];
  const filteredLogs = filter === "All" ? logs : logs.filter(log => log.tags.includes(filter));

  return (
    <section className="w-full bg-[#F5F5F5] text-[#0F0F0F] py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-black tracking-tight">Identic projects</h2>
          <p className="text-slate-500 text-lg mb-12">A 4-week narrative of delivered workflows.</p>
          
          <div className="flex flex-wrap justify-center gap-2">
            {allTags.map(tag => (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                key={tag}
                onClick={() => setFilter(tag)}
                className={`px-6 py-2 text-xs font-bold uppercase tracking-widest transition-all ${
                  filter === tag 
                  ? 'bg-[#7A1F1F] text-white shadow-lg shadow-red-900/20' 
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-400'
                }`}
              >
                {tag}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredLogs.map((log, idx) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ y: -10, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                key={log.id} 
                className="bg-white border border-slate-200 p-8 flex flex-col min-h-[350px]"
              >
                <span className="text-[#7A1F1F] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
                  {log.week} / {log.date}
                </span>
                <h3 className="text-2xl font-bold mb-6 leading-tight hover:text-[#7A1F1F] transition-colors">{log.title}</h3>
                <div 
                  className="text-sm text-slate-600 leading-relaxed mb-8 flex-grow [&>ul]:list-disc [&>ul]:pl-5 [&>ul>li]:mb-3 [&>p]:mb-4 [&>p>strong]:text-black [&>ul>li>strong]:text-black [&>pre]:bg-[#1A1A1A] [&>pre]:text-rose-100 [&>pre]:p-5 [&>pre]:rounded-lg [&>pre]:overflow-x-auto [&>pre]:text-xs [&>pre]:font-mono [&>pre]:my-6 [&>p>code]:bg-slate-100 [&>p>code]:text-rose-600 [&>p>code]:px-1.5 [&>p>code]:py-0.5 [&>p>code]:rounded [&>p>code]:font-mono"
                  dangerouslySetInnerHTML={{ __html: log.contentHtml }} 
                />
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-100">
                  {log.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-bold uppercase tracking-widest px-2 py-1 bg-slate-100 text-slate-500">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
