"use client";

export function FeedbackSection() {
  return (
    <section className="w-full bg-[#0F0F0F] text-white py-24 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <h2 className="text-xs font-bold uppercase tracking-[0.3em] mb-8 text-slate-500">Contact & Review</h2>
        <h3 className="text-2xl md:text-3xl font-bold text-slate-400 italic leading-relaxed mb-12">
          "Awaiting end-of-internship review and manager feedback..."
        </h3>
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-sm text-slate-500">
            ?
          </div>
          <p className="text-sm font-bold uppercase tracking-widest text-slate-400 mt-2">Manager</p>
          <p className="text-xs text-slate-600 uppercase tracking-widest">Riya Travel</p>
        </div>
      </div>
    </section>
  );
}
