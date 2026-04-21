import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { GraduationCap, MapPin, Award, CheckCircle2, Download, Linkedin, Github } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About | Software Developer & AI-ML Student',
  description:
    'Learn about AQSA ZAM ZAM MIRZA JOHAR BAIG — CS student at VIIT Pune & IIT Madras, specializing in AI/ML, Full-Stack, and Cloud Computing.',
  alternates: { canonical: 'https://aqsa-zam-zam-mirza-johar-baig-urdu.vercel.app/about' },
  openGraph: { url: 'https://aqsa-zam-zam-mirza-johar-baig-urdu.vercel.app/about' },
}

const skills = [
  { name: 'Java & Python', level: 92, desc: 'Core OOP, Collections, Multithreading, Flask, NumPy, Pandas' },
  { name: 'MERN & Vue.js', level: 88, desc: 'React, Node, Express, MongoDB, Vue, State Management' },
  { name: 'AI & Machine Learning', level: 85, desc: 'PyTorch, TensorFlow, Scikit-learn, Ensemble Learning' },
  { name: 'Cloud & DevOps (AWS)', level: 82, desc: 'EC2, S3, RDS, Lambda, IAM, CloudFront, CI/CD' },
  { name: 'Databases', level: 90, desc: 'MySQL, PostgreSQL, MongoDB, SQLite, Redis' },
  { name: 'Core CS Concepts', level: 95, desc: 'Data Structures, Algorithms, System Design, DBMS, OS' },
]

const education = [
  {
    degree: 'B.Tech in Computer Science and Engineering (AI & ML)',
    institution: 'Vishwakarma Institute of Information Technology (VIIT), Pune',
    period: 'Aug 2023 – Jun 2027',
    specialization: 'CGPA: 8.77',
    location: 'Pune, Maharashtra, India',
    highlights: [
      'Specializing in Artificial Intelligence and Machine Learning',
      'Strong foundations in Data Structures, Algorithms, and Object-Oriented Programming',
      'Implementing secure authentication mechanisms and RESTful APIs',
      'Proven ability to deploy production-ready applications following software development best practices',
    ],
    isPrimary: true,
  },
  {
    degree: 'Bachelor of Science (BS) in Data Science',
    institution: 'Indian Institute of Technology (IITM), IIT Madras',
    period: 'May 2023 – Jun 2027',
    specialization: 'CGPA: 7.44',
    location: 'Chennai (Online/Remote)',
    highlights: [
      'In-depth study of Data Analysis, Statistics, and Machine Learning models',
      'Hands-on experience with pre-processing, model training, and performance evaluation',
      'Developing data-driven solutions for real-world problems using Python and SQL',
    ],
    isPrimary: false,
  },
]

const areasOfInterest = [
  { icon: '🤖', title: 'Artificial Intelligence', desc: 'Neural networks, Natural Language Processing, and Computer Vision using PyTorch and TensorFlow.' },
  { icon: '🌐', title: 'Full Stack Development', desc: 'Building responsive MERN/Vue applications with focus on performance and security.' },
  { icon: '☁️', title: 'Cloud Computing', desc: 'Architecting scalable systems on AWS using EC2, S3, and Serverless technologies.' },
  { icon: '📊', title: 'Data Science', desc: 'Exploratory Data Analysis (EDA), predictive modeling, and data visualization using Python.' },
  { icon: '⚙️', title: 'System Design', desc: 'Designing distributed systems, microservices, and high-availability architectures.' },
  { icon: '🚀', title: 'DevOps', desc: 'Implementing CI/CD pipelines, containerization, and monitoring for production deployments.' },
]

export default function About() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aqsa-zam-zam-mirza-johar-baig-urdu.vercel.app' },
      { '@type': 'ListItem', position: 2, name: 'About', item: 'https://aqsa-zam-zam-mirza-johar-baig-urdu.vercel.app/about' },
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
          <p className="text-blue-200 text-lg mb-3">Software Developer · AI/ML Enthusiast · Cloud Practitioner</p>
          <div className="flex items-center justify-center gap-1.5 text-slate-400 text-sm">
            <MapPin className="w-4 h-4 text-amber-400" aria-hidden="true" />
            <span>Pune, Maharashtra, India</span>
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
                    alt="AQSA ZAM ZAM MIRZA JOHAR BAIG — Software Developer"
                    fill
                    className="object-cover"
                    sizes="192px"
                  />
                </div>
                <p className="text-center text-sm font-bold text-slate-800 dark:text-slate-200">AQSA ZAM ZAM MIRZA JOHAR BAIG</p>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  <a href="https://linkedin.com/in/aqsamirza08" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 hover:bg-blue-200 transition-colors" aria-label="LinkedIn Profile">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="https://github.com/AQSA-ZAM-ZAM-MIRZA-JOHAR-BAIG" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 transition-colors" aria-label="GitHub Profile">
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="md:col-span-2">
                <h2 id="bio-heading" className="text-3xl font-black text-slate-900 dark:text-white mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Professional Summary
                </h2>
                <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed text-justify">
                  <p>
                    <strong className="text-slate-800 dark:text-slate-200">AQSA ZAM ZAM MIRZA JOHAR BAIG</strong> is a Computer Science undergraduate specializing in Artificial Intelligence and Machine Learning with strong foundations in Data Structures, Algorithms, Object-Oriented Programming, and System Design.
                  </p>
                  <p>
                    With experience in building scalable full-stack applications and cloud-based distributed systems using <strong className="text-slate-800 dark:text-slate-200">Java, Python, JavaScript, and AWS</strong>, she has a proven ability to design RESTful APIs, implement secure authentication mechanisms, and deploy production-ready applications following software development best practices.
                  </p>
                  <p>
                    She is currently pursuing a dual degree: <em>B.Tech in CSE (AI & ML)</em> from <strong>VIIT Pune</strong> and a <em>BS in Data Science</em> from <strong>IIT Madras</strong>. This rigorous academic path allows her to bridge the gap between theoretical machine learning and practical software engineering.
                  </p>
                  <p>
                    Beyond core development, she actively explores emerging technologies, having completed industry programs by <strong className="text-slate-800 dark:text-slate-200">Google (AI & ML)</strong>, <strong className="text-slate-800 dark:text-slate-200">AWS (Cloud Practices)</strong>, and <strong className="text-slate-800 dark:text-slate-200">EduSkills (Web Development)</strong>. Her goal is to leverage AI to solve complex real-world problems through robust and scalable software solutions.
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
              Technical Expertise
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
              Looking to collaborate on a software project, explore AI/ML solutions, or discuss cloud architecture? Reach out and let's build something amazing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer nofollow"
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
