import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Software Developer Pune',
  description:
    'Contact AQSA ZAM ZAM MIRZA JOHAR BAIG — AI/ML & Full-Stack Developer. Reach out for technical collaboration, software projects, or AI/ML discussions.',
  alternates: { canonical: 'https://aqsa-zam-zam-mirza-johar-baig-urdu.vercel.app/contact' },
  openGraph: { url: 'https://aqsa-zam-zam-mirza-johar-baig-urdu.vercel.app/contact' },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
