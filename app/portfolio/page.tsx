import type { Metadata } from 'next'
import Link from 'next/link'
import { ExternalLink, Github, Scale, BookOpen, Gavel, FileText, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Portfolio | AQSA ZAM ZAM MIRZA JOHAR BAIG — Legal Research & Projects',
  description:
    'Legal research papers, moot court achievements, and project portfolio of AQSA ZAM ZAM MIRZA JOHAR BAIG, Law Student at PDLC Amravati. Explore her work in Constitutional Law, Legal Drafting, and more.',
  alternates: { canonical: 'https://aqsajoharbaig.vercel.app/portfolio' },
}

const categoryIcons: Record<string, React.ElementType> = {
  'Legal Research': BookOpen,
  'Moot Court': Gavel,
  'Legal Aid': Scale,
  'Drafting': FileText,
  'Web Project': Globe,
}

const projects = [
  {
    title: 'Fundamental Rights & State Accountability',
    category: 'Legal Research',
    status: 'Published',
    description:
      'An in-depth research paper analyzing Articles 12–35 of the Indian Constitution, focusing on the horizontal application of Fundamental Rights and landmark Supreme Court judgements including Maneka Gandhi v. Union of India and Vishaka v. State of Rajasthan. Explores the expanding scope of Article 21 (Right to Life).',
    skills: ['Constitutional Law', 'Case Law Analysis', 'Legal Research', 'SCC Online'],
    link: '#',
    github: null,
  },
  {
    title: 'Moot Court — Amravati District Bar Competition',
    category: 'Moot Court',
    status: 'Participant',
    description:
      'Represented PDLC Amravati in the inter-college Moot Court competition. Argued on behalf of the respondent in a writ petition challenging custodial torture under Article 21. Prepared written submissions, argued constitutional questions, and handled cross-examination.',
    skills: ['Oral Advocacy', 'Legal Drafting', 'Constitutional Law', 'Petition Writing'],
    link: '#',
    github: null,
  },
  {
    title: 'Legal Aid Clinic — Free Community Legal Assistance',
    category: 'Legal Aid',
    status: 'Ongoing',
    description:
      'Active volunteer at the PDLC Amravati Legal Aid Clinic. Provides free legal consultation to underprivileged clients in matters of domestic violence (PWDVA 2005), consumer disputes, and landlord-tenant disputes. Prepares legal notices and advises on available remedies.',
    skills: ['Client Counselling', 'Legal Aid', 'PWDVA 2005', 'Consumer Law'],
    link: '#',
    github: null,
  },
  {
    title: 'Legal Drafting Portfolio — Contracts & Pleadings',
    category: 'Drafting',
    status: 'Portfolio',
    description:
      'A curated portfolio of legal drafts prepared as part of academic training and practical exercises: includes a Sale Deed, Rental Agreement, Affidavit of Support, Writ Petition (PIL format), Written Statement in a civil suit, and a Notice under Section 138 Negotiable Instruments Act.',
    skills: ['Legal Drafting', 'Contract Law', 'Civil Procedure', 'NI Act'],
    link: '#',
    github: null,
  },
  {
    title: "Women's Rights in Muslim Personal Law — Research Essay",
    category: 'Legal Research',
    status: 'Published',
    description:
      "A scholarly essay examining the interface of Muslim Personal Law with constitutional guarantees of equality (Articles 14, 15). Critically analyses the Triple Talaq judgment (Shayara Bano v. UoI), Maintenance rights under Section 125 CrPC, and women's inheritance under traditional Islamic Fiqh versus modern legislative reforms.",
    skills: ['Family Law', 'Gender Justice', 'Constitutional Law', 'Legal Research'],
    link: '#',
    github: null,
  },
  {
    title: 'Personal Portfolio & Legal Blog Website',
    category: 'Web Project',
    status: 'Live',
    description:
      "This very website — designed and built to establish a strong online presence for AQSA ZAM ZAM MIRZA JOHAR BAIG as a law student and legal researcher. SEO-optimized using Next.js, targeting Google Page 1 for the name 'AQSA ZAM ZAM MIRZA JOHAR BAIG'. Showcases legal research, blogs, and Urdu Shayari.",
    skills: ['Next.js', 'SEO', 'Tailwind CSS', 'TypeScript'],
    link: 'https://aqsajoharbaig.vercel.app',
    github: 'https://github.com/aqsajoharbaig',
  },
]

const statusColors: Record<string, string> = {
  Published: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  Participant: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  Ongoing: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
  Portfolio: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
  Live: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
}

export default function Portfolio() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aqsajoharbaig.vercel.app' },
      { '@type': 'ListItem', position: 2, name: 'Portfolio', item: 'https://aqsajoharbaig.vercel.app/portfolio' },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="w-full">
        {/* Header */}
        <section
          className="py-20 px-4 text-white text-center"
          style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #1e3a5f 100%)' }}
        >
          <nav aria-label="Breadcrumb" className="text-xs text-blue-300 mb-6">
            <ol className="flex items-center justify-center gap-2 list-none">
              <li><Link href="/" className="hover:text-amber-400 transition-colors">Home</Link></li>
              <li aria-hidden="true">›</li>
              <li className="text-amber-400" aria-current="page">Portfolio</li>
            </ol>
          </nav>
          <p className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-3">Portfolio</p>
          <h1 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Legal Portfolio & Projects
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            By <strong className="text-white">AQSA ZAM ZAM MIRZA JOHAR BAIG</strong> — Law Student at PDLC Amravati. Research papers, moot court work, legal aid, and more.
          </p>
        </section>

        <div className="max-w-5xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => {
              const Icon = categoryIcons[project.category] || BookOpen
              return (
                <article
                  key={idx}
                  className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 p-7 shadow-sm card-hover flex flex-col"
                  aria-labelledby={`project-${idx}-title`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-blue-700 dark:text-blue-400" aria-hidden="true" />
                      </div>
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{project.category}</span>
                    </div>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${statusColors[project.status]}`}>
                      {project.status}
                    </span>
                  </div>

                  <h2
                    id={`project-${idx}-title`}
                    className="text-xl font-bold text-slate-900 dark:text-white mb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {project.title}
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-5 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.skills.map((s) => (
                      <span
                        key={s}
                        className="text-xs px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
                        aria-label={`View source code for ${project.title}`}
                      >
                        <Github className="w-4 h-4" /> Source
                      </a>
                    )}
                    <a
                      href={project.link}
                      target={project.link !== '#' ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium text-blue-700 dark:text-blue-400 hover:underline transition-colors"
                      aria-label={`View ${project.title}`}
                    >
                      <ExternalLink className="w-4 h-4" /> View Project
                    </a>
                  </div>
                </article>
              )
            })}
          </div>

          {/* Author note */}
          <p className="text-center text-sm text-slate-400 mt-12">
            All research and work listed above is by{' '}
            <strong className="text-slate-600 dark:text-slate-300">AQSA ZAM ZAM MIRZA JOHAR BAIG</strong>
            {' '} — Law Student, PDLC Amravati · Last updated: March 2026
          </p>
        </div>
      </div>
    </>
  )
}
