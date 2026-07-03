// ============================================================
// RaisingKaelleHome — Brand home page
// Identity: French-Peruvian family raising a trilingual child in London
// Palette: Warm neutrals — stone, sand, terracotta, sage, warm white
// Logo: Rainbow arc replacing the flower
// Age focus: 3–5 years
// ============================================================

import { Link } from "wouter";
import { POSTS } from "@/data/posts";
import NavHeader from "@/components/NavHeader";

// ── Rainbow SVG logo mark ─────────────────────────────────────
function RainbowMark({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size * 0.65} viewBox="0 0 56 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M4 34 Q4 4 28 4 Q52 4 52 34" stroke="#E07B54" strokeWidth="4.5" strokeLinecap="round" fill="none"/>
      <path d="M9 34 Q9 10 28 10 Q47 10 47 34" stroke="#E8A84C" strokeWidth="4.5" strokeLinecap="round" fill="none"/>
      <path d="M14 34 Q14 16 28 16 Q42 16 42 34" stroke="#6BAA8E" strokeWidth="4.5" strokeLinecap="round" fill="none"/>
      <path d="M19 34 Q19 21 28 21 Q37 21 37 34" stroke="#7B9BB5" strokeWidth="4.5" strokeLinecap="round" fill="none"/>
    </svg>
  );
}

// ── Upcoming topics ───────────────────────────────────────────
const UPCOMING = [
  { emoji: "📚", topic: "The best bilingual books for ages 3–5", tag: "3–5 years" },
  { emoji: "🎨", topic: "Creative play that actually teaches language", tag: "3–5 years" },
  { emoji: "🥗", topic: "Getting a picky toddler to eat — what worked for us", tag: "3–4 years" },
  { emoji: "🛏️", topic: "The big bed move — skipping the toddler bed entirely", tag: "2–4 years" },
  { emoji: "🌍", topic: "Raising a trilingual child: the honest guide", tag: "All ages" },
  { emoji: "🎒", topic: "Choosing a nursery in London — what nobody tells you", tag: "2–4 years" },
];

function UpcomingCard({ item }: { item: typeof UPCOMING[0] }) {
  return (
    <div className="flex items-center gap-3 bg-white border border-stone-100 rounded-2xl px-4 py-3.5 shadow-sm hover:shadow-md transition-shadow">
      <span className="text-xl flex-shrink-0">{item.emoji}</span>
      <div>
        <p className="text-sm font-medium text-stone-700 leading-snug" style={{ fontFamily: "'Poppins', sans-serif" }}>
          {item.topic}
        </p>
        <span className="text-xs font-semibold text-terracotta" style={{ color: "#C1694F", fontFamily: "'Poppins', sans-serif" }}>
          {item.tag}
        </span>
      </div>
    </div>
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
        className="group cursor-pointer bg-white rounded-3xl border border-stone-100 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
        style={{ animation: "fadeSlideUp 0.5s cubic-bezier(0.23,1,0.32,1) both", animationDelay: "200ms" }}
      >
        {/* Warm gradient top strip */}
        <div className="h-1.5" style={{ background: "linear-gradient(90deg, #E07B54 0%, #E8A84C 40%, #6BAA8E 75%, #7B9BB5 100%)" }} />

        <div className="p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-white px-3 py-1 rounded-full" style={{ background: "#C1694F", fontFamily: "'Poppins', sans-serif" }}>
              First Post
            </span>
            <span className="text-xs font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full" style={{ color: "#C1694F", background: "#FDF0EC", fontFamily: "'Poppins', sans-serif" }}>
              {post.category}
            </span>
            <span className="text-xs text-stone-400" style={{ fontFamily: "'Poppins', sans-serif" }}>{post.readTime}</span>
          </div>

          <h2
            className="text-2xl sm:text-3xl font-bold text-stone-800 mb-3 leading-snug transition-colors"
            style={{ fontFamily: "'Fredoka One', cursive", color: "inherit" }}
          >
            <span className="group-hover:text-[#C1694F] transition-colors">
              {post.heroEmoji} {post.title}
            </span>
          </h2>

          <p className="text-stone-500 leading-relaxed mb-5 text-sm sm:text-base" style={{ fontFamily: "'Poppins', sans-serif" }}>
            {post.subtitle}
          </p>

          <div className="rounded-2xl p-4 mb-5 border" style={{ background: "#FEFBF3", borderColor: "#E8D5A3" }}>
            <p className="text-xs font-bold uppercase tracking-wide mb-1.5" style={{ color: "#A07C30", fontFamily: "'Poppins', sans-serif" }}>
              ⚡ Bottom Line Up Front
            </p>
            <p className="text-sm leading-relaxed line-clamp-3" style={{ color: "#6B5320", fontFamily: "'Poppins', sans-serif" }}>
              {post.bluf}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-5">
            {post.tags.slice(0, 5).map((tag) => (
              <span key={tag} className="text-xs text-stone-500 bg-stone-50 border border-stone-200 px-2.5 py-0.5 rounded-full" style={{ fontFamily: "'Poppins', sans-serif" }}>
                #{tag.replace(/ /g, "-")}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <time className="text-xs text-stone-400" dateTime={post.publishDate} style={{ fontFamily: "'Poppins', sans-serif" }}>
              {date}
            </time>
            <span className="text-sm font-bold flex items-center gap-1.5 transition-colors" style={{ color: "#C1694F", fontFamily: "'Poppins', sans-serif" }}>
              Read the full guide <span className="text-base">→</span>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

// ── Heritage flag strip ───────────────────────────────────────
function HeritageStrip() {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      {/* French flag */}
      <span className="inline-flex items-center gap-1.5 bg-white border border-stone-100 rounded-full px-3 py-1 text-xs font-medium text-stone-600 shadow-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>
        <span className="text-base">🇫🇷</span> French
      </span>
      {/* Peruvian flag */}
      <span className="inline-flex items-center gap-1.5 bg-white border border-stone-100 rounded-full px-3 py-1 text-xs font-medium text-stone-600 shadow-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>
        <span className="text-base">🇵🇪</span> Peruvian
      </span>
      {/* London */}
      <span className="inline-flex items-center gap-1.5 bg-white border border-stone-100 rounded-full px-3 py-1 text-xs font-medium text-stone-600 shadow-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>
        <span className="text-base">🇬🇧</span> Raised in London
      </span>
      {/* Trilingual */}
      <span className="inline-flex items-center gap-1.5 bg-white border border-stone-100 rounded-full px-3 py-1 text-xs font-medium text-stone-600 shadow-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>
        <span className="text-base">🗣️</span> EN · ES · FR
      </span>
    </div>
  );
}

// ── Main home page ────────────────────────────────────────────
export default function RaisingKaelleHome() {
  const featuredPost = POSTS[0];

  return (
    <div className="min-h-screen" style={{ background: "#FAF8F5", fontFamily: "'Poppins', sans-serif" }}>
      <NavHeader />

      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(150deg, #FDF6EE 0%, #F9F4EE 40%, #F4F7F4 100%)",
          animation: "fadeSlideUp 0.6s cubic-bezier(0.23,1,0.32,1) both",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <div className="max-w-2xl">

            {/* Eyebrow */}
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#C1694F", fontFamily: "'Poppins', sans-serif" }}>
              A parenting blog · London
            </p>

            {/* Logo + Title */}
            <div className="flex items-center gap-3 mb-5">
              <RainbowMark size={40} />
              <h1
                className="text-4xl sm:text-5xl font-bold text-stone-800 leading-tight"
                style={{ fontFamily: "'Fredoka One', cursive" }}
              >
                Raising Kaelle
              </h1>
            </div>

            {/* Heritage strip */}
            <div className="mb-5">
              <HeritageStrip />
            </div>

            {/* Sub */}
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed mb-6 max-w-xl" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Honest stories from raising a trilingual child in London — the activities, the challenges, and everything nobody tells you about parenting without a village.
            </p>

            {/* BLUF for the site */}
            <div className="rounded-2xl p-4 mb-8 max-w-xl border" style={{ background: "rgba(255,255,255,0.75)", borderColor: "#E8D5C0" }}>
              <p className="text-xs font-bold uppercase tracking-wide mb-1.5" style={{ color: "#C1694F", fontFamily: "'Poppins', sans-serif" }}>
                What this blog is about
              </p>
              <p className="text-sm text-stone-600 leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>
                We are a French-Peruvian family raising Kaelle in London — trilingual, high-energy, and full of opinions. Without the family support network that comes naturally back home, we built our own. This blog is everything we wish someone had told us, from ages 3 to 5 and beyond.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Link href="/blog">
                <span
                  className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer text-sm"
                  style={{ background: "#C1694F", fontFamily: "'Poppins', sans-serif" }}
                >
                  ✍️ Read the blog
                </span>
              </Link>
              <Link href="/summer-2026">
                <span
                  className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-full border shadow-sm hover:shadow-md transition-all cursor-pointer text-sm"
                  style={{ background: "white", color: "#5C5248", borderColor: "#D9CFC4", fontFamily: "'Poppins', sans-serif" }}
                >
                  ☀️ Summer 2026 calendar
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative blobs */}
        <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full opacity-20 pointer-events-none" style={{ background: "radial-gradient(circle, #E07B54, transparent)" }} />
        <div className="absolute bottom-0 right-32 w-40 h-40 rounded-full opacity-15 pointer-events-none" style={{ background: "radial-gradient(circle, #6BAA8E, transparent)" }} />
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-14">

        {/* ── About strip ── */}
        <section
          className="bg-white rounded-3xl border border-stone-100 shadow-sm px-6 sm:px-8 py-7"
          style={{ animation: "fadeSlideUp 0.5s cubic-bezier(0.23,1,0.32,1) both", animationDelay: "100ms" }}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="text-5xl select-none flex-shrink-0">👧🏽</div>
            <div>
              <h2 className="text-xl font-bold text-stone-800 mb-2" style={{ fontFamily: "'Fredoka One', cursive" }}>
                Who is Kaelle?
              </h2>
              <p className="text-sm text-stone-600 leading-relaxed max-w-xl" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Kaelle is our daughter — born in London to a French father and a Peruvian mother, growing up with three languages (English, Spanish, and French) and more energy than we know what to do with. She loves ballet, tennis, gymnastics, books, and puzzles. She is 3 years old and already teaching us everything we thought we knew about parenting. This blog covers the ages 3 to 5 — the years where everything gets interesting.
              </p>
            </div>
          </div>
        </section>

        {/* ── Age focus banner ── */}
        <section
          className="rounded-3xl border px-6 sm:px-8 py-6"
          style={{ background: "#F4F0EB", borderColor: "#E2D8CE", animation: "fadeSlideUp 0.5s cubic-bezier(0.23,1,0.32,1) both", animationDelay: "140ms" }}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="text-3xl select-none">🎯</div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#C1694F", fontFamily: "'Poppins', sans-serif" }}>
                Age focus
              </p>
              <p className="font-bold text-stone-800 text-lg" style={{ fontFamily: "'Fredoka One', cursive" }}>
                Everything on this blog is for the 3–5 year old stage
              </p>
              <p className="text-sm text-stone-500 mt-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Activities, camps, books, language development, social skills, and the honest reality of navigating London with a high-energy toddler.
              </p>
            </div>
          </div>
        </section>

        {/* ── Featured post ── */}
        <section>
          <h2 className="text-2xl font-bold text-stone-800 mb-5" style={{ fontFamily: "'Fredoka One', cursive" }}>
            📖 Latest Post
          </h2>
          <FeaturedPostCard post={featuredPost} />
        </section>

        {/* ── Upcoming topics ── */}
        <section>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-2xl font-bold text-stone-800" style={{ fontFamily: "'Fredoka One', cursive" }}>
              🚀 Coming Soon
            </h2>
            <span className="text-xs text-stone-400 bg-stone-100 rounded-full px-3 py-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
              More posts in progress
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {UPCOMING.map((item) => (
              <UpcomingCard key={item.topic} item={item} />
            ))}
          </div>
        </section>

        {/* ── Summer 2026 teaser ── */}
        <section>
          <Link href="/summer-2026">
            <div
              className="cursor-pointer rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              style={{
                background: "linear-gradient(135deg, #D4845A 0%, #C1694F 50%, #A85540 100%)",
                animation: "fadeSlideUp 0.5s cubic-bezier(0.23,1,0.32,1) both",
                animationDelay: "300ms",
              }}
            >
              <div className="px-8 py-8 flex flex-col sm:flex-row items-center gap-6">
                <div className="text-6xl sm:text-7xl leading-none select-none">☀️</div>
                <div className="text-center sm:text-left">
                  <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    Interactive activity calendar
                  </p>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-1" style={{ fontFamily: "'Fredoka One', cursive" }}>
                    Kaelle's Summer 2026
                  </h2>
                  <p className="text-white/75 text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    Every camp, activity, and adventure — July 6 to August 31
                  </p>
                </div>
                <div className="sm:ml-auto flex gap-3 text-4xl select-none group-hover:scale-110 transition-transform">
                  <span>🩰</span><span>🎾</span><span>🤸</span>
                </div>
              </div>
            </div>
          </Link>
        </section>

        {/* ── Affiliate disclosure ── */}
        <section className="rounded-2xl border px-6 py-4 text-xs text-stone-400 text-center" style={{ background: "#F4F0EB", borderColor: "#E2D8CE", fontFamily: "'Poppins', sans-serif" }}>
          Some posts on Raising Kaelle contain affiliate links. We only recommend products we genuinely use with Kaelle. If you buy through a link, we may earn a small commission at no extra cost to you.
        </section>

      </div>

      {/* ── Footer ── */}
      <footer className="text-center py-8 text-xs text-stone-400 border-t border-stone-100" style={{ fontFamily: "'Poppins', sans-serif" }}>
        <div className="flex items-center justify-center gap-2 mb-1">
          <RainbowMark size={20} />
          <span className="font-semibold text-stone-500">Raising Kaelle</span>
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
