// ============================================================
// Design: Modern Playful Storybook
// Fredoka One display + Poppins body
// Activity colors: coral, purple, pink, teal, golden
// Layout: hero banner → legend → week cards → holiday banner
// ============================================================

import { useState } from "react";
import { ACTIVITY_META, WEEKS, MAJORCA_BLOCK, type ActivityType, type TimeBlock } from "@/data/schedule";

// ── Legend pill ───────────────────────────────────────────────
function LegendPill({ type }: { type: ActivityType }) {
  const meta = ACTIVITY_META[type];
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold ${meta.bg} ${meta.color} shadow-sm`}
    >
      <span>{meta.icon}</span>
      {meta.label}
    </span>
  );
}

// ── Time block pill ───────────────────────────────────────────
function ActivityPill({ block }: { block: TimeBlock }) {
  const meta = ACTIVITY_META[block.activity];
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`
          flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-semibold
          ${meta.bg} ${meta.color} shadow-sm
          transition-transform duration-150 ease-out
          hover:scale-[1.03] cursor-default select-none
        `}
      >
        <span className="text-base leading-none">{block.icon}</span>
        <div className="flex flex-col min-w-0">
          <span className="leading-tight truncate">{block.label}</span>
          <span className="text-xs font-normal opacity-90 mt-0.5">
            {block.start} – {block.end}
          </span>
        </div>
      </div>

      {/* Tooltip */}
      {hovered && block.note && (
        <div className="absolute bottom-full left-0 mb-2 z-10 bg-gray-900 text-white text-xs rounded-lg px-3 py-2 shadow-xl whitespace-nowrap pointer-events-none">
          {block.note}
          <div className="absolute top-full left-4 border-4 border-transparent border-t-gray-900" />
        </div>
      )}
    </div>
  );
}

// ── Day column ────────────────────────────────────────────────
function DayColumn({ day }: { day: import("@/data/schedule").DaySchedule }) {
  return (
    <div className="flex flex-col gap-2 min-w-0">
      <div className="text-center mb-1">
        <span className="inline-block bg-white/80 border border-gray-200 rounded-lg px-2 py-1 text-xs font-bold text-gray-600 shadow-sm whitespace-nowrap">
          {day.label}
        </span>
      </div>
      <div className="flex flex-col gap-2">
        {day.blocks.map((b, i) => (
          <ActivityPill key={i} block={b} />
        ))}
      </div>
    </div>
  );
}

// ── Week card ─────────────────────────────────────────────────
function WeekCard({
  week,
  index,
}: {
  week: import("@/data/schedule").WeekGroup;
  index: number;
}) {
  // Pick a soft background tint per week
  const tints = [
    "bg-orange-50",
    "bg-pink-50",
    "bg-teal-50",
    "bg-teal-50",
    "bg-teal-50",
  ];
  const tint = tints[index] ?? "bg-gray-50";

  return (
    <div
      className={`rounded-3xl border border-gray-200 shadow-md overflow-hidden ${tint}`}
      style={{
        animationDelay: `${index * 80}ms`,
        animation: "fadeSlideUp 0.5s cubic-bezier(0.23,1,0.32,1) both",
      }}
    >
      {/* Card header */}
      <div className="px-6 pt-5 pb-3 border-b border-gray-200/70">
        <div className="flex items-baseline gap-3 flex-wrap">
          <h2 className="text-xl font-bold text-gray-800" style={{ fontFamily: "'Fredoka One', cursive" }}>
            {week.title}
          </h2>
          <span className="text-sm font-medium text-gray-500 bg-white/70 rounded-full px-3 py-0.5 border border-gray-200">
            📅 {week.dateRange}
          </span>
        </div>
      </div>

      {/* Days grid */}
      <div className="p-4 overflow-x-auto">
        <div className="grid grid-cols-5 gap-3 min-w-[640px]">
          {week.days.map((d) => (
            <DayColumn key={d.date} day={d} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Majorca holiday banner ────────────────────────────────────
function MajorcaBanner() {
  return (
    <div
      className="rounded-3xl overflow-hidden shadow-lg"
      style={{
        background: "linear-gradient(135deg, #FFB300 0%, #FF8F00 50%, #FF6F00 100%)",
        animation: "fadeSlideUp 0.5s cubic-bezier(0.23,1,0.32,1) both",
        animationDelay: "400ms",
      }}
    >
      <div className="px-8 py-8 flex flex-col sm:flex-row items-center gap-6">
        <div className="text-6xl sm:text-7xl leading-none select-none">🌴</div>
        <div className="text-center sm:text-left">
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-1"
            style={{ fontFamily: "'Fredoka One', cursive" }}
          >
            Holiday in Majorca!
          </h2>
          <p className="text-white/90 text-lg font-medium">
            August 20 – October 31, 2025
          </p>
          <p className="text-white/75 text-sm mt-1">
            Family holiday — away for 10 weeks ☀️🏖️
          </p>
        </div>
        <div className="sm:ml-auto flex gap-3 text-4xl select-none">
          <span>🌊</span>
          <span>🐚</span>
          <span>⛵</span>
        </div>
      </div>
    </div>
  );
}

// ── Main page ─────────────────────────────────────────────────
export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "#FAFAF8", fontFamily: "'Poppins', sans-serif" }}
    >
      {/* ── Hero banner ── */}
      <div className="relative w-full overflow-hidden" style={{ maxHeight: 320 }}>
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/114475865/fcnRB92aqzXPLyket3a6sm/hero-banner-5hE25s5mBzsyLc8rmA5kV9.webp"
          alt="Summer illustration"
          className="w-full object-cover object-top"
          style={{ maxHeight: 320 }}
        />
        {/* Overlay title */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div
            className="bg-white/80 backdrop-blur-sm rounded-3xl px-8 py-5 shadow-xl text-center mx-4"
            style={{ animation: "fadeSlideUp 0.6s cubic-bezier(0.23,1,0.32,1) both" }}
          >
            <h1
              className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight"
              style={{ fontFamily: "'Fredoka One', cursive" }}
            >
              🌟 Summer 2025 Calendar
            </h1>
            <p className="text-gray-600 text-base sm:text-lg mt-1 font-medium">
              A fun-filled summer of camps, ballet & adventures!
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">

        {/* ── Activity legend ── */}
        <div
          className="bg-white rounded-3xl border border-gray-200 shadow-sm px-6 py-5"
          style={{ animation: "fadeSlideUp 0.5s cubic-bezier(0.23,1,0.32,1) both", animationDelay: "100ms" }}
        >
          <h2
            className="text-lg font-bold text-gray-700 mb-3"
            style={{ fontFamily: "'Fredoka One', cursive" }}
          >
            Activity Legend
          </h2>
          <div className="flex flex-wrap gap-2">
            {(Object.keys(ACTIVITY_META) as ActivityType[]).map((type) => (
              <LegendPill key={type} type={type} />
            ))}
          </div>
        </div>

        {/* ── Week cards ── */}
        {WEEKS.map((week, i) => (
          <WeekCard key={week.id} week={week} index={i} />
        ))}

        {/* ── Majorca holiday ── */}
        <MajorcaBanner />

        {/* ── Footer ── */}
        <footer className="text-center text-gray-400 text-sm pb-6">
          Made with 💛 for a wonderful summer adventure
        </footer>
      </div>

      {/* ── Global animations ── */}
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
