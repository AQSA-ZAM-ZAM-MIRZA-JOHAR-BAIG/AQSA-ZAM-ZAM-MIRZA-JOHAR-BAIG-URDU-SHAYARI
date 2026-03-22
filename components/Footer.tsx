import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-8 bg-gray-100 dark:bg-gray-800 text-center text-sm border-t border-gray-200 dark:border-gray-700 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="font-semibold mb-2">AQSA ZAM ZAM MIRZA JOHAR BAIG</p>
        <p className="text-gray-600 dark:text-gray-400 mb-4">CS Student & Developer | AI/ML | DevOps | Urdu Shayari</p>
        <div className="flex justify-center space-x-6">
          <a href="https://linkedin.com/in/aqsajoharbaig" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
          <a href="https://github.com/aqsajoharbaig" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a>
          <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
        </div>
        <p className="mt-8 text-gray-500 dark:text-gray-500">&copy; {new Date().getFullYear()} AQSA ZAM ZAM MIRZA JOHAR BAIG. All rights reserved.</p>
      </div>
    </footer>
  )
}
