"use client";

export function Footer() {
  return (
    <footer className="w-full bg-olive px-6 py-16 text-cream md:px-12">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-14">
        <div>
          <h2 className="font-display text-4xl uppercase tracking-[0.14em] text-blush md:text-5xl">
            Bhargavi
          </h2>
          <p className="font-display text-2xl italic text-cream/85 md:text-3xl">
            bhargavi.bhaladhare@riya.travel
          </p>
        </div>

        <div className="flex flex-col gap-6 border-t border-cream/20 pt-8 md:flex-row md:items-end md:justify-between">
          <p className="meta text-cream/50">
            Automation Engineer Intern &nbsp;/&nbsp; Riya Travel &nbsp;/&nbsp; 2026
          </p>
          <div className="flex gap-7 font-display text-lg">
            <a
              className="rule-link"
              href="https://www.linkedin.com/in/bhargavibhaladharee/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="rule-link"
              href="https://github.com/bhargavi030702"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a className="rule-link" href="mailto:bhargavi.bhaladhare@riya.travel">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
