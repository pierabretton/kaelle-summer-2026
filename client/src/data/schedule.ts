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
  | "tennis"
  | "tbc";

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
  label: string;
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
    label: "Dakodas Camp",
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
  tbc: {
    color: "text-gray-700",
    bg: "bg-[#E0E0E0]",
    border: "border-[#BDBDBD]",
    icon: "❓",
    label: "TBC",
  },
};

// ── Helpers ───────────────────────────────────────────────────
function day(date: string, label: string, blocks: TimeBlock[]): DaySchedule {
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
  websiteLabel: "Dakodas Camp",
  note: "Performing arts holiday camp · Ages 4–17 · Dance, drama, acrobatics & musical theatre",
};

const BALLET_INFO = {
  address: "Christchurch, Victoria Road, W8 5RQ",
  addressUrl: "https://maps.google.com/?q=Christchurch+Victoria+Road+London+W8+5RQ",
  websiteUrl: "https://the-kensington-ballet-school.classforkids.io/camp/63",
  websiteLabel: "Book Ballet Camp — Kensington Ballet School",
  note: "Kensington Ballet School Holiday Camp · Ages approx 3–6 · Mon 20 – Fri 24 Jul · 9:00am–12:00 midday",
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

// ── Week 0: July 6–10 2026 — Piera Holidays ──────────────────
// Wed Jul 8: tennis 3:10–4pm · Fri Jul 10: tennis 4–5pm
const week0Days: DaySchedule[] = [
  day("2026-07-06", "Mon · Jul 6", [
    block("09:00", "18:00", "tbc", "TBC", "❓", { note: "Activities to be confirmed" }),
  ]),
  day("2026-07-07", "Tue · Jul 7", [
    block("09:00", "18:00", "tbc", "TBC", "❓", { note: "Activities to be confirmed" }),
  ]),
  day("2026-07-08", "Wed · Jul 8", [
    block("09:00", "15:10", "tbc", "TBC", "❓", { note: "Activities to be confirmed" }),
    block("15:10", "16:00", "tennis", "Teddy Tennis", "🎾", TENNIS_INFO),
  ]),
  day("2026-07-09", "Thu · Jul 9", [
    block("09:00", "18:00", "tbc", "TBC", "❓", { note: "Activities to be confirmed" }),
  ]),
  day("2026-07-10", "Fri · Jul 10", [
    block("09:00", "16:00", "tbc", "TBC", "❓", { note: "Activities to be confirmed" }),
    block("16:00", "17:00", "tennis", "Teddy Tennis", "🎾", TENNIS_INFO),
  ]),
];

// ── Week 1: July 13–17 2026 — Summer Camp (Dakodas) ──────────
// Wed Jul 15: tennis 3:10–4pm · Fri Jul 17: tennis 4–5pm
const week1Days: DaySchedule[] = [
  day("2026-07-13", "Mon · Jul 13", [
    block("09:00", "15:30", "summer-camp", "Dakodas Camp", "☀️", DAKODAS_INFO),
    block("15:30", "18:00", "purple-dragon", "Purple Dragon with Nanny", "🐉"),
  ]),
  day("2026-07-14", "Tue · Jul 14", [
    block("09:00", "15:30", "summer-camp", "Dakodas Camp", "☀️", DAKODAS_INFO),
    block("15:30", "18:00", "purple-dragon", "Purple Dragon with Nanny", "🐉"),
  ]),
  day("2026-07-15", "Wed · Jul 15", [
    block("09:00", "15:30", "summer-camp", "Dakodas Camp", "☀️", DAKODAS_INFO),
    block("15:10", "16:00", "tennis", "Teddy Tennis", "🎾", TENNIS_INFO),
  ]),
  day("2026-07-16", "Thu · Jul 16", [
    block("09:00", "15:30", "summer-camp", "Dakodas Camp", "☀️", DAKODAS_INFO),
    block("15:30", "18:00", "purple-dragon", "Purple Dragon with Nanny", "🐉"),
  ]),
  day("2026-07-17", "Fri · Jul 17", [
    block("09:00", "15:30", "summer-camp", "Dakodas Camp", "☀️", DAKODAS_INFO),
    block("16:00", "17:00", "tennis", "Teddy Tennis", "🎾", TENNIS_INFO),
  ]),
];

// ── Week 2: July 20–24 2026 — Ballet Camp ────────────────────
// Wed Jul 22: tennis 3:10–4pm (last Wed) · Fri Jul 24: tennis 4–5pm (last Fri)
const week2Days: DaySchedule[] = [
  day("2026-07-20", "Mon · Jul 20", [
    block("09:00", "12:00", "ballet-camp", "Ballet Camp", "🩰", BALLET_INFO),
    block("12:00", "18:00", "purple-dragon", "Purple Dragon with Nanny", "🐉"),
  ]),
  day("2026-07-21", "Tue · Jul 21", [
    block("09:00", "12:00", "ballet-camp", "Ballet Camp", "🩰", BALLET_INFO),
    block("12:00", "18:00", "purple-dragon", "Purple Dragon with Nanny", "🐉"),
  ]),
  day("2026-07-22", "Wed · Jul 22", [
    block("09:00", "12:00", "ballet-camp", "Ballet Camp", "🩰", BALLET_INFO),
    block("12:00", "15:10", "purple-dragon", "Purple Dragon with Nanny", "🐉"),
    block("15:10", "16:00", "tennis", "Teddy Tennis (Last Wed)", "🎾", {
      ...TENNIS_INFO,
      note: "Last Wednesday tennis class of the season · Court 3, Holland Park W8 6LU",
    }),
  ]),
  day("2026-07-23", "Thu · Jul 23", [
    block("09:00", "12:00", "ballet-camp", "Ballet Camp", "🩰", BALLET_INFO),
    block("12:00", "18:00", "purple-dragon", "Purple Dragon with Nanny", "🐉"),
  ]),
  day("2026-07-24", "Fri · Jul 24", [
    block("09:00", "12:00", "ballet-camp", "Ballet Camp", "🩰", BALLET_INFO),
    block("12:00", "16:00", "purple-dragon", "Purple Dragon with Nanny", "🐉"),
    block("16:00", "17:00", "tennis", "Teddy Tennis (Last Fri)", "🎾", {
      ...TENNIS_INFO,
      note: "Last Friday tennis class of the season · Court 3, Holland Park W8 6LU",
    }),
  ]),
];

// ── Weeks 3–5: Aug 4–22 2026 — Kalmar Kids (3 weeks) ─────────
function kalmarWeek(dates: Array<[string, string]>): DaySchedule[] {
  return dates.map(([date, label]) =>
    day(date, label, [
      block("08:45", "14:00", "calmar-kids", "Kalmar Kids Summer Camp", "🌿", KALMAR_INFO),
      block("14:00", "18:00", "purple-dragon", "Purple Dragon with Nanny", "🐉"),
    ])
  );
}

const week3Days = kalmarWeek([
  ["2026-08-03", "Mon · Aug 3"],
  ["2026-08-04", "Tue · Aug 4"],
  ["2026-08-05", "Wed · Aug 5"],
  ["2026-08-06", "Thu · Aug 6"],
  ["2026-08-07", "Fri · Aug 7"],
]);

const week4Days = kalmarWeek([
  ["2026-08-10", "Mon · Aug 10"],
  ["2026-08-11", "Tue · Aug 11"],
  ["2026-08-12", "Wed · Aug 12"],
  ["2026-08-13", "Thu · Aug 13"],
  ["2026-08-14", "Fri · Aug 14"],
]);

const week5Days = kalmarWeek([
  ["2026-08-17", "Mon · Aug 17"],
  ["2026-08-18", "Tue · Aug 18"],
  ["2026-08-19", "Wed · Aug 19"],
  ["2026-08-20", "Thu · Aug 20"],
  ["2026-08-21", "Fri · Aug 21"],
]);

// ── Mallorca Holiday: Aug 20 – Oct 31 2026 ────────────────────
export const MALLORCA_BLOCK = {
  start: "2026-08-20",
  end: "2026-10-31",
  activity: "mallorca" as ActivityType,
  label: "Holiday in Mallorca! 🌴",
  note: "Family holiday — away from Aug 20 through Oct 31",
};

export const WEEKS: WeekGroup[] = [
  {
    id: "week0",
    title: "Week 1 — TBC",
    subtitle: "July 6 – 10",
    dateRange: "Jul 6–10, 2026",
    days: week0Days,
  },
  {
    id: "week1",
    title: "Week 2 — Dakodas Camp",
    subtitle: "July 13 – 17",
    dateRange: "Jul 13–17, 2026",
    days: week1Days,
  },
  {
    id: "week2",
    title: "Week 3 — Ballet Camp",
    subtitle: "July 20 – 24",
    dateRange: "Jul 20–24, 2026",
    days: week2Days,
  },
  {
    id: "week3",
    title: "Week 4 — Kalmar Kids Camp",
    subtitle: "August 3 – 7",
    dateRange: "Aug 3–7, 2026",
    days: week3Days,
  },
  {
    id: "week4",
    title: "Week 5 — Kalmar Kids Camp",
    subtitle: "August 10 – 14",
    dateRange: "Aug 10–14, 2026",
    days: week4Days,
  },
  {
    id: "week5",
    title: "Week 6 — Kalmar Kids Camp",
    subtitle: "August 17 – 21",
    dateRange: "Aug 17–21, 2026",
    days: week5Days,
  },
];
