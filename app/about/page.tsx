import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { GraduationCap, MapPin, Award, CheckCircle2, Download, Linkedin, Github } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About AQSA ZAM ZAM MIRZA JOHAR BAIG | Law Student, PDLC Amravati',
  description:
    'Learn about AQSA ZAM ZAM MIRZA JOHAR BAIG — Law Student at PDLC Amravati (Prakash Law College), specializing in Legal Research. Based in Amravati, Maharashtra, India.',
  alternates: { canonical: 'https://aqsajoharbaig.vercel.app/about' },
}

const skills = [
  { name: 'Legal Research', level: 92, desc: 'Statutory interpretation, case law analysis, legal databases (SCC, Manupatra)' },
  { name: 'Legal Drafting', level: 88, desc: 'Petitions, affidavits, contracts, plaints, written statements' },
  { name: 'Constitutional Law', level: 85, desc: 'Fundamental Rights (Part III), Directive Principles, judiciary structure' },
  { name: 'Communication', level: 90, desc: 'Oral advocacy, moot court arguments, client counselling' },
  { name: 'Technical Writing', level: 87, desc: 'Legal blogs, research papers, legal literacy articles' },
  { name: 'Urdu Literature', level: 95, desc: 'Classical Shayari, Ghazal tradition, Urdu prose and poetry' },
]

const education = [
  {
    degree: 'LL.B. — Bachelor of Laws',
    institution: 'Prakash Law College (PDLC), Amravati',
    period: 'Current',
    specialization: 'Specialization: Legal Research',
    location: 'Amravati, Maharashtra, India',
    highlights: [
      'Specialization in Legal Research and Legal Drafting',
      'Active participant in Moot Court competitions',
      'Member of Legal Aid Clinic — providing free legal assistance',
      'Contributor to college law journal',
    ],
    isPrimary: true,
  },
]

const areasOfInterest = [
  { icon: '⚖️', title: 'Constitutional Law', desc: 'Fundamental Rights, Directive Principles, Constitutional remedies and writ jurisdiction.' },
  { icon: '👩‍⚖️', title: 'Family & Personal Law', desc: "Women's rights in Muslim Personal Law, Hindu Succession Act, and gender-just jurisprudence." },
  { icon: '📜', title: 'Evidence Law', desc: 'Indian Evidence Act, admissibility of electronic evidence, burden of proof doctrines.' },
  { icon: '📋', title: 'Civil Procedure', desc: 'Code of Civil Procedure, trial procedure, plaint and written statement drafting.' },
  { icon: '✍️', title: 'Legal Writing', desc: 'Academic legal research, case commenting, and legal literacy journalism.' },
  { icon: '🌹', title: 'Urdu Literature', desc: 'Classical Urdu poetry, Ghazal and Nazm tradition, Ghalib, Iqbal, Faiz, and Jaun Elia.' },
]

export default function About() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aqsajoharbaig.vercel.app' },
      { '@type': 'ListItem', position: 2, name: 'About', item: 'https://aqsajoharbaig.vercel.app/about' },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="w-full">
        {/* Page Header */}
        <section
          className="py-20 px-4 text-white text-center"
          style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #1e3a5f 100%)' }}
        >
          <nav aria-label="Breadcrumb" className="text-xs text-blue-300 mb-6">
            <ol className="flex items-center justify-center gap-2 list-none">
              <li><Link href="/" className="hover:text-amber-400 transition-colors">Home</Link></li>
              <li aria-hidden="true">›</li>
              <li className="text-amber-400 font-medium" aria-current="page">About</li>
            </ol>
          </nav>
          <p className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-3">About Me</p>
          <h1 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            AQSA ZAM ZAM MIRZA JOHAR BAIG
          </h1>
          <p className="text-blue-200 text-lg mb-3">Law Student · Legal Researcher · Urdu Poet</p>
          <div className="flex items-center justify-center gap-1.5 text-slate-400 text-sm">
            <MapPin className="w-4 h-4 text-amber-400" aria-hidden="true" />
            <span>Amravati, Maharashtra, India</span>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 py-16 space-y-16">

          {/* Bio Section */}
          <section aria-labelledby="bio-heading">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
              <div className="flex flex-col items-center">
                <div className="relative w-48 h-48 rounded-2xl overflow-hidden border-4 border-amber-500/40 shadow-xl mb-4">
                  <Image
                    src="/profile.png"
                    alt="AQSA ZAM ZAM MIRZA JOHAR BAIG — Law Student at PDLC Amravati"
                    fill
                    className="object-cover"
                    sizes="192px"
                  />
                </div>
                <p className="text-center text-sm font-bold text-slate-800 dark:text-slate-200">AQSA ZAM ZAM MIRZA JOHAR BAIG</p>
                <p className="text-center text-xs text-slate-500 dark:text-slate-400 mt-1">Also known as: Aqsa Mirza · AqsA Zam Zam · Aqsa Johar Baig</p>
                <div className="mt-4 flex gap-3">
                  <a href="https://linkedin.com/in/aqsajoharbaig" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 hover:bg-blue-200 transition-colors" aria-label="LinkedIn Profile">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="https://github.com/aqsajoharbaig" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 transition-colors" aria-label="GitHub Profile">
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="md:col-span-2">
                <h2 id="bio-heading" className="text-3xl font-black text-slate-900 dark:text-white mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Background & Education
                </h2>
                <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                  <p>
                    <strong className="text-slate-800 dark:text-slate-200">AQSA ZAM ZAM MIRZA JOHAR BAIG</strong> — commonly referred to as <em>Aqsa Mirza</em>, <em>AqsA Zam Zam</em>, or <em>Aqsa Johar Baig</em> — is a dedicated Law Student at <strong className="text-slate-800 dark:text-slate-200">Prakash Law College (PDLC), Amravati</strong>, Maharashtra. Her academic journey is defined by a deep commitment to the pursuit of justice, legal scholarship, and the empowerment of communities through legal literacy.
                  </p>
                  <p>
                    Her specialization in <strong className="text-slate-800 dark:text-slate-200">Legal Research</strong> has equipped her with advanced skills in statutory interpretation, case law analysis, legal database research (SCC Online, Manupatra, Indian Kanoon), and academic legal writing. She actively participates in Moot Court competitions, legal aid clinics, and institutional legal debates.
                  </p>
                  <p>
                    AQSA ZAM ZAM MIRZA JOHAR BAIG is based in <strong className="text-slate-800 dark:text-slate-200">Amravati, Maharashtra, India</strong> — a city steeped in history and legal tradition. Her proximity to local courts and legal institutions has given her practical exposure to civil and criminal proceedings from an early stage of her legal education.
                  </p>
                  <p>
                    Beyond the law library, she is a passionate Urdu Shayari poet and curator, believing deeply that the same precision which defines legal drafting also illuminates the best Urdu verse. Her literary pursuits keep her grounded in language, empathy, and the human dimension of justice.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Education */}
          <section aria-labelledby="education-heading">
            <h2 id="education-heading" className="text-3xl font-black text-slate-900 dark:text-white mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
              Education
            </h2>
            {education.map((edu) => (
              <div
                key={edu.degree}
                className={`rounded-2xl p-7 border ${edu.isPrimary ? 'bg-gradient-to-br from-blue-50 to-amber-50 dark:from-slate-800 dark:to-slate-800 border-blue-200 dark:border-amber-500/30' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700'}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-700 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                        {edu.degree}
                      </h3>
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-blue-700 dark:text-blue-400 font-semibold mb-1">{edu.institution}</p>
                    <p className="text-amber-700 dark:text-amber-400 text-sm font-medium mb-1">{edu.specialization}</p>
                    <div className="flex items-center gap-1.5 text-slate-500 text-sm mb-4">
                      <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>{edu.location}</span>
                    </div>
                    <ul className="space-y-2">
                      {edu.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                          <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* Skills Table */}
          <section aria-labelledby="skills-heading">
            <h2 id="skills-heading" className="text-3xl font-black text-slate-900 dark:text-white mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
              Legal & Professional Skills
            </h2>
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
              <table className="w-full text-sm" role="table" aria-label="Skills of AQSA ZAM ZAM MIRZA JOHAR BAIG">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                    <th className="text-left px-6 py-4 font-semibold text-slate-700 dark:text-slate-300">Skill</th>
                    <th className="text-left px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 hidden md:table-cell">Description</th>
                    <th className="text-right px-6 py-4 font-semibold text-slate-700 dark:text-slate-300">Proficiency</th>
                  </tr>
                </thead>
                <tbody>
                  {skills.map((skill, i) => (
                    <tr key={skill.name} className={`border-b border-slate-100 dark:border-slate-800 ${i % 2 === 0 ? '' : 'bg-slate-50/50 dark:bg-slate-800/30'}`}>
                      <td className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-100">{skill.name}</td>
                      <td className="px-6 py-4 text-slate-500 dark:text-slate-400 hidden md:table-cell">{skill.desc}</td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-3">
                          <div className="w-24 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden hidden sm:block">
                            <div
                              className="h-full rounded-full"
                              style={{ width: `${skill.level}%`, background: 'linear-gradient(90deg, #1e3a5f, #c9973a)' }}
                              role="progressbar"
                              aria-valuenow={skill.level}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              aria-label={`${skill.name} proficiency: ${skill.level}%`}
                            />
                          </div>
                          <span className="text-xs font-bold text-amber-700 dark:text-amber-400">{skill.level}%</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Areas of Interest */}
          <section aria-labelledby="interests-heading">
            <h2 id="interests-heading" className="text-3xl font-black text-slate-900 dark:text-white mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
              Areas of Interest & Expertise
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {areasOfInterest.map((area) => (
                <div
                  key={area.title}
                  className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 p-5 card-hover"
                >
                  <div className="text-2xl mb-3" aria-hidden="true">{area.icon}</div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {area.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{area.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Resume & Social CTA */}
          <section
            aria-labelledby="cta-heading"
            className="rounded-2xl p-10 text-white text-center"
            style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #1e3a5f 100%)' }}
          >
            <Award className="w-10 h-10 text-amber-400 mx-auto mb-4" aria-hidden="true" />
            <h2 id="cta-heading" className="text-3xl font-black mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Connect with AQSA ZAM ZAM MIRZA JOHAR BAIG
            </h2>
            <p className="text-blue-200 mb-8 max-w-xl mx-auto">
              Looking to collaborate on legal research, discuss constitutional law, or share a love of Urdu Shayari? Reach out and let's connect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold rounded-lg transition-all"
              >
                <Download className="w-4 h-4" />
                Download Resume (PDF)
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold rounded-lg transition-all"
              >
                Contact Me
              </Link>
            </div>
            <p className="text-slate-500 mt-6 text-xs">Last updated: March 2026 · By AQSA ZAM ZAM MIRZA JOHAR BAIG</p>
          </section>

        </div>
      </div>
    </>
  )
}
