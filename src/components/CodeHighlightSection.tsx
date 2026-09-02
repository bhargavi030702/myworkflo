"use client";
import { motion } from "framer-motion";

export function CodeHighlightSection() {
  return (
    <section className="w-full bg-[#111111] text-white py-32 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] mb-4 text-rose-500">Engineering</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Code Highlights</h3>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Snippet 1 */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", bounce: 0.4 }}
            className="bg-[#1A1A1A] border border-white/10 rounded-xl overflow-hidden shadow-2xl hover:shadow-[0_0_30px_rgba(225,29,72,0.15)] transition-shadow duration-500"
          >
            <div className="bg-black/50 px-6 py-3 border-b border-white/10 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
              <span className="ml-4 text-xs font-mono text-slate-400">updateDirectSummary.js</span>
            </div>
            <div className="p-6 overflow-x-auto">
              <pre className="text-sm font-mono text-rose-100 leading-relaxed">
                <code>{`const parseDateAggressive = function(val) {
  // Handles actual JS Date objects
  if (Object.prototype.toString.call(val) === "[object Date]") 
    return new Date(val);
    
  // Handles Excel serial numbers (e.g. 45123)
  if (typeof val === "number") {
    return new Date(Math.round((val - 25569) * 86400 * 1000));
  }
  
  // Handles various string formats via Regex
  // ...
};`}</code>
              </pre>
            </div>
          </motion.div>

          {/* Snippet 2 */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", bounce: 0.4, delay: 0.2 }}
            className="bg-[#1A1A1A] border border-white/10 rounded-xl overflow-hidden shadow-2xl hover:shadow-[0_0_30px_rgba(225,29,72,0.15)] transition-shadow duration-500"
          >
            <div className="bg-black/50 px-6 py-3 border-b border-white/10 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
              <span className="ml-4 text-xs font-mono text-slate-400">scraper.js</span>
            </div>
            <div className="p-6 overflow-x-auto">
              <pre className="text-sm font-mono text-rose-100 leading-relaxed">
                <code>{`// Self-Healing Recovery: If the website crashes
// automatically reload and retry export
try {
  const reportsMenu = invoiceFrame.locator('.clsmainmenu')
    .filter({ hasText: /^Reports$/i }).first();
  await reportsMenu.waitFor({ state: 'visible', timeout: 10000 });
  await reportsMenu.click();
} catch (e) {
  console.log('⚠️ Website crashed! Initiating recovery...');
  // Click Accounts tab to force-reload the iframe
  await page.getByText(/accounts/i).first().click();
  // Wait for iframe to respawn
  await invoiceFrame.locator('span[data-key="t-Payemt"]')
    .waitFor({ state: 'visible', timeout: 60000 });
  console.log('✅ Iframe recovered! Retrying...');
}`}</code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
