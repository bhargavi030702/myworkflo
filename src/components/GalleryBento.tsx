"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { LogEntry } from "@/lib/markdown";

export function GalleryBento({ logs }: { logs: LogEntry[] }) {
  const [filter, setFilter] = useState<string>("All");

  const allTags = ["All", ...Array.from(new Set(logs.flatMap(log => log.tags)))];
  
  const filteredLogs = filter === "All" 
    ? logs 
    : logs.filter(log => log.tags.includes(filter));

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="col-span-1 md:col-span-3 lg:col-span-4 row-span-2 rounded-3xl bg-white dark:bg-[#121214] p-8 border border-slate-200 dark:border-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)]"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-800 dark:text-white">Project Gallery</h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">A 4-week journey of automation and engineering.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                filter === tag 
                ? 'bg-slate-800 text-white dark:bg-white dark:text-slate-900 shadow-md' 
                : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredLogs.map((log) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={log.id}
              className="group bg-slate-50 dark:bg-[#18181b] rounded-2xl p-6 border border-slate-100 dark:border-slate-800/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col h-full"
            >
              {/* Aesthetic subtle background glow on hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-rose-200/40 to-purple-200/40 dark:from-rose-500/10 dark:to-purple-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="flex justify-between items-start mb-5 relative z-10">
                <div className="flex gap-2 items-center">
                  {log.week && (
                    <span className="text-xs font-extrabold text-white bg-gradient-to-r from-purple-500 to-rose-500 px-3 py-1 rounded-full shadow-sm">
                      {log.week}
                    </span>
                  )}
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{log.date}</span>
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4 relative z-10 leading-tight group-hover:text-rose-500 transition-colors">{log.title}</h3>
              
              <div 
                className="text-sm text-slate-600 dark:text-slate-400 max-w-none [&>ul]:list-disc [&>ul]:pl-5 [&>ul>li]:mb-2 [&>p]:mb-2 relative z-10 flex-grow"
                dangerouslySetInnerHTML={{ __html: log.contentHtml }} 
              />
              
              <div className="flex flex-wrap gap-2 mt-6 relative z-10">
                {log.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
