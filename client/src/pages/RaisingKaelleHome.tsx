// ============================================================
// RaisingKaelleHome — The main brand home page
// raisingkaelle.com/
// SEO: "raising trilingual child London", "parenting blog London"
// AEO: Clear BLUF about what this site is, structured sections
// ============================================================

import { Link } from "wouter";
import { POSTS } from "@/data/posts";
import NavHeader from "@/components/NavHeader";

// ── Upcoming topics teaser ────────────────────────────────────
const UPCOMING = [
  { emoji: "🍼", topic: "Breastfeeding & pumping in London", tag: "0–12 months" },
  { emoji: "🥣", topic: "Weaning a high-energy baby — what actually worked", tag: "6–12 months" },
  { emoji: "📚", topic: "The best bilingual books for toddlers", tag: "1–4 years" },
  { emoji: "🛏️", topic: "Skipping the toddler bed — straight to a single", tag: "2–3 years" },
  { emoji: "🌍", topic: "Raising a trilingual child: the honest guide", tag: "All ages" },
  { emoji: "🎒", topic: "Nursery in London: what nobody tells you", tag: "2–3 years" },
];

// ── Topic pill ────────────────────────────────────────────────
function UpcomingCard({ item }: { item: typeof UPCOMING[0] }) {
  return (
    <div className="flex items-center gap-3 bg-white border border-gray-100 rounded-2xl px-4 py-3 shadow-sm">
      <span className="text-2xl">{item.emoji}</span>
      <div>
        <p
          className="text-sm font-medium text-gray-700 leading-snug"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {item.topic}
        </p>
        <span
          className="text-xs text-pink-500 font-medium"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {item.tag}
        </span>
      </div>
    </div>
  );
}

// ── Featured post card ────────────────────────────────────────
function FeaturedPostCard({ post }: { post: typeof POSTS[0] }) {
  const date = new Date(post.publishDate).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Link href={`/blog/${post.slug}`}>
      <article
        className="group cursor-pointer bg-white rounded-3xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
        style={{ animation: "fadeSlideUp 0.5s cubic-bezier(0.23,1,0.32,1) both", animationDelay: "200ms" }}
      >
        {/* Gradient top strip */}
        <div className="h-2 bg-gradient-to-r from-pink-400 via-orange-300 to-yellow-300" />

        <div className="p-6 sm:p-8">
          {/* Label */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-white bg-pink-500 px-3 py-1 rounded-full" style={{ fontFamily: "'Poppins', sans-serif" }}>
              ✨ First Post
            </span>
            <span className="text-xs font-semibold uppercase tracking-wide text-pink-600 bg-pink-50 px-2.5 py-1 rounded-full" style={{ fontFamily: "'Poppins', sans-serif" }}>
              {post.category}
            </span>
            <span className="text-xs text-gray-400" style={{ fontFamily: "'Poppins', sans-serif" }}>{post.readTime}</span>
          </div>

          {/* Title */}
          <h2
            className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 group-hover:text-pink-700 transition-colors leading-snug"
            style={{ fontFamily: "'Fredoka One', cursive" }}
          >
            {post.heroEmoji} {post.title}
          </h2>

          <p
            className="text-gray-500 leading-relaxed mb-5"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {post.subtitle}
          </p>

          {/* BLUF */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-5">
            <p className="text-xs font-bold text-amber-700 uppercase tracking-wide mb-1.5" style={{ fontFamily: "'Poppins', sans-serif" }}>
              ⚡ Bottom Line Up Front
            </p>
            <p className="text-sm text-amber-900 leading-relaxed line-clamp-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
              {post.bluf}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {post.tags.slice(0, 5).map((tag) => (
              <span key={tag} className="text-xs text-gray-500 bg-gray-50 border border-gray-200 px-2.5 py-0.5 rounded-full" style={{ fontFamily: "'Poppins', sans-serif" }}>
                #{tag.replace(/ /g, "-")}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <time className="text-xs text-gray-400" dateTime={post.publishDate} style={{ fontFamily: "'Poppins', sans-serif" }}>
              {date}
            </time>
            <span className="text-sm font-bold text-pink-600 group-hover:text-pink-700 flex items-center gap-1.5 transition-colors">
              Read the full guide <span className="text-base">→</span>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

// ── Main home page ────────────────────────────────────────────
export default function RaisingKaelleHome() {
  const featuredPost = POSTS[0];

  return (
    <div className="min-h-screen" style={{ background: "#FAFAF8", fontFamily: "'Poppins', sans-serif" }}>
      <NavHeader />

      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #FFF0F5 0%, #FFF8F0 50%, #FFFDF0 100%)",
          animation: "fadeSlideUp 0.6s cubic-bezier(0.23,1,0.32,1) both",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <p className="text-sm font-semibold text-pink-500 uppercase tracking-widest mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
              A parenting blog from London
            </p>

            {/* Headline */}
            <h1
              className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight mb-5"
              style={{ fontFamily: "'Fredoka One', cursive" }}
            >
              🌸 Raising Kaelle
            </h1>

            {/* Sub */}
            <p
              className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-6 max-w-xl"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Honest stories from raising a trilingual child in London — the activities, the challenges, and everything nobody tells you about parenting without a village.
            </p>

            {/* BLUF for the site — AEO anchor */}
            <div className="bg-white/80 backdrop-blur-sm border border-pink-100 rounded-2xl p-4 mb-8 max-w-xl shadow-sm">
              <p className="text-xs font-bold text-pink-600 uppercase tracking-wide mb-1.5">What this blog is about</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                We are a family raising Kaelle — a trilingual, high-energy little girl — in London, without the family support network that comes naturally in Latin America. This blog documents what we discover along the way: the camps, the books, the gear, and the honest reality of doing it all while working full-time.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Link href="/blog">
                <span
                  className="inline-flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer text-sm"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  ✍️ Read the blog
                </span>
              </Link>
              <Link href="/summer-2026">
                <span
                  className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 font-semibold px-6 py-3 rounded-full border border-gray-200 shadow-sm hover:shadow-md transition-all cursor-pointer text-sm"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  🌟 Summer 2026 calendar
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative blobs */}
        <div
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle, #FF80AB, transparent)" }}
        />
        <div
          className="absolute -bottom-10 right-40 w-48 h-48 rounded-full opacity-15 pointer-events-none"
          style={{ background: "radial-gradient(circle, #FFB300, transparent)" }}
        />
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-14">

        {/* ── About strip ── */}
        <section
          className="bg-white rounded-3xl border border-gray-100 shadow-sm px-6 sm:px-8 py-7"
          style={{ animation: "fadeSlideUp 0.5s cubic-bezier(0.23,1,0.32,1) both", animationDelay: "100ms" }}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="text-5xl select-none">👩‍👧</div>
            <div>
              <h2
                className="text-xl font-bold text-gray-800 mb-2"
                style={{ fontFamily: "'Fredoka One', cursive" }}
              >
                Who is Kaelle?
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed max-w-xl">
                Kaelle is our daughter — born in London, growing up trilingual (English, Spanish, and French), with more energy than we know what to do with. She loves ballet, tennis, gymnastics, books, and puzzles. She is currently 3 years old and teaching us everything we thought we knew about parenting.
              </p>
            </div>
          </div>
        </section>

        {/* ── Featured post ── */}
        <section>
          <h2
            className="text-2xl font-bold text-gray-800 mb-5"
            style={{ fontFamily: "'Fredoka One', cursive" }}
          >
            📖 Latest Post
          </h2>
          <FeaturedPostCard post={featuredPost} />
        </section>

        {/* ── Upcoming topics ── */}
        <section>
          <div className="flex items-center justify-between mb-5">
            <h2
              className="text-2xl font-bold text-gray-800"
              style={{ fontFamily: "'Fredoka One', cursive" }}
            >
              🚀 Coming Soon
            </h2>
            <span className="text-xs text-gray-400 bg-gray-100 rounded-full px-3 py-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
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
                background: "linear-gradient(135deg, #FFB300 0%, #FF8F00 50%, #FF6F00 100%)",
                animation: "fadeSlideUp 0.5s cubic-bezier(0.23,1,0.32,1) both",
                animationDelay: "300ms",
              }}
            >
              <div className="px-8 py-8 flex flex-col sm:flex-row items-center gap-6">
                <div className="text-6xl sm:text-7xl leading-none select-none">☀️</div>
                <div className="text-center sm:text-left">
                  <p className="text-white/80 text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    Interactive calendar
                  </p>
                  <h2
                    className="text-3xl sm:text-4xl font-bold text-white mb-1"
                    style={{ fontFamily: "'Fredoka One', cursive" }}
                  >
                    Kaelle's Summer 2026
                  </h2>
                  <p className="text-white/80 text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>
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
        <section className="bg-gray-50 rounded-2xl border border-gray-100 px-6 py-4 text-xs text-gray-400 text-center" style={{ fontFamily: "'Poppins', sans-serif" }}>
          Some posts on Raising Kaelle contain affiliate links. We only recommend products we genuinely use with Kaelle. If you buy through a link, we may earn a small commission at no extra cost to you.
        </section>

      </div>

      {/* ── Footer ── */}
      <footer className="text-center py-8 text-xs text-gray-400 border-t border-gray-100" style={{ fontFamily: "'Poppins', sans-serif" }}>
        <p className="font-semibold text-gray-500 mb-1">🌸 Raising Kaelle</p>
        <p>London · {new Date().getFullYear()} · A parenting blog for families raising multilingual children</p>
      </footer>

      {/* ── Animations ── */}
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
