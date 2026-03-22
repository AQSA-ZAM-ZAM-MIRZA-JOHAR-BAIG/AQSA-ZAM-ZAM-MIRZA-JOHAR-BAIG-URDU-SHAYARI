import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, User, BookOpen, Tag } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Legal Blogs | AQSA ZAM ZAM MIRZA JOHAR BAIG — Constitutional Law & Research',
  description:
    'Legal blogs and articles by AQSA ZAM ZAM MIRZA JOHAR BAIG — Law Student at PDLC Amravati. Read in-depth pieces on Constitutional Law, Evidence Act, Women\'s Rights, and Legal Research methodology.',
  alternates: { canonical: 'https://aqsajoharbaig.vercel.app/blogs' },
}

const blogs = [
  {
    title: 'Fundamental Rights in India: A Deep Dive into Part III of the Constitution',
    excerpt:
      'An analytical exploration of Articles 12 to 35 of the Indian Constitution — the Fundamental Rights chapter. This article traces the evolution of rights jurisprudence from A.K. Gopalan to the expansive interpretation in Maneka Gandhi v. Union of India, and examines what "life and personal liberty" truly means in 2026.',
    category: 'Constitutional Law',
    date: 'March 2026',
    readTime: '12 min read',
    author: 'AQSA ZAM ZAM MIRZA JOHAR BAIG',
    tags: ['Article 21', 'Fundamental Rights', 'Supreme Court', 'Constitutional Law'],
    color: 'blue',
  },
  {
    title: 'How to Write a Legal Research Paper: A Step-by-Step Guide for Law Students',
    excerpt:
      'From identifying a legal question to constructing arguments with case law, statutes, and secondary sources — this guide distills the methodology AQSA ZAM ZAM MIRZA JOHAR BAIG uses for her Legal Research specialization at PDLC Amravati. Covers IRAC method, citation formats, and avoiding plagiarism.',
    category: 'Legal Research',
    date: 'February 2026',
    readTime: '10 min read',
    author: 'AQSA ZAM ZAM MIRZA JOHAR BAIG',
    tags: ['Legal Research', 'PDLC Amravati', 'IRAC Method', 'Law Students'],
    color: 'amber',
  },
  {
    title: 'Understanding the Indian Evidence Act, 1872: Key Provisions Every Law Student Must Know',
    excerpt:
      'A structured breakdown of the Indian Evidence Act 1872 — covering relevancy of facts (Section 6–55), oral and documentary evidence (Sections 59–90), and the evolving law on electronic records (Section 65B). Includes analysis of landmark decisions of the Supreme Court and High Courts on admissibility.',
    category: 'Evidence Law',
    date: 'January 2026',
    readTime: '15 min read',
    author: 'AQSA ZAM ZAM MIRZA JOHAR BAIG',
    tags: ['Evidence Act', 'Section 65B', 'Electronic Evidence', 'Indian Law'],
    color: 'green',
  },
  {
    title: "Women's Rights in Muslim Personal Law: After Triple Talaq and Beyond",
    excerpt:
      'A critical assessment of how Muslim Personal Law intersects with constitutional guarantees after the landmark Shayara Bano v. Union of India (2017) verdict abolishing instant Triple Talaq. Explores Section 125 CrPC maintenance, Mehr rights, divorce by mutual consent (Khul), and what legislative reform is still needed.',
    category: 'Family Law',
    date: 'December 2025',
    readTime: '14 min read',
    author: 'AQSA ZAM ZAM MIRZA JOHAR BAIG',
    tags: ["Women's Rights", 'Muslim Personal Law', 'Triple Talaq', 'Gender Justice'],
    color: 'rose',
  },
  {
    title: 'The Intersection of Language and Law: Urdu in Indian Courts and Legal Discourse',
    excerpt:
      "A unique socio-legal essay exploring how Urdu — once the language of the Mughal courts and later of legal pleadings in undivided India — has shaped Indian legal terminology. From 'fatwas' to 'istighasa', this article traces the rich Urdu-legal lexicon and its contemporary relevance in courts of Uttar Pradesh, Maharashtra, and Telangana.",
    category: 'Socio-Legal',
    date: 'November 2025',
    readTime: '9 min read',
    author: 'AQSA ZAM ZAM MIRZA JOHAR BAIG',
    tags: ['Urdu', 'Legal Language', 'Socio-Legal', 'Indian Courts'],
    color: 'purple',
  },
]

const categoryColors: Record<string, string> = {
  'Constitutional Law': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  'Legal Research': 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
  'Evidence Law': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  'Family Law': 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400',
  'Socio-Legal': 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
}

export default function Blogs() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aqsajoharbaig.vercel.app' },
      { '@type': 'ListItem', position: 2, name: 'Blogs', item: 'https://aqsajoharbaig.vercel.app/blogs' },
    ],
  }

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Legal Blogs by AQSA ZAM ZAM MIRZA JOHAR BAIG',
    itemListElement: blogs.map((b, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'BlogPosting',
        headline: b.title,
        description: b.excerpt,
        author: { '@type': 'Person', name: b.author },
        datePublished: b.date,
        publisher: { '@type': 'Person', name: 'AQSA ZAM ZAM MIRZA JOHAR BAIG' },
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
          <p className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-3">Legal Writing</p>
          <h1 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Legal Blogs & Articles
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            In-depth legal analysis and research articles by{' '}
            <strong className="text-white">AQSA ZAM ZAM MIRZA JOHAR BAIG</strong> — Law Student at PDLC Amravati, specializing in Legal Research.
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
                    PDLC Amravati
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
            — Law Student, PDLC Amravati · Last updated: March 2026
          </p>
        </div>
      </div>
    </>
  )
}
