import Link from 'next/link'
import { Code, MapPin, Mail, Linkedin, Github } from 'lucide-react'

const footerLinks = [
  { title: 'Pages', links: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Urdu Shayari', href: '/urdu-shayari' },
    { name: 'Contact', href: '/contact' },
  ]},
  { title: 'Tech Stack', links: [
    { name: 'AI & Machine Learning', href: '/portfolio' },
    { name: 'Full Stack (MERN)', href: '/portfolio' },
    { name: 'Cloud Computing (AWS)', href: '/portfolio' },
    { name: 'System Design', href: '/about' },
  ]},
  { title: 'Resources', links: [
    { name: 'Tech Blogs', href: '/blogs' },
    { name: 'GitHub Projects', href: 'https://github.com/AQSA-ZAM-ZAM-MIRZA-JOHAR-BAIG' },
    { name: 'Kaggle Notebooks', href: 'https://www.kaggle.com/aqsamirza08' },
    { name: 'Urdu Shayari', href: '/urdu-shayari' },
  ]},
]

export default function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300" role="contentinfo">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Code className="w-6 h-6 text-amber-500" aria-hidden="true" />
              <span className="text-white font-bold text-lg">AqsA JB</span>
            </div>
            <p className="text-sm font-semibold text-white mb-1">AQSA ZAM ZAM MIRZA JOHAR BAIG</p>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              Software Developer specializing in AI/ML · Full-Stack Developer · Cloud Practitioner · Student at VIIT Pune & IIT Madras
            </p>
            <div className="flex items-center gap-1 text-xs text-slate-400 mb-2">
              <MapPin className="w-3 h-3 flex-shrink-0" aria-hidden="true" />
              <span>Pune, Maharashtra, India</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-slate-400">
              <Mail className="w-3 h-3 flex-shrink-0" aria-hidden="true" />
              <a href="mailto:aqsamirz6306@gmail.com" className="hover:text-amber-400 transition-colors">
                aqsamirz6306@gmail.com
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">{col.title}</h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-amber-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 text-center sm:text-left">
            &copy; {new Date().getFullYear()}{' '}
            <strong className="text-slate-400">AQSA ZAM ZAM MIRZA JOHAR BAIG</strong>. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/aqsamirza08"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-amber-400 transition-colors"
              aria-label="AQSA ZAM ZAM MIRZA JOHAR BAIG on LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/AQSA-ZAM-ZAM-MIRZA-JOHAR-BAIG"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-amber-400 transition-colors"
              aria-label="AQSA ZAM ZAM MIRZA JOHAR BAIG on GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <span className="text-xs text-slate-600">|</span>
            <span className="text-xs text-slate-500">Last updated: March 2026</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
