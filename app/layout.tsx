import type { Metadata } from 'next'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'AQSA ZAM ZAM MIRZA JOHAR BAIG | Portfolio & Shayari',
  description: "Discover AQSA ZAM ZAM MIRZA JOHAR BAIG's coding projects, Urdu shayari, and blogs. Computer Science student at VIIT Pune, full-stack developer, and poet.",
  openGraph: {
    title: 'AQSA ZAM ZAM MIRZA JOHAR BAIG | Portfolio & Shayari',
    description: "Discover AQSA ZAM ZAM MIRZA JOHAR BAIG's coding projects, Urdu shayari, and blogs.",
    url: 'https://aqsajoharbaig.com',
    siteName: 'AQSA ZAM ZAM MIRZA JOHAR BAIG Portfolio',
    images: [
      {
        url: 'https://placehold.co/1200x630/png',
        width: 1200,
        height: 630,
        alt: 'AQSA ZAM ZAM MIRZA JOHAR BAIG',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'AQSA ZAM ZAM MIRZA JOHAR BAIG',
    jobTitle: 'CS Student & Developer',
    knowsAbout: ['AI/ML', 'DevOps', 'Urdu Shayari'],
    sameAs: [
      'https://linkedin.com/in/aqsajoharbaig',
      'https://github.com/aqsajoharbaig'
    ],
    url: 'https://aqsajoharbaig.com'
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
        <Navbar />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
