"use client";
import { Mail, MessageSquare, Database, User, GraduationCap, Code2, Briefcase } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function UpcomingSection() {
  const [showAbout, setShowAbout] = useState(false);

  const projects = [
    {
      title: "Email Automation",
      collaborator: "with Richard",
      icon: <Mail className="w-8 h-8 text-white/80" />,
      status: "Scoping Phase",
    },
    {
      title: "Automated Feedback",
      collaborator: "with Makrand sir",
      icon: <MessageSquare className="w-8 h-8 text-white/80" />,
      status: "Planning",
    },
    {
      title: "ERP Integration",
      collaborator: "with Phani sir & Deepa mam",
      icon: <Database className="w-8 h-8 text-white/80" />,
      status: "Upcoming",
    }
  ];

  const skills = [
    "Playwright", "Node.js", "Apps Script", "Google Sheets API", 
    "Python", "JavaScript", "GitHub", "Next.js", 
    "Data Pipelines", "RPA"
  ];

  return (
    <section className="w-full bg-[#7A1F1F] text-white py-32 text-center overflow-hidden">
      <div className="max-w-6xl mx-auto px-8 relative">
        <motion.div 
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-16 h-16 rounded-full bg-white/10 mx-auto mb-6 flex items-center justify-center text-2xl border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
        >
          🚀
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-bold uppercase tracking-[0.3em] mb-4 text-rose-200"
        >
          Roadmap
        </motion.h2>
        
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-extrabold mb-20 tracking-tight"
        >
          On the Horizon
        </motion.h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {projects.map((proj, idx) => (
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", bounce: 0.5, delay: idx * 0.2 }}
              key={idx} 
              className="flex flex-col items-center group cursor-default"
            >
              <motion.div 
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.2 }}
                transition={{ duration: 0.5 }}
                className="mb-4 bg-black/20 p-4 rounded-2xl border border-white/10"
              >
                {proj.icon}
              </motion.div>
              <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-white/10 text-rose-100 rounded-full mb-6 border border-white/10">
                {proj.status}
              </span>
              <h4 className="text-xl font-bold mb-2 group-hover:text-black transition-colors duration-300">{proj.title}</h4>
              <p className="text-sm text-rose-200">{proj.collaborator}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Profile Toggle Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-32"
        >
          <motion.button 
            onClick={() => setShowAbout(!showAbout)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-10 py-5 uppercase text-xs tracking-[0.2em] font-bold transition-all border flex items-center gap-4 mx-auto ${
              showAbout 
                ? 'bg-black text-white border-black shadow-[0_20px_50px_rgba(0,0,0,0.5)]' 
                : 'bg-[#0F0F0F] text-white border-[#0F0F0F] hover:bg-black hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            {showAbout ? "Close Developer Profile" : "View Developer Profile"}
          </motion.button>
        </motion.div>

        {/* Expandable Sophisticated Profile Card */}
        <AnimatePresence>
          {showAbout && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.5, type: "spring", bounce: 0.2 }}
              className="overflow-hidden mt-8"
            >
              <div className="bg-[#0F0F0F] border border-white/10 p-8 md:p-14 text-left rounded-sm shadow-2xl max-w-4xl mx-auto relative group">
                {/* Subtle background glow */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-rose-900/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
                  
                  {/* Left Column: Identity */}
                  <div className="md:col-span-5 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/10 pb-8 md:pb-0 md:pr-8">
                    <div>
                      <div className="w-16 h-16 bg-white text-black flex items-center justify-center text-3xl font-serif italic mb-8 shadow-lg">
                        B.
                      </div>
                      <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-2 tracking-widest uppercase">Bhargavi</h3>
                      <p className="text-rose-500 text-xs font-bold uppercase tracking-[0.2em] mb-8">Automation Engineer Intern</p>
                      
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                          <GraduationCap className="w-4 h-4 text-slate-500" />
                          <span>BBA in Business Analytics</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                          <User className="w-4 h-4 text-slate-500" />
                          <span>Riya Travel</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Philosophy & Skills */}
                  <div className="md:col-span-7 flex flex-col justify-center">
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 mb-5">Professional Focus</h4>
                    <p className="text-slate-300 leading-relaxed text-sm md:text-base mb-10 border-l-2 border-rose-600 pl-5 italic font-serif">
                      "Bridging the gap between business analytics and full-cycle software engineering. I specialize in building versatile, end-to-end solutions—from architecting self-healing automations and robust data pipelines, to designing intuitive interfaces that solve complex organizational bottlenecks."
                    </p>
                    
                    <div className="space-y-5">
                      <div className="flex items-center gap-3 text-white/50 text-[10px] font-bold uppercase tracking-widest border-b border-white/10 pb-3">
                        <Code2 className="w-4 h-4" />
                        <span>Technical Arsenal</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill, i) => (
                          <motion.span 
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05 }}
                            whileHover={{ y: -2, backgroundColor: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)" }}
                            className="px-3 py-1.5 bg-[#151515] border border-white/5 rounded text-[10px] font-bold tracking-[0.1em] uppercase text-slate-300 transition-colors cursor-default"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
      </div>
    </section>
  );
}
