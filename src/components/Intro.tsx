"use client";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Load curtain: a full-bleed panel that states the name, then lifts away.
 * Pointer events are disabled the moment it starts leaving so it can never
 * block a click.
 */
export function Intro() {
  const reduced = useReducedMotion();
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), reduced ? 0 : 1900);
    return () => clearTimeout(t);
  }, [reduced]);

  if (reduced || done) return null;

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ duration: 1, delay: 1.15, ease: [0.76, 0, 0.24, 1] }}
      className="pointer-events-none fixed inset-0 z-[70] flex items-center justify-center bg-ink"
    >
      <div className="overflow-hidden">
        <motion.p
          initial={{ y: "110%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="display text-5xl uppercase text-silver md:text-7xl"
        >
          Bhargavi
        </motion.p>
      </div>
    </motion.div>
  );
}
