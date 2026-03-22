import type { Metadata } from 'next'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://aqsajoharbaig.vercel.app'),
  title: {
    default: 'AQSA ZAM ZAM MIRZA JOHAR BAIG | Law Student & Legal Researcher',
    template: '%s | AQSA ZAM ZAM MIRZA JOHAR BAIG',
  },
  description:
    'Official website of AQSA ZAM ZAM MIRZA JOHAR BAIG — Law Student at PDLC Amravati, Legal Researcher, Technical Writer, and Urdu Shayari Poet. Explore legal research, blogs, and Urdu poetry.',
  keywords: [
    'AQSA ZAM ZAM MIRZA JOHAR BAIG',
    'Aqsa Mirza',
    'AqsA Zam Zam Mirza',
    'Aqsa Zam Zam Mirza Johar Baig',
    'AqsA Zam Zam Johar Baig',
    'AqsA Zam Zam',
    'AqsA Johar Baig',
    'Law Student Amravati',
    'PDLC Amravati',
    'Legal Researcher',
    'Urdu Shayari Poet',
    'Prakash Law College Amravati',
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
    title: 'AQSA ZAM ZAM MIRZA JOHAR BAIG | Law Student & Legal Researcher',
    description:
      'Official website of AQSA ZAM ZAM MIRZA JOHAR BAIG — Law Student at PDLC Amravati, Legal Researcher, and Urdu Shayari Poet.',
    url: 'https://aqsajoharbaig.vercel.app',
    siteName: 'AQSA ZAM ZAM MIRZA JOHAR BAIG — Official Website',
    images: [
      {
        url: '/profile.png',
        width: 1200,
        height: 630,
        alt: 'AQSA ZAM ZAM MIRZA JOHAR BAIG — Law Student at PDLC Amravati',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AQSA ZAM ZAM MIRZA JOHAR BAIG | Law Student & Legal Researcher',
    description:
      'Discover legal research, blogs, and Urdu Shayari by AQSA ZAM ZAM MIRZA JOHAR BAIG, Law Student at PDLC Amravati.',
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
    jobTitle: 'Law Student & Legal Researcher',
    description:
      'AQSA ZAM ZAM MIRZA JOHAR BAIG is a Law Student at PDLC Amravati (Prakash Law College), specializing in Legal Research. She is also a Technical Writer and Urdu Shayari Poet based in Amravati, Maharashtra, India.',
    knowsAbout: [
      'Legal Research',
      'Legal Drafting',
      'Constitutional Law',
      'Technical Writing',
      'Urdu Shayari',
      'Urdu Literature',
      'Indian Penal Code',
      'Civil Procedure',
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Prakash Law College (PDLC), Amravati',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Amravati',
        addressRegion: 'Maharashtra',
        addressCountry: 'IN',
      },
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Amravati',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
    },
    nationality: 'Indian',
    url: 'https://aqsajoharbaig.vercel.app',
    sameAs: [
      'https://linkedin.com/in/aqsajoharbaig',
      'https://github.com/aqsajoharbaig',
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
      'Official personal website of AQSA ZAM ZAM MIRZA JOHAR BAIG — Law Student, Legal Researcher, and Urdu Poet.',
    author: {
      '@type': 'Person',
      name: 'AQSA ZAM ZAM MIRZA JOHAR BAIG',
    },
    inLanguage: ['en', 'ur', 'hi'],
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://aqsajoharbaig.vercel.app/urdu-shayari',
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
