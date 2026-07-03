// ============================================================
// Blog — Landing page listing all posts
// Palette: Warm neutrals — stone, sand, terracotta
// Age focus: 3–5 years
// ============================================================

import { Link } from "wouter";
import { POSTS } from "@/data/posts";
import NavHeader from "@/components/NavHeader";

function RainbowMark({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size * 0.65} viewBox="0 0 56 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M4 34 Q4 4 28 4 Q52 4 52 34" stroke="#E07B54" strokeWidth="5" strokeLinecap="round" fill="none"/>
      <path d="M9 34 Q9 10 28 10 Q47 10 47 34" stroke="#E8A84C" strokeWidth="5" strokeLinecap="round" fill="none"/>
      <path d="M14 34 Q14 16 28 16 Q42 16 42 34" stroke="#6BAA8E" strokeWidth="5" strokeLinecap="round" fill="none"/>
      <path d="M19 34 Q19 21 28 21 Q37 21 37 34" stroke="#7B9BB5" strokeWidth="5" strokeLinecap="round" fill="none"/>
    </svg>
  );
}

function PostCard({ post }: { post: typeof POSTS[0] }) {
  const date = new Date(post.publishDate).toLocaleDateString("en-GB", {
    day: "numeric", month: "long", year: "numeric",
  });

  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="group cursor-pointer bg-white rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden">
        {/* Rainbow top strip */}
        <div className="h-1.5" style={{ background: "linear-gradient(90deg, #E07B54 0%, #E8A84C 40%, #6BAA8E 75%, #7B9BB5 100%)" }} />

        <div className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full" style={{ color: "#C1694F", background: "#FDF0EC", fontFamily: "'Poppins', sans-serif" }}>
              {post.category}
            </span>
            <span className="text-xs text-stone-400" style={{ fontFamily: "'Poppins', sans-serif" }}>{post.readTime}</span>
          </div>

          <h2
            className="text-xl font-bold text-stone-800 mb-2 leading-snug transition-colors"
            style={{ fontFamily: "'Fredoka One', cursive" }}
          >
            <span className="group-hover:text-[#C1694F] transition-colors">
              {post.heroEmoji} {post.title}
            </span>
          </h2>

          <p className="text-stone-500 text-sm mb-4 leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>
            {post.subtitle}
          </p>

          {/* BLUF preview */}
          <div className="rounded-xl p-3 mb-4 border" style={{ background: "#FEFBF3", borderColor: "#E8D5A3" }}>
            <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: "#A07C30", fontFamily: "'Poppins', sans-serif" }}>
              Bottom Line Up Front
            </p>
            <p className="text-sm leading-relaxed line-clamp-3" style={{ color: "#6B5320", fontFamily: "'Poppins', sans-serif" }}>
              {post.bluf}
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {post.tags.slice(0, 4).map((tag) => (
              <span key={tag} className="text-xs text-stone-500 bg-stone-50 border border-stone-200 px-2 py-0.5 rounded-full" style={{ fontFamily: "'Poppins', sans-serif" }}>
                #{tag.replace(/ /g, "-")}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <time className="text-xs text-stone-400" dateTime={post.publishDate} style={{ fontFamily: "'Poppins', sans-serif" }}>
              {date}
            </time>
            <span className="text-sm font-semibold flex items-center gap-1 transition-colors" style={{ color: "#C1694F", fontFamily: "'Poppins', sans-serif" }}>
              Read post <span>→</span>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default function Blog() {
  return (
    <div className="min-h-screen" style={{ background: "#FAF8F5" }}>
      <NavHeader />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-12 pb-8">
        {/* Hero */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-3">
            <RainbowMark size={40} />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-stone-800 mb-3" style={{ fontFamily: "'Fredoka One', cursive" }}>
            Raising Kaelle
          </h1>
          <p className="text-base text-stone-500 max-w-xl mx-auto leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Honest stories from a French-Peruvian family raising a trilingual child in London — everything for the 3 to 5 year old stage.
          </p>
          {/* Heritage flags */}
          <div className="flex items-center justify-center gap-2 mt-4 flex-wrap">
            {["🇫🇷 French", "🇵🇪 Peruvian", "🇬🇧 London", "🗣️ EN · ES · FR"].map((item) => (
              <span key={item} className="text-xs text-stone-500 bg-white border border-stone-200 px-2.5 py-1 rounded-full shadow-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Posts */}
        <div className="space-y-6">
          {POSTS.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>

        {/* Coming soon */}
        <div className="mt-10 text-center">
          <div className="inline-block bg-white border border-dashed border-stone-200 rounded-2xl px-8 py-6">
            <p className="text-2xl mb-2">🚀</p>
            <p className="text-sm font-semibold text-stone-500" style={{ fontFamily: "'Poppins', sans-serif" }}>
              More posts coming — bilingual books, nursery picks, creative play, and more for ages 3–5.
            </p>
          </div>
        </div>
      </section>

      <footer className="text-center py-8 text-xs text-stone-400 border-t border-stone-100" style={{ fontFamily: "'Poppins', sans-serif" }}>
        <p>Raising Kaelle · London · {new Date().getFullYear()}</p>
        <p className="mt-1">Some posts contain affiliate links. We only recommend what we genuinely use.</p>
      </footer>
    </div>
  );
}
