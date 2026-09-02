"use client";
import { motion } from "framer-motion";
import { Quote, Clock } from "lucide-react";

export function FeedbackBento() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="col-span-1 md:col-span-1 lg:col-span-2 row-span-1 rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 dark:from-slate-800 dark:to-slate-950 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.2)] text-white relative overflow-hidden flex flex-col justify-center items-center text-center min-h-[200px]"
    >
      <Quote className="absolute -top-4 -left-4 w-32 h-32 text-white/5 -rotate-12" />
      
      <div className="relative z-10">
        <Clock className="w-8 h-8 text-slate-500 mx-auto mb-4 opacity-50" />
        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Manager Feedback</h3>
        <p className="text-slate-500 font-medium">
          Awaiting end-of-internship review...
        </p>
      </div>
    </motion.div>
  );
}
