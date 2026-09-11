"use client";

export function Footer() {
  return (
    <footer className="w-full bg-ink px-6 py-20 text-paper md:px-12">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-14">
        <h2
          className="display uppercase text-silver"
          style={{ fontSize: "clamp(2.5rem, 9vw, 7rem)" }}
        >
          Bhargavi
        </h2>

        <div className="flex flex-col gap-6 border-t border-paper/25 pt-8 md:flex-row md:items-end md:justify-between">
          <p className="meta text-paper/60">
            Automation Engineer Intern &nbsp;/&nbsp; Riya Travel &nbsp;/&nbsp; 2026
          </p>
          <div className="flex gap-7">
            <a
              className="rule-link meta text-paper"
              href="https://www.linkedin.com/in/bhargavibhaladharee/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="rule-link meta text-paper"
              href="https://github.com/bhargavi030702"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
