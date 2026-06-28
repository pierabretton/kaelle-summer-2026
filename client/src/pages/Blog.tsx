// ============================================================
// Blog — Landing page listing all posts
// AEO-ready: semantic headings, structured content, clear descriptions
// ============================================================

import { Link } from "wouter";
import { POSTS } from "@/data/posts";
import NavHeader from "@/components/NavHeader";

function PostCard({ post }: { post: typeof POSTS[0] }) {
  const date = new Date(post.publishDate).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="group cursor-pointer bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden">
        {/* Coloured top strip */}
        <div className="h-2 bg-gradient-to-r from-pink-400 via-orange-300 to-yellow-300" />

        <div className="p-6">
          {/* Category + read time */}
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-semibold uppercase tracking-wide text-pink-600 bg-pink-50 px-2.5 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-xs text-gray-400">{post.readTime}</span>
          </div>

          {/* Title */}
          <h2
            className="text-xl font-bold text-gray-800 mb-2 group-hover:text-pink-700 transition-colors leading-snug"
            style={{ fontFamily: "'Fredoka One', cursive" }}
          >
            {post.heroEmoji} {post.title}
          </h2>

          {/* Subtitle */}
          <p
            className="text-gray-500 text-sm mb-4 leading-relaxed"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {post.subtitle}
          </p>

          {/* BLUF preview */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-4">
            <p
              className="text-xs font-semibold text-amber-700 uppercase tracking-wide mb-1"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Bottom Line Up Front
            </p>
            <p
              className="text-sm text-amber-900 leading-relaxed line-clamp-3"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {post.bluf}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {post.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="text-xs text-gray-500 bg-gray-50 border border-gray-200 px-2 py-0.5 rounded-full"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                #{tag.replace(/ /g, "-")}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between">
            <time
              className="text-xs text-gray-400"
              dateTime={post.publishDate}
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {date}
            </time>
            <span className="text-sm font-semibold text-pink-600 group-hover:text-pink-700 flex items-center gap-1">
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
    <div className="min-h-screen bg-gradient-to-b from-pink-50/40 to-white">
      <NavHeader />

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-12 pb-8">
        <div className="text-center mb-10">
          <p
            className="text-4xl mb-3"
            aria-hidden="true"
          >
            ✍️
          </p>
          <h1
            className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3"
            style={{ fontFamily: "'Fredoka One', cursive" }}
          >
            Raising Kaelle
          </h1>
          <p
            className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Honest stories from raising a trilingual child in London — the activities, the challenges, and everything nobody tells you.
          </p>
        </div>

        {/* Posts */}
        <div className="space-y-6">
          {POSTS.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>

        {/* Coming soon */}
        <div className="mt-10 text-center">
          <div className="inline-block bg-white border border-dashed border-gray-200 rounded-2xl px-8 py-6">
            <p className="text-2xl mb-2">🚀</p>
            <p
              className="text-sm font-semibold text-gray-500"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              More posts coming soon — from weaning to nursery picks, breastfeeding to books.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-xs text-gray-400" style={{ fontFamily: "'Poppins', sans-serif" }}>
        <p>Raising Kaelle · London · {new Date().getFullYear()}</p>
        <p className="mt-1">Some posts contain affiliate links. We only recommend what we genuinely use.</p>
      </footer>
    </div>
  );
}
