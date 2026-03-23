'use client'
import { useState } from 'react'
import { MapPin, Mail, Linkedin, Github, Send } from 'lucide-react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 6000)
    }, 800)
  }

  return (
    <div className="w-full">
      {/* Header */}
      <section
        className="py-20 px-4 text-white text-center"
        style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #1e3a5f 100%)' }}
      >
        <nav aria-label="Breadcrumb" className="text-xs text-blue-300 mb-6">
          <ol className="flex items-center justify-center gap-2 list-none">
            <li><a href="/" className="hover:text-amber-400 transition-colors">Home</a></li>
            <li aria-hidden="true">›</li>
            <li className="text-amber-400" aria-current="page">Contact</li>
          </ol>
        </nav>
        <p className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-3">Get In Touch</p>
        <h1 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
          Contact AQSA ZAM ZAM MIRZA JOHAR BAIG
        </h1>
        <p className="text-blue-200 text-lg max-w-xl mx-auto">
          Interested in software development collaboration, AI/ML discussions, or cloud solutions? I would love to hear from you.
        </p>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">

          {/* Info Panel */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Reach Out
              </h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-blue-700 dark:text-blue-400" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white text-sm">Location</p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">Pune, Maharashtra, India</p>
                    <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">Vishwakarma Institute of Information Technology (VIIT)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-900/30 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-amber-700 dark:text-amber-400" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white text-sm">Email</p>
                    <a
                      href="mailto:aqsamirz6306@gmail.com"
                      className="text-slate-500 dark:text-slate-400 text-sm hover:text-amber-600 transition-colors"
                    >
                      aqsamirz6306@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-4 text-sm uppercase tracking-wider">
                Connect on Social
              </h3>
              <div className="space-y-3">
                <a
                  href="https://www.linkedin.com/in/aqsamirza08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all group"
                  aria-label="AQSA ZAM ZAM MIRZA JOHAR BAIG on LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-blue-600 group-hover:text-blue-700 transition-colors" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">LinkedIn</p>
                    <p className="text-xs text-slate-400">linkedin.com/in/aqsamirza08</p>
                  </div>
                </a>
                <a
                  href="https://github.com/AQSA-ZAM-ZAM-MIRZA-JOHAR-BAIG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all group"
                  aria-label="AQSA ZAM ZAM MIRZA JOHAR BAIG on GitHub"
                >
                  <Github className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">GitHub</p>
                    <p className="text-xs text-slate-400">github.com/AQSA-ZAM-ZAM-MIRZA-JOHAR-BAIG</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-amber-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-5 border border-blue-100 dark:border-slate-600">
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2">About</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                <strong className="text-slate-700 dark:text-slate-300">AQSA ZAM ZAM MIRZA JOHAR BAIG</strong> is a Computer Science undergraduate specializing in Artificial Intelligence and Machine Learning. She welcomes queries about software development, AI research, and cloud architecture.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3">
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 shadow-sm">
              <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Send a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5" aria-label="Contact form for AQSA ZAM ZAM MIRZA JOHAR BAIG">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      required
                      autoComplete="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Subject
                  </label>
                  <select
                    id="contact-subject"
                    name="subject"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-sm"
                  >
                    <option value="Software Collaboration">Software Collaboration</option>
                    <option value="AI / ML Research">AI / ML Research</option>
                    <option value="Cloud Architecture">Cloud Architecture</option>
                    <option value="Full Stack Development">Full Stack Development</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none text-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-4 bg-blue-700 hover:bg-blue-800 disabled:bg-blue-400 text-white font-bold rounded-xl transition-all text-sm"
                  aria-label="Send message to AQSA ZAM ZAM MIRZA JOHAR BAIG"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" aria-hidden="true" />
                      Send Message
                    </>
                  )}
                </button>
              </form>

              {submitted && (
                <div
                  role="alert"
                  className="mt-5 p-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-xl text-center text-sm font-medium"
                >
                  ✓ Thank you! Your message has been sent. AQSA ZAM ZAM MIRZA JOHAR BAIG will get back to you shortly.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
