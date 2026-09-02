"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { Clock, Code, Target } from "lucide-react";

function Counter({ value, suffix = "" }: { value: number, suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);

  useEffect(() => {
    const controls = animate(count, value, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [value, count]);

  return <motion.span>{rounded}</motion.span>;
}

export function MetricsBento() {
  const metrics = [
    { title: "Hours Saved", value: 120, icon: <Clock className="w-6 h-6 text-violet-500" />, bg: "bg-violet-50 dark:bg-violet-500/10", border: "border-violet-100 dark:border-violet-500/20" },
    { title: "Projects", value: 3, icon: <Target className="w-6 h-6 text-rose-500" />, bg: "bg-rose-50 dark:bg-rose-500/10", border: "border-rose-100 dark:border-rose-500/20" },
    { title: "Lines Code", value: 2150, suffix: "+", icon: <Code className="w-6 h-6 text-fuchsia-500" />, bg: "bg-fuchsia-50 dark:bg-fuchsia-500/10", border: "border-fuchsia-100 dark:border-fuchsia-500/20" }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="col-span-1 md:col-span-1 lg:col-span-2 row-span-2 bg-white dark:bg-[#121214] p-8 border border-slate-200 dark:border-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] rounded-3xl flex flex-col"
    >
      <div className="mb-6">
        <h3 className="text-xl font-extrabold text-slate-800 dark:text-white flex items-center gap-3">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          Value & ROI Delivered
        </h3>
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">Quantifiable business impact generated during the internship.</p>
      </div>
      
      <div className="grid grid-cols-2 gap-4 flex-grow">
        {metrics.map((m, i) => {
          const isWide = i === 2; // Make the third metric span 2 columns
          return (
            <div key={i} className={`rounded-2xl bg-slate-50 dark:bg-[#18181b] p-5 border ${m.border} flex ${isWide ? 'flex-row items-center gap-6 col-span-2' : 'flex-col justify-center'} hover:-translate-y-1 hover:shadow-md transition-all duration-300`}>
              <div className={`p-3 rounded-xl w-max ${m.bg} ${!isWide ? 'mb-4' : ''}`}>
                {m.icon}
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-extrabold text-slate-800 dark:text-white mb-0.5">
                  <Counter value={m.value} suffix={m.suffix} />
                </div>
                <div className="text-[10px] lg:text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {m.title}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
