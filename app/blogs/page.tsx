import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, User, BookOpen, Tag } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Tech Blogs | AI, ML & Full-Stack',
  description:
    'Tech blogs by AQSA ZAM ZAM MIRZA JOHAR BAIG on AI/ML, MERN stack, AWS Cloud, and Full-Stack web development.',
  alternates: { canonical: 'https://aqsa-zam-zam-mirza-johar-baig-urdu.vercel.app/blogs' },
  openGraph: { url: 'https://aqsa-zam-zam-mirza-johar-baig-urdu.vercel.app/blogs' },
}

const blogs = [
  {
    title: 'Building Scalable E-commerce with MERN and AWS',
    excerpt:
      'A comprehensive guide to architecting a production-ready e-commerce platform. This article covers secure authentication using JWT, role-based access control (RBAC), and deploying on AWS using EC2, S3, and Route 53 for high availability.',
    category: 'Full Stack',
    date: 'March 2026',
    dateISO: '2026-03-01',
    readTime: '10 min read',
    author: 'AQSA ZAM ZAM MIRZA JOHAR BAIG',
    tags: ['MERN', 'AWS', 'E-commerce', 'Full Stack'],
    color: 'blue',
    slug: 'building-scalable-ecommerce-mern-aws',
  },
  {
    title: 'Ensemble Learning: Achieving 80% Accuracy in IPO Success Prediction',
    excerpt:
      'Detailed analysis of using Bagging and Boosting techniques to predict IPO market performance. Deep dive into data pre-processing, feature engineering, and evaluating model performance using Precision, Recall, and F1-score.',
    category: 'AI / ML',
    date: 'February 2026',
    dateISO: '2026-02-01',
    readTime: '12 min read',
    author: 'AQSA ZAM ZAM MIRZA JOHAR BAIG',
    tags: ['Machine Learning', 'Python', 'Ensemble Learning', 'Data Science'],
    color: 'amber',
    slug: 'ensemble-learning-ipo-success-prediction',
  },
  {
    title: 'Asynchronous Task Processing with Celery and Redis in Flask',
    excerpt:
      'Learn how to reduce API request latency by offloading heavy computations to background tasks. This guide covers setting up Celery workers, using Redis as a message broker, and implementing real-time progress updates.',
    category: 'Web Tech',
    date: 'January 2026',
    dateISO: '2026-01-01',
    readTime: '8 min read',
    author: 'AQSA ZAM ZAM MIRZA JOHAR BAIG',
    tags: ['Flask', 'Celery', 'Redis', 'Python'],
    color: 'green',
    slug: 'async-task-processing-celery-redis-flask',
  },
  {
    title: 'Cloud-Native Architectures: Implementing 15+ AWS Services',
    excerpt:
      'A practitioner\'s journey of deploying fault-tolerant architectures on AWS. Covering CloudFormation for Infrastructure as Code (IaC), Lambda for serverless, and RDS for managed database solutions.',
    category: 'Cloud',
    date: 'December 2025',
    dateISO: '2025-12-01',
    readTime: '15 min read',
    author: 'AQSA ZAM ZAM MIRZA JOHAR BAIG',
    tags: ['AWS', 'Cloud', 'DevOps', 'Infrastructure'],
    color: 'rose',
    slug: 'cloud-native-architectures-aws-services',
  },
  {
    title: 'Interactive Data Visualization with Chart.js and D3.js',
    excerpt:
      'Exploring the intersection of data and design. How to build 20+ interactive charts and dashboards that provide meaningful insights from complex healthcare datasets using modern JavaScript libraries.',
    category: 'Frontend',
    date: 'November 2025',
    dateISO: '2025-11-01',
    readTime: '9 min read',
    author: 'AQSA ZAM ZAM MIRZA JOHAR BAIG',
    tags: ['JavaScript', 'Chart.js', 'Data Visualization', 'Vue.js'],
    color: 'purple',
    slug: 'interactive-data-visualization-chartjs-d3',
  },
]

const categoryColors: Record<string, string> = {
  'Full Stack': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  'AI / ML': 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
  'Web Tech': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  'Cloud': 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400',
  'Frontend': 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
}

export default function Blogs() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aqsa-zam-zam-mirza-johar-baig-urdu.vercel.app' },
      { '@type': 'ListItem', position: 2, name: 'Blogs', item: 'https://aqsa-zam-zam-mirza-johar-baig-urdu.vercel.app/blogs' },
    ],
  }

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Tech Blogs by AQSA ZAM ZAM MIRZA JOHAR BAIG',
    itemListElement: blogs.map((b, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `https://aqsa-zam-zam-mirza-johar-baig-urdu.vercel.app/blogs#${b.slug}`,
      item: {
        '@type': 'BlogPosting',
        '@id': `https://aqsa-zam-zam-mirza-johar-baig-urdu.vercel.app/blogs#${b.slug}`,
        url: `https://aqsa-zam-zam-mirza-johar-baig-urdu.vercel.app/blogs#${b.slug}`,
        headline: b.title,
        description: b.excerpt,
        author: { '@type': 'Person', name: b.author },
        datePublished: b.dateISO,
        publisher: {
          '@type': 'Organization',
          name: 'AQSA ZAM ZAM MIRZA JOHAR BAIG — Official Website',
          url: 'https://aqsa-zam-zam-mirza-johar-baig-urdu.vercel.app',
        },
      },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

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
              <li className="text-amber-400" aria-current="page">Blogs</li>
            </ol>
          </nav>
          <p className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-3">Tech Writing</p>
          <h1 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Software Blogs & Articles
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            In-depth technical analysis and research articles by{' '}
            <strong className="text-white">AQSA ZAM ZAM MIRZA JOHAR BAIG</strong> — Computer Science student at VIIT Pune & IIT Madras.
          </p>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="space-y-10">
            {blogs.map((blog, idx) => (
              <article
                key={idx}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 shadow-sm card-hover"
                aria-labelledby={`blog-${idx}-title`}
                itemScope
                itemType="https://schema.org/BlogPosting"
              >
                {/* Category & Tags */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${categoryColors[blog.category]}`}>
                    {blog.category}
                  </span>
                  {blog.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <Tag className="w-2.5 h-2.5" aria-hidden="true" />
                      {tag}
                    </span>
                  ))}
                </div>

                <h2
                  id={`blog-${idx}-title`}
                  className="text-2xl font-bold text-slate-900 dark:text-white mb-3 hover:text-blue-700 dark:hover:text-amber-400 transition-colors cursor-pointer"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  itemProp="headline"
                >
                  {blog.title}
                </h2>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-4">
                  <span className="flex items-center gap-1.5" itemProp="author">
                    <User className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>By <strong className="text-slate-700 dark:text-slate-300">{blog.author}</strong></span>
                  </span>
                  <span className="flex items-center gap-1.5" itemProp="datePublished">
                    <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                    {blog.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                    {blog.readTime}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
                    VIIT Pune
                  </span>
                </div>

                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 text-sm" itemProp="description">
                  {blog.excerpt}
                </p>

                <Link
                  href="#"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 dark:text-amber-400 hover:underline transition-colors"
                  aria-label={`Read full article: ${blog.title}`}
                >
                  Read Full Article →
                </Link>
              </article>
            ))}
          </div>

          <p className="text-center text-sm text-slate-400 mt-12">
            All articles written by{' '}
            <strong className="text-slate-600 dark:text-slate-300">AQSA ZAM ZAM MIRZA JOHAR BAIG</strong>{' '}
            — CS Undergraduate, VIIT Pune & IIT Madras · Last updated: March 2026
          </p>
        </div>
      </div>
    </>
  )
}
