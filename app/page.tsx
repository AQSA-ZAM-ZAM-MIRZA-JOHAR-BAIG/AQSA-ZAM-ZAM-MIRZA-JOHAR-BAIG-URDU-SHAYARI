import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Cpu, Code, Cloud, ChevronRight, MapPin, GraduationCap, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AQSA ZAM ZAM MIRZA JOHAR BAIG | Software Developer & AI-ML Enthusiast',
  description:
    'Official portfolio of AQSA ZAM ZAM MIRZA JOHAR BAIG — Software Developer specializing in AI/ML and Full-Stack development. Computer Science student at VIIT Pune and IIT Madras.',
  alternates: { canonical: 'https://aqsajoharbaig.vercel.app' },
}

const stats = [
  { value: '15+', label: 'AWS Services', icon: '☁️' },
  { value: '10+', label: 'ML Models', icon: '🤖' },
  { value: '40+', label: 'GitHub Repos', icon: '💻' },
  { value: '5+', label: 'Full Stack Apps', icon: '🚀' },
]

const features = [
  {
    icon: Cpu,
    title: 'AI & Machine Learning',
    description:
      'Specializing in Supervised and Unsupervised learning. Experienced with PyTorch, TensorFlow, and Scikit-learn for building predictive models and automating data pipelines.',
    href: '/portfolio',
    cta: 'View ML Projects →',
    color: 'text-blue-700 dark:text-blue-400',
    bg: 'bg-blue-50 dark:bg-blue-900/20',
  },
  {
    icon: Code,
    title: 'Full Stack Development',
    description:
      'Building scalable web applications using the MERN stack (MongoDB, Express, React, Node) and Vue.js. Expert in RESTful APIs and secure authentication (JWT/RBAC).',
    href: '/portfolio',
    cta: 'View Web Apps →',
    color: 'text-amber-700 dark:text-amber-400',
    bg: 'bg-amber-50 dark:bg-amber-900/20',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description:
      'AWS practitioner experienced in EC2, S3, RDS, and Lambda. Implementing CI/CD pipelines and high-availability architectures to ensure production-ready deployments.',
    href: '/portfolio',
    cta: 'View Cloud Projects →',
    color: 'text-rose-700 dark:text-rose-400',
    bg: 'bg-rose-50 dark:bg-rose-900/20',
  },
]

const faqs = [
  {
    q: 'Who is AQSA ZAM ZAM MIRZA JOHAR BAIG?',
    a: 'AQSA ZAM ZAM MIRZA JOHAR BAIG is a Computer Science undergraduate specializing in Artificial Intelligence and Machine Learning. She is a Full-Stack Developer and AWS Cloud practitioner currently studying at VIIT Pune and IIT Madras.',
  },
  {
    q: 'What are Aqsa\'s core technical strengths?',
    a: 'She excels in Java, Python, and JavaScript, with deep expertise in MERN stack, Cloud Computing (AWS), and Machine Learning frameworks like PyTorch and Scikit-learn.',
  },
  {
    q: 'Where is Aqsa Zam Zam Mirza Johar Baig studying?',
    a: 'She is pursuing her B.Tech in CSE (AI & ML) at Vishwakarma Institute of Information Technology (VIIT), Pune, and a BS in Data Science from IIT Madras.',
  },
  {
    q: 'What notable projects has she built?',
    a: 'Notable projects include Mahalaxmi Tailors (a scalable MERN/AWS e-commerce platform), FalcoVita (a healthcare visualization platform), and an IPO Success Predictor using Ensemble Learning.',
  },
  {
    q: 'Is she certified in Cloud technologies?',
    a: 'Yes, she is Microsoft Certified: Azure Fundamentals (AZ-900) and an Oracle Cloud Infrastructure 2025 Certified Generative AI Professional.',
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
                src="/profile.png"
                alt="AQSA ZAM ZAM MIRZA JOHAR BAIG — Software Developer"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 160px, 208px"
                priority
              />
            </div>

            {/* Name Tag */}
            <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
              <GraduationCap className="w-3.5 h-3.5" />
              CS Undergraduate · AI & ML
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-5 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              AQSA ZAM ZAM<br />
              <span className="text-amber-400">MIRZA JOHAR BAIG</span>
            </h1>

            <p className="text-lg md:text-xl text-blue-200 font-medium mb-4">
              Software Developer &nbsp;·&nbsp; AI/ML Researcher &nbsp;·&nbsp; Cloud Engineer
            </p>

            <div className="flex items-center gap-1.5 text-slate-400 text-sm mb-10">
              <MapPin className="w-4 h-4 text-amber-400" aria-hidden="true" />
              <span>Pune, Maharashtra, India</span>
            </div>

            <p className="max-w-2xl text-slate-300 text-base md:text-lg leading-relaxed mb-10">
              Welcome to the official portal of <strong className="text-white">AQSA ZAM ZAM MIRZA JOHAR BAIG</strong> — a Computer Science student specializing in Artificial Intelligence and Machine Learning. Building scalable full-stack applications and cloud-based distributed systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold rounded-lg transition-all shadow-lg hover:shadow-amber-500/25 hover:-translate-y-0.5"
              >
                View Tech Portfolio
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                href="/blogs"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold rounded-lg transition-all hover:-translate-y-0.5"
              >
                Read Tech Blogs
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
                Code. Data. Intelligence.
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                <strong className="text-slate-800 dark:text-slate-200">AQSA ZAM ZAM MIRZA JOHAR BAIG</strong> is a Computer Science undergraduate specializing in Artificial Intelligence and Machine Learning. With a strong foundation in Data Structures, Algorithms, and System Design, she focuses on building scalable applications and cloud-based distributed systems.
              </p>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                She is currently pursuing a B.Tech in CSE (AI & ML) from VIIT Pune and a BS in Data Science from IIT Madras. Her expertise spans across Java, Python, JavaScript, and AWS, with a proven track record of designing RESTful APIs and secure authentication mechanisms.
              </p>
              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-6">
                <Award className="w-4 h-4 text-amber-600" aria-hidden="true" />
                <span>Specialization: <strong className="text-slate-700 dark:text-slate-300">AI & Machine Learning</strong></span>
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
                    ['🎓', 'Institution', 'VIIT Pune & IIT Madras'],
                    ['📍', 'Location', 'Pune, Maharashtra, India'],
                    ['🔥', 'Specialization', 'AI & Machine Learning'],
                    ['💻', 'Focus', 'Full Stack & Cloud Systems'],
                    ['📊', 'Research', 'Supervised & Unsupervised Learning'],
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
              Interested in software collaboration, AI innovations, or cloud-based solutions? Reach out to AQSA ZAM ZAM MIRZA JOHAR BAIG.
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
