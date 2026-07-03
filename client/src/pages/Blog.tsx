// ============================================================
// Blog — Landing page listing all posts
// Palette: Pale pink + soft lavender + warm white
// ============================================================

import { Link } from "wouter";
import { POSTS } from "@/data/posts";
import NavHeader from "@/components/NavHeader";

const P = {
  pink:      "#F472B6",
  pinkLight: "#FCE7F3",
  pinkMid:   "#FBCFE8",
  pinkDeep:  "#DB2777",
  stone:     "#78716C",
  stoneDark: "#292524",
  bg:        "#FFFBFE",
};

function RainbowMark({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size * 0.65} viewBox="0 0 56 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M4 34 Q4 4 28 4 Q52 4 52 34" stroke="#F472B6" strokeWidth="5" strokeLinecap="round" fill="none"/>
      <path d="M9 34 Q9 10 28 10 Q47 10 47 34" stroke="#C084FC" strokeWidth="5" strokeLinecap="round" fill="none"/>
      <path d="M14 34 Q14 16 28 16 Q42 16 42 34" stroke="#60A5FA" strokeWidth="5" strokeLinecap="round" fill="none"/>
      <path d="M19 34 Q19 21 28 21 Q37 21 37 34" stroke="#34D399" strokeWidth="5" strokeLinecap="round" fill="none"/>
    </svg>
  );
}

function PostCard({ post }: { post: typeof POSTS[0] }) {
  const date = new Date(post.publishDate).toLocaleDateString("en-GB", {
    day: "numeric", month: "long", year: "numeric",
  });

  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="group cursor-pointer bg-white rounded-3xl border shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden" style={{ borderColor: P.pinkMid }}>
        <div className="h-1.5" style={{ background: `linear-gradient(90deg, ${P.pink} 0%, #C084FC 40%, #60A5FA 75%, #34D399 100%)` }} />
        <div className="p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-3 flex-wrap">
            <span className="text-xs font-bold uppercase tracking-widest text-white px-2.5 py-1 rounded-full" style={{ background: P.pinkDeep, fontFamily: "'Poppins', sans-serif" }}>
              {post.category}
            </span>
            <span className="text-xs" style={{ color: "#A8A29E", fontFamily: "'Poppins', sans-serif" }}>{post.readTime}</span>
            <time className="text-xs ml-auto" style={{ color: "#A8A29E", fontFamily: "'Poppins', sans-serif" }} dateTime={post.publishDate}>{date}</time>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold mb-2 leading-snug group-hover:text-pink-600 transition-colors" style={{ fontFamily: "'Fredoka One', cursive", color: P.stoneDark }}>
            {post.heroEmoji} {post.title}
          </h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: P.stone, fontFamily: "'Poppins', sans-serif" }}>{post.subtitle}</p>
          <div className="rounded-2xl p-3.5 mb-4 border" style={{ background: "#FFFBEB", borderColor: "#FDE68A" }}>
            <p className="text-xs font-bold uppercase tracking-wide mb-1" style={{ color: "#92400E", fontFamily: "'Poppins', sans-serif" }}>⚡ Bottom Line Up Front</p>
            <p className="text-sm leading-relaxed line-clamp-3" style={{ color: "#78350F", fontFamily: "'Poppins', sans-serif" }}>{post.bluf}</p>
          </div>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {post.tags.slice(0, 5).map((tag) => (
              <span key={tag} className="text-xs px-2.5 py-0.5 rounded-full border" style={{ color: P.stone, background: P.pinkLight, borderColor: P.pinkMid, fontFamily: "'Poppins', sans-serif" }}>
                #{tag.replace(/ /g, "-")}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-end">
            <span className="text-sm font-bold" style={{ color: P.pinkDeep, fontFamily: "'Poppins', sans-serif" }}>Read the full guide →</span>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default function Blog() {
  return (
    <div className="min-h-screen" style={{ background: P.bg }}>
      <NavHeader />

      {/* Hero */}
      <section className="border-b" style={{ background: "linear-gradient(150deg, #FFF0F8 0%, #FDF4FF 50%, #F0F4FF 100%)", borderColor: P.pinkMid }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <div className="flex items-center gap-3 mb-3">
            <RainbowMark size={32} />
            <h1 className="text-3xl sm:text-4xl font-bold" style={{ fontFamily: "'Fredoka One', cursive", color: P.stoneDark }}>The Blog</h1>
          </div>
          <p className="text-sm sm:text-base max-w-xl leading-relaxed mb-4" style={{ color: P.stone, fontFamily: "'Poppins', sans-serif" }}>
            Honest stories from a French-Peruvian family raising a trilingual child in London. Ages 3–5 and everything in between.
          </p>
          <div className="flex items-center gap-2 flex-wrap">
            {["🇫🇷 French", "🇵🇪 Peruvian", "🇬🇧 London", "🗣️ EN · ES · FR"].map((item) => (
              <span key={item} className="inline-flex items-center gap-1 bg-white border rounded-full px-3 py-1 text-xs font-medium shadow-sm" style={{ borderColor: P.pinkMid, color: P.stone, fontFamily: "'Poppins', sans-serif" }}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-6">
        {POSTS.map((post) => <PostCard key={post.slug} post={post} />)}

        {/* Coming soon */}
        <div className="rounded-3xl border border-dashed px-8 py-10 text-center" style={{ borderColor: P.pinkMid, background: P.pinkLight }}>
          <p className="text-2xl mb-2">✍️</p>
          <p className="font-bold text-base mb-1" style={{ fontFamily: "'Fredoka One', cursive", color: P.stoneDark }}>More posts coming soon</p>
          <p className="text-sm" style={{ color: P.stone, fontFamily: "'Poppins', sans-serif" }}>
            🚽 Potty training · 🦷 Broken milk teeth · 📚 Books before she was born · 🌍 Trilingual parenting guide
          </p>
        </div>
      </div>

      <footer className="text-center py-8 text-xs border-t" style={{ color: "#A8A29E", borderColor: P.pinkMid, fontFamily: "'Poppins', sans-serif" }}>
        <div className="flex items-center justify-center gap-2 mb-1">
          <RainbowMark size={18} />
          <span className="font-semibold" style={{ color: P.stone }}>Raising Kaelle</span>
        </div>
        <p>London · {new Date().getFullYear()} · A French-Peruvian family raising a trilingual child</p>
        <p className="mt-1">Some posts contain affiliate links. We only recommend what we genuinely use with Kaelle.</p>
      </footer>
    </div>
  );
}
