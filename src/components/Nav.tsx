"use client";

const links = [
  { label: "Info", href: "#info" },
  { label: "Select Works", href: "#works" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full bg-ink">
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-12">
        <a
          href="#top"
          className="meta text-silver transition-opacity hover:opacity-60"
        >
          Bhargavi
        </a>
        <div className="flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="meta text-silver transition-opacity hover:opacity-60"
            >
              {l.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
