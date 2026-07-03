// ============================================================
// NavHeader — Shared navigation
// Brand: French-Peruvian family · Rainbow mark · Neutral palette
// ============================================================

import { Link, useLocation } from "wouter";

function RainbowMark({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size * 0.65} viewBox="0 0 56 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M4 34 Q4 4 28 4 Q52 4 52 34" stroke="#E07B54" strokeWidth="5" strokeLinecap="round" fill="none"/>
      <path d="M9 34 Q9 10 28 10 Q47 10 47 34" stroke="#E8A84C" strokeWidth="5" strokeLinecap="round" fill="none"/>
      <path d="M14 34 Q14 16 28 16 Q42 16 42 34" stroke="#6BAA8E" strokeWidth="5" strokeLinecap="round" fill="none"/>
      <path d="M19 34 Q19 21 28 21 Q37 21 37 34" stroke="#7B9BB5" strokeWidth="5" strokeLinecap="round" fill="none"/>
    </svg>
  );
}

export default function NavHeader() {
  const [location] = useLocation();

  const navItems = [
    { href: "/blog", label: "Blog", emoji: "✍️" },
    { href: "/summer-2026", label: "Summer 2026", emoji: "☀️" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b" style={{ background: "rgba(250,248,245,0.96)", backdropFilter: "blur(8px)", borderColor: "#EDE8E1" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">

        {/* Logo */}
        <Link href="/">
          <span className="flex items-center gap-2 cursor-pointer group">
            <RainbowMark size={26} />
            <span
              className="font-bold text-stone-800 text-sm sm:text-base transition-colors group-hover:text-[#C1694F]"
              style={{ fontFamily: "'Fredoka One', cursive" }}
            >
              Raising Kaelle
            </span>
          </span>
        </Link>

        {/* Nav */}
        <nav className="flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = item.href === "/" ? location === "/" : location.startsWith(item.href);
            return (
              <Link key={item.href} href={item.href}>
                <span
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all cursor-pointer"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    background: isActive ? "#FDF0EC" : "transparent",
                    color: isActive ? "#C1694F" : "#6B6259",
                  }}
                >
                  <span>{item.emoji}</span>
                  <span className="hidden sm:inline">{item.label}</span>
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
