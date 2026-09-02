"use client";
import { Counter } from "./Counter";
import { Clock, Code, Target } from "lucide-react";
import { motion } from "framer-motion";

export function MetricsSection() {
  const metrics = [
    { title: "Hours Saved", value: 120, icon: <Clock className="w-8 h-8 text-white mx-auto mb-4" /> },
    { title: "Projects", value: 3, icon: <Target className="w-8 h-8 text-white mx-auto mb-4" /> },
    { title: "Lines Code", value: 2150, suffix: "+", icon: <Code className="w-8 h-8 text-white mx-auto mb-4" /> }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", bounce: 0.4 } }
  };

  return (
    <section className="w-full bg-[#151515] text-white py-32 relative overflow-hidden">
      {/* Texture background replicating the wavy noise from the reference */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      
      <div className="max-w-7xl mx-auto px-8 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400 border border-slate-700 px-8 py-3 inline-block mb-8 rounded-full">Value & ROI</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white">Quantifiable Impact</h3>
        </motion.div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8"
        >
          {metrics.map((m, i) => (
            <motion.div key={i} variants={item} className="text-center group cursor-default">
              <motion.div whileHover={{ scale: 1.2, rotate: 10 }} className="inline-block">
                {m.icon}
              </motion.div>
              <div className="text-5xl md:text-6xl font-extrabold mb-4 font-mono group-hover:text-rose-500 transition-colors duration-500">
                <Counter value={m.value} suffix={m.suffix} />
              </div>
              <div className="text-xs uppercase tracking-[0.2em] text-slate-500 font-bold">
                {m.title}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
