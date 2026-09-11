"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

/**
 * Masked reveal: the child slides up from behind a clipping edge.
 * The classic editorial entrance - nothing fades, it arrives.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <span className={`block overflow-hidden ${className}`}>
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}

/**
 * Splits a word into letters, each masked and staggered.
 * Used for the hero wordmark.
 */
export function SplitText({
  text,
  delay = 0,
  stagger = 0.035,
  className = "",
}: {
  text: string;
  delay?: number;
  stagger?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();

  if (reduced)
    return <span className={`block ${className}`}>{text}</span>;

  return (
    <span className={`block overflow-hidden ${className}`} aria-label={text}>
      {text.split("").map((ch, i) => (
        <motion.span
          key={`${ch}-${i}`}
          aria-hidden
          className="inline-block"
          initial={{ y: "110%" }}
          animate={{ y: "0%" }}
          transition={{
            duration: 1.1,
            delay: delay + i * stagger,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {ch}
        </motion.span>
      ))}
    </span>
  );
}
