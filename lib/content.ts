// ============================================================
// lib/content.ts
// All site copy lives here. Edit text in this file only —
// never touch component files for copy changes.
//
// TO CHANGE YOUR PHONE NUMBER: update siteConfig.phone
// and siteConfig.whatsapp below. Every button on the site
// that calls or opens WhatsApp is derived from those two values.
// Workshop WhatsApp links (with pre-filled text) are listed
// separately in the `workshops` section — update those too.
// ============================================================

export const siteConfig = {
  name: 'SKIOLO',
  tagline: 'Set the System.',
  description:
    "Most businesses don't have a strategy problem — they have a systems problem. We help founders install the visibility, control, and Automation, their business needs to run without them.",
  phone: '+918304807856',             
  phoneDisplay: '+91 99999 99999',
  whatsapp: 'https://wa.me/918304807856', 
  location: 'Kondotty / Calicut, Kerala',
  foundedYear: '2022',
  currentYear: '2026',
  youtube: 'https://www.youtube.com/@the_busclarity_mentor',
  instagram: 'https://www.instagram.com/the_business_clarity_mentor/',
  email: 'mailto:hello@skiolo.com',
}

// ─── NAV ─────────────────────────────────────────────────────
export const nav = {
  links: [
    { label: 'Services', href: '#services' },
    { label: 'Methodology', href: '#methodology' },
    { label: 'Journey', href: '#journey' },
    { label: 'Workshops', href: '#workshops' },
  ],
}

// ─── HERO ────────────────────────────────────────────────────
export const hero = {
  pill: {
    badge: 'NEW',
    text: 'Online workshop · Friday, May 22 · ',
    ctaText: 'Reserve seat',
    ctaHref: '#workshops',
  },
  eyebrowName: 'SKIOLO —',
  headlinePlain: 'Set the ',
  headlineItalic: 'System.',
  sub: "Most businesses don't have a strategy problem — they have a systems problem. We help founders install the visibility, control, and structure their business needs to run without them.",
  ctaPrimary: {
    label: 'Book a clarity call',
    href: siteConfig.whatsapp,
  },
  ctaSecondary: {
    label: 'Call directly',
    href: `tel:${siteConfig.phone}`,
  },
  meta: {
    activeStat: '3 active engagements',
    location: 'India & GCC',
    since: '2022',
  },
}

// ─── PILLARS ─────────────────────────────────────────────────
export const pillars = {
  eyebrow: 'What We Build',
  headlinePlain: 'Three things every business needs. ',
  headlineItalic: 'In that order.',
  sub: 'Within a few months, your business has the visibility to see itself clearly, the control to run reliably, and the automation to grow without you.',
  items: [
    {
      num: '01',
      title: 'Visibility',
      desc: 'You know what is happening across every team, every project, in real time — without asking. Status becomes data, not opinion.',
    },
    {
      num: '02',
      title: 'Control',
      desc: 'Clear reporting structures, defined limits, and escalation logic that catches problems early — before they cost you money.',
    },
    {
      num: '03',
      title: 'Automation',
      desc: 'Person-dependency drops. The system does the heavy lifting. You stop managing people and start managing the system.',
    },
  ],
}

// ─── METHODOLOGY ─────────────────────────────────────────────
export const methodology = {
  eyebrow: 'How We Work',
  headlinePlain: 'I do. We do. ',
  headlineItalic: 'You do.',
  sub: "A three-month transfer of capability. By the end, the system isn't ours — it's yours. And it runs without us.",
  phases: [
    {
      badge: 'MONTH 01',
      subtitle: 'Phase one',
      titlePlain: 'I ',
      titleItalic: 'Do.',
      desc: 'SKIOLO does the heavy lifting. We audit, design, and build the system. Your team watches and learns. The structure starts working from week one.',
      active: false,
    },
    {
      badge: 'MONTH 02',
      subtitle: 'Phase two',
      titlePlain: 'We ',
      titleItalic: 'Do.',
      desc: 'We work shoulder-to-shoulder with your team. They execute, we coach. Mistakes get corrected on the spot. Confidence and discipline build together.',
      active: true,
    },
    {
      badge: 'MONTH 03',
      subtitle: 'Phase three',
      titlePlain: 'You ',
      titleItalic: 'Do.',
      desc: "Your team runs the system on their own. We observe quietly, refine where needed. By month-end, the system belongs to you — and stays alive long after we leave.",
      active: false,
    },
  ],
}

// ─── JOURNEY ─────────────────────────────────────────────────
export const journey = {
  eyebrow: 'Our Journey',
  headlinePlain: 'The story ',
  headlineItalic: 'behind the system.',
  sub: 'How SKIOLO went from a single founder\'s question — "Why is my business breaking every time I step away?" — to a movement helping hundreds of founders set the system.',
  timeline: [
    { year: '2022', text: 'The first engagement. A perfume e-commerce brand drowning in WhatsApp.' },
    { year: '2023', text: 'The methodology takes shape. I do. We do. You do.' },
    { year: '2024', text: 'First GCC engagement. The system crosses borders.' },
    { year: '2026', text: 'Workshops. YouTube. A growing community of founders who believe in clarity over chaos.' },
  ],
  youtubeCta: {
    label: 'More on YouTube',
    href: siteConfig.youtube,
  },
  video: {
    id: 'DSFpZ4D3zFM',
    title: 'The SKIOLO Journey',
    meta: 'Click or scroll to play · muted',
  },
}

// ─── SERVICES ────────────────────────────────────────────────
export const services = {
  eyebrow: 'What we do',
  headlinePlain: 'Seven disciplines. ',
  headlineItalic: 'One outcome.',
  sub: 'A business that runs predictably — without the founder holding it together by hand.',
  items: [
    {
      num: '01 — SOPs',
      title: 'Standard Operating Procedures',
      desc: 'Documented procedures so any team member can run the operation without you hovering.',
    },
    {
      num: '02 — JOB DESIGN',
      title: 'Job Descriptions',
      desc: 'Role clarity that makes hiring sharper, accountability obvious, and reviews honest.',
    },
    {
      num: '03 — ORG DESIGN',
      title: 'Organisation Design',
      desc: 'A structure that scales with growth. Clear lines, clean reporting, no orphaned work.',
    },
    {
      num: '04 — STRATEGY',
      title: 'Strategy',
      desc: 'Direction backed by clarity. We help you choose what to do — and what to stop doing.',
    },
    {
      num: '05 — PROCESS',
      title: 'Process Design',
      desc: 'Workflows that remove friction and create predictable output, week after week.',
    },
    {
      num: '06 — QUALITY',
      title: 'Systems & Quality',
      desc: 'Standards, audits, and feedback loops that keep quality consistent as the team grows.',
    },
    {
      num: '07 — AUDITING',
      title: 'Performance Auditing',
      desc: "Honest diagnostics that find what's silently costing you money — and a roadmap to fix it.",
    },
  ],
  philosophy: {
    num: '— PHILOSOPHY',
    quotePlain: 'Set the system. ',
    quoteItalic: 'The system sets the business.',
    sub: 'Every engagement ends the same way: a business that no longer needs the founder to function.',
  },
}

// ─── WORKSHOPS ───────────────────────────────────────────────
export const workshops = {
  eyebrow: 'Workshops & Sessions',
  headlinePlain: 'Learn the system. ',
  headlineItalic: 'Live.',
  sub: 'Two formats. Same outcome — you leave with frameworks you can use Monday morning. Both are seat-limited and built for founders and operations leads who want clarity, not theory.',
  online: {
    format: 'ONLINE · ZOOM',
    titlePlain: 'How to Build SOPs Founders ',
    titleItalic: "Don't Hate.",
    desc: 'A 90-minute live working session. Come with one process you wish ran without you — leave with the blueprint to make it happen.',
    details: [
      { label: 'Date', value: 'Friday, May 22 · 6:00 AM IST' },
      { label: 'Duration', value: '1 MONTH' },
      { label: 'Seats', value: 'Limited Seat Only' },
      { label: 'Investment', value: '₹4999' },
    ],
    cta: {
      label: 'Reserve seat on WhatsApp',
      href: "https://wa.me/918304807856?text=Hi%20Saife%2C%20I%27d%20like%20to%20reserve%20a%20seat%20for%20the%20online%20workshop%20on%20May%2024.",
    },
    meta: '→ Zoom link sent 24 hours before · Recording shared with attendees',
  },
  offline: {
    format: 'OFFLINE · CALICUT',
    titlePlain: 'The Operating System for ',
    titleItalic: 'Family Businesses.',
    desc: 'A full-day in-person intensive. Bring your co-founder or operations head. Lunch, materials, and personal attention included.',
    details: [
      { label: 'Date', value: 'Saturday, June 7 · 10:00 AM' },
      { label: 'Duration', value: '10 AM – 5 PM (full day)' },
      { label: 'Venue', value: 'Hotel Westway, Calicut' },
      { label: 'Seats', value: '25 founders · application-based' },
    ],
    cta: {
      label: 'Apply on WhatsApp',
      href: "https://wa.me/918304807856?text=Hi%20Saife%2C%20I%27d%20like%20to%20apply%20for%20the%20Calicut%20offline%20workshop%20on%20June%207.",
    },
    meta: '→ Lunch + materials included · Limited transport assistance available',
  },
  corporate: {
    titlePlain: 'Need a workshop ',
    titleItalic: 'just for your team?',
    desc: "Custom in-house workshops for management teams of 10–50. Held at your office or a venue we arrange — anywhere in India or the GCC. Built for both founders and the senior staff who'll run the system after.",
    cta: {
      label: 'Enquire about a custom workshop',
      href: "https://wa.me/918304807856?text=Hi%20Saife%2C%20I%27d%20like%20to%20enquire%20about%20a%20custom%20workshop%20for%20my%20team.",
    },
  },
}

// ─── TESTIMONIALS ────────────────────────────────────────────
export const testimonials = {
  eyebrow: 'In Their Words',
  headlinePlain: 'What founders say ',
  headlineItalic: 'after.',
  items: [
    {
      logo: '/clients/lago-group.png',
      scale: 1.0,
      quote:
        "Before SKIOLO, I had to be in the showroom to make things work. Saife built SOPs for every counter — billing, display, customer handling. Now the team runs it. I only see what I need to see.",
      name: 'Nizar Ahammed',
      role: 'Founder · Lago Group',
    },
    {
      logo: '/clients/covo-concepts.png',
      scale: 1.1,
      quote:
        "We had five sites running with no single view of progress. SKIOLO built a tracking system my team actually uses. Delays surface before they become client problems.",
      name: 'Riyas C',
      role: 'Principal Architect · COVO Concepts',
    },
    {
      logo: '/clients/topan-finistore.png',
      scale: 1.0,
      quote:
        "Every lead was stuck in someone's phone. No follow-up discipline, no clear owner. SKIOLO mapped the full sales floor process — now every inquiry has a deadline and someone responsible.",
      name: 'Niyas',
      role: 'Founder · Topan Finistore',
    },
    {
      logo: '/clients/deco-italia.png',
      scale: 0.95,
      quote:
        "Growing the showroom meant service quality was slipping. SKIOLO built the systems that let us scale — I stepped back from the floor and quality actually improved.",
      name: 'Aseem',
      role: 'Founder · Deco Italia',
    },
    {
      logo: '/clients/ponnara.png',
      scale: 0.95,
      quote:
        "Two branches, two different ways of doing everything. SKIOLO standardised daily reporting across both. Now I see a single sheet every morning and know exactly where to act.",
      name: 'Shabeen',
      role: 'Director · Ponnara Gold & Diamonds',
    },
    {
      logo: '/clients/eddream.png',
      scale: 0.85,
      quote:
        "Students were falling through the cracks between first inquiry and enrollment. SKIOLO mapped the counselor pipeline and trained the team on it. We saw the difference in six weeks.",
      name: 'Shibin',
      role: 'Founder · EdDream',
    },
  ],
}

// ─── SOCIAL ──────────────────────────────────────────────────
export const social = {
  eyebrow: 'Watch & Follow',
  headlinePlain: 'Free clarity, ',
  headlineItalic: 'every week.',
  sub: 'Frameworks, breakdowns, and behind-the-scenes from real engagements. No fluff, no upsell.',
  youtube: {
    handle: '@the_busclarity_mentor',
    titlePlain: 'Long-form videos for ',
    titleItalic: 'thinking founders.',
    desc: 'Deep-dives into org design, SOP rollouts, and the operating mistakes that quietly stall growth.',
    cta: 'Watch on YouTube',
    href: siteConfig.youtube,
  },
  instagram: {
    handle: '@the_business_clarity_mentor',
    titlePlain: 'Daily clarity, ',
    titleItalic: 'one reel at a time.',
    desc: "Bite-sized frameworks for founders who don't have time for an MBA. Posted in English, Malayalam, and Hindi.",
    cta: 'Follow on Instagram',
    href: siteConfig.instagram,
  },
}

// ─── FINAL CTA ───────────────────────────────────────────────
export const finalCta = {
  headlinePlain: 'Ready to ',
  headlineItalic: 'set your system?',
  sub: 'A 30-minute clarity call to map where your business is leaking time, money, and momentum. Free, no slides, no script.',
  ctaPrimary: {
    label: 'Talk to Saife on WhatsApp',
    href: "https://wa.me/918304807856?text=Hi%20Saife%2C%20I%27d%20like%20to%20book%20a%20clarity%20call%20about%20my%20business.",
  },
  ctaSecondary: {
    label: 'Call directly',
    href: `tel:${siteConfig.phone}`,
  },
  meta: 'Replies typically within 2 hours · Mon–Sat · Kondotty / Calicut, Kerala',
}

// ─── FOOTER ──────────────────────────────────────────────────
export const footer = {
  about:
    'A business systems advisory based out of Kondotty, Kerala. We help founders set the system — so the system can set the business.',
  services: [
    { label: 'SOPs', href: '#services' },
    { label: 'Org Design', href: '#services' },
    { label: 'Strategy', href: '#services' },
    { label: 'Auditing', href: '#services' },
  ],
  connect: [
    { label: 'WhatsApp', href: siteConfig.whatsapp },
    { label: 'Instagram', href: siteConfig.instagram },
    { label: 'YouTube', href: siteConfig.youtube },
    { label: 'Email', href: siteConfig.email },
  ],
  office: ['Kondotty', 'Calicut, Kerala', 'India'],
  copyright: `© ${siteConfig.currentYear} SKIOLO. All rights reserved.`,
  tag: 'SET · THE · SYSTEM',
}
