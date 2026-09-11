"use client";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { SplitText } from "./motion/Reveal";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  // Scroll-linked parallax: the wordmark drifts slower than the page,
  // the date card drifts faster. Depth without a single image.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const typeY = useTransform(scrollYProgress, [0, 1], ["0%", "38%"]);
  const typeOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.15]);
  const cardY = useTransform(scrollYProgress, [0, 1], ["0%", "-22%"]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative w-full overflow-hidden bg-ink px-6 pb-20 pt-14 text-paper md:px-12 md:pb-28 md:pt-20 lg:pb-40"
    >
      <div className="mx-auto max-w-[1400px]">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="meta text-paper/70"
        >
          Automation Engineer Intern &nbsp;/&nbsp; Riya Travel
        </motion.p>

        <div className="relative mt-8 md:mt-12">
          <motion.h1
            style={reduced ? undefined : { y: typeY, opacity: typeOpacity }}
            className="display uppercase text-silver"
            aria-label="Automation Engineer"
          >
            <span
              className="block"
              style={{ fontSize: "clamp(2.5rem, 11.8vw, 10.5rem)" }}
            >
              <SplitText text="Automation" delay={1.25} />
              <SplitText text="Engineer" delay={1.45} />
            </span>
          </motion.h1>

          <motion.div
            style={reduced ? undefined : { y: cardY }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 1.9, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none absolute bottom-0 right-0 hidden w-[32%] max-w-[380px] translate-y-[108%] bg-graphite p-8 lg:block"
          >
            <span className="meta block text-paper/60">In post since</span>
            <p className="display mt-3 text-6xl text-paper">June 2026</p>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 2.4, ease: [0.22, 1, 0.36, 1] }}
              className="my-6 h-px w-12 origin-left bg-silver"
            />
            <p className="meta text-silver">Present</p>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 max-w-xl text-sm leading-relaxed text-paper/80 md:mt-20 md:text-base lg:max-w-[55%]"
        >
          Streamlining workflows and engineering robust financial solutions at
          Riya Travel — self-healing RPA, automated data pipelines, and
          interfaces that remove organisational bottlenecks.
        </motion.p>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.6 }}
          className="mt-16 flex items-center gap-4"
        >
          <span className="meta text-paper/45">Scroll</span>
          <div className="h-px w-16 overflow-hidden bg-paper/20">
            <motion.div
              animate={reduced ? undefined : { x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="h-full w-1/2 bg-silver"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
