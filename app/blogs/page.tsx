import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, User } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AQSA ZAM ZAM MIRZA JOHAR BAIG | Tech Blogs',
  description: 'Read technical blogs by AQSA ZAM ZAM MIRZA JOHAR BAIG. Articles on Data Structures, Machine Learning Deployment, and Interview Prep.',
}

export default function Blogs() {
  const blogs = [
    {
      title: "Mastering Data Structures and Algorithms for Product Companies",
      excerpt: "A comprehensive guide on how I approached DSA problem-solving and cracked coding interviews using Python and Java.",
      date: "March 2026",
      readTime: "8 min read",
      author: "AQSA ZAM ZAM MIRZA JOHAR BAIG"
    },
    {
      title: "Deploying Machine Learning Models on AWS serverless",
      excerpt: "Step-by-step tutorial on packaging Scikit-learn models using Docker and deploying them via AWS Lambda for cost-effective scaling.",
      date: "February 2026",
      readTime: "12 min read",
      author: "AQSA ZAM ZAM MIRZA JOHAR BAIG"
    },
    {
      title: "The Ultimate Guide to Technical Interview Preparation",
      excerpt: "System design basics, behavioral questions, and how to effectively communicate your thought process during whiteboard interviews.",
      date: "January 2026",
      readTime: "10 min read",
      author: "AQSA ZAM ZAM MIRZA JOHAR BAIG"
    }
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-extrabold mb-4 text-center">Technical Blog</h1>
      <p className="text-xl text-center text-gray-600 dark:text-gray-400 mb-12">
        Thoughts, tutorials, and insights by AQSA ZAM ZAM MIRZA JOHAR BAIG.
      </p>

      <div className="space-y-8">
        {blogs.map((blog, idx) => (
          <article key={idx} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition">
            <h2 className="text-2xl font-bold mb-3 hover:text-primary transition cursor-pointer">{blog.title}</h2>
            
            <div className="flex flex-wrap text-sm text-gray-500 dark:text-gray-400 mb-4 space-x-4">
              <span className="flex items-center"><User className="w-4 h-4 mr-1"/> {blog.author}</span>
              <span className="flex items-center"><Calendar className="w-4 h-4 mr-1"/> {blog.date}</span>
              <span className="flex items-center"><Clock className="w-4 h-4 mr-1"/> {blog.readTime}</span>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-6">{blog.excerpt}</p>
            
            <Link href="#" className="inline-flex items-center font-semibold text-primary hover:underline">
              Read More &rarr;
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
