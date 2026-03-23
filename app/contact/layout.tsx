import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact AQSA ZAM ZAM MIRZA JOHAR BAIG | Software Developer',
  description:
    'Contact AQSA ZAM ZAM MIRZA JOHAR BAIG — Software Developer specializing in AI/ML and Full-Stack development. Reach out for technical collaboration, software projects, or AI/ML discussions.',
  alternates: { canonical: 'https://aqsajoharbaig.vercel.app/contact' },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
