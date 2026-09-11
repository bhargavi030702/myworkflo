"use client";
import { Reveal } from "./motion/Reveal";
import { motion } from "framer-motion";

const tools = [
  { name: "Playwright", desc: "Legacy portal navigation, iframe handling, data extraction." },
  { name: "Node.js", desc: "Headless backend RPA scripts and automated daily pipelines." },
  { name: "Apps Script", desc: "800+ line processing engine for real-time, two-way data sync." },
  { name: "Google Sheets", desc: "Not just a database — a fully interactive financial canvas." },
  { name: "Python", desc: "Aggressive data parsing and auxiliary backend automation." },
  { name: "JavaScript", desc: "Custom date parsers, array manipulation, API integrations." },
  { name: "GitHub", desc: "Version control and automated deployment pipelines." },
  { name: "Claude AI", desc: "Pair programming, algorithmic generation, code optimisation." },
];

export function CoreTechnologiesSection() {
  return (
    <section className="w-full bg-stone px-6 py-24 text-ink md:px-12 md:py-36">
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 md:mb-20"
        >
          <span className="meta text-silver">Tech Stack</span>
          <Reveal className="mt-5">
            <h2 className="display text-4xl uppercase md:text-6xl">
              Core Technologies
            </h2>
          </Reveal>
        </motion.div>

        <div className="grid grid-cols-1 gap-x-14 border-t border-ink/15 md:grid-cols-2">
          {tools.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: (i % 2) * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex items-baseline justify-between gap-8 border-b border-ink/15 py-7"
            >
              <span className="display text-2xl uppercase md:text-3xl">
                {t.name}
              </span>
              <span className="max-w-[55%] text-right text-xs leading-relaxed text-ink/60">
                {t.desc}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
