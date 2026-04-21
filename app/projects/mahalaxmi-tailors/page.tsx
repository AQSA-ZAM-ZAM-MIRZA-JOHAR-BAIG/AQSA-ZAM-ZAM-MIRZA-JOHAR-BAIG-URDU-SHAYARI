import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mahalaxmi Tailors | AQSA ZAM ZAM MIRZA JOHAR BAIG',
  description: 'E-commerce platform for tailoring services',
}

export default function MahalaxmiTailorsPage() {
  return (
    <article className="w-full">
      <section className="relative py-20 px-4 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Mahalaxmi Tailors
          </h1>
          <p className="text-xl text-slate-700 dark:text-slate-300">
            Coming soon. This project page is under development.
          </p>
        </div>
      </section>
    </article>
  )
}
