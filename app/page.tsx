import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'AQSA ZAM ZAM MIRZA JOHAR BAIG | Home Portfolio',
  description: 'Welcome to the official portfolio of AQSA ZAM ZAM MIRZA JOHAR BAIG. Discover my software engineering projects and Urdu shayari.',
}

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex flex-col justify-center items-center text-center px-4 pt-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary shadow-2xl mb-8 bg-white flex items-center justify-center">
            <Image
              src="/profile.jpg"
              alt="AQSA ZAM ZAM MIRZA JOHAR BAIG"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 192px, 256px"
              priority
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            AQSA ZAM ZAM MIRZA JOHAR BAIG
          </h1>
          <h2 className="text-xl md:text-3xl font-medium text-gray-600 dark:text-gray-300 mb-8">
            Computer Science Student, Full-Stack Developer & Urdu Poet
          </h2>
          <p className="max-w-2xl text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
            I build highly scalable backend systems, train machine learning models, and express my deeper thoughts through profound Urdu shayari. Welcome to my personal space on the web.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/portfolio"
              className="px-8 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              View Projects
            </Link>
            <Link 
              href="/urdu-shayari"
              className="px-8 py-3 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-lg shadow-md hover:bg-gray-300 dark:hover:bg-gray-700 transition"
            >
              Read My Shayari
            </Link>
          </div>
        </div>
      </section>
      
      {/* Quick Summary Section */}
      <section className="py-20 bg-white dark:bg-gray-900 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-sm text-center">
            <h3 className="text-2xl font-bold mb-4">Software Engineering</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Specializing in Python, Java, Next.js, and AWS DevOps. Building high-performance systems from the ground up for robust platforms.
            </p>
            <Link href="/about" className="mt-4 inline-block text-primary font-medium hover:underline">More About Me &rarr;</Link>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-sm text-center">
            <h3 className="text-2xl font-bold mb-4">AI & Machine Learning</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Deep interest in neural networks and predictive analytics. Exploring the frontier of Artificial Intelligence with real-world applications.
            </p>
            <Link href="/blogs" className="mt-4 inline-block text-primary font-medium hover:underline">Read Blogs &rarr;</Link>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-sm text-center">
            <h3 className="text-2xl font-bold mb-4">Urdu Poetry</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Capturing the essence of life, love, and pain through the beautiful language of Urdu. A timeless journey into classical ghazals and nazms.
            </p>
            <Link href="/urdu-shayari" className="mt-4 inline-block text-primary font-medium hover:underline">Explore Shayari &rarr;</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
