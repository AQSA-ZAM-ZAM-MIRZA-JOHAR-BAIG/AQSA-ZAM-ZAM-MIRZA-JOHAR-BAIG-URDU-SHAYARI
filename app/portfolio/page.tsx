import type { Metadata } from 'next'
import Link from 'next/link'
import { ExternalLink, Github, Scale, BookOpen, Gavel, FileText, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Portfolio | AQSA ZAM ZAM MIRZA JOHAR BAIG — Software Projects',
  description:
    'Explore the software development portfolio of AQSA ZAM ZAM MIRZA JOHAR BAIG — including AI/ML models, Full-Stack applications, and Cloud-based systems built with MERN, AWS, and Python.',
  alternates: { canonical: 'https://aqsajoharbaig.vercel.app/portfolio' },
}

const categoryIcons: Record<string, React.ElementType> = {
  'Full Stack': Globe,
  'AI / ML': Scale, // AI/ML often uses Scale for balancing models but maybe better with FileText or Globe
  'Cloud / DevOps': BookOpen,
  'Machine Learning': FileText,
}

const projects = [
  {
    title: 'Mahalaxmi Tailors — E-commerce Platform',
    category: 'Full Stack',
    status: 'Live',
    description:
      'A production-ready e-commerce platform supporting a small tailoring business with 70+ registered users. Features secure authentication (JWT, HttpOnly cookies), role-based access control (RBAC), and integration with Razorpay and Cloudinary. Deployed on high-availability AWS architecture using Route 53, S3, and EC2.',
    skills: ['MERN', 'AWS', 'JWT', 'Razorpay', 'Cloudinary', 'DevOps'],
    link: 'https://mahalaxmi-tailors.shop',
    github: 'https://github.com/AQSA-ZAM-ZAM-MIRZA-JOHAR-BAIG',
  },
  {
    title: 'FalcoVita — Healthcare Platform',
    category: 'Full Stack',
    status: 'Live',
    description:
      'A scalable healthcare platform featuring asynchronous task pipelines using Celery and Redis to reduce request latency. Includes 20+ interactive data visualizations using Chart.js and secured using cryptographic algorithms (Bcrypt, Argon2, HMAC-SHA). Integrates OpenAI and Pinecone for intelligent data processing.',
    skills: ['Vue.js', 'Flask', 'Celery', 'Redis', 'OpenAI', 'Pinecone', 'Chart.js'],
    link: 'https://falcovita.vercel.app',
    github: 'https://github.com/AQSA-ZAM-ZAM-MIRZA-JOHAR-BAIG',
  },
  {
    title: 'IPO-Success-Predictor',
    category: 'AI / ML',
    status: 'Published',
    description:
      'Achieved 80% prediction accuracy using Ensemble Learning (Bagging, Boosting) to predict IPO success. Features an interactive web interface on Hugging Face spaces for real-time assessment. Automated the end-to-end pipeline to reduce manual analysis time and provide consistent insights.',
    skills: ['NumPy', 'Pandas', 'Ensemble Learning', 'Hugging Face', 'Python'],
    link: 'https://huggingface.co/spaces/ayushdayal8/IPO-Success-Predictor',
    github: 'https://github.com/AQSA-ZAM-ZAM-MIRZA-JOHAR-BAIG',
  },
  {
    title: 'AWS Cloud-Based Web Applications',
    category: 'Cloud / DevOps',
    status: 'Portfolio',
    description:
      'Designed and deployed 3+ cloud-based applications on AWS, supporting scalable, highly available, and fault-tolerant architectures. Implemented 15+ AWS services including EC2, S3, IAM, Lambda, RDS, Route 53, CloudFront, and CloudFormation to optimize system performance and reliability.',
    skills: ['AWS', 'CloudFormation', 'Lambda', 'S3', 'EC2', 'Route 53', 'IAM'],
    link: '#',
    github: 'https://github.com/AQSA-ZAM-ZAM-MIRZA-JOHAR-BAIG',
  },
  {
    title: 'Responsive Web Application Portfolio',
    category: 'Full Stack',
    status: 'Portfolio',
    description:
      'Built 5+ responsive web applications using HTML, CSS, JavaScript, and Bootstrap with a focus on cross-browser compatibility. Collaborated with mentors to implement backend integrations, reducing page load time by 30% and significantly improving user experience (EduSkills AICTE program).',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'REST APIs', 'Jinja'],
    link: '#',
    github: 'https://github.com/AQSA-ZAM-ZAM-MIRZA-JOHAR-BAIG',
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
            Software Portfolio & Tech Projects
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            By <strong className="text-white">AQSA ZAM ZAM MIRZA JOHAR BAIG</strong> — Computer Science student at VIIT Pune. AI/ML, Full-Stack development, and Cloud Architecture.
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
            All code and project work listed above is developed by{' '}
            <strong className="text-slate-600 dark:text-slate-300">AQSA ZAM ZAM MIRZA JOHAR BAIG</strong>
            {' '} — CS Undergraduate, VIIT Pune & IIT Madras · Last updated: March 2026
          </p>
        </div>
      </div>
    </>
  )
}
