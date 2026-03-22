"use client"
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [theme, setTheme] = useState('light')
  
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark')
      setTheme('dark')
    }
  }, [])
  
  const toggleTheme = () => {
    if (theme === 'light') {
      document.documentElement.classList.add('dark')
      setTheme('dark')
    } else {
      document.documentElement.classList.remove('dark')
      setTheme('light')
    }
  }

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Urdu Shayari', href: '/urdu-shayari' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="fixed w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-50 shadow-sm top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="font-bold text-lg md:text-xl tracking-tighter hover:text-primary transition-colors">
              AQSA ZAM ZAM MIRZA JOHAR BAIG
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <button onClick={toggleTheme} className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                {theme === 'dark' ? <Sun className="w-5 h-5"/> : <Moon className="w-5 h-5"/>}
              </button>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleTheme} className="p-2 mr-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              {theme === 'dark' ? <Sun className="w-5 h-5"/> : <Moon className="w-5 h-5"/>}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900">
            {navLinks.map((link) => (
               <Link
                 key={link.name}
                 href={link.href}
                 className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
                 onClick={() => setIsOpen(false)}
               >
                 {link.name}
               </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
