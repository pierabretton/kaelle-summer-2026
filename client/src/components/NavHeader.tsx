// ============================================================
// NavHeader — Shared navigation for all pages
// Routes: / (home)  /blog  /summer-2026
// ============================================================

import { Link, useLocation } from "wouter";

export default function NavHeader() {
  const [location] = useLocation();

  const navItems = [
    { href: "/blog", label: "Blog", emoji: "✍️" },
    { href: "/summer-2026", label: "Summer 2026", emoji: "🌟" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">

        {/* Logo / Brand */}
        <Link href="/">
          <span className="flex items-center gap-2 cursor-pointer group">
            <span className="text-xl">🌸</span>
            <span
              className="font-bold text-gray-800 text-sm sm:text-base group-hover:text-pink-600 transition-colors"
              style={{ fontFamily: "'Fredoka One', cursive" }}
            >
              Raising Kaelle
            </span>
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-1">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? location === "/"
                : location.startsWith(item.href);
            return (
              <Link key={item.href} href={item.href}>
                <span
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all cursor-pointer ${
                    isActive
                      ? "bg-pink-100 text-pink-700"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-800"
                  }`}
                  style={{ fontFamily: "'Poppins', sans-serif" }}
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
