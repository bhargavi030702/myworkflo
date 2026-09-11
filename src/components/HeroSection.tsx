"use client";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative w-full overflow-hidden bg-sage px-6 pb-20 pt-14 text-cream md:px-12 md:pb-28 md:pt-20"
    >
      <div className="mx-auto max-w-[1400px]">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="meta text-cream/70"
        >
          Automation Engineer Intern &nbsp;/&nbsp; Riya Travel
        </motion.p>

        {/* Oversized display type */}
        <div className="relative mt-8 md:mt-12">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="display uppercase text-brick"
            style={{ fontSize: "clamp(3.25rem, 15vw, 14rem)" }}
          >
            <span className="block">Automation</span>
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              Engineer
            </motion.span>
          </motion.h1>

          {/* Overlapping block, echoing the image overlap in the reference */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none absolute bottom-0 right-0 hidden w-[34%] max-w-[420px] translate-y-[18%] bg-sage-deep p-8 lg:block"
          >
            <span className="meta block text-cream/60">In post since</span>
            <p className="display mt-3 text-6xl text-cream">June 2026</p>
            <div className="my-6 h-px w-12 bg-brick" />
            <p className="meta text-brick">Present</p>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-14 max-w-xl text-sm leading-relaxed text-cream/80 md:mt-20 md:text-base"
        >
          Streamlining workflows and engineering robust financial solutions at
          Riya Travel — self-healing RPA, automated data pipelines, and
          interfaces that remove organisational bottlenecks.
        </motion.p>
      </div>
    </section>
  );
}
