// ============================================================
// BlogPost — Individual post page
// AEO-ready: BLUF, semantic headings as questions, firsthand markers,
// structured comparison table, affiliate links
// ============================================================

import { useParams, Link } from "wouter";
import { POSTS, type CampEntry, type AffiliateLink } from "@/data/posts";
import NavHeader from "@/components/NavHeader";

// ── Camp card ─────────────────────────────────────────────────
function CampCard({ camp, index }: { camp: CampEntry; index: number }) {
  return (
    <article
      className={`rounded-2xl border-2 ${camp.border} bg-white shadow-sm overflow-hidden mb-6`}
      id={camp.id}
    >
      {/* Header strip */}
      <div className={`${camp.bg} px-5 py-3 flex items-center gap-3`}>
        <span className="text-2xl">{camp.emoji}</span>
        <div>
          <h3
            className="font-bold text-white text-base leading-tight"
            style={{ fontFamily: "'Fredoka One', cursive" }}
          >
            {index}. {camp.name}
          </h3>
          <p
            className="text-white/80 text-xs"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {camp.tagline}
          </p>
        </div>
      </div>

      <div className="px-5 py-4 space-y-4">
        {/* Meta row */}
        <div className="flex flex-wrap gap-3 text-xs text-gray-500" style={{ fontFamily: "'Poppins', sans-serif" }}>
          <span>👶 Ages: <strong className="text-gray-700">{camp.ageRange}</strong></span>
          <a
            href={camp.locationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-600 transition-colors"
          >
            📍 {camp.location}
          </a>
        </div>

        {/* How we found it */}
        <div>
          <p
            className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            How we found it
          </p>
          <p
            className="text-sm text-gray-700 leading-relaxed"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {camp.howWeFound}
          </p>
        </div>

        {/* Why it works */}
        <div>
          <p
            className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Why it works
          </p>
          <p
            className="text-sm text-gray-700 leading-relaxed"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {camp.whyItWorks}
          </p>
        </div>

        {/* Holy crap reality */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
          <p
            className="text-xs font-bold text-amber-700 uppercase tracking-wide mb-1"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            🔥 The Holy Crap Reality
          </p>
          <p
            className="text-sm text-amber-900 italic leading-relaxed"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            "{camp.holyTruth}"
          </p>
        </div>

        {/* Book link */}
        <a
          href={camp.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 text-sm font-semibold ${camp.bg} text-white px-4 py-2 rounded-full hover:opacity-90 transition-opacity`}
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Book a place → {camp.websiteLabel}
        </a>
      </div>
    </article>
  );
}

// ── Comparison table ──────────────────────────────────────────
function ComparisonTable({ camps }: { camps: CampEntry[] }) {
  return (
    <section className="mb-10">
      <h2
        className="text-2xl font-bold text-gray-800 mb-4"
        style={{ fontFamily: "'Fredoka One', cursive" }}
      >
        Which Camp Is Right for Your Toddler?
      </h2>
      <p
        className="text-sm text-gray-500 mb-4"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        A quick reference for parents trying to match activities to their child's personality and energy level.
      </p>
      <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
        <table className="w-full text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th className="text-left px-4 py-3 font-semibold text-gray-600">Camp</th>
              <th className="text-left px-4 py-3 font-semibold text-gray-600">Best For</th>
              <th className="text-left px-4 py-3 font-semibold text-gray-600">Ages</th>
              <th className="text-left px-4 py-3 font-semibold text-gray-600">Energy Level</th>
            </tr>
          </thead>
          <tbody>
            {[
              { camp: camps[0], bestFor: "Structure & discipline", energy: "Medium" },
              { camp: camps[1], bestFor: "Variety & performing arts", energy: "High" },
              { camp: camps[2], bestFor: "Social skills & sport", energy: "Very High" },
              { camp: camps[3], bestFor: "Strength & bravery", energy: "High" },
              { camp: camps[4], bestFor: "Emotional regulation", energy: "Low–Medium" },
              { camp: camps[5], bestFor: "Outdoor sport & fresh air", energy: "Medium" },
            ].map(({ camp, bestFor, energy }, i) => (
              <tr
                key={camp.id}
                className={`border-b border-gray-50 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}
              >
                <td className="px-4 py-3">
                  <a href={`#${camp.id}`} className="flex items-center gap-2 font-medium text-gray-800 hover:text-pink-600 transition-colors">
                    <span>{camp.emoji}</span>
                    <span>{camp.name}</span>
                  </a>
                </td>
                <td className="px-4 py-3 text-gray-600">{bestFor}</td>
                <td className="px-4 py-3 text-gray-500">{camp.ageRange}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                    energy === "Very High" ? "bg-red-100 text-red-700" :
                    energy === "High" ? "bg-orange-100 text-orange-700" :
                    energy === "Medium" ? "bg-yellow-100 text-yellow-700" :
                    "bg-green-100 text-green-700"
                  }`}>
                    {energy}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

// ── Affiliate links section ───────────────────────────────────
function AffiliateSection({ links }: { links: AffiliateLink[] }) {
  return (
    <section className="mb-10">
      <h2
        className="text-2xl font-bold text-gray-800 mb-2"
        style={{ fontFamily: "'Fredoka One', cursive" }}
      >
        🛍️ What We Actually Use
      </h2>
      <p
        className="text-sm text-gray-500 mb-4"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        These are the products we genuinely use across Kaelle's activities. Some links are affiliate links — if you buy through them, we earn a small commission at no extra cost to you.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-3 bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md hover:border-pink-200 transition-all"
          >
            <span className="text-2xl mt-0.5">🛒</span>
            <div>
              <p
                className="font-semibold text-gray-800 text-sm group-hover:text-pink-700 transition-colors"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {link.label}
              </p>
              <p
                className="text-xs text-gray-500 mt-0.5"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {link.description}
              </p>
              <p
                className="text-xs text-pink-500 mt-1 font-medium"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                via {link.retailer} →
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

// ── Main BlogPost page ────────────────────────────────────────
export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center">
        <NavHeader />
        <p className="text-gray-500 mt-20" style={{ fontFamily: "'Poppins', sans-serif" }}>
          Post not found.{" "}
          <Link href="/blog">
            <span className="text-pink-600 underline cursor-pointer">Back to blog</span>
          </Link>
        </p>
      </div>
    );
  }

  const date = new Date(post.publishDate).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="min-h-screen" style={{ background: "#FAF8F5" }}>
      <NavHeader />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-10 pb-16">

        {/* Breadcrumb */}
        <nav className="mb-6 text-xs text-gray-400 flex items-center gap-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
          <Link href="/"><span className="cursor-pointer transition-colors" style={{ color: "inherit" }} onMouseEnter={e => (e.currentTarget.style.color='#C1694F')} onMouseLeave={e => (e.currentTarget.style.color='')}>Home</span></Link>
          <span>›</span>
          <Link href="/blog"><span className="cursor-pointer transition-colors" onMouseEnter={e => (e.currentTarget.style.color='#C1694F')} onMouseLeave={e => (e.currentTarget.style.color='')}>Blog</span></Link>
          <span>›</span>
          <span className="text-gray-600 truncate max-w-xs">{post.category}</span>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full" style={{ color: "#C1694F", background: "#FDF0EC", fontFamily: "'Poppins', sans-serif" }}>
              {post.category}
            </span>
            <span className="text-xs text-gray-400" style={{ fontFamily: "'Poppins', sans-serif" }}>{post.readTime}</span>
          </div>

          <h1
            className="text-2xl sm:text-3xl font-bold text-stone-800 leading-snug mb-3"
            style={{ fontFamily: "'Fredoka One', cursive" }}
          >
            {post.heroEmoji} {post.title}
          </h1>

          <p
            className="text-base text-stone-500 leading-relaxed mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {post.subtitle}
          </p>

          <time
            className="text-xs text-gray-400"
            dateTime={post.publishDate}
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Published {date}
          </time>
        </header>

        {/* BLUF Box — AEO anchor */}
        <div className="rounded-2xl p-5 mb-8 border-2" style={{ background: "#FEFBF3", borderColor: "#D4B96A" }}>
          <p
            className="text-xs font-bold uppercase tracking-wide mb-2"
            style={{ color: "#A07C30", fontFamily: "'Poppins', sans-serif" }}
          >
            ⚡ Bottom Line Up Front
          </p>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "#6B5320", fontFamily: "'Poppins', sans-serif" }}
          >
            {post.bluf}
          </p>
        </div>

        {/* Opening narrative */}
        <section className="mb-8 prose prose-sm max-w-none" style={{ fontFamily: "'Poppins', sans-serif" }}>
          <h2
            className="text-2xl font-bold text-stone-800 mb-3"
            style={{ fontFamily: "'Fredoka One', cursive" }}
          >
            Why Finding Camps in London Is Harder Than It Looks
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Raising a child in London is not easy. When you grow up in Peru or France, there is an entire ecosystem of family support built into the culture. Grandparents, aunts, and cousins are often just around the corner, ready to help with childcare. In London, that village simply does not exist in the same way. You have to build it yourself.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Add to that the challenge of raising a trilingual child — balancing English, Spanish, and another language — and the mental load becomes immense. We want Kaelle to be fluent, confident, and culturally connected, but that requires constant, intentional effort.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The honest reality is that working full-time while ensuring your child gets the right social interaction and stimulation is exhausting. Lately, building social skills has been more difficult for Kaelle. She has an incredible amount of energy and needs structured environments — sports, puzzles, books — to channel it positively. That is why finding the right summer camps became our lifeline.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Camps are not just childcare so we can keep working. They are essential spaces for Kaelle to explore new activities, interact with other kids, and discover what she truly enjoys. Here is exactly how we built our summer survival calendar, the camps we trust, and why they work for a high-energy three-year-old.
          </p>
        </section>

        {/* Camp cards */}
        <section className="mb-8">
          <h2
            className="text-2xl font-bold text-stone-800 mb-6"
            style={{ fontFamily: "'Fredoka One', cursive" }}
          >
            The 6 Camps That Made Our Summer Work
          </h2>
          {post.camps.map((camp, i) => (
            <CampCard key={camp.id} camp={camp} index={i + 1} />
          ))}
        </section>

        {/* Comparison table */}
        <ComparisonTable camps={post.camps} />

        {/* Parent village section */}
        <section className="mb-10">
          <h2
            className="text-2xl font-bold text-stone-800 mb-3"
            style={{ fontFamily: "'Fredoka One', cursive" }}
          >
            The Unexpected Gift: The Parent Village
          </h2>
          <p
            className="text-gray-700 leading-relaxed mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            One of the most profound things we have realised on this journey is that the parents of the other kids are friends that your kids gift to you.
          </p>
          <p
            className="text-gray-700 leading-relaxed"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            When you do not have family nearby, these other parents become your support network. We share the same challenges — the logistical nightmares, the tantrums, the exhaustion — and we celebrate the same small victories. Kaelle now has two friends from Teddy Tennis whose parents have become part of our London village. We are genuinely grateful for that.
          </p>
        </section>

        {/* Gleneagles pivot */}
        <section className="mb-10 rounded-2xl p-6" style={{ background: "#F0F4F7", border: "1px solid #C8D8E4" }}>
          <h2
            className="text-xl font-bold text-stone-800 mb-3"
            style={{ fontFamily: "'Fredoka One', cursive" }}
          >
            ✈️ Why We Stayed in London (The Gleneagles Pivot)
          </h2>
          <p
            className="text-gray-700 leading-relaxed mb-3 text-sm"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            I originally wanted to go somewhere cooler for the summer. I found Gleneagles in Scotland — they have an absolutely incredible family camp with over 50 outdoor activities on an 850-acre estate.
          </p>
          <p
            className="text-gray-700 leading-relaxed text-sm"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            But my mum could not come to London, and my husband just started a new job. The reality of traveling solo with a three-year-old was too daunting. So we stayed in London, and a friend recommended Dukes Meadows Golf in Chiswick as the substitute. Sometimes the best plan is the one you make when the original plan falls apart.
          </p>
        </section>

        {/* Affiliate section */}
        <AffiliateSection links={post.affiliateLinks} />

        {/* Tags */}
        <section className="mb-10">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-stone-500 bg-stone-50 border border-stone-200 px-3 py-1 rounded-full"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                #{tag.replace(/ /g, "-")}
              </span>
            ))}
          </div>
        </section>

        {/* Back to blog */}
        <div className="border-t border-gray-100 pt-8">
          <Link href="/blog">
            <span
              className="inline-flex items-center gap-2 text-sm font-semibold cursor-pointer transition-colors"
              style={{ color: "#DB2777", fontFamily: "'Poppins', sans-serif" }}
            >
              ← Back to all posts
            </span>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-xs text-stone-400 border-t border-stone-100" style={{ fontFamily: "'Poppins', sans-serif" }}>
        <p>Raising Kaelle · London · {new Date().getFullYear()}</p>
        <p className="mt-1">Some posts contain affiliate links. We only recommend what we genuinely use.</p>
      </footer>
    </div>
  );
}
