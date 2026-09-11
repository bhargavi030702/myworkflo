"use client";
import { motion } from "framer-motion";

const rise = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative w-full overflow-hidden bg-olive px-6 pb-20 pt-14 text-cream md:px-12 md:pb-28 md:pt-20"
    >
      <div className="mx-auto max-w-[1400px]">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="font-display text-xl italic text-cream/80 md:text-2xl"
        >
          bhargavi.bhaladhare@riya.travel
        </motion.p>

        {/* Oversized editorial display type */}
        <div className="relative mt-10 md:mt-14">
          <motion.h1
            variants={rise}
            initial="hidden"
            animate="show"
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display uppercase leading-[0.84] tracking-[-0.01em] text-blush"
            style={{ fontSize: "clamp(3.5rem, 15.5vw, 15rem)" }}
          >
            <span className="block">Automation</span>
            <motion.span
              variants={rise}
              transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              Engineer
            </motion.span>
          </motion.h1>

          {/* Overlapping card, echoing the image overlap in the reference */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none absolute bottom-0 right-0 hidden w-[34%] max-w-[420px] translate-y-[18%] border border-cream/25 bg-olive-deep/70 p-8 backdrop-blur-sm lg:block"
          >
            <span className="meta block text-cream/55">In post since</span>
            <p className="font-display mt-3 text-5xl text-cream">June 2026</p>
            <div className="my-6 h-px w-12 bg-blush" />
            <p className="font-display text-2xl italic text-blush">Present</p>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-14 max-w-xl text-sm leading-relaxed text-cream/75 md:mt-20 md:text-base"
        >
          Streamlining workflows and engineering robust financial solutions at
          Riya Travel — self-healing RPA, automated data pipelines, and
          interfaces that remove organisational bottlenecks.
        </motion.p>
      </div>
    </section>
  );
}
