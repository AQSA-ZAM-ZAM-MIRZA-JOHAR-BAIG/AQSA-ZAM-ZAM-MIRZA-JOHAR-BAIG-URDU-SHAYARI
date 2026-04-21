import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Projects | AQSA ZAM ZAM MIRZA JOHAR BAIG',
  description: 'Portfolio of software engineering projects including cloud architecture, healthcare platforms, and machine learning models.',
  keywords: ['projects', 'portfolio', 'software engineering', 'cloud architecture', 'machine learning'],
}

export default function ProjectsPage() {
  const projects = [
    {
      title: 'AWS Cloud Architecture',
      description: 'Multi-region production system with 99.99% uptime using 15+ AWS services.',
      slug: 'aws-cloud-architecture',
      tags: ['AWS', 'Cloud', 'DevOps'],
    },
    {
      title: 'FalcoVita Healthcare',
      description: 'Scalable healthcare platform with Vue.js, Flask, and AI integration.',
      slug: 'falcovita-healthcare',
      tags: ['Vue.js', 'Flask', 'AI'],
    },
    {
      title: 'IPO Success Predictor',
      description: 'Machine learning model with 80% accuracy for IPO prediction.',
      slug: 'ipo-predictor',
      tags: ['Machine Learning', 'Python', 'Scikit-learn'],
    },
    {
      title: 'MERN Portfolio',
      description: 'Full-stack portfolio built with MongoDB, Express, React, and Node.js.',
      slug: 'mern-portfolio',
      tags: ['MERN', 'Full-stack', 'JavaScript'],
    },
    {
      title: 'Mahalaxmi Tailors',
      description: 'E-commerce platform for tailoring services and custom clothing.',
      slug: 'mahalaxmi-tailors',
      tags: ['E-commerce', 'Web App', 'Business'],
    },
  ]

  return (
    <>
      <article className="w-full">
        {/* Hero */}
        <section className="relative py-20 px-4 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-black mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Projects
            </h1>
            <p className="text-xl text-slate-700 dark:text-slate-300">
              A selection of software engineering projects showcasing full-stack development, cloud architecture, and machine learning expertise.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 px-4 bg-white dark:bg-slate-800">
          <div className="max-w-3xl mx-auto">
            <div className="grid gap-8">
              {projects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="group block p-8 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-2xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h2>
                      <p className="text-slate-600 dark:text-slate-300 mb-4">
                        {project.description}
                      </p>
                    </div>
                    <ArrowRight className="w-6 h-6 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-shrink-0 ml-4" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </article>
    </>
  )
}
