"use client";
import { Counter } from "./Counter";
import { motion } from "framer-motion";

export function MetricsSection() {
  const metrics = [
    { title: "Hours Saved", value: 183 },
    { title: "Projects Delivered", value: 5 },
    { title: "Lines of Code", value: 2950, suffix: "+" },
    { title: "Rows Transformed", value: 10000, suffix: "+" },
  ];

  return (
    <section
      id="info"
      className="w-full bg-paper px-6 py-24 text-ink md:px-12 md:py-36"
    >
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-24"
        >
          <span className="meta text-silver">Value &amp; ROI</span>
          <h2 className="display mt-5 text-5xl uppercase md:text-7xl">
            Quantifiable Impact
          </h2>
        </motion.div>

        <div className="border-t border-ink/15">
          {metrics.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid grid-cols-12 items-baseline gap-4 border-b border-ink/15 py-8 md:py-12"
            >
              <span className="meta col-span-12 text-ink/40 md:col-span-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="meta col-span-6 md:col-span-5 md:text-xs">
                {m.title}
              </span>
              <span className="display col-span-6 text-right text-5xl text-silver md:col-span-6 md:text-8xl">
                <Counter value={m.value} suffix={m.suffix} />
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
