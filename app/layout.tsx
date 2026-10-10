import type { Metadata } from 'next'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://aqsa-zam-zam-mirza-johar-baig-urdu.vercel.app'),
  title: {
    default: 'AQSA ZAM ZAM MIRZA JOHAR BAIG (Aqsa Mirza) | AI Developer & Urdu Literature Portfolio',
    template: '%s | Aqsa Zam Zam Mirza Johar Baig (Aqsa Mirza)',
  },
  description:
    'Official website and verified portfolio of AQSA ZAM ZAM MIRZA JOHAR BAIG (also known as Aqsa Zam Zam Mirza and Aqsa Mirza) — Software Developer, AI/ML specialist, and Urdu literature scholar.',
  keywords: [
    'AQSA ZAM ZAM MIRZA JOHAR BAIG',
    'Aqsa Zam Zam Mirza Johar Baig',
    'aqsa zam zam mirza johar baig',
    'AQSA ZAM ZAM MIRZA',
    'Aqsa Zam Zam Mirza',
    'aqsa zam zam mirza',
    'AQSA MIRZA',
    'Aqsa Mirza',
    'aqsa mirza',
    'Aqsa Johar Baig',
    'Software Developer Pune',
    'Yashwantrao College',
    'Full Stack Developer',
    'AI-ML Specialist',
    'AWS Cloud Engineer',
    'Urdu Shayari Aqsa Mirza',
  ],
  authors: [{ name: 'AQSA ZAM ZAM MIRZA JOHAR BAIG', url: 'https://aqsa-zam-zam-mirza-johar-baig-urdu.vercel.app' }],
  creator: 'AQSA ZAM ZAM MIRZA JOHAR BAIG',
  publisher: 'AQSA ZAM ZAM MIRZA JOHAR BAIG',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 },
  },
  verification: {
    google: 'googlee89522a79f5eb2c7',
  },
  openGraph: {
    title: 'AQSA ZAM ZAM MIRZA JOHAR BAIG (Aqsa Mirza) | Software Developer & AI-ML Enthusiast',
    description:
      'Official website of AQSA ZAM ZAM MIRZA JOHAR BAIG (Aqsa Zam Zam Mirza / Aqsa Mirza) — Software Developer specializing in AI/ML, Full-Stack Development, and Urdu Literature.',
    url: 'https://aqsa-zam-zam-mirza-johar-baig-urdu.vercel.app',
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
      'Explore projects in AI/ML, Full-Stack development, and Urdu Shayari by AQSA ZAM ZAM MIRZA JOHAR BAIG (Aqsa Mirza).',
    images: ['/profile.png'],
  },
  alternates: {
    canonical: 'https://aqsa-zam-zam-mirza-johar-baig-urdu.vercel.app',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'AQSA ZAM ZAM MIRZA JOHAR BAIG',
    alternateName: [
      'AQSA ZAM ZAM MIRZA JOHAR BAIG',
      'Aqsa Zam Zam Mirza Johar Baig',
      'aqsa zam zam mirza johar baig',
      'AQSA ZAM ZAM MIRZA',
      'Aqsa Zam Zam Mirza',
      'aqsa zam zam mirza',
      'AQSA MIRZA',
      'Aqsa Mirza',
      'aqsa mirza',
      'Aqsa Johar Baig',
    ],
    jobTitle: 'Software Developer, AI-ML Enthusiast & Data Scientist',
    description:
      'AQSA ZAM ZAM MIRZA JOHAR BAIG is an ambitious Computer Science student at Yashwantrao College (Grade O Outstanding, Open Category), specializing in Artificial Intelligence, Machine Learning, and scalable software systems.',
    knowsAbout: [
      'Artificial Intelligence (AI)',
      'Machine Learning (ML)',
      'Full-Stack Development (MERN)',
      'Cloud Computing (AWS)',
      'Data Structures & Algorithms (DSA)',
      'System Design',
      'Java',
      'Python',
      'React.js',
      'DevOps',
      'Scalable Systems',
      'Urdu Literature & Poetry',
    ],
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'Yashwantrao College',
      },
    ],
    affiliation: [
      {
        '@type': 'EducationalOrganization',
        name: 'Yashwantrao College',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Pune',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
    },
    nationality: { '@type': 'Country', name: 'India' },
    url: 'https://aqsa-zam-zam-mirza-johar-baig-urdu.vercel.app',
    sameAs: [
      'https://aqsa-zam-zam-mirza-johar-baig-portf.vercel.app/',
      'https://aqsa-zam-zam-mirza-johar-baig-blogs.vercel.app/',
      'https://aqsa-zam-zam-mirza-johar-baig-const.vercel.app/',
      'https://aqsa-zam-zam-mirza-johar-baig-law-d.vercel.app/',
      'https://aqsa-zam-zam-mirza-johar-baig-law-f.vercel.app/',
      'https://aqsazamzammirzajoharbaig.com/',
      'https://firgenerator.org/',
      'https://www.aqsazamzammirzajoharbaig.com/',
      'https://aqsa-zam-zam-mirza-johar-baig-portfolio-3.vercel.app/',
      'https://aqsa-zam-zam-mirza-johar-baig.github.io/Yashwantrao-chavan-mahavidyalaya/',
      'https://www.linkedin.com/in/aqsamirza08',
      'https://github.com/AQSA-ZAM-ZAM-MIRZA-JOHAR-BAIG',
      'https://www.kaggle.com/aqsamirza08',
      'https://aqsamirza08.medium.com/',
      'https://stackoverflow.com/users/32468898/aqsa-zam-zam-mirza-johar-baig',
      'https://www.youtube.com/@aqsamirza08',
    ],
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://aqsa-zam-zam-mirza-johar-baig-urdu.vercel.app',
    },
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'AQSA ZAM ZAM MIRZA JOHAR BAIG — Official Website',
    url: 'https://aqsa-zam-zam-mirza-johar-baig-urdu.vercel.app',
    description:
      'Official personal website of AQSA ZAM ZAM MIRZA JOHAR BAIG — Software Developer, AI/ML Student, and Tech Blogger.',
    author: {
      '@type': 'Person',
      name: 'AQSA ZAM ZAM MIRZA JOHAR BAIG',
    },
    inLanguage: ['en'],
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://aqsa-zam-zam-mirza-johar-baig-urdu.vercel.app/blogs',
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
        <meta name="google-site-verification" content="googlee89522a79f5eb2c7" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Pune, Maharashtra, India" />
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
