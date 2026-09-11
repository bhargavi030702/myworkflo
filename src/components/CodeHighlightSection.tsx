"use client";
import { motion } from "framer-motion";

const snippets = [
  {
    file: "updateDirectSummary.js",
    caption: "Aggressive date parsing",
    code: `const parseDateAggressive = function(val) {
  // Handles actual JS Date objects
  if (Object.prototype.toString.call(val) === "[object Date]")
    return new Date(val);

  // Handles Excel serial numbers (e.g. 45123)
  if (typeof val === "number") {
    return new Date(Math.round((val - 25569) * 86400 * 1000));
  }

  // Handles various string formats via Regex
  // ...
};`,
  },
  {
    file: "scraper.js",
    caption: "Self-healing RPA recovery",
    code: `// Self-Healing Recovery: If the website crashes
// automatically reload and retry export
try {
  const reportsMenu = invoiceFrame.locator('.clsmainmenu')
    .filter({ hasText: /^Reports$/i }).first();
  await reportsMenu.waitFor({ state: 'visible', timeout: 10000 });
  await reportsMenu.click();
} catch (e) {
  console.log('Website crashed. Initiating recovery...');
  // Click Accounts tab to force-reload the iframe
  await page.getByText(/accounts/i).first().click();
  // Wait for iframe to respawn
  await invoiceFrame.locator('span[data-key="t-Payemt"]')
    .waitFor({ state: 'visible', timeout: 60000 });
  console.log('Iframe recovered. Retrying...');
}`,
  },
];

export function CodeHighlightSection() {
  return (
    <section className="w-full bg-cream px-6 py-24 text-ink md:px-12 md:py-36">
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 md:mb-20"
        >
          <span className="meta text-brick">Engineering</span>
          <h2 className="display mt-5 text-4xl uppercase md:text-6xl">
            Code Highlights
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          {snippets.map((s, i) => (
            <motion.figure
              key={s.file}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <figcaption className="flex items-baseline justify-between border-b border-ink/15 pb-3">
                <span className="display text-2xl uppercase">{s.caption}</span>
                <span className="meta text-ink/45">{s.file}</span>
              </figcaption>
              <div className="mt-6 overflow-x-auto bg-ink p-6 md:p-8">
                <pre className="font-mono text-[12px] leading-relaxed text-cream/85">
                  <code>{s.code}</code>
                </pre>
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
