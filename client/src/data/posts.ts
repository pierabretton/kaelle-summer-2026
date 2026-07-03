// ============================================================
// Raising Kaelle — Blog Posts Data
// Each post follows AEO (Answer Engine Optimisation) structure:
//   - BLUF summary
//   - Semantic H2/H3 headings as questions
//   - Firsthand experience markers
//   - Structured comparison tables
//   - Affiliate link placeholders
// ============================================================

export interface AffiliateLink {
  label: string;
  url: string;
  retailer: string;
  description: string;
  price?: string;       // e.g. "£35.00"
  image?: string;       // path to local product image
  badge?: string;       // e.g. "Kaelle wears this" or "As seen on Kaelle"
}

export interface CampEntry {
  id: string;
  name: string;
  emoji: string;
  tagline: string;
  ageRange: string;
  location: string;
  locationUrl: string;
  websiteUrl: string;
  websiteLabel: string;
  color: string;
  border: string;
  bg: string;
  howWeFound: string;
  whyItWorks: string;
  holyTruth: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  publishDate: string;
  readTime: string;
  category: string;
  tags: string[];
  metaDescription: string;
  bluf: string; // Bottom Line Up Front — for AEO
  heroEmoji: string;
  camps: CampEntry[];
  affiliateLinks: AffiliateLink[];
}

export const POSTS: BlogPost[] = [
  {
    slug: "summer-camps-london-toddlers-3-4",
    title: "Raising a Trilingual Kid in London: The Real Guide to Finding Summer Camps for 3–4 Year Olds",
    subtitle: "How we built Kaelle's summer survival calendar — and the camps that actually work for high-energy toddlers",
    publishDate: "2026-06-28",
    readTime: "8 min read",
    category: "London Life",
    tags: ["summer camps london", "toddler activities london", "kids 3 years old london", "trilingual parenting", "london parenting", "kensington activities kids", "social skills toddlers"],
    metaDescription: "Finding summer camps in London for a 3-to-4-year-old is genuinely hard. Here's our honest guide to Kensington Ballet, Dakodas, Teddy Tennis, NWG Gymnastics, and Kalmer Kids — from a working mum raising a trilingual child in London without local family support.",
    bluf: "Finding summer camps in London for a 3-to-4-year-old that build social skills and burn energy is a serious challenge. After testing multiple options, the best mix for Kaelle is: Kensington Ballet School (structure and discipline), Dakodas (performing arts variety), Teddy Tennis (high-energy social fun), NWG Gymnastics (Olympic ambitions), and Kalmer Kids (mindfulness). If you're a working parent in London without local family support, this is the guide you need.",
    heroEmoji: "🌟",
    camps: [
      {
        id: "kensington-ballet",
        name: "Kensington Ballet School",
        emoji: "🩰",
        tagline: "Structure, discipline, and a little magic",
        ageRange: "18 months – 5½ years",
        location: "Christchurch, Victoria Road, W8 5RQ",
        locationUrl: "https://maps.google.com/?q=Christchurch+Victoria+Road+London+W8+5RQ",
        websiteUrl: "https://kensingtonballet.com/summer-school/",
        websiteLabel: "kensingtonballet.com",
        color: "text-white",
        border: "border-[#E91E8C]",
        bg: "bg-[#E91E8C]",
        howWeFound: "Kaelle joined when she was 18 months old — one of the earliest starters they take.",
        whyItWorks: "Miss Rachel is brilliant. She teaches manners and discipline alongside movement, and she is a bit strict — which is exactly what Kaelle's personality needs. Clear boundaries in a joyful, creative space.",
        holyTruth: "Your toddler will cry the first two sessions. By session three, they will not want to leave.",
      },
      {
        id: "dakodas",
        name: "Dakodas Performing Arts Camp",
        emoji: "☀️",
        tagline: "Ballet, gym, and drama — all before lunch",
        ageRange: "3 years and up",
        location: "More House School, 22-24 Pont Street, Knightsbridge, SW1X 0AA",
        locationUrl: "https://maps.google.com/?q=22-24+Pont+Street+Knightsbridge+London+SW1X+0AA",
        websiteUrl: "https://dakodas.co.uk",
        websiteLabel: "dakodas.co.uk",
        color: "text-white",
        border: "border-[#FF7B54]",
        bg: "bg-[#FF7B54]",
        howWeFound: "We enrolled Kaelle at age 3, as soon as she was eligible. The key was the 30-minute class format.",
        whyItWorks: "Instead of one long session, Dakodas breaks the day into 30-minute bursts: ballet, gym, drama. This is perfect for a three-year-old's attention span. Constant movement, constant novelty.",
        holyTruth: "The performing arts element means your child will come home and perform a full show for you every evening. You will watch it. Every time.",
      },
      {
        id: "teddy-tennis",
        name: "Teddy Tennis Holland Park",
        emoji: "🎾",
        tagline: "The energy burner that built her social circle",
        ageRange: "2½ – 6 years",
        location: "Court 3, Holland Park, London W8 6LU",
        locationUrl: "https://maps.google.com/?q=Holland+Park+Court+3+London+W8+6LU",
        websiteUrl: "https://teddytennisuk.co.uk/centre/holland-park/",
        websiteLabel: "teddytennisuk.co.uk",
        color: "text-white",
        border: "border-[#4CAF50]",
        bg: "bg-[#4CAF50]",
        howWeFound: "We started at age 3. Kaelle literally loves it — she has two friends from school who now join her once a week.",
        whyItWorks: "High-energy, fast-paced, and deeply social. Kaelle goes twice a week because she needs that physical output. If you have a child who bounces off the walls, Teddy Tennis is the answer.",
        holyTruth: "The 'teddy bear' concept is genius for toddlers. They are not playing tennis — they are going on an adventure with their teddy. The technique comes naturally.",
      },
      {
        id: "nwg-gymnastics",
        name: "NWG Gymnastics",
        emoji: "🤸",
        tagline: "Olympic dreams, starting at 3½",
        ageRange: "3½ years and up (independent classes)",
        location: "Nile Wilson Gymnastics Academy, London",
        locationUrl: "https://maps.google.com/?q=Nile+Wilson+Gymnastics+London",
        websiteUrl: "https://nwga.co.uk/",
        websiteLabel: "nwga.co.uk",
        color: "text-white",
        border: "border-[#9C27B0]",
        bg: "bg-[#9C27B0]",
        howWeFound: "Kaelle always wanted to do 'Olympic gymnastics.' Most serious programmes require children to be at least 3½, so we waited.",
        whyItWorks: "A different kind of discipline compared to ballet or tennis — focused on core strength, spatial awareness, and bravery. She is slowly warming up to it, and we are excited to see how she develops.",
        holyTruth: "The first session she refused to go on the beam. By the third session, she was asking to do it again.",
      },
      {
        id: "kalmer-kids",
        name: "Kalmer Kids",
        emoji: "🌿",
        tagline: "Nature, mindfulness, and creative calm",
        ageRange: "3–8 years",
        location: "Tadpoles Nursery, 8 Hornton Place, Kensington, W8 4LZ",
        locationUrl: "https://maps.google.com/?q=8+Hornton+Place+Kensington+London+W8+4LZ",
        websiteUrl: "https://www.kalmerkids.com/classes",
        websiteLabel: "kalmerkids.com",
        color: "text-white",
        border: "border-[#26A69A]",
        bg: "bg-[#26A69A]",
        howWeFound: "Recommended by one of the mums at Kaelle's school. We are trying it this summer.",
        whyItWorks: "Given how high-energy Kaelle's other activities are, we wanted to introduce something that helps her slow down and regulate her emotions. Forest school-inspired activities combined with mindfulness tools.",
        holyTruth: "We will report back. Getting a high-octane toddler to sit still for mindfulness is its own adventure.",
      },
      {
        id: "dukes-meadows-golf",
        name: "Dukes Meadows Golf",
        emoji: "⛳",
        tagline: "The Gleneagles pivot — London's hidden gem",
        ageRange: "5 years and up (junior programme)",
        location: "Dukes Meadows Golf, Chiswick, London W4 2SH",
        locationUrl: "https://maps.google.com/?q=Dukes+Meadows+Golf+Chiswick+London+W4+2SH",
        websiteUrl: "https://dukesmeadows.com/golf/golf-coaching/golf-junior-programme/",
        websiteLabel: "dukesmeadowsgolf.com",
        color: "text-white",
        border: "border-[#8BC34A]",
        bg: "bg-[#8BC34A]",
        howWeFound: "We originally planned to go to Gleneagles in Scotland — they have an incredible family camp. But with my husband starting a new job and my mum unable to travel, going solo with a three-year-old was too much. A friend recommended Dukes Meadows as the London alternative.",
        whyItWorks: "A beautiful, accessible course in Chiswick with a proper junior programme. It turned out to be the perfect London substitute — and far less stressful than a solo trip to Scotland.",
        holyTruth: "Sometimes the best plan is the one you make when the original plan falls apart.",
      },
    ],
    affiliateLinks: [
      {
        label: "Sparkle the Unicorn Tennis Kit",
        url: "https://roarsome.com/products/sparkle-the-unicorn-tennis-kit?variant=52078464499996&country=GB&currency=GBP",
        retailer: "Roarsome",
        description: "The exact tennis kit Kaelle wears at Teddy Tennis. Top + wings + pleated skirt with inner shorts. Made from 100% recycled moisture-wicking fabric. Sizes 3–4 up to 8–10.",
        price: "£35.00",
        image: "/images/roarsome-sparkle-tennis-kit.jpg",
        badge: "Kaelle wears this",
      },
      {
        label: "Bloch Desdemona Tutu",
        url: "https://www.trotters.co.uk/products/bloch-desdemona-tutu?variant=8970833428541",
        retailer: "Trotters",
        description: "The tutu leotard Kaelle wears to Kensington Ballet. Fine straps, three-layer tulle skirt, and just the right amount of poof. Note: comes up small — size up. Rated 5 stars.",
        price: "£34.00",
        image: "/images/trotters-bloch-tutu.webp",
        badge: "Kaelle wears this",
      },
      {
        label: "Girls' Velvet Dance Bag 15 L",
        url: "https://www.decathlon.co.uk/p/girls-velvet-dance-bag-15-l-pink/335090/c391c391m8667441",
        retailer: "Decathlon",
        description: "The perfect dance bag for little ones. Velvet finish, 15 L capacity, zipped top — fits ballet shoes, a spare leotard, and a snack. Rated 4.8 stars with 266 reviews. Was £14.99, now £12.99.",
        price: "£12.99",
        image: "/images/decathlon-dance-bag.jpg",
        badge: "Kaelle uses this",
      },
    ],
  },
];
