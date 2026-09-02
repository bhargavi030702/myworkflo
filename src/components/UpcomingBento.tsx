"use client";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MessageSquare, Database } from "lucide-react";

export function UpcomingBento() {
  const projects = [
    {
      title: "Email Automation Pipeline",
      collaborator: "Collaborating with Richard",
      icon: <Mail className="w-5 h-5 text-indigo-500" />,
      status: "Scoping Phase",
      gradient: "from-indigo-500/30 to-purple-500/30",
      iconBg: "bg-indigo-50 border-indigo-100 dark:bg-indigo-500/10 dark:border-indigo-500/20"
    },
    {
      title: "Automated Feedback System",
      collaborator: "Collaborating with Makrand sir",
      icon: <MessageSquare className="w-5 h-5 text-emerald-500" />,
      status: "Planning",
      gradient: "from-emerald-500/30 to-teal-500/30",
      iconBg: "bg-emerald-50 border-emerald-100 dark:bg-emerald-500/10 dark:border-emerald-500/20"
    },
    {
      title: "Full ERP Integration",
      collaborator: "With Phani sir & Deepa mam",
      icon: <Database className="w-5 h-5 text-amber-500" />,
      status: "Upcoming",
      gradient: "from-amber-500/30 to-orange-500/30",
      iconBg: "bg-amber-50 border-amber-100 dark:bg-amber-500/10 dark:border-amber-500/20"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="col-span-1 md:col-span-3 lg:col-span-4 rounded-3xl bg-white dark:bg-[#121214] p-8 md:p-10 border border-slate-200 dark:border-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)]"
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <ArrowRight className="w-5 h-5 text-slate-700 dark:text-slate-300" />
          </div>
          <div>
            <h3 className="text-2xl font-extrabold text-slate-800 dark:text-white tracking-tight">On the Horizon</h3>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">Upcoming workflows & engineering initiatives</p>
          </div>
        </div>
        <div className="hidden sm:block text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-800/50 px-4 py-2 rounded-full border border-slate-100 dark:border-slate-800">
          Q3 - Q4 Roadmap
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((proj, idx) => (
          <div key={idx} className="group relative p-6 md:p-8 rounded-3xl bg-slate-50 dark:bg-[#18181b] border border-slate-100 dark:border-slate-800/60 overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-slate-200 dark:hover:border-slate-700">
            {/* Elegant hover glow effect */}
            <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${proj.gradient} blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-y-1/2 translate-x-1/3 pointer-events-none`}></div>
            
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-3 rounded-2xl shadow-sm border ${proj.iconBg} transition-transform duration-500 group-hover:scale-110`}>
                    {proj.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full shadow-sm border border-slate-100 dark:border-slate-700">
                    {proj.status}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-2 leading-tight group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors">{proj.title}</h4>
              </div>
              <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-4">{proj.collaborator}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
