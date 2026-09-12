"use client";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/**
 * Line-art robot drawn as inline SVG.
 * - Pupils track the cursor (clamped, so the eyes never leave their sockets)
 * - Blinks on a randomised timer
 * - Antenna pulses
 * - Click it and it waves
 * Everything stills under prefers-reduced-motion.
 */
export function Robot() {
  const reduced = useReducedMotion();
  const ref = useRef<SVGSVGElement>(null);
  const [blink, setBlink] = useState(false);
  const [wave, setWave] = useState(false);

  const px = useSpring(useMotionValue(0), { stiffness: 160, damping: 16 });
  const py = useSpring(useMotionValue(0), { stiffness: 160, damping: 16 });
  const headTilt = useSpring(useMotionValue(0), { stiffness: 90, damping: 14 });

  // Pupils follow the pointer
  useEffect(() => {
    if (reduced) return;
    const onMove = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      const dist = Math.hypot(dx, dy) || 1;
      const reach = 3.4; // SVG units - keeps the pupil inside the eye
      px.set((dx / dist) * reach);
      py.set((dy / dist) * reach);
      headTilt.set(Math.max(-6, Math.min(6, dx / 60)));
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [px, py, headTilt, reduced]);

  // Irregular blinking reads as alive; a fixed interval reads as a machine
  useEffect(() => {
    if (reduced) return;
    let t: ReturnType<typeof setTimeout>;
    const loop = () => {
      t = setTimeout(() => {
        setBlink(true);
        setTimeout(() => setBlink(false), 130);
        loop();
      }, 2200 + Math.random() * 3200);
    };
    loop();
    return () => clearTimeout(t);
  }, [reduced]);

  const eyeRy = blink ? 0.6 : 5;

  return (
    <motion.svg
      ref={ref}
      viewBox="0 0 200 210"
      role="img"
      aria-label="Illustration of a robot"
      className="w-[190px] cursor-pointer select-none md:w-[230px]"
      onClick={() => {
        setWave(true);
        setTimeout(() => setWave(false), 1200);
      }}
      animate={reduced ? undefined : { y: [0, -9, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
      <g fill="none" stroke="#C4C4C4" strokeWidth="2.2" strokeLinecap="round">
        {/* Antenna */}
        <line x1="100" y1="26" x2="100" y2="46" />
        <motion.circle
          cx="100"
          cy="20"
          r="5.5"
          fill="#C4C4C4"
          stroke="none"
          animate={reduced ? undefined : { opacity: [1, 0.25, 1], r: [5.5, 7, 5.5] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Signal arcs */}
        {!reduced &&
          [0, 1].map((i) => (
            <motion.circle
              key={i}
              cx="100"
              cy="20"
              r="5.5"
              stroke="#C4C4C4"
              animate={{ r: [5.5, 20], opacity: [0.55, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 1,
                ease: "easeOut",
              }}
            />
          ))}

        {/* Head */}
        <motion.g style={reduced ? undefined : { rotate: headTilt, originX: "100px", originY: "95px" }}>
          <rect x="46" y="46" width="108" height="78" rx="16" />
          {/* Eyes */}
          <motion.ellipse cx="78" cy="82" rx="12" ry="12" stroke="#C4C4C4" />
          <motion.ellipse cx="122" cy="82" rx="12" ry="12" stroke="#C4C4C4" />
          <motion.ellipse
            cx="78" cy="82" rx="5" fill="#C4C4C4" stroke="none"
            style={reduced ? undefined : { x: px, y: py }}
            animate={{ ry: eyeRy }}
            transition={{ duration: 0.09 }}
          />
          <motion.ellipse
            cx="122" cy="82" rx="5" fill="#C4C4C4" stroke="none"
            style={reduced ? undefined : { x: px, y: py }}
            animate={{ ry: eyeRy }}
            transition={{ duration: 0.09 }}
          />
          {/* LED mouth */}
          {[86, 94, 102, 110].map((x, i) => (
            <motion.rect
              key={x} x={x} y="104" width="5" height="5" rx="1"
              fill="#C4C4C4" stroke="none"
              animate={reduced ? undefined : { opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.16 }}
            />
          ))}
        </motion.g>

        {/* Neck + body */}
        <line x1="100" y1="124" x2="100" y2="136" />
        <rect x="58" y="136" width="84" height="56" rx="12" />
        {/* Status LEDs on the chest */}
        {[76, 90, 104].map((x, i) => (
          <motion.circle
            key={x} cx={x} cy="152" r="3.4" fill="#C4C4C4" stroke="none"
            animate={reduced ? undefined : { opacity: [0.25, 1, 0.25] }}
            transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.45 }}
          />
        ))}
        <line x1="72" y1="172" x2="128" y2="172" />

        {/* Left arm */}
        <path d="M58 150 L36 162 L36 178" />
        {/* Right arm - waves on click */}
        <motion.path
          d="M142 150 L164 162 L164 178"
          style={{ originX: "142px", originY: "150px" }}
          animate={
            reduced ? undefined : wave ? { rotate: [0, -52, -28, -52, 0] } : { rotate: 0 }
          }
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </g>
    </motion.svg>
  );
}
