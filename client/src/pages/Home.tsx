// ============================================================
// Design: Modern Playful Storybook
// Fredoka One display + Poppins body
// Activity colors: coral, purple, pink, teal, golden, green
// Layout: hero banner → legend → week cards → holiday banner
// ============================================================

import { useState } from "react";
import {
  ACTIVITY_META,
  WEEKS,
  MALLORCA_BLOCK,
  type ActivityType,
  type TimeBlock,
} from "@/data/schedule";

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

// ── Venue detail popup ────────────────────────────────────────
function VenuePopup({ block: b, onClose }: { block: TimeBlock; onClose: () => void }) {
  const meta = ACTIVITY_META[b.activity];
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-3xl shadow-2xl max-w-sm w-full p-6 z-10"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: "popIn 0.2s cubic-bezier(0.23,1,0.32,1) both" }}
      >
        {/* Header */}
        <div className={`flex items-center gap-3 mb-4 p-3 rounded-2xl ${meta.bg}`}>
          <span className="text-2xl">{b.icon}</span>
          <div>
            <div className={`font-bold text-base leading-tight ${meta.color}`}>{b.label}</div>
            <div className={`text-sm opacity-90 ${meta.color}`}>{b.start} – {b.end}</div>
          </div>
          <button
            onClick={onClose}
            className="ml-auto text-white/80 hover:text-white text-xl leading-none font-bold"
          >
            ×
          </button>
        </div>

        <div className="space-y-3 text-sm text-gray-700">
          {/* Note */}
          {b.note && (
            <p className="text-gray-600 leading-relaxed">{b.note}</p>
          )}

          {/* Address */}
          {b.address && (
            <div className="flex items-start gap-2">
              <span className="text-base mt-0.5">📍</span>
              <div>
                <div className="font-semibold text-gray-800 text-xs uppercase tracking-wide mb-0.5">Address</div>
                {b.addressUrl ? (
                  <a
                    href={b.addressUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline leading-snug"
                  >
                    {b.address}
                  </a>
                ) : (
                  <span>{b.address}</span>
                )}
              </div>
            </div>
          )}

          {/* Website link */}
          {b.websiteUrl && (
            <div className="flex items-center gap-2">
              <span className="text-base">🔗</span>
              <div>
                <div className="font-semibold text-gray-800 text-xs uppercase tracking-wide mb-0.5">Website</div>
                <a
                  href={b.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {b.websiteLabel ?? b.websiteUrl}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Time block pill ───────────────────────────────────────────
function ActivityPill({ block: b }: { block: TimeBlock }) {
  const meta = ACTIVITY_META[b.activity];
  const [open, setOpen] = useState(false);
  const hasDetails = !!(b.note || b.address || b.websiteUrl);

  return (
    <>
      <div
        className={`
          flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-semibold
          ${meta.bg} ${meta.color} shadow-sm
          transition-transform duration-150 ease-out
          ${hasDetails ? "hover:scale-[1.03] cursor-pointer" : "cursor-default"}
          select-none
        `}
        onClick={() => hasDetails && setOpen(true)}
        title={hasDetails ? "Click for details" : undefined}
      >
        <span className="text-base leading-none flex-shrink-0">{b.icon}</span>
        <div className="flex flex-col min-w-0">
          <span className="leading-tight truncate">{b.label}</span>
          <span className="text-xs font-normal opacity-90 mt-0.5">
            {b.start} – {b.end}
          </span>
        </div>
        {hasDetails && (
          <span className="ml-auto text-white/70 text-xs flex-shrink-0">ℹ️</span>
        )}
      </div>

      {open && <VenuePopup block={b} onClose={() => setOpen(false)} />}
    </>
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
  const tints = [
    "bg-pink-50",   // week0: Piera
    "bg-orange-50", // week1: Summer Camp
    "bg-fuchsia-50", // week2: Ballet
    "bg-teal-50",   // week3: Kalmar
    "bg-teal-50",   // week4: Kalmar
    "bg-teal-50",   // week5: Kalmar
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
          <h2
            className="text-xl font-bold text-gray-800"
            style={{ fontFamily: "'Fredoka One', cursive" }}
          >
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

      {/* Tap hint */}
      <div className="px-6 pb-4 text-xs text-gray-400 flex items-center gap-1">
        <span>ℹ️</span> Tap any activity with an info icon for venue details &amp; links
      </div>
    </div>
  );
}

// ── Mallorca holiday banner ────────────────────────────────────
function MallorcaBanner() {
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
            Holiday in Mallorca!
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
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div
            className="bg-white/80 backdrop-blur-sm rounded-3xl px-8 py-5 shadow-xl text-center mx-4"
            style={{ animation: "fadeSlideUp 0.6s cubic-bezier(0.23,1,0.32,1) both" }}
          >
            <h1
              className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight"
              style={{ fontFamily: "'Fredoka One', cursive" }}
            >
              🌟 Kaelle Sola's Summer 2025
            </h1>
            <p className="text-gray-600 text-base sm:text-lg mt-1 font-medium">
              A fun-filled summer of camps, ballet &amp; adventures!
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

        {/* ── Mallorca holiday ── */}
        <MallorcaBanner />

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
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.92); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
