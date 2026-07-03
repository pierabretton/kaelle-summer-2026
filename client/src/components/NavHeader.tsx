import { Link, useLocation } from "wouter";

function RainbowMark({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size * 0.65} viewBox="0 0 56 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M4 34 Q4 4 28 4 Q52 4 52 34" stroke="#F472B6" strokeWidth="5" strokeLinecap="round" fill="none"/>
      <path d="M9 34 Q9 10 28 10 Q47 10 47 34" stroke="#C084FC" strokeWidth="5" strokeLinecap="round" fill="none"/>
      <path d="M14 34 Q14 16 28 16 Q42 16 42 34" stroke="#60A5FA" strokeWidth="5" strokeLinecap="round" fill="none"/>
      <path d="M19 34 Q19 21 28 21 Q37 21 37 34" stroke="#34D399" strokeWidth="5" strokeLinecap="round" fill="none"/>
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
    <header className="sticky top-0 z-50 border-b" style={{ background: "rgba(255,240,248,0.96)", backdropFilter: "blur(8px)", borderColor: "#FBCFE8" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link href="/">
          <span className="flex items-center gap-2 cursor-pointer group">
            <RainbowMark size={26} />
            <span className="font-bold text-sm sm:text-base transition-colors group-hover:text-pink-600" style={{ fontFamily: "'Fredoka One', cursive", color: "#292524" }}>
              Raising Kaelle
            </span>
          </span>
        </Link>
        <nav className="flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = item.href === "/" ? location === "/" : location.startsWith(item.href);
            return (
              <Link key={item.href} href={item.href}>
                <span
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all cursor-pointer"
                  style={{ fontFamily: "'Poppins', sans-serif", background: isActive ? "#FCE7F3" : "transparent", color: isActive ? "#DB2777" : "#78716C" }}
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
