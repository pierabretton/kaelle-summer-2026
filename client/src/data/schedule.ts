// ============================================================
// Design: Modern Playful Storybook
// Color-coded by activity, Fredoka One display, Poppins body
// ============================================================

export type ActivityType =
  | "summer-camp"
  | "purple-dragon"
  | "ballet-camp"
  | "calmar-kids"
  | "mallorca"
  | "tennis";

export interface TimeBlock {
  start: string; // "HH:MM"
  end: string;
  activity: ActivityType;
  label: string;
  icon: string;
  note?: string;
  address?: string;
  addressUrl?: string;
  websiteUrl?: string;
  websiteLabel?: string;
}

export interface DaySchedule {
  date: string; // ISO "YYYY-MM-DD"
  label: string; // "Mon Jul 13"
  blocks: TimeBlock[];
}

export interface WeekGroup {
  id: string;
  title: string;
  subtitle: string;
  dateRange: string;
  days: DaySchedule[];
}

export const ACTIVITY_META: Record<
  ActivityType,
  { color: string; bg: string; border: string; icon: string; label: string }
> = {
  "summer-camp": {
    color: "text-white",
    bg: "bg-[#FF7B54]",
    border: "border-[#FF7B54]",
    icon: "☀️",
    label: "Summer Camp",
  },
  "purple-dragon": {
    color: "text-white",
    bg: "bg-[#9B59B6]",
    border: "border-[#9B59B6]",
    icon: "🐉",
    label: "Purple Dragon",
  },
  "ballet-camp": {
    color: "text-white",
    bg: "bg-[#E91E8C]",
    border: "border-[#E91E8C]",
    icon: "🩰",
    label: "Ballet Camp",
  },
  "calmar-kids": {
    color: "text-white",
    bg: "bg-[#26A69A]",
    border: "border-[#26A69A]",
    icon: "🌿",
    label: "Kalmar Kids Camp",
  },
  mallorca: {
    color: "text-white",
    bg: "bg-[#FFB300]",
    border: "border-[#FFB300]",
    icon: "🌴",
    label: "Mallorca Holiday",
  },
  tennis: {
    color: "text-white",
    bg: "bg-[#2E7D32]",
    border: "border-[#2E7D32]",
    icon: "🎾",
    label: "Teddy Tennis",
  },
};

// Helper to build a day
function day(
  date: string,
  label: string,
  blocks: TimeBlock[]
): DaySchedule {
  return { date, label, blocks };
}

function block(
  start: string,
  end: string,
  activity: ActivityType,
  label: string,
  icon: string,
  extra?: Partial<Omit<TimeBlock, "start" | "end" | "activity" | "label" | "icon">>
): TimeBlock {
  return { start, end, activity, label, icon, ...extra };
}

// ── Shared venue info ─────────────────────────────────────────
const DAKODAS_INFO = {
  address: "More House School, 22-24 Pont Street, Knightsbridge, SW1X 0AA",
  addressUrl: "https://maps.google.com/?q=22-24+Pont+Street+Knightsbridge+London+SW1X+0AA",
  websiteUrl: "https://dakodas.co.uk/products/summer-camp-2026-holiday-camps?variant=52749716062540",
  websiteLabel: "Dakodas Summer Camp",
  note: "Performing arts holiday camp · Ages 4–17 · Dance, drama, acrobatics & musical theatre",
};

const KALMAR_INFO = {
  address: "Tadpoles Nursery, The Studio, 8 Hornton Place, Kensington, W8 4LZ",
  addressUrl: "https://maps.google.com/?q=8+Hornton+Place+Kensington+London+W8+4LZ",
  websiteUrl: "https://www.kalmerkids.com/classes",
  websiteLabel: "Kalmar Kids Camp",
  note: "Nature play, mindfulness & creative calm · Ages 3–8 · 8:45am–2pm",
};

const TENNIS_INFO = {
  address: "Court 3, Holland Park, London W8 6LU",
  addressUrl: "https://maps.google.com/?q=Holland+Park+Court+3+London+W8+6LU",
  websiteUrl: "https://teddytennisuk.co.uk/centre/holland-park/",
  websiteLabel: "Teddy Tennis Holland Park",
  note: "Court 3, next to the outside gym on the High Street Kensington side of the park",
};

// ── Week 1: July 13–17 — Summer Camp ─────────────────────────
// Wed Jul 16: tennis 3:10–4pm (no Purple Dragon)
// Fri Jul 17: tennis 4–5pm (no Purple Dragon)
const week1Days: DaySchedule[] = [
  day("2025-07-13", "Mon · Jul 13", [
    block("09:00", "15:30", "summer-camp", "Summer Camp", "☀️", DAKODAS_INFO),
    block("15:30", "18:00", "purple-dragon", "Purple Dragon with Nanny", "🐉"),
  ]),
  day("2025-07-14", "Tue · Jul 14", [
    block("09:00", "15:30", "summer-camp", "Summer Camp", "☀️", DAKODAS_INFO),
    block("15:30", "18:00", "purple-dragon", "Purple Dragon with Nanny", "🐉"),
  ]),
  day("2025-07-15", "Wed · Jul 15", [
    block("09:00", "15:30", "summer-camp", "Summer Camp", "☀️", DAKODAS_INFO),
    block("15:30", "18:00", "purple-dragon", "Purple Dragon with Nanny", "🐉"),
  ]),
  day("2025-07-16", "Wed · Jul 16", [
    block("09:00", "15:30", "summer-camp", "Summer Camp", "☀️", DAKODAS_INFO),
    block("15:10", "16:00", "tennis", "Teddy Tennis", "🎾", TENNIS_INFO),
  ]),
  day("2025-07-17", "Fri · Jul 17", [
    block("09:00", "15:30", "summer-camp", "Summer Camp", "☀️", DAKODAS_INFO),
    block("16:00", "17:00", "tennis", "Teddy Tennis", "🎾", TENNIS_INFO),
  ]),
];

// ── Week 2: July 20–24 — Ballet Camp ─────────────────────────
// Wed Jul 22: tennis 3:10–4pm (no Purple Dragon that afternoon)
// Fri Jul 24: tennis 4–5pm (no Purple Dragon that afternoon) — last class
const week2Days: DaySchedule[] = [
  day("2025-07-20", "Mon · Jul 20", [
    block("09:00", "12:30", "ballet-camp", "Ballet Camp", "🩰"),
    block("12:30", "18:00", "purple-dragon", "Purple Dragon with Nanny", "🐉"),
  ]),
  day("2025-07-21", "Tue · Jul 21", [
    block("09:00", "12:30", "ballet-camp", "Ballet Camp", "🩰"),
    block("12:30", "18:00", "purple-dragon", "Purple Dragon with Nanny", "🐉"),
  ]),
  day("2025-07-22", "Wed · Jul 22", [
    block("09:00", "12:30", "ballet-camp", "Ballet Camp", "🩰"),
    block("12:30", "15:10", "purple-dragon", "Purple Dragon with Nanny", "🐉"),
    block("15:10", "16:00", "tennis", "Teddy Tennis (Last Wed Class)", "🎾", {
      ...TENNIS_INFO,
      note: "Last Wednesday tennis class of the season · Court 3, Holland Park W8 6LU",
    }),
  ]),
  day("2025-07-23", "Thu · Jul 23", [
    block("09:00", "12:30", "ballet-camp", "Ballet Camp", "🩰"),
    block("12:30", "18:00", "purple-dragon", "Purple Dragon with Nanny", "🐉"),
  ]),
  day("2025-07-24", "Fri · Jul 24", [
    block("09:00", "12:30", "ballet-camp", "Ballet Camp", "🩰"),
    block("12:30", "16:00", "purple-dragon", "Purple Dragon with Nanny", "🐉"),
    block("16:00", "17:00", "tennis", "Teddy Tennis (Last Fri Class)", "🎾", {
      ...TENNIS_INFO,
      note: "Last Friday tennis class of the season · Court 3, Holland Park W8 6LU",
    }),
  ]),
];

// ── Weeks 3–5: Aug 4–22 — Kalmar Kids (3 weeks) ──────────────
function kalmarWeek(
  dates: Array<[string, string]>
): DaySchedule[] {
  return dates.map(([date, label]) =>
    day(date, label, [
      block("08:45", "14:00", "calmar-kids", "Kalmar Kids Summer Camp", "🌿", KALMAR_INFO),
      block("14:00", "18:00", "purple-dragon", "Purple Dragon with Nanny", "🐉"),
    ])
  );
}

const week3Days = kalmarWeek([
  ["2025-08-04", "Mon · Aug 4"],
  ["2025-08-05", "Tue · Aug 5"],
  ["2025-08-06", "Wed · Aug 6"],
  ["2025-08-07", "Thu · Aug 7"],
  ["2025-08-08", "Fri · Aug 8"],
]);

const week4Days = kalmarWeek([
  ["2025-08-11", "Mon · Aug 11"],
  ["2025-08-12", "Tue · Aug 12"],
  ["2025-08-13", "Wed · Aug 13"],
  ["2025-08-14", "Thu · Aug 14"],
  ["2025-08-15", "Fri · Aug 15"],
]);

const week5Days = kalmarWeek([
  ["2025-08-18", "Mon · Aug 18"],
  ["2025-08-19", "Tue · Aug 19"],
  ["2025-08-20", "Wed · Aug 20"],
  ["2025-08-21", "Thu · Aug 21"],
  ["2025-08-22", "Fri · Aug 22"],
]);

// ── Mallorca Holiday: Aug 20 – Oct 31 ─────────────────────────
export const MALLORCA_BLOCK = {
  start: "2025-08-20",
  end: "2025-10-31",
  activity: "mallorca" as ActivityType,
  label: "Holiday in Mallorca! 🌴",
  note: "Family holiday — away from Aug 20 through Oct 31",
};

export const WEEKS: WeekGroup[] = [
  {
    id: "week1",
    title: "Week 1 — Summer Camp",
    subtitle: "July 13 – 17",
    dateRange: "Jul 13–17, 2025",
    days: week1Days,
  },
  {
    id: "week2",
    title: "Week 2 — Ballet Camp",
    subtitle: "July 20 – 24",
    dateRange: "Jul 20–24, 2025",
    days: week2Days,
  },
  {
    id: "week3",
    title: "Week 3 — Kalmar Kids Camp",
    subtitle: "August 4 – 8",
    dateRange: "Aug 4–8, 2025",
    days: week3Days,
  },
  {
    id: "week4",
    title: "Week 4 — Kalmar Kids Camp",
    subtitle: "August 11 – 15",
    dateRange: "Aug 11–15, 2025",
    days: week4Days,
  },
  {
    id: "week5",
    title: "Week 5 — Kalmar Kids Camp",
    subtitle: "August 18 – 22",
    dateRange: "Aug 18–22, 2025",
    days: week5Days,
  },
];
