// ============================================================
// Design: Modern Playful Storybook
// Fredoka One display + Poppins body
// Activity colors: coral, purple, pink, teal, golden, green, rose
// Layout: hero → legend → venue reference cards → week cards → holiday banner
// ============================================================

import { useState } from "react";
import {
  ACTIVITY_META,
  WEEKS,
  MALLORCA_BLOCK,
  type ActivityType,
  type TimeBlock,
} from "@/data/schedule";
import NavHeader from "@/components/NavHeader";

// ── All venue reference data ──────────────────────────────────
const VENUE_REFS = [
  {
    activity: "summer-camp" as ActivityType,
    name: "Dakodas Camp",
    address: "More House School, 22-24 Pont Street, Knightsbridge, SW1X 0AA",
    addressUrl: "https://maps.google.com/?q=22-24+Pont+Street+Knightsbridge+London+SW1X+0AA",
    websiteUrl: "https://dakodas.co.uk/products/summer-camp-2026-holiday-camps?variant=52749716062540",
    websiteLabel: "dakodas.co.uk",
    detail: "Performing arts camp · Ages 4–17 · Dance, drama, acrobatics & musical theatre",
  },
  {
    activity: "ballet-camp" as ActivityType,
    name: "Kensington Ballet School",
    address: "Christchurch, Victoria Road, W8 5RQ",
    addressUrl: "https://maps.google.com/?q=Christchurch+Victoria+Road+London+W8+5RQ",
    websiteUrl: "https://the-kensington-ballet-school.classforkids.io/camp/63",
    websiteLabel: "Book ballet camp place",
    detail: "Holiday Camp · Ages approx 3–6 · Mon 20 – Fri 24 Jul · 9:00am–12:00 midday",
  },
  {
    activity: "calmar-kids" as ActivityType,
    name: "Kalmer Kids",
    address: "Tadpoles Nursery, The Studio, 8 Hornton Place, Kensington, W8 4LZ",
    addressUrl: "https://maps.google.com/?q=8+Hornton+Place+Kensington+London+W8+4LZ",
    websiteUrl: "https://www.kalmerkids.com/classes",
    websiteLabel: "kalmerkids.com",
    detail: "Nature play, mindfulness & creative calm · Ages 3–8 · 8:45am–2pm",
  },
  {
    activity: "tennis" as ActivityType,
    name: "Teddy Tennis Holland Park",
    address: "Court 3, Holland Park, London W8 6LU",
    addressUrl: "https://maps.google.com/?q=Holland+Park+Court+3+London+W8+6LU",
    websiteUrl: "https://teddytennisuk.co.uk/centre/holland-park/",
    websiteLabel: "teddytennisuk.co.uk",
    detail: "Court 3, next to the outside gym on the High Street Kensington side of the park",
  },
];

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

// ── Venue reference card ──────────────────────────────────────
function VenueCard({ venue }: { venue: typeof VENUE_REFS[0] }) {
  const meta = ACTIVITY_META[venue.activity];
  return (
    <div className={`rounded-2xl border-2 ${meta.border} bg-white shadow-sm overflow-hidden flex-shrink-0 w-64 sm:w-72`}>
      {/* Coloured header strip */}
      <div className={`${meta.bg} px-4 py-2 flex items-center gap-2`}>
        <span className="text-lg">{meta.icon}</span>
        <span className={`font-bold text-sm ${meta.color}`}>{venue.name}</span>
      </div>
      <div className="px-4 py-3 space-y-2 text-sm text-gray-700">
        <p className="text-gray-500 text-xs leading-snug">{venue.detail}</p>
        <div className="flex items-start gap-1.5">
          <span className="mt-0.5 flex-shrink-0">📍</span>
          <a
            href={venue.addressUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline leading-snug"
          >
            {venue.address}
          </a>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="flex-shrink-0">🔗</span>
          <a
            href={venue.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            {venue.websiteLabel}
          </a>
        </div>
      </div>
    </div>
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
          {b.note && <p className="text-gray-600 leading-relaxed">{b.note}</p>}
          {b.address && (
            <div className="flex items-start gap-2">
              <span className="text-base mt-0.5">📍</span>
              <div>
                <div className="font-semibold text-gray-800 text-xs uppercase tracking-wide mb-0.5">Address</div>
                {b.addressUrl ? (
                  <a href={b.addressUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline leading-snug">
                    {b.address}
                  </a>
                ) : (
                  <span>{b.address}</span>
                )}
              </div>
            </div>
          )}
          {b.websiteUrl && (
            <div className="flex items-center gap-2">
              <span className="text-base">🔗</span>
              <div>
                <div className="font-semibold text-gray-800 text-xs uppercase tracking-wide mb-0.5">Website</div>
                <a href={b.websiteUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
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
      >
        <span className="text-base leading-none flex-shrink-0">{b.icon}</span>
        <div className="flex flex-col min-w-0">
          <span className="leading-tight truncate">{b.label}</span>
          <span className="text-xs font-normal opacity-90 mt-0.5">{b.start} – {b.end}</span>
        </div>
        {hasDetails && <span className="ml-auto text-white/80 text-xs flex-shrink-0">ℹ️</span>}
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
function WeekCard({ week, index }: { week: import("@/data/schedule").WeekGroup; index: number }) {
  const tints = ["bg-pink-50", "bg-orange-50", "bg-fuchsia-50", "bg-orange-50", "bg-teal-50", "bg-teal-50", "bg-teal-50"];
  const tint = tints[index] ?? "bg-gray-50";
  const allDays = [...week.days, ...(week.weekendDays ?? [])];
  const colCount = allDays.length;

  return (
    <div
      className={`rounded-3xl border border-gray-200 shadow-md overflow-hidden ${tint}`}
      style={{ animationDelay: `${index * 80}ms`, animation: "fadeSlideUp 0.5s cubic-bezier(0.23,1,0.32,1) both" }}
    >
      <div className="px-6 pt-5 pb-3 border-b border-gray-200/70">
        <div className="flex items-baseline gap-3 flex-wrap">
          <h2 className="text-xl font-bold text-gray-800" style={{ fontFamily: "'Fredoka One', cursive" }}>
            {week.title}
          </h2>
          <span className="text-sm font-medium text-gray-500 bg-white/70 rounded-full px-3 py-0.5 border border-gray-200">
            📅 {week.dateRange}
          </span>
        </div>
        {week.note && (
          <div className="mt-2 inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 text-amber-800 text-xs font-medium rounded-full px-3 py-1">
            {week.note}
          </div>
        )}
      </div>

      {/* Mon–Sun all in one scrollable row */}
      <div className="p-4 overflow-x-auto">
        <div
          className="grid gap-3"
          style={{
            gridTemplateColumns: `repeat(${colCount}, minmax(130px, 1fr))`,
            minWidth: colCount >= 7 ? "920px" : "640px",
          }}
        >
          {allDays.map((d) => (
            <DayColumn key={d.date} day={d} />
          ))}
        </div>
      </div>

      <div className="px-6 pb-4 text-xs text-gray-400 flex items-center gap-1">
        <span>ℹ️</span> Tap any activity with an info icon for venue details &amp; links
      </div>
    </div>
  );
}

// ── Mallorca holiday banner ───────────────────────────────────
function MallorcaBanner() {
  return (
    <div
      className="rounded-3xl overflow-hidden shadow-lg"
      style={{
        background: "linear-gradient(135deg, #FFB300 0%, #FF8F00 50%, #FF6F00 100%)",
        animation: "fadeSlideUp 0.5s cubic-bezier(0.23,1,0.32,1) both",
        animationDelay: "480ms",
      }}
    >
      <div className="px-8 py-8 flex flex-col sm:flex-row items-center gap-6">
        <div className="text-6xl sm:text-7xl leading-none select-none">🌴</div>
        <div className="text-center sm:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-1" style={{ fontFamily: "'Fredoka One', cursive" }}>
            Holiday in Mallorca!
          </h2>
          <p className="text-white/90 text-lg font-medium">August 20 – 31, 2026</p>
          <p className="text-white/75 text-sm mt-1">Family holiday — away for 10 days ☀️🏖️</p>
        </div>
        <div className="sm:ml-auto flex gap-3 text-4xl select-none">
          <span>🌊</span><span>🐚</span><span>⛵</span>
        </div>
      </div>
    </div>
  );
}

// ── Main page ─────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "#FAFAF8", fontFamily: "'Poppins', sans-serif" }}>

      <NavHeader />

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
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight" style={{ fontFamily: "'Fredoka One', cursive" }}>
              🌟 Kaelle Summer Activities 2026
            </h1>
            <p className="text-gray-600 text-base sm:text-lg mt-1 font-medium">
              July 6th to August 31st
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">

        {/* ── Activity legend ── */}
        <div
          className="bg-white rounded-3xl border border-gray-200 shadow-sm px-6 py-5"
          style={{ animation: "fadeSlideUp 0.5s cubic-bezier(0.23,1,0.32,1) both", animationDelay: "80ms" }}
        >
          <h2 className="text-lg font-bold text-gray-700 mb-3" style={{ fontFamily: "'Fredoka One', cursive" }}>
            Activity Legend
          </h2>
          <div className="flex flex-wrap gap-2">
            {(Object.keys(ACTIVITY_META) as ActivityType[]).map((type) => (
              <LegendPill key={type} type={type} />
            ))}
          </div>
        </div>

        {/* ── Venue reference cards carousel ── */}
        <div
          className="bg-white rounded-3xl border border-gray-200 shadow-sm px-6 py-5"
          style={{ animation: "fadeSlideUp 0.5s cubic-bezier(0.23,1,0.32,1) both", animationDelay: "140ms" }}
        >
          <h2 className="text-lg font-bold text-gray-700 mb-1" style={{ fontFamily: "'Fredoka One', cursive" }}>
            📍 Venues &amp; Booking Links
          </h2>
          <p className="text-xs text-gray-400 mb-4">Swipe to see all venues →</p>
          <div className="flex gap-4 overflow-x-auto pb-2 -mx-2 px-2" style={{ scrollbarWidth: "none" }}>
            {VENUE_REFS.map((v) => (
              <VenueCard key={v.name} venue={v} />
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
