import type { Metadata } from 'next'
import Link from 'next/link'
import { ExternalLink, Github, Zap, TrendingUp, Code, Cpu, Database } from 'lucide-react'

export const metadata: Metadata = {
  title: 'FalcoVita — Healthcare Platform | AQSA ZAM ZAM MIRZA JOHAR BAIG',
  description:
    'Scalable healthcare visualization platform built with Vue.js, Flask, Celery, and Redis. Asynchronous task pipelines, 20+ Chart.js visualizations, OpenAI integration, cryptographic security.',
  keywords: [
    'Vue.js healthcare',
    'Flask backend',
    'Celery async tasks',
    'Redis caching',
    'Chart.js visualization',
    'OpenAI integration',
    'Healthcare platform',
  ],
  alternates: {
    canonical: 'https://aqsa-zam-zam-mirza-johar-baig-urdu.vercel.app/projects/falcovita-healthcare',
  },
  openGraph: {
    title: 'FalcoVita — Healthcare Platform with AI',
    description: 'Healthcare data visualization platform by Aqsa Zam Zam Mirza Johar Baig',
    url: 'https://aqsa-zam-zam-mirza-johar-baig-urdu.vercel.app/projects/falcovita-healthcare',
    type: 'article',
  },
}

export default function FalcoVitaPage() {
  const projectSchema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': 'https://aqsa-zam-zam-mirza-johar-baig-urdu.vercel.app/projects/falcovita-healthcare#project',
    name: 'FalcoVita — Healthcare Data Visualization Platform',
    description:
      'Scalable healthcare platform featuring asynchronous task pipelines with Celery and Redis, reducing request latency by 70%. Includes 20+ interactive visualizations and OpenAI integration for intelligent data processing.',
    url: 'https://falcovita.vercel.app',
    creator: {
      '@type': 'Person',
      name: 'AQSA ZAM ZAM MIRZA JOHAR BAIG',
      url: 'https://aqsa-zam-zam-mirza-johar-baig-urdu.vercel.app',
    },
    datePublished: '2024-03-20',
    dateModified: new Date().toISOString().split('T')[0],
    inLanguage: 'en',
    technicalDetails: {
      frontend: 'Vue.js with Composition API',
      backend: 'Flask (Python)',
      taskQueue: 'Celery + RabbitMQ',
      cache: 'Redis',
      visualization: 'Chart.js',
      aiIntegration: 'OpenAI API',
      vectorDB: 'Pinecone',
      security: 'Bcrypt, Argon2, HMAC-SHA256',
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aqsa-zam-zam-mirza-johar-baig-urdu.vercel.app' },
      { '@type': 'ListItem', position: 2, name: 'Portfolio', item: 'https://aqsa-zam-zam-mirza-johar-baig-urdu.vercel.app/portfolio' },
      { '@type': 'ListItem', position: 3, name: 'Projects', item: 'https://aqsa-zam-zam-mirza-johar-baig-urdu.vercel.app/projects' },
      { '@type': 'ListItem', position: 4, name: 'FalcoVita', item: 'https://aqsa-zam-zam-mirza-johar-baig-urdu.vercel.app/projects/falcovita-healthcare' },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <article className="w-full">
        {/* Hero */}
        <section className="relative py-20 px-4 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-6">
              <Zap className="w-3.5 h-3.5" />
              Live Product
            </div>

            <h1 className="text-5xl md:text-6xl font-black mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              FalcoVita
            </h1>
            <p className="text-xl text-slate-700 dark:text-slate-300 mb-8">
              Healthcare data visualization platform with AI-powered insights. Built with Vue.js frontend and Flask async backend using Celery pipelines and Redis caching for real-time responsiveness.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://falcovita.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                View Live Site
              </a>
              <a
                href="https://github.com/AQSA-ZAM-ZAM-MIRZA-JOHAR-BAIG"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub Repository
              </a>
            </div>
          </div>
        </section>

        {/* Overview Grid */}
        <section className="py-16 px-4 bg-white dark:bg-slate-800">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Project Overview</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg">
                <h3 className="text-sm font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-widest mb-2">
                  Type
                </h3>
                <p className="text-lg font-semibold">Healthcare SaaS Platform</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg">
                <h3 className="text-sm font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-widest mb-2">
                  Timeline
                </h3>
                <p className="text-lg font-semibold">4 months (2024)</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg">
                <h3 className="text-sm font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-widest mb-2">
                  Key Feature
                </h3>
                <p className="text-lg font-semibold">Async Task Pipelines</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg">
                <h3 className="text-sm font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-widest mb-2">
                  Status
                </h3>
                <p className="text-lg font-semibold text-emerald-600">Live in Production</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Technology Stack</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Code className="w-5 h-5 text-blue-600" />
                  Frontend
                </h3>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                  <li>• Vue.js 3 with Composition API</li>
                  <li>• Chart.js for 20+ visualizations</li>
                  <li>• Axios for HTTP requests</li>
                  <li>• TailwindCSS for styling</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Code className="w-5 h-5 text-green-600" />
                  Backend & Async
                </h3>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                  <li>• Flask (Python) REST API</li>
                  <li>• Celery task queue</li>
                  <li>• RabbitMQ message broker</li>
                  <li>• Redis for caching</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-purple-600" />
                  AI & Data
                </h3>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                  <li>• OpenAI API for NLP</li>
                  <li>• Pinecone vector database</li>
                  <li>• Pandas for data processing</li>
                  <li>• NumPy for numerical analysis</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Database className="w-5 h-5 text-red-600" />
                  Database & Security
                </h3>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                  <li>• PostgreSQL (persistent data)</li>
                  <li>• Bcrypt + Argon2 (password hashing)</li>
                  <li>• HMAC-SHA256 for signatures</li>
                  <li>• JWT tokens for auth</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Key Achievements */}
        <section className="py-16 px-4 bg-slate-50 dark:bg-slate-700">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Technical Achievements</h2>

            <div className="space-y-6">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border-l-4 border-purple-600">
                <h3 className="text-xl font-bold mb-2">⚡ 70% Latency Reduction</h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Implemented Celery async queues to offload heavy computations. Request latency dropped from 8s to 2.4s by moving CSV parsing and data aggregation to background workers.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border-l-4 border-blue-600">
                <h3 className="text-xl font-bold mb-2">📊 20+ Interactive Visualizations</h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Built dynamic Chart.js visualizations (line, bar, pie, scatter) with real-time data updates via WebSockets. Supports filtering by date range, patient cohort, and metrics.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border-l-4 border-green-600">
                <h3 className="text-xl font-bold mb-2">🤖 AI-Powered Insights</h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Integrated OpenAI + Pinecone for semantic search over healthcare documents. Users can ask natural language questions like "What treatments work for condition X?" and get relevant results.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border-l-4 border-amber-600">
                <h3 className="text-xl font-bold mb-2">🔐 Enterprise Security</h3>
                <p className="text-slate-700 dark:text-slate-300">
                  HIPAA-compliant authentication with Argon2 hashing (resistant to GPU attacks). JWT tokens with 1-hour expiry. All sensitive data encrypted at rest and in transit (TLS 1.3).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Business Impact */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-green-600" />
              Impact & Metrics
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-6 rounded-lg">
                <p className="text-4xl font-black text-purple-600 mb-2">70%</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">Latency Reduction</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-lg">
                <p className="text-4xl font-black text-blue-600 mb-2">20+</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">Active Visualizations</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg">
                <p className="text-4xl font-black text-green-600 mb-2">0.8s</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">Avg Response Time (Cached)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Lessons Learned */}
        <section className="py-16 px-4 bg-slate-50 dark:bg-slate-700">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Key Learnings</h2>

            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="text-2xl font-bold text-purple-600 mt-1">1.</span>
                <div>
                  <h3 className="font-bold text-lg mb-1">Task Queues Transform UX</h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    Users expect instant responses. Celery queues let you process 10MB CSVs in the background while returning "Processing Started" immediately. Game-changer for healthcare workflows.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-2xl font-bold text-blue-600 mt-1">2.</span>
                <div>
                  <h3 className="font-bold text-lg mb-1">Redis Caching is Non-Optional</h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    Without Redis, repeated queries hit the database. With it, repeated visualizations load in <100ms. Difference between professional and amateur products.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-2xl font-bold text-green-600 mt-1">3.</span>
                <div>
                  <h3 className="font-bold text-lg mb-1">AI APIs Scale Fast with Monitoring</h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    OpenAI API calls can get expensive quickly. Implemented caching + monitoring to prevent runaway costs. Saved ₹20K+ in the first month after optimization.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Related Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                href="/projects/mahalaxmi-tailors"
                className="group p-6 bg-slate-50 dark:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-600 hover:border-blue-400 hover:shadow-lg transition-all"
              >
                <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600">
                  Mahalaxmi Tailors E-commerce
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  MERN stack platform with Razorpay integration and AWS high-availability architecture.
                </p>
              </Link>

              <Link
                href="/projects/ipo-predictor"
                className="group p-6 bg-slate-50 dark:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-600 hover:border-blue-400 hover:shadow-lg transition-all"
              >
                <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600">
                  IPO Success Predictor
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Machine Learning model with 80% accuracy using ensemble learning. Deployed on Hugging Face.
                </p>
              </Link>
            </div>

            <div className="mt-12 pt-12 border-t border-slate-200 dark:border-slate-600">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:gap-3 transition-all font-semibold"
              >
                ← Back to Portfolio
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  )
}
