"use client";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row min-h-[90vh] w-full overflow-hidden">
      {/* Left Side - Dark Block */}
      <div className="w-full md:w-1/2 bg-[#0F0F0F] text-white p-12 md:p-24 flex flex-col justify-center relative">
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h3 className="text-rose-500 font-bold uppercase tracking-[0.2em] mb-4 text-sm flex items-center gap-3">
            <span className="w-8 h-[2px] bg-rose-500"></span>
            Internship Tracker
          </h3>
        </motion.div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-8">
          <motion.span className="block" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, type: "spring", bounce: 0.4 }}>Automation</motion.span>
          <motion.span className="block" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, type: "spring", bounce: 0.4 }}>Engineer</motion.span>
          <motion.span 
            className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-amber-500" 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.6, type: "spring", bounce: 0.4 }}
          >
            Intern
          </motion.span>
        </h1>
        
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.9, duration: 1 }} 
          className="text-slate-400 max-w-md text-lg leading-relaxed"
        >
          Streamlining workflows and engineering robust financial solutions at Riya Travel.
        </motion.p>
      </div>

      {/* Right Side - Solid Accent Color Block */}
      <div className="w-full md:w-1/2 bg-[#7A1F1F] p-12 flex flex-col items-center justify-center relative min-h-[50vh] overflow-hidden">
        {/* Abstract structural grid matching the reference template */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        {/* Slow rotating background glow */}
        <motion.div 
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute w-[600px] h-[600px] bg-gradient-to-tr from-rose-500/30 to-amber-500/20 rounded-full blur-3xl"
        />

        <motion.div 
          initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ type: "spring", bounce: 0.5, delay: 0.5, duration: 1 }}
          className="relative z-10 text-center"
        >
          <motion.div 
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="w-64 h-64 border border-white/30 p-4 relative overflow-hidden group cursor-pointer shadow-2xl"
          >
             {/* Diagonal shine animation */}
             <motion.div 
               animate={{ left: ['-100%', '200%'] }} 
               transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
               className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 z-20 pointer-events-none"
             />
             
             <div className="w-full h-full bg-white/10 backdrop-blur-md flex flex-col items-center justify-center p-8 hover:bg-white/20 transition-colors">
                <span className="text-white text-3xl font-bold uppercase tracking-widest mb-2">June</span>
                <span className="text-rose-200 text-sm font-bold uppercase tracking-[0.2em]">2026</span>
                <div className="w-8 h-[2px] bg-rose-400 my-4"></div>
                <span className="text-white text-xl font-bold uppercase tracking-widest">Present</span>
             </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
