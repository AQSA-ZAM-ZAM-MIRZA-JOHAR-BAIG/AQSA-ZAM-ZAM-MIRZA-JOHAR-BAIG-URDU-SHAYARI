import type { Metadata } from 'next'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://aqsajoharbaig.vercel.app'),
  title: {
    default: 'AQSA ZAM ZAM MIRZA JOHAR BAIG | Software Developer & AI-ML Enthusiast',
    template: '%s | AQSA ZAM ZAM MIRZA JOHAR BAIG',
  },
  description:
    'Official website of AQSA ZAM ZAM MIRZA JOHAR BAIG — Software Developer specializing in AI/ML, Full-Stack Development, and Cloud Systems. Computer Science student at VIIT Pune and IIT Madras.',
  keywords: [
    'AQSA ZAM ZAM MIRZA JOHAR BAIG',
    'Aqsa Mirza',
    'AqsA Zam Zam Mirza',
    'Aqsa Zam Zam Mirza Johar Baig',
    'AqsA Zam Zam Johar Baig',
    'Software Developer Pune',
    'VIIT Pune',
    'IIT Madras Data Science',
    'Full Stack Developer',
    'AI-ML Specialist',
    'AWS Cloud Engineer',
  ],
  authors: [{ name: 'AQSA ZAM ZAM MIRZA JOHAR BAIG', url: 'https://aqsajoharbaig.vercel.app' }],
  creator: 'AQSA ZAM ZAM MIRZA JOHAR BAIG',
  publisher: 'AQSA ZAM ZAM MIRZA JOHAR BAIG',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 },
  },
  openGraph: {
    title: 'AQSA ZAM ZAM MIRZA JOHAR BAIG | Software Developer & AI-ML Enthusiast',
    description:
      'Official website of AQSA ZAM ZAM MIRZA JOHAR BAIG — Software Developer specializing in AI/ML and Full-Stack Development.',
    url: 'https://aqsajoharbaig.vercel.app',
    siteName: 'AQSA ZAM ZAM MIRZA JOHAR BAIG — Official Website',
    images: [
      {
        url: '/profile.png',
        width: 1200,
        height: 630,
        alt: 'AQSA ZAM ZAM MIRZA JOHAR BAIG — Software Developer',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AQSA ZAM ZAM MIRZA JOHAR BAIG | Software Developer & AI-ML Enthusiast',
    description:
      'Explore projects in AI/ML and Full-Stack development by AQSA ZAM ZAM MIRZA JOHAR BAIG.',
    images: ['/profile.png'],
  },
  alternates: {
    canonical: 'https://aqsajoharbaig.vercel.app',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'AQSA ZAM ZAM MIRZA JOHAR BAIG',
    alternateName: ['Aqsa Mirza', 'AqsA Zam Zam Mirza', 'Aqsa Johar Baig', 'AqsA Zam Zam'],
    jobTitle: 'Software Developer & AI-ML Student',
    description:
      'AQSA ZAM ZAM MIRZA JOHAR BAIG is a Computer Science undergraduate specializing in Artificial Intelligence and Machine Learning at VIIT Pune and Data Science at IIT Madras. She is a Full-Stack Developer and AWS Cloud practitioner.',
    knowsAbout: [
      'Artificial Intelligence',
      'Machine Learning',
      'Full-Stack Development',
      'Cloud Computing (AWS)',
      'Data Structures & Algorithms',
      'System Design',
      'Java',
      'Python',
      'React.js',
    ],
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'Vishwakarma Institute of Information Technology (VIIT), Pune',
      },
      {
        '@type': 'EducationalOrganization',
        name: 'Indian Institute of Technology (IITM), IIT Madras',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Pune',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
    },
    nationality: 'Indian',
    url: 'https://aqsajoharbaig.vercel.app',
    sameAs: [
      'https://www.linkedin.com/in/aqsamirza08',
      'https://github.com/AQSA-ZAM-ZAM-MIRZA-JOHAR-BAIG',
      'https://www.kaggle.com/aqsamirza08',
      'https://aqsamirza08.medium.com/',
      'https://stackoverflow.com/users/32468898/aqsa-zam-zam-mirza-johar-baig',
      'https://www.youtube.com/@aqsamirza08',
    ],
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://aqsajoharbaig.vercel.app',
    },
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'AQSA ZAM ZAM MIRZA JOHAR BAIG — Official Website',
    url: 'https://aqsajoharbaig.vercel.app',
    description:
      'Official personal website of AQSA ZAM ZAM MIRZA JOHAR BAIG — Software Developer, AI/ML Student, and Tech Blogger.',
    author: {
      '@type': 'Person',
      name: 'AQSA ZAM ZAM MIRZA JOHAR BAIG',
    },
    inLanguage: ['en'],
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://aqsajoharbaig.vercel.app/blogs',
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Noto+Nastaliq+Urdu:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Amravati, Maharashtra, India" />
        <meta name="language" content="English" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 antialiased">
        <Navbar />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
