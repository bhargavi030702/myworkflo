"use client";
import { motion, useScroll, useSpring } from "framer-motion";

/** Hairline progress bar pinned to the very top of the page. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const width = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX: width }}
      className="fixed left-0 top-0 z-[60] h-[2px] w-full origin-left bg-silver"
    />
  );
}
