import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Scale, BookOpen, PenLine, ChevronRight, MapPin, GraduationCap, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AQSA ZAM ZAM MIRZA JOHAR BAIG | Law Student & Legal Researcher',
  description:
    'Official portfolio of AQSA ZAM ZAM MIRZA JOHAR BAIG — Law Student at PDLC Amravati, Legal Researcher, Technical Writer, and Urdu Shayari Poet from Amravati, Maharashtra.',
  alternates: { canonical: 'https://aqsajoharbaig.vercel.app' },
}

const stats = [
  { value: '10+', label: 'Urdu Poems', icon: '📜' },
  { value: '5+', label: 'Legal Research Papers', icon: '⚖️' },
  { value: '5+', label: 'Published Articles', icon: '✍️' },
  { value: '3+', label: 'Moot Courts', icon: '🏛️' },
]

const features = [
  {
    icon: Scale,
    title: 'Legal Research',
    description:
      'Specializing in Constitutional Law, Evidence Act, and Civil Procedure. Conducting rigorous legal research at PDLC Amravati with a focus on fundamental rights and access to justice.',
    href: '/portfolio',
    cta: 'View Research →',
    color: 'text-blue-700 dark:text-blue-400',
    bg: 'bg-blue-50 dark:bg-blue-900/20',
  },
  {
    icon: PenLine,
    title: 'Technical Writing',
    description:
      'Crafting clear, authoritative legal blogs and articles that bridge the gap between complex jurisprudence and the general public. Covering constitutional law, women\'s rights, and legal literacy.',
    href: '/blogs',
    cta: 'Read Blogs →',
    color: 'text-amber-700 dark:text-amber-400',
    bg: 'bg-amber-50 dark:bg-amber-900/20',
  },
  {
    icon: BookOpen,
    title: 'Urdu Shayari',
    description:
      'Expressing the depths of human emotion through the classical tradition of Urdu poetry. A curated collection of shayari on love, life, justice, and the timeless human condition.',
    href: '/urdu-shayari',
    cta: 'Read Shayari →',
    color: 'text-rose-700 dark:text-rose-400',
    bg: 'bg-rose-50 dark:bg-rose-900/20',
  },
]

const faqs = [
  {
    q: 'Who is AQSA ZAM ZAM MIRZA JOHAR BAIG?',
    a: 'AQSA ZAM ZAM MIRZA JOHAR BAIG (also known as Aqsa Mirza, AqsA Zam Zam, and Aqsa Johar Baig) is a Law Student at Prakash Law College (PDLC), Amravati, Maharashtra, India. She specializes in Legal Research and is also a Technical Writer and Urdu Shayari Poet.',
  },
  {
    q: 'Where does Aqsa Zam Zam Mirza Johar Baig study?',
    a: 'Aqsa Zam Zam Mirza Johar Baig studies at PDLC Amravati — Prakash Law College, Amravati, Maharashtra. Her specialization is Legal Research, and she is based in Amravati, India.',
  },
  {
    q: 'What is AqsA Johar Baig known for?',
    a: 'AqsA Johar Baig (AQSA ZAM ZAM MIRZA JOHAR BAIG) is known for her work in Legal Research, Legal Drafting, and Constitutional Law studies. She is also recognized as an Urdu Shayari poet and Technical Writer who publishes articles on law and literature.',
  },
  {
    q: 'What subjects does Aqsa Mirza research?',
    a: 'Aqsa Mirza (AQSA ZAM ZAM MIRZA JOHAR BAIG) researches Constitutional Law, Fundamental Rights in India, Indian Evidence Act, Civil Procedure Code, Women\'s Rights in Personal Law, and the intersection of Language and Law.',
  },
  {
    q: 'Does AqsA Zam Zam write Urdu poetry?',
    a: 'Yes. AqsA Zam Zam (AQSA ZAM ZAM MIRZA JOHAR BAIG) is an avid Urdu Shayari poet and curator. She maintains a collection of classic and original shayari — presented in Urdu script, Devanagari (Hindi), and English translation — on this website.',
  },
]

export default function Home() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aqsajoharbaig.vercel.app' },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="w-full">
        {/* ── HERO ── */}
        <section
          className="relative w-full min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #1e3a5f 55%, #16213e 100%)' }}
          aria-label="Hero — AQSA ZAM ZAM MIRZA JOHAR BAIG"
        >
          {/* Decorative gold ring */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-amber-500/10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-amber-500/5" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center animate-fade-in-up">
            {/* Profile Photo */}
            <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-amber-500/60 shadow-2xl mb-8 ring-4 ring-white/10">
              <Image
                src="/profile.jpeg"
                alt="AQSA ZAM ZAM MIRZA JOHAR BAIG — Law Student at PDLC Amravati"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 160px, 208px"
                priority
              />
            </div>

            {/* Name Tag */}
            <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
              <GraduationCap className="w-3.5 h-3.5" />
              Law Student · PDLC Amravati
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-5 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              AQSA ZAM ZAM<br />
              <span className="text-amber-400">MIRZA JOHAR BAIG</span>
            </h1>

            <p className="text-lg md:text-xl text-blue-200 font-medium mb-4">
              Legal Researcher &nbsp;·&nbsp; Technical Writer &nbsp;·&nbsp; Urdu Shayari Poet
            </p>

            <div className="flex items-center gap-1.5 text-slate-400 text-sm mb-10">
              <MapPin className="w-4 h-4 text-amber-400" aria-hidden="true" />
              <span>Amravati, Maharashtra, India</span>
            </div>

            <p className="max-w-2xl text-slate-300 text-base md:text-lg leading-relaxed mb-10">
              Welcome to the official website of <strong className="text-white">AQSA ZAM ZAM MIRZA JOHAR BAIG</strong> — a dedicated Law Student at Prakash Law College (PDLC), Amravati, specializing in <em>Legal Research</em>. Here you will find my legal research papers, constitutional law articles, and a curated collection of classic Urdu Shayari.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold rounded-lg transition-all shadow-lg hover:shadow-amber-500/25 hover:-translate-y-0.5"
              >
                View Legal Portfolio
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                href="/urdu-shayari"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold rounded-lg transition-all hover:-translate-y-0.5"
              >
                Read Urdu Shayari
              </Link>
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="py-14 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800" aria-label="Statistics">
          <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label} className="py-4">
                <div className="text-3xl mb-1" aria-hidden="true">{s.icon}</div>
                <div className="text-4xl font-black text-blue-700 dark:text-amber-400" style={{ fontFamily: "'Playfair Display', serif" }}>{s.value}</div>
                <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FEATURE CARDS ── */}
        <section className="py-20 bg-slate-50 dark:bg-slate-950 px-4" aria-label="Expertise areas">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-xs uppercase tracking-widest text-amber-600 font-semibold mb-3">What I Do</p>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                Areas of Focus
              </h2>
              <div className="section-divider mt-4" aria-hidden="true"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((f) => {
                const Icon = f.icon
                return (
                  <div
                    key={f.title}
                    className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-800 card-hover flex flex-col"
                  >
                    <div className={`w-12 h-12 rounded-xl ${f.bg} flex items-center justify-center mb-5`}>
                      <Icon className={`w-6 h-6 ${f.color}`} aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {f.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex-grow">{f.description}</p>
                    <Link
                      href={f.href}
                      className={`mt-5 text-sm font-semibold ${f.color} hover:underline`}
                    >
                      {f.cta}
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── ABOUT SNIPPET ── */}
        <section className="py-20 bg-white dark:bg-slate-900 px-4" aria-label="About AQSA ZAM ZAM MIRZA JOHAR BAIG">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs uppercase tracking-widest text-amber-600 font-semibold mb-3">About Me</p>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Law. Research. Poetry.
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                <strong className="text-slate-800 dark:text-slate-200">AQSA ZAM ZAM MIRZA JOHAR BAIG</strong> is a passionate Law Student at <strong className="text-slate-800 dark:text-slate-200">Prakash Law College (PDLC), Amravati</strong>, Maharashtra. She specializes in <em>Legal Research</em> and has a deep commitment to justice, legal literacy, and the empowerment of marginalized communities through law.
              </p>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Beyond the courtroom, she is an avid Urdu Shayari poet, finding parallels between the precision of law and the elegance of classical Urdu verse. Her writing — legal and literary — reflects a mind shaped by both rigorous scholarship and poetic sensitivity.
              </p>
              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-6">
                <Award className="w-4 h-4 text-amber-600" aria-hidden="true" />
                <span>Specialization: <strong className="text-slate-700 dark:text-slate-300">Legal Research</strong> — PDLC Amravati</span>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-1 px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg transition-colors text-sm"
              >
                Read Full Bio <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-amber-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
                <h3 className="font-bold text-slate-900 dark:text-white mb-4 text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Quick Facts
                </h3>
                <ul className="space-y-3 text-sm">
                  {[
                    ['🎓', 'Institution', 'PDLC Amravati (Prakash Law College)'],
                    ['📍', 'Location', 'Amravati, Maharashtra, India'],
                    ['⚖️', 'Specialization', 'Legal Research'],
                    ['📝', 'Also Known As', 'Aqsa Mirza · AqsA Zam Zam · Aqsa Johar Baig'],
                    ['🌹', 'Creative Pursuit', 'Urdu Shayari & Technical Writing'],
                    ['🗓️', 'Last Updated', 'March 2026'],
                  ].map(([emoji, label, value]) => (
                    <li key={label} className="flex items-start gap-3">
                      <span className="text-base" aria-hidden="true">{emoji}</span>
                      <div>
                        <span className="text-slate-500 dark:text-slate-400">{label}: </span>
                        <strong className="text-slate-800 dark:text-slate-200">{value}</strong>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section
          className="py-20 bg-slate-50 dark:bg-slate-950 px-4"
          aria-label="Frequently Asked Questions about AQSA ZAM ZAM MIRZA JOHAR BAIG"
        >
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-amber-600 font-semibold mb-3">FAQ</p>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                About AQSA ZAM ZAM MIRZA JOHAR BAIG
              </h2>
              <div className="section-divider mt-4" aria-hidden="true"></div>
            </div>
            <div className="space-y-5">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 p-6"
                >
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-base">
                    {faq.q}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 px-4" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #1e3a5f 100%)' }}>
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Get in Touch
            </h2>
            <p className="text-blue-200 mb-8 text-lg">
              Interested in legal collaboration, research discussions, or Urdu poetry? Reach out to AQSA ZAM ZAM MIRZA JOHAR BAIG.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold rounded-lg text-lg transition-all shadow-lg hover:shadow-amber-500/30 hover:-translate-y-0.5"
            >
              Contact Me <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
