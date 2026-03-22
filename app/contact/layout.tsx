import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact AQSA ZAM ZAM MIRZA JOHAR BAIG | Law Student, PDLC Amravati',
  description:
    'Contact AQSA ZAM ZAM MIRZA JOHAR BAIG — Law Student at PDLC Amravati, Legal Researcher, and Urdu Poet. Reach out for legal research collaboration, constitutional law discussions, or Urdu Shayari.',
  alternates: { canonical: 'https://aqsajoharbaig.vercel.app/contact' },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
