import type { Metadata } from 'next'
import Link from 'next/link'
import { Award, ExternalLink, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Certifications & Credentials | AQSA ZAM ZAM MIRZA JOHAR BAIG',
  description:
    'Professional certifications and credentials: Microsoft Azure Fundamentals (AZ-900), Oracle Cloud 2025 Certified Generative AI Professional. Verified industry expertise in cloud computing and AI.',
  keywords: [
    'Azure Fundamentals AZ-900',
    'Microsoft Certified',
    'Oracle Cloud Certification',
    'Generative AI Professional',
    'Cloud Computing Certifications',
    'Professional Credentials',
  ],
  alternates: {
    canonical: '',
  },
}

export default function CertificationsPage() {
  const certifications = [
    {
      name: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
      issuer: 'Microsoft',
      date: 'January 2024',
      expiresAt: 'Lifetime',
      description:
        'Validates foundational knowledge of cloud services, core Azure services, Azure solutions, and Azure security, compliance, privacy, and trust.',
      link: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals',
      status: 'verified',
      skills: ['Cloud Computing', 'Azure Services', 'Azure Security', 'Cloud Architecture'],
    },
    {
      name: 'Oracle Cloud 2025 Certified Generative AI Professional',
      issuer: 'Oracle',
      date: 'January 2025',
      expiresAt: '2 years',
      description:
        'Demonstrates expertise in designing, implementing, and managing generative AI solutions on Oracle Cloud Platform. Covers LLMs, prompt engineering, AI security, and responsible AI practices.',
      link: 'https://www.oracle.com/cloud/certification/',
      status: 'verified',
      skills: ['Generative AI', 'LLMs', 'Prompt Engineering', 'AI Security', 'Oracle Cloud'],
    },
  ]

  const pendingCertifications = [
    'AWS Solutions Architect Associate',
    'AWS Developer Associate',
    'Docker Certified Associate',
    'Kubernetes Administrator (CKA)',
  ]

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aqsa-zam-zam-mirza-johar-baig-urdu.vercel.app' },
      { '@type': 'ListItem', position: 2, name: 'Certifications', item: '' },
    ],
  }

  const certSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Professional Certifications',
    description: 'Verified professional certifications and credentials',
    mainEntity: certifications.map((cert) => ({
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'certification',
      name: cert.name,
      issuingOrganization: {
        '@type': 'Organization',
        name: cert.issuer,
      },
      validFrom: cert.date,
      url: cert.link,
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(certSchema) }} />

      <div className="w-full">
        {/* Page Header */}
        <section
          className="py-20 px-4 text-white text-center"
          style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #1e3a5f 100%)' }}
        >
          <nav aria-label="Breadcrumb" className="text-xs text-blue-300 mb-6">
            <ol className="flex items-center justify-center gap-2 list-none">
              <li>
                <Link href="/" className="hover:text-amber-400 transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">›</li>
              <li className="text-amber-400 font-medium" aria-current="page">
                Certifications
              </li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-3 bg-amber-500/15 border border-amber-500/30 text-amber-400 px-4 py-2 rounded-full mb-6">
            <Award className="w-4 h-4" />
            <span className="text-xs font-semibold tracking-widest uppercase">Professional Credentials</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Certifications & Credentials
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Industry-recognized certifications validating expertise in Cloud Computing, Generative AI, and Enterprise Solutions.
          </p>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-16">
          {/* Verified Certifications */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-2">Verified Certifications</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-12">
              Actively maintained professional credentials demonstrating current expertise.
            </p>

            <div className="space-y-6">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="group bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-8 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Award className="w-5 h-5 text-amber-600" aria-hidden="true" />
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{cert.name}</h3>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{cert.issuer}</p>
                    </div>
                    <div className="flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-xs font-semibold">
                      <CheckCircle2 className="w-4 h-4" />
                      Verified
                    </div>
                  </div>

                  <p className="text-slate-700 dark:text-slate-300 mb-6">{cert.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-xs uppercase text-slate-500 dark:text-slate-400 font-semibold mb-1">
                        Issued
                      </p>
                      <p className="text-slate-900 dark:text-white font-semibold">{cert.date}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase text-slate-500 dark:text-slate-400 font-semibold mb-1">
                        Valid For
                      </p>
                      <p className="text-slate-900 dark:text-white font-semibold">{cert.expiresAt}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-xs uppercase text-slate-500 dark:text-slate-400 font-semibold mb-3">
                      Key Skills
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:gap-3 transition-all font-semibold"
                  >
                    View Credential
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Pending Certifications */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-4">Planned Certifications</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              In-progress certifications targeting Q2-Q4 2025. Demonstrating commitment to continuous learning.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pendingCertifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 dark:bg-slate-700 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg p-6 text-center"
                >
                  <p className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{cert}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Coming Soon</p>
                </div>
              ))}
            </div>
          </section>

          {/* Internal Links */}
          <section className="border-t border-slate-200 dark:border-slate-700 pt-16">
            <h2 className="text-3xl font-bold mb-8">Related Experience</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                href="/about"
                className="group p-6 bg-slate-50 dark:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-600 hover:border-blue-400 hover:shadow-lg transition-all"
              >
                <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600">Complete Profile</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Full biography, education, and professional experience.
                </p>
              </Link>

              <Link
                href="/projects/aws-cloud-architecture"
                className="group p-6 bg-slate-50 dark:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-600 hover:border-blue-400 hover:shadow-lg transition-all"
              >
                <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600">AWS Architecture Project</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Production systems designed using 15+ AWS services.
                </p>
              </Link>
            </div>

            <div className="mt-12">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:gap-3 transition-all font-semibold"
              >
                ← Back to Home
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
