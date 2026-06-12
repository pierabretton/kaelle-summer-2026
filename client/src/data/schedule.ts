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
  | "tbc"
  | "nwg"
  | "weekend-tbc";

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
  weekendDays?: DaySchedule[];
  note?: string;
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
    label: "Kalmer Kids",
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
    color: "text-white",
    bg: "bg-[#D81B60]",
    border: "border-[#D81B60]",
    icon: "🌸",
    label: "Piera's Week",
  },
  nwg: {
    color: "text-white",
    bg: "bg-[#1565C0]",
    border: "border-[#1565C0]",
    icon: "🤸",
    label: "NWG Gymnastics",
  },
  "weekend-tbc": {
    color: "text-gray-700",
    bg: "bg-[#F5F5F5]",
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

const BALLET_CLASS_INFO = {
  address: "St Philip's Church, Earls Court Road, London",
  addressUrl: "https://maps.google.com/?q=St+Philips+Church+Earls+Court+Road+London",
  websiteUrl: "https://the-kensington-ballet-school.classforkids.io/camp/63",
  websiteLabel: "Kensington Ballet School",
  note: "Weekly ballet class at St Philip's Church, Earls Court Road",
};

const KALMAR_INFO = {
  address: "Tadpoles Nursery, The Studio, 8 Hornton Place, Kensington, W8 4LZ",
  addressUrl: "https://maps.google.com/?q=8+Hornton+Place+Kensington+London+W8+4LZ",
  websiteUrl: "https://www.kalmerkids.com/classes",
  websiteLabel: "Kalmer Kids",
  note: "Nature play, mindfulness & creative calm · Ages 3–8 · 8:45am–2pm",
};

const NWG_INFO = {
  address: "Marlborough Primary School, London",
  addressUrl: "https://maps.google.com/?q=Marlborough+Primary+School+London",
  websiteLabel: "NWG Gymnastics",
  note: "NWG Gymnastics class · Sundays 9:45–10:35am · Marlborough Primary School",
};

const DAKODAS_SAT_INFO = {
  ...{
    address: "More House School, 22-24 Pont Street, Knightsbridge, SW1X 0AA",
    addressUrl: "https://maps.google.com/?q=22-24+Pont+Street+Knightsbridge+London+SW1X+0AA",
    websiteUrl: "https://dakodas.co.uk/products/summer-camp-2026-holiday-camps?variant=52749716062540",
    websiteLabel: "Dakodas Camp",
    note: "Saturday morning session · 10:00–11:30am",
  },
};

const WEEKEND_TBC_NOTE = { note: "TBC — Farmhouse / Babington House / Paw Patrol Park" };

// ── Weekend days ──────────────────────────────────────────────
// Saturdays: Dakodas 10-11:30am until Jul 11; then TBC
// Sundays: NWG 9:45-10:35am until Jul 19; then TBC

const weekendsByWeek: Record<string, DaySchedule[]> = {
  week0: [
    // Weekend of Jul 11-12 (first weekend after Jul 6 start)
    day("2026-07-11", "Sat · Jul 11", [
      block("10:00", "11:30", "summer-camp", "Dakodas Saturday (Last)", "☀️", { ...DAKODAS_SAT_INFO, note: "Last Saturday Dakodas session · 10:00–11:30am" }),
    ]),
    day("2026-07-12", "Sun · Jul 12", [
      block("09:45", "10:35", "nwg", "NWG Gymnastics", "🤸", NWG_INFO),
      block("10:35", "18:00", "weekend-tbc", "TBC", "❓", WEEKEND_TBC_NOTE),
    ]),
  ],
  week1: [
    // Weekend of Jul 18-19 — last NWG Sunday
    day("2026-07-18", "Sat · Jul 18", [
      block("09:00", "18:00", "weekend-tbc", "TBC", "❓", WEEKEND_TBC_NOTE),
    ]),
    day("2026-07-19", "Sun · Jul 19", [
      block("09:45", "10:35", "nwg", "NWG Gymnastics (Last)", "🤸", { ...NWG_INFO, note: "Last NWG class of the season · Sundays 9:45–10:35am" }),
      block("10:35", "18:00", "weekend-tbc", "TBC", "❓", WEEKEND_TBC_NOTE),
    ]),
  ],
  week2: [
    day("2026-07-25", "Sat · Jul 25", [
      block("09:00", "18:00", "weekend-tbc", "TBC", "❓", WEEKEND_TBC_NOTE),
    ]),
    day("2026-07-26", "Sun · Jul 26", [
      block("09:00", "18:00", "weekend-tbc", "TBC", "❓", WEEKEND_TBC_NOTE),
    ]),
  ],
  week2b: [
    day("2026-08-01", "Sat · Aug 1", [
      block("09:00", "18:00", "weekend-tbc", "TBC", "❓", WEEKEND_TBC_NOTE),
    ]),
    day("2026-08-02", "Sun · Aug 2", [
      block("09:00", "18:00", "weekend-tbc", "TBC", "❓", WEEKEND_TBC_NOTE),
    ]),
  ],
  week3: [
    day("2026-08-08", "Sat · Aug 8", [
      block("09:00", "18:00", "weekend-tbc", "TBC", "❓", WEEKEND_TBC_NOTE),
    ]),
    day("2026-08-09", "Sun · Aug 9", [
      block("09:00", "18:00", "weekend-tbc", "TBC", "❓", WEEKEND_TBC_NOTE),
    ]),
  ],
  week4: [
    day("2026-08-15", "Sat · Aug 15", [
      block("09:00", "18:00", "weekend-tbc", "TBC", "❓", WEEKEND_TBC_NOTE),
    ]),
    day("2026-08-16", "Sun · Aug 16", [
      block("09:00", "18:00", "weekend-tbc", "TBC", "❓", WEEKEND_TBC_NOTE),
    ]),
  ],
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
    block("09:00", "16:00", "tbc", "Piera's Week", "🌸", { note: "No nanny this week" }),
    block("16:00", "17:00", "ballet-camp", "Ballet Class", "🩰", BALLET_CLASS_INFO),
  ]),
  day("2026-07-07", "Tue · Jul 7", [
    block("09:00", "18:00", "tbc", "Piera's Week", "🌸", { note: "No nanny this week" }),
  ]),
  day("2026-07-08", "Wed · Jul 8", [
    block("09:00", "15:10", "tbc", "Piera's Week", "🌸", { note: "No nanny this week" }),
    block("15:10", "16:00", "tennis", "Teddy Tennis", "🎾", TENNIS_INFO),
  ]),
  day("2026-07-09", "Thu · Jul 9", [
    block("09:00", "18:00", "tbc", "Piera's Week", "🌸", { note: "No nanny this week" }),
  ]),
  day("2026-07-10", "Fri · Jul 10", [
    block("09:00", "16:00", "tbc", "Piera's Week", "🌸", { note: "No nanny this week" }),
    block("16:00", "17:00", "tennis", "Teddy Tennis", "🎾", TENNIS_INFO),
  ]),
];

// ── Week 1: July 13–17 2026 — Summer Camp (Dakodas) ──────────
// Wed Jul 15: tennis 3:10–4pm · Fri Jul 17: tennis 4–5pm
const week1Days: DaySchedule[] = [
  day("2026-07-13", "Mon · Jul 13", [
    block("09:00", "15:30", "summer-camp", "Dakodas Camp", "☀️", DAKODAS_INFO),
    block("16:00", "17:00", "ballet-camp", "Ballet Class", "🩰", BALLET_CLASS_INFO),
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
    block("16:00", "17:00", "tennis", "Teddy Tennis (Last Fri)", "🎾", {
      ...TENNIS_INFO,
      note: "Last Friday tennis class of the season · Court 3, Holland Park W8 6LU",
    }),
  ]),
];

// ── Week 3: July 27–31 2026 — Dakodas Camp ─────────────────────
const week2bDays: DaySchedule[] = [
  day("2026-07-27", "Mon · Jul 27", [
    block("09:00", "15:30", "summer-camp", "Dakodas Camp", "☀️", DAKODAS_INFO),
    block("15:30", "18:00", "purple-dragon", "Purple Dragon with Nanny", "🐉"),
  ]),
  day("2026-07-28", "Tue · Jul 28", [
    block("09:00", "15:30", "summer-camp", "Dakodas Camp", "☀️", DAKODAS_INFO),
    block("15:30", "18:00", "purple-dragon", "Purple Dragon with Nanny", "🐉"),
  ]),
  day("2026-07-29", "Wed · Jul 29", [
    block("09:00", "15:30", "summer-camp", "Dakodas Camp", "☀️", DAKODAS_INFO),
    block("15:30", "18:00", "purple-dragon", "Purple Dragon with Nanny", "🐉"),
  ]),
  day("2026-07-30", "Thu · Jul 30", [
    block("09:00", "15:30", "summer-camp", "Dakodas Camp", "☀️", DAKODAS_INFO),
    block("15:30", "18:00", "purple-dragon", "Purple Dragon with Nanny", "🐉"),
  ]),
  day("2026-07-31", "Fri · Jul 31", [
    block("09:00", "15:30", "summer-camp", "Dakodas Camp", "☀️", DAKODAS_INFO),
    block("15:30", "18:00", "purple-dragon", "Purple Dragon with Nanny", "🐉"),
  ]),
];

// ── Weeks 5–7: Aug 3–21 2026 — Kalmer Kids (3 weeks) ─────────
function kalmarWeek(dates: Array<[string, string]>): DaySchedule[] {
  return dates.map(([date, label]) =>
    day(date, label, [
      block("08:45", "14:00", "calmar-kids", "Kalmer Kids", "🌿", KALMAR_INFO),
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

const week5Days: DaySchedule[] = [
  ...kalmarWeek([
    ["2026-08-17", "Mon · Aug 17"],
    ["2026-08-18", "Tue · Aug 18"],
    ["2026-08-19", "Wed · Aug 19"],
  ]),
  day("2026-08-20", "Thu · Aug 20", [
    block("00:00", "23:59", "mallorca", "✈️ Flight to Mallorca!", "🌴", {
      note: "Departing today — family holiday begins! 🌴☀️",
    }),
  ]),
  day("2026-08-21", "Fri · Aug 21", [
    block("00:00", "23:59", "mallorca", "Mallorca Holiday", "🌴", {
      note: "Family holiday — away until Aug 31",
    }),
  ]),
];

// ── Mallorca Holiday: Aug 20 – Oct 31 2026 ────────────────────
export const MALLORCA_BLOCK = {
  start: "2026-08-20",
  end: "2026-08-31",
  activity: "mallorca" as ActivityType,
  label: "Holiday in Mallorca! 🌴",
  note: "Family holiday — away from Aug 20 through Aug 31",
};

export const WEEKS: WeekGroup[] = [
  {
    id: "week0",
    title: "Week 1 — Piera's Week",
    subtitle: "July 6 – 10",
    dateRange: "Jul 6–10, 2026",
    days: week0Days,
    weekendDays: weekendsByWeek.week0,
  },
  {
    id: "week1",
    title: "Week 2 — Dakodas Camp",
    subtitle: "July 13 – 17",
    dateRange: "Jul 13–17, 2026",
    days: week1Days,
    weekendDays: weekendsByWeek.week1,
  },
  {
    id: "week2",
    title: "Week 3 — Ballet Camp",
    subtitle: "July 20 – 24",
    dateRange: "Jul 20–24, 2026",
    days: week2Days,
    weekendDays: weekendsByWeek.week2,
  },
  {
    id: "week2b",
    title: "Week 4 — Dakodas Camp",
    subtitle: "July 27 – 31",
    dateRange: "Jul 27–31, 2026",
    days: week2bDays,
    weekendDays: weekendsByWeek.week2b,
    note: "👵 Grandmother arrives Jul 28 — staying until end of August",
  },
  {
    id: "week3",
    title: "Week 5 — Kalmer Kids",
    subtitle: "August 3 – 7",
    dateRange: "Aug 3–7, 2026",
    days: week3Days,
    weekendDays: weekendsByWeek.week3,
    note: "👵 Grandmother visiting",
  },
  {
    id: "week4",
    title: "Week 6 — Kalmer Kids",
    subtitle: "August 10 – 14",
    dateRange: "Aug 10–14, 2026",
    days: week4Days,
    weekendDays: weekendsByWeek.week4,
    note: "👵 Grandmother visiting",
  },
  {
    id: "week5",
    title: "Week 7 — Kalmer Kids + Mallorca",
    subtitle: "August 17 – 21",
    dateRange: "Aug 17–21, 2026",
    days: week5Days,
  },
];
