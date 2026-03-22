import type { Metadata } from 'next'

// Adding some metadata just in case this gets imported
export const metadata: Metadata = {
  title: 'Contact AQSA ZAM ZAM MIRZA JOHAR BAIG',
  description: 'Reach out to AQSA ZAM ZAM MIRZA JOHAR BAIG for tech collaboration or poetry discussion.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
