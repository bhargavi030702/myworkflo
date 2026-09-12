"use client";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Robot } from "./Robot";
import { Reveal } from "./motion/Reveal";

const LINES = [
  "connecting to indesk portal ...",
  "payments + receipts exported",
  "2,371 invoices matched by filename",
  "40 sheets consolidated",
  "10,432 rows transformed",
  "report pushed to google sheets",
  "183 hours returned to the team",
];

/** Types one line at a time, then moves to the next. */
function Terminal() {
  const reduced = useReducedMotion();
  const [line, setLine] = useState(0);
  const [chars, setChars] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const full = LINES[line].length;
    if (chars < full) {
      const t = setTimeout(() => setChars((c) => c + 1), 32);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setLine((l) => (l + 1) % LINES.length);
      setChars(0);
    }, 1500);
    return () => clearTimeout(t);
  }, [chars, line, reduced]);

  // Static, fully readable fallback
  if (reduced) {
    return (
      <ul className="space-y-2 font-mono text-xs text-paper/70 md:text-sm">
        {LINES.map((l) => (
          <li key={l}>
            <span className="text-silver">$</span> {l}
          </li>
        ))}
      </ul>
    );
  }

  const done = LINES.slice(Math.max(0, line - 3), line);

  return (
    <div className="font-mono text-xs leading-loose md:text-sm" aria-live="off">
      {done.map((l, i) => (
        <p key={`${l}-${i}`} className="text-paper/35">
          <span className="text-silver/50">$</span> {l}
        </p>
      ))}
      <p className="text-paper/85">
        <span className="text-silver">$</span> {LINES[line].slice(0, chars)}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.55, repeat: Infinity, repeatType: "reverse" }}
          className="ml-0.5 inline-block h-3 w-[7px] translate-y-[1px] bg-silver"
        />
      </p>
      {/* Screen readers get the whole list, not a half-typed line */}
      <span className="sr-only">{LINES.join(". ")}</span>
    </div>
  );
}

export function SystemsSection() {
  return (
    <section className="w-full overflow-hidden bg-graphite px-6 py-24 text-paper md:px-12 md:py-32">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-14 md:grid-cols-12 md:gap-8">
        <div className="flex justify-center md:col-span-4 md:justify-start">
          <Robot />
        </div>

        <div className="md:col-span-7 md:col-start-6">
          <span className="meta text-silver">Always On</span>
          <Reveal className="mt-5">
            <h2 className="display text-4xl uppercase md:text-6xl">
              Systems Running
            </h2>
          </Reveal>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-paper/70">
            Scripts that log in, pull the reports and file the numbers — so the
            work is already done before anyone sits down.
          </p>

          <div className="mt-10 border-l border-paper/20 pl-6">
            <Terminal />
          </div>

          <p className="meta mt-10 text-paper/40">
            Say hello — the robot waves back
          </p>
        </div>
      </div>
    </section>
  );
}
