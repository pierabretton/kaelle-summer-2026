// ============================================================
// RaisingKaelleHome — Brand home page
// Palette: Pale pink + soft lavender + warm white (less terracotta)
// New sections: Kiki & the Mews, real Kaelle photos, expanded upcoming posts
// ============================================================

import { Link } from "wouter";
import { POSTS } from "@/data/posts";
import NavHeader from "@/components/NavHeader";

// ── Palette tokens ────────────────────────────────────────────
const P = {
  pink:       "#F472B6",   // medium pink — accents
  pinkLight:  "#FCE7F3",   // pale pink — backgrounds
  pinkMid:    "#FBCFE8",   // slightly deeper pink — borders
  pinkDeep:   "#DB2777",   // deep pink — CTAs
  lavender:   "#EDE9FE",   // soft lavender — Kiki section bg
  lavMid:     "#C4B5FD",   // lavender border
  navy:       "#1E3A5F",   // navy — Kiki character accent
  stone:      "#78716C",   // body text
  stoneDark:  "#292524",   // headings
  bg:         "#FFFBFE",   // page background — warm white with pink tint
  card:       "#FFFFFF",
};

// ── Rainbow SVG mark ──────────────────────────────────────────
function RainbowMark({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size * 0.65} viewBox="0 0 56 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M4 34 Q4 4 28 4 Q52 4 52 34" stroke="#F472B6" strokeWidth="4.5" strokeLinecap="round" fill="none"/>
      <path d="M9 34 Q9 10 28 10 Q47 10 47 34" stroke="#C084FC" strokeWidth="4.5" strokeLinecap="round" fill="none"/>
      <path d="M14 34 Q14 16 28 16 Q42 16 42 34" stroke="#60A5FA" strokeWidth="4.5" strokeLinecap="round" fill="none"/>
      <path d="M19 34 Q19 21 28 21 Q37 21 37 34" stroke="#34D399" strokeWidth="4.5" strokeLinecap="round" fill="none"/>
    </svg>
  );
}

// ── Heritage strip ────────────────────────────────────────────
function HeritageStrip() {
  const items = ["🇫🇷 French", "🇵🇪 Peruvian", "🇬🇧 London", "🗣️ EN · ES · FR"];
  return (
    <div className="flex items-center gap-2 flex-wrap">
      {items.map((item) => (
        <span key={item} className="inline-flex items-center gap-1.5 bg-white border rounded-full px-3 py-1 text-xs font-medium shadow-sm" style={{ borderColor: P.pinkMid, color: P.stone, fontFamily: "'Poppins', sans-serif" }}>
          {item}
        </span>
      ))}
    </div>
  );
}

// ── Photo mosaic ──────────────────────────────────────────────
function PhotoMosaic() {
  // Only photos where Kaelle has sunglasses/goggles — keeps her face private
  const photos = [
    { src: "/images/kaelle-skiing1.webp", alt: "Kaelle in unicorn ski helmet and goggles", caption: "Unicorn helmet approved" },
    { src: "/images/kaelle-snow.webp", alt: "Kaelle in silver suit with pink sunglasses", caption: "Silver suit energy" },
    { src: "/images/kaelle-skiing2.webp", alt: "Kaelle at ski school with goggles", caption: "Ski school, Val Thorens" },
  ];

  return (
    <section style={{ animation: "fadeSlideUp 0.5s cubic-bezier(0.23,1,0.32,1) both", animationDelay: "150ms" }}>
      <h2 className="text-2xl font-bold mb-5" style={{ fontFamily: "'Fredoka One', cursive", color: P.stoneDark }}>
        📸 Kaelle in Action
      </h2>
      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        {photos.map((p, i) => (
          <div key={i} className="relative overflow-hidden rounded-2xl aspect-square group shadow-sm hover:shadow-md transition-shadow">
            <img
              src={p.src}
              alt={p.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
              <span className="text-white text-xs font-medium leading-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>{p.caption}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Kiki & the Mews section ───────────────────────────────────
function KikiSection() {
  const characters = [
    { src: "/images/kiki-kiki.webp", name: "Kiki", role: "The Protagonist", desc: "Pink, bold, and full of opinions. Kiki is Kaelle's alter ego in the story — a little alpaca navigating London life with style." },
    { src: "/images/kiki-mom.webp", name: "Maman", role: "The Cool Mum", desc: "Striped Breton top, round sunglasses, and a silk scarf. Très Parisienne. Always slightly chaotic, always chic." },
    { src: "/images/kiki-dad.webp", name: "Papa", role: "The Steady One", desc: "Ralph Lauren polo, warm brown eyes, and the patience of a saint. The family's anchor — quiet, dependable, and always there." },
    { src: "/images/kiki-alex.webp", name: "Alex", role: "The Troublemaker", desc: "Baseball cap, 'Here Comes Trouble' sweater. Kaelle's best friend in the story — and the reason things go sideways." },
  ];

  return (
    <section
      className="rounded-3xl overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #EDE9FE 0%, #FCE7F3 100%)",
        border: `1.5px solid ${P.lavMid}`,
        animation: "fadeSlideUp 0.5s cubic-bezier(0.23,1,0.32,1) both",
        animationDelay: "200ms",
      }}
    >
      <div className="px-6 sm:px-8 pt-8 pb-6">
        {/* Header */}
        <div className="flex items-start gap-4 mb-2">
          <div className="text-4xl select-none">🦙</div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full text-white" style={{ background: P.pinkDeep, fontFamily: "'Poppins', sans-serif" }}>
                Coming Soon
              </span>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ color: P.navy, background: "rgba(30,58,95,0.08)", fontFamily: "'Poppins', sans-serif" }}>
                Children's Book Series
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold" style={{ fontFamily: "'Fredoka One', cursive", color: P.navy }}>
              Kiki & the Mews
            </h2>
            <p className="text-sm mt-1 max-w-lg" style={{ color: P.stone, fontFamily: "'Poppins', sans-serif" }}>
              A children's book series born from Kaelle's real life — a trilingual alpaca family living in a London mews, navigating new schools, new languages, and the beautiful chaos of growing up between two cultures.
            </p>
          </div>
        </div>

        {/* Family photo */}
        <div className="my-5 rounded-2xl overflow-hidden shadow-md">
          <img
            src="/images/kiki-family.png"
            alt="Kiki and the Mews family — Papa, Maman, Kiki, and Alex"
            className="w-full object-cover max-h-56 sm:max-h-72 object-top"
          />
        </div>

        {/* Character cards — fixed equal height, object-contain so no character is cropped larger */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {characters.map((c) => (
            <div key={c.name} className="bg-white/80 rounded-2xl p-3 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-full rounded-xl overflow-hidden mb-2 flex items-end justify-center" style={{ height: "160px", background: "rgba(237,233,254,0.4)" }}>
                <img src={c.src} alt={c.name} className="max-h-full max-w-full object-contain" loading="lazy" style={{ display: "block" }} />
              </div>
              <p className="font-bold text-sm" style={{ fontFamily: "'Fredoka One', cursive", color: P.navy }}>{c.name}</p>
              <p className="text-xs font-semibold mb-1" style={{ color: P.pinkDeep, fontFamily: "'Poppins', sans-serif" }}>{c.role}</p>
              <p className="text-xs leading-snug hidden sm:block" style={{ color: P.stone, fontFamily: "'Poppins', sans-serif" }}>{c.desc}</p>
            </div>
          ))}
        </div>

        {/* Teaser CTA */}
        <div className="mt-5 bg-white/60 rounded-2xl px-5 py-4 border" style={{ borderColor: P.lavMid }}>
          <p className="text-sm font-semibold mb-1" style={{ color: P.navy, fontFamily: "'Poppins', sans-serif" }}>
            🌟 The story behind the story
          </p>
          <p className="text-xs leading-relaxed" style={{ color: P.stone, fontFamily: "'Poppins', sans-serif" }}>
            Kiki & the Mews started as bedtime stories we told Kaelle about a little pink alpaca who, just like her, was growing up speaking three languages in a London mews. The books are designed to help trilingual and multicultural families talk about identity, belonging, and the joy of being different — in a way that feels like an adventure, not a lesson.
          </p>
        </div>
      </div>
    </section>
  );
}

// ── Featured post card ────────────────────────────────────────
function FeaturedPostCard({ post }: { post: typeof POSTS[0] }) {
  const date = new Date(post.publishDate).toLocaleDateString("en-GB", {
    day: "numeric", month: "long", year: "numeric",
  });

  return (
    <Link href={`/blog/${post.slug}`}>
      <article
        className="group cursor-pointer bg-white rounded-3xl border shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
        style={{ borderColor: P.pinkMid, animation: "fadeSlideUp 0.5s cubic-bezier(0.23,1,0.32,1) both", animationDelay: "100ms" }}
      >
        <div className="h-1.5" style={{ background: `linear-gradient(90deg, ${P.pink} 0%, #C084FC 40%, #60A5FA 75%, #34D399 100%)` }} />
        <div className="p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-white px-3 py-1 rounded-full" style={{ background: P.pinkDeep, fontFamily: "'Poppins', sans-serif" }}>
              First Post
            </span>
            <span className="text-xs font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full" style={{ color: P.pinkDeep, background: P.pinkLight, fontFamily: "'Poppins', sans-serif" }}>
              {post.category}
            </span>
            <span className="text-xs" style={{ color: "#A8A29E", fontFamily: "'Poppins', sans-serif" }}>{post.readTime}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 leading-snug group-hover:text-pink-600 transition-colors" style={{ fontFamily: "'Fredoka One', cursive", color: P.stoneDark }}>
            {post.heroEmoji} {post.title}
          </h2>
          <p className="leading-relaxed mb-5 text-sm sm:text-base" style={{ color: P.stone, fontFamily: "'Poppins', sans-serif" }}>
            {post.subtitle}
          </p>
          <div className="rounded-2xl p-4 mb-5 border" style={{ background: "#FFFBEB", borderColor: "#FDE68A" }}>
            <p className="text-xs font-bold uppercase tracking-wide mb-1.5" style={{ color: "#92400E", fontFamily: "'Poppins', sans-serif" }}>⚡ Bottom Line Up Front</p>
            <p className="text-sm leading-relaxed line-clamp-3" style={{ color: "#78350F", fontFamily: "'Poppins', sans-serif" }}>{post.bluf}</p>
          </div>
          <div className="flex flex-wrap gap-2 mb-5">
            {post.tags.slice(0, 5).map((tag) => (
              <span key={tag} className="text-xs px-2.5 py-0.5 rounded-full border" style={{ color: P.stone, background: P.pinkLight, borderColor: P.pinkMid, fontFamily: "'Poppins', sans-serif" }}>
                #{tag.replace(/ /g, "-")}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between">
            <time className="text-xs" style={{ color: "#A8A29E", fontFamily: "'Poppins', sans-serif" }} dateTime={post.publishDate}>{date}</time>
            <span className="text-sm font-bold flex items-center gap-1.5 transition-colors" style={{ color: P.pinkDeep, fontFamily: "'Poppins', sans-serif" }}>
              Read the full guide →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

// ── Upcoming posts ────────────────────────────────────────────
const UPCOMING = [
  { emoji: "🚽", topic: "Potty training — what nobody tells you", tag: "2–3 years", highlight: true },
  { emoji: "🦷", topic: "Broken milk teeth: don't worry, I tell you everything", tag: "2–4 years", highlight: true, photo: "/images/kaelle-dentist.webp" },
  { emoji: "📚", topic: "All the books we read before she was born", tag: "Pre-birth", highlight: true },
  { emoji: "🎨", topic: "Creative play that actually teaches language", tag: "3–5 years", highlight: false },
  { emoji: "🌍", topic: "Raising a trilingual child: the honest guide", tag: "All ages", highlight: false },
  { emoji: "🎒", topic: "Choosing a nursery in London — what nobody tells you", tag: "2–4 years", highlight: false },

  { emoji: "🛏️", topic: "The big bed move — skipping the toddler bed entirely", tag: "2–4 years", highlight: false },
];

function UpcomingCard({ item }: { item: typeof UPCOMING[0] }) {
  return (
    <div
      className="flex items-start gap-3 bg-white rounded-2xl px-4 py-3.5 shadow-sm hover:shadow-md transition-shadow overflow-hidden relative"
      style={{ border: item.highlight ? `1.5px solid ${P.pinkMid}` : "1px solid #F3F4F6" }}
    >
      {item.highlight && (
        <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: `linear-gradient(90deg, ${P.pink}, #C084FC)` }} />
      )}
      {/* Dentist photo thumbnail */}
      {item.photo && (
        <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 mt-0.5">
          <img src={item.photo} alt="" className="w-full h-full object-cover" loading="lazy" />
        </div>
      )}
      {!item.photo && (
        <span className="text-xl flex-shrink-0 mt-0.5">{item.emoji}</span>
      )}
      <div className="min-w-0">
        <p className="text-sm font-semibold leading-snug" style={{ color: P.stoneDark, fontFamily: "'Poppins', sans-serif" }}>
          {item.emoji && item.photo ? item.emoji + " " : ""}{item.topic}
        </p>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-xs font-semibold" style={{ color: P.pinkDeep, fontFamily: "'Poppins', sans-serif" }}>{item.tag}</span>
          {item.highlight && (
            <span className="text-xs font-bold uppercase tracking-wide px-1.5 py-0.5 rounded-full text-white" style={{ background: P.pink, fontSize: "9px", fontFamily: "'Poppins', sans-serif" }}>
              Coming next
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Main home page ────────────────────────────────────────────
export default function RaisingKaelleHome() {
  const featuredPost = POSTS[0];

  return (
    <div className="min-h-screen" style={{ background: P.bg, fontFamily: "'Poppins', sans-serif" }}>
      <NavHeader />

      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden"
        style={{
          background: `linear-gradient(150deg, #FFF0F8 0%, #FDF4FF 50%, #F0F4FF 100%)`,
          animation: "fadeSlideUp 0.6s cubic-bezier(0.23,1,0.32,1) both",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: P.pinkDeep, fontFamily: "'Poppins', sans-serif" }}>
              A parenting blog · London
            </p>
            <div className="flex items-center gap-3 mb-5">
              <RainbowMark size={42} />
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight" style={{ fontFamily: "'Fredoka One', cursive", color: P.stoneDark }}>
                Raising Kaelle
              </h1>
            </div>
            <div className="mb-5"><HeritageStrip /></div>
            <p className="text-base sm:text-lg leading-relaxed mb-6 max-w-xl" style={{ color: P.stone, fontFamily: "'Poppins', sans-serif" }}>
              Honest stories from raising a trilingual child in London — the activities, the challenges, and everything nobody tells you about parenting without a village.
            </p>
            <div className="rounded-2xl p-4 mb-8 max-w-xl border" style={{ background: "rgba(255,255,255,0.80)", borderColor: P.pinkMid }}>
              <p className="text-xs font-bold uppercase tracking-wide mb-1.5" style={{ color: P.pinkDeep, fontFamily: "'Poppins', sans-serif" }}>What this blog is about</p>
              <p className="text-sm leading-relaxed" style={{ color: P.stone, fontFamily: "'Poppins', sans-serif" }}>
                We are a French-Peruvian family raising Kaelle in London — trilingual, high-energy, and full of opinions. Without the family support network that comes naturally back home, we built our own. This blog is everything we wish someone had told us, from ages 3 to 5 and beyond.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/blog">
                <span className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer text-sm" style={{ background: P.pinkDeep, fontFamily: "'Poppins', sans-serif" }}>
                  ✍️ Read the blog
                </span>
              </Link>
              <Link href="/summer-2026">
                <span className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-full border shadow-sm hover:shadow-md transition-all cursor-pointer text-sm bg-white" style={{ color: P.stone, borderColor: P.pinkMid, fontFamily: "'Poppins', sans-serif" }}>
                  ☀️ Summer 2026 calendar
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full opacity-25 pointer-events-none" style={{ background: `radial-gradient(circle, ${P.pink}, transparent)` }} />
        <div className="absolute bottom-0 right-32 w-40 h-40 rounded-full opacity-15 pointer-events-none" style={{ background: "radial-gradient(circle, #C084FC, transparent)" }} />
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-14">

        {/* ── Who is Kaelle ── */}
        <section className="bg-white rounded-3xl border shadow-sm px-6 sm:px-8 py-7" style={{ borderColor: P.pinkMid, animation: "fadeSlideUp 0.5s cubic-bezier(0.23,1,0.32,1) both", animationDelay: "80ms" }}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="text-5xl select-none flex-shrink-0">⭐</div>
            <div>
              <h2 className="text-xl font-bold mb-2" style={{ fontFamily: "'Fredoka One', cursive", color: P.stoneDark }}>Who is Kaelle?</h2>
              <p className="text-sm leading-relaxed max-w-xl" style={{ color: P.stone, fontFamily: "'Poppins', sans-serif" }}>
                Kaelle is our daughter — born in London to a French father and a Peruvian mother, growing up with three languages (English, Spanish, and French) and more energy than we know what to do with. She loves ballet, tennis, gymnastics, books, and puzzles. She is 3 years old and already teaching us everything we thought we knew about parenting. This blog covers ages 3 to 5 — the years where everything gets interesting.
              </p>
            </div>
          </div>
        </section>

        {/* ── Age focus ── */}
        <section className="rounded-3xl border px-6 sm:px-8 py-6" style={{ background: P.pinkLight, borderColor: P.pinkMid, animation: "fadeSlideUp 0.5s cubic-bezier(0.23,1,0.32,1) both", animationDelay: "120ms" }}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="text-3xl select-none">🎯</div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: P.pinkDeep, fontFamily: "'Poppins', sans-serif" }}>Age focus</p>
              <p className="font-bold text-lg" style={{ fontFamily: "'Fredoka One', cursive", color: P.stoneDark }}>Everything on this blog is for the 3–5 year old stage</p>
              <p className="text-sm mt-1" style={{ color: P.stone, fontFamily: "'Poppins', sans-serif" }}>Activities, camps, books, language development, social skills, and the honest reality of navigating London with a high-energy toddler.</p>
            </div>
          </div>
        </section>

        {/* ── Photo mosaic ── */}
        <PhotoMosaic />

        {/* ── Kiki & the Mews ── hidden until book launch
        <KikiSection />
        */}

        {/* ── Published posts ── */}
        <section>
          <h2 className="text-2xl font-bold mb-5" style={{ fontFamily: "'Fredoka One', cursive", color: P.stoneDark }}>📖 Published Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {POSTS.map((post) => (
              <FeaturedPostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>

        {/* ── Upcoming posts ── */}
        <section>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-2xl font-bold" style={{ fontFamily: "'Fredoka One', cursive", color: P.stoneDark }}>🚀 Coming Soon</h2>
            <span className="text-xs rounded-full px-3 py-1" style={{ color: "#A8A29E", background: "#F5F5F4", fontFamily: "'Poppins', sans-serif" }}>More posts in progress</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {UPCOMING.map((item) => <UpcomingCard key={item.topic} item={item} />)}
          </div>
        </section>

        {/* ── Summer 2026 teaser ── */}
        <section>
          <Link href="/summer-2026">
            <div
              className="cursor-pointer rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              style={{ background: `linear-gradient(135deg, ${P.pinkDeep} 0%, #9333EA 100%)`, animation: "fadeSlideUp 0.5s cubic-bezier(0.23,1,0.32,1) both", animationDelay: "300ms" }}
            >
              <div className="px-8 py-8 flex flex-col sm:flex-row items-center gap-6">
                <div className="text-6xl sm:text-7xl leading-none select-none">☀️</div>
                <div className="text-center sm:text-left">
                  <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>Interactive activity calendar</p>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-1" style={{ fontFamily: "'Fredoka One', cursive" }}>Kaelle's Summer 2026</h2>
                  <p className="text-white/75 text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>Every camp, activity, and adventure — July 6 to August 31</p>
                </div>
                <div className="sm:ml-auto flex gap-3 text-4xl select-none group-hover:scale-110 transition-transform">
                  <span>🩰</span><span>🎾</span><span>🤸</span>
                </div>
              </div>
            </div>
          </Link>
        </section>

        {/* ── Affiliate disclosure ── */}
        <section className="rounded-2xl border px-6 py-4 text-xs text-center" style={{ background: P.pinkLight, borderColor: P.pinkMid, color: "#A8A29E", fontFamily: "'Poppins', sans-serif" }}>
          Some posts on Raising Kaelle contain affiliate links. We only recommend products we genuinely use with Kaelle. If you buy through a link, we may earn a small commission at no extra cost to you.
        </section>

      </div>

      {/* ── Footer ── */}
      <footer className="text-center py-8 text-xs border-t" style={{ color: "#A8A29E", borderColor: P.pinkMid, fontFamily: "'Poppins', sans-serif" }}>
        <div className="flex items-center justify-center gap-2 mb-1">
          <RainbowMark size={20} />
          <span className="font-semibold" style={{ color: P.stone }}>Raising Kaelle</span>
        </div>
        <p>London · {new Date().getFullYear()} · A French-Peruvian family raising a trilingual child</p>
      </footer>

      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
