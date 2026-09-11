"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const projects = [
  { title: "Email Automation", collaborator: "with Richard", status: "Scoping Phase" },
  { title: "Automated Feedback", collaborator: "with Makrand sir", status: "Planning" },
  { title: "ERP Integration", collaborator: "with Phani sir & Deepa mam", status: "Upcoming" },
];

const skills = [
  "Playwright", "Node.js", "Apps Script", "Google Sheets API",
  "Python", "JavaScript", "GitHub", "Next.js",
  "Data Pipelines", "RPA",
];

export function UpcomingSection() {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <section className="w-full bg-blush px-6 py-24 text-ink md:px-12 md:py-36">
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 md:mb-20"
        >
          <span className="meta text-ink/50">Roadmap</span>
          <h2 className="font-display mt-4 text-5xl italic md:text-7xl">
            On the Horizon
          </h2>
        </motion.div>

        <div className="border-t border-ink/20">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-12 items-baseline gap-4 border-b border-ink/20 py-7 md:py-9"
            >
              <span className="meta col-span-12 text-ink/50 md:col-span-3">
                {p.status}
              </span>
              <span className="col-span-12 font-display text-3xl leading-tight md:col-span-6 md:text-4xl">
                {p.title}
              </span>
              <span className="col-span-12 font-display text-lg italic text-ink/60 md:col-span-3 md:text-right">
                {p.collaborator}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Developer profile */}
        <div className="mt-20 md:mt-28">
          <button
            onClick={() => setShowAbout(!showAbout)}
            className="font-display text-2xl italic underline decoration-1 underline-offset-8 transition-opacity hover:opacity-60 md:text-3xl"
          >
            {showAbout ? "Close profile" : "Read the profile"}
          </button>

          <AnimatePresence initial={false}>
            {showAbout && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="mt-12 grid grid-cols-1 gap-12 border-t border-ink/20 pt-12 md:grid-cols-12">
                  <div className="md:col-span-4">
                    <p className="font-display text-6xl italic leading-none">B.</p>
                    <h3 className="font-display mt-8 text-3xl uppercase tracking-[0.14em]">
                      Bhargavi
                    </h3>
                    <p className="meta mt-3 text-ink/55">
                      Automation Engineer Intern
                    </p>

                    <dl className="mt-10 space-y-3">
                      <div className="flex justify-between border-b border-ink/15 pb-2">
                        <dt className="meta text-ink/50">Education</dt>
                        <dd className="text-xs">BBA, Business Analytics</dd>
                      </div>
                      <div className="flex justify-between border-b border-ink/15 pb-2">
                        <dt className="meta text-ink/50">Company</dt>
                        <dd className="text-xs">Riya Travel</dd>
                      </div>
                    </dl>

                    <a
                      href="https://www.linkedin.com/in/bhargavibhaladharee/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rule-link mt-8 inline-block font-display text-xl italic"
                    >
                      Connect on LinkedIn
                    </a>
                  </div>

                  <div className="md:col-span-7 md:col-start-6">
                    <span className="meta text-ink/50">Professional Focus</span>
                    <p className="font-display mt-5 text-2xl italic leading-snug md:text-3xl">
                      Bridging the gap between business analytics and full-cycle
                      software engineering — architecting self-healing
                      automations and robust data pipelines, and designing
                      intuitive interfaces that solve complex organisational
                      bottlenecks.
                    </p>

                    <span className="meta mt-14 block border-b border-ink/20 pb-3 text-ink/50">
                      Technical Arsenal
                    </span>
                    <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                      {skills.map((s) => (
                        <span key={s} className="meta text-ink/70">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
