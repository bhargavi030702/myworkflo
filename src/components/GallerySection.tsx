"use client";
import { LogEntry } from "@/lib/markdown";
import { useState } from "react";
import { Reveal } from "./motion/Reveal";
import { motion, AnimatePresence } from "framer-motion";

const prose =
  "[&>ul]:list-disc [&>ul]:pl-5 [&>ul>li]:mb-2 [&>p]:mb-4 [&>p>strong]:text-ink " +
  "[&>ul>li>strong]:text-ink [&>pre]:bg-ink [&>pre]:text-paper [&>pre]:p-5 " +
  "[&>pre]:overflow-x-auto [&>pre]:text-xs [&>pre]:font-mono [&>pre]:my-6 " +
  "[&>p>code]:bg-stone [&>p>code]:px-1.5 [&>p>code]:py-0.5 [&>p>code]:font-mono";

function WorkRow({ log, index }: { log: LogEntry; index: number }) {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="border-b border-paper/25"
    >
      <button
        onClick={() => setOpen(!open)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="group relative isolate grid w-full grid-cols-12 items-baseline gap-4 py-7 text-left md:py-9"
      >
        {/* Ink wipe: sweeps in from the left, out to the right */}
        <motion.span
          aria-hidden
          initial={false}
          animate={{ scaleX: hover ? 1 : 0 }}
          style={{ originX: hover ? 0 : 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-x-[-1.5rem] inset-y-0 -z-10 bg-paper"
        />
        <span
          className={`meta col-span-12 transition-colors duration-300 md:col-span-3 ${
            hover ? "text-ink/75" : "text-paper/60"
          }`}
        >
          {log.week} &nbsp;/&nbsp; {log.date}
        </span>
        <span
          className={`display col-span-11 text-3xl uppercase transition-colors duration-300 md:col-span-8 md:text-5xl ${
            hover ? "text-ink" : "text-paper"
          }`}
        >
          {log.title}
        </span>
        <span
          className={`display col-span-1 justify-self-end text-2xl transition-all duration-500 ${
            hover ? "text-ink" : "text-silver"
          }`}
          style={{ transform: open ? "rotate(45deg)" : "none" }}
          aria-hidden
        >
          +
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-12 gap-4 pb-12">
              <div className="col-span-12 md:col-span-3">
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {log.tags.map((tag) => (
                    <span key={tag} className="meta text-silver">
                      {tag}
                    </span>
                  ))}
                </div>
                {log.github && (
                  <a
                    href={log.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rule-link meta mt-6 inline-block text-paper"
                  >
                    View repository
                  </a>
                )}
              </div>
              <div
                className={`col-span-12 max-w-2xl text-sm leading-relaxed text-paper/80 md:col-span-8 ${prose}`}
                dangerouslySetInnerHTML={{ __html: log.contentHtml }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function GallerySection({ logs }: { logs: LogEntry[] }) {
  const [filter, setFilter] = useState<string>("All");
  const allTags = ["All", ...Array.from(new Set(logs.flatMap((log) => log.tags)))];
  const filteredLogs =
    filter === "All" ? logs : logs.filter((log) => log.tags.includes(filter));

  return (
    <section
      id="works"
      className="w-full bg-ink px-6 py-24 text-paper md:px-12 md:py-36"
    >
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 md:mb-20"
        >
          <Reveal>
            <h2 className="display text-4xl uppercase text-silver md:text-6xl">
              Select Works
            </h2>
          </Reveal>
          <p className="mt-6 max-w-md text-sm text-paper/70">
            A week-by-week narrative of delivered workflows. Select any line to
            read the full log.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`meta transition-opacity ${
                  filter === tag
                    ? "text-silver underline underline-offset-4"
                    : "text-paper/60 hover:opacity-60"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="border-t border-paper/25">
          {filteredLogs.map((log, idx) => (
            <WorkRow key={log.id} log={log} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
