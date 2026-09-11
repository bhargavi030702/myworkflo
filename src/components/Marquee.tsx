"use client";
import { motion, useReducedMotion } from "framer-motion";

const ITEMS = [
  "Automation",
  "Data Pipelines",
  "RPA",
  "Excel Engineering",
  "Serverless",
  "Python",
];

/**
 * Infinite ticker band. Two identical tracks sit side by side and the pair
 * translates by exactly -50%, so the moment the first track leaves the
 * viewport the second is precisely where it started - a seamless loop.
 */
export function Marquee() {
  const reduced = useReducedMotion();
  const track = [...ITEMS, ...ITEMS];

  return (
    <div className="w-full overflow-hidden border-y border-paper/15 bg-ink py-6">
      <motion.div
        className="flex w-max gap-10 whitespace-nowrap"
        animate={reduced ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {[0, 1].map((copy) => (
          <div key={copy} className="flex gap-10" aria-hidden={copy === 1}>
            {track.slice(0, ITEMS.length).map((item, i) => (
              <span key={i} className="flex items-center gap-10">
                <span className="display text-3xl uppercase text-silver/70 md:text-5xl">
                  {item}
                </span>
                <span className="text-silver/30">&#9679;</span>
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
