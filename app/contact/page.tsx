"use client"
import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-extrabold mb-4 text-center">Contact Me</h1>
      <p className="text-lg text-center text-gray-600 dark:text-gray-400 mb-8">
        Have a question or want to work together? Let's connect. Feel free to reach out to AQSA ZAM ZAM MIRZA JOHAR BAIG.
      </p>

      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                required 
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700" 
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                required 
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700" 
                placeholder="john@example.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
            <textarea 
              id="message" 
              rows={5} 
              required 
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 resize-none" 
              placeholder="Your message here..."
            />
          </div>
          <button 
            type="submit" 
            className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        {submitted && (
          <div className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-lg text-center">
            Thank you! Your message has been sent successfully.
          </div>
        )}
      </div>
      
      <div className="mt-12 text-center text-gray-600 dark:text-gray-400">
        <p>Location: Nagpur, India</p>
        <p>Email: contact@aqsajoharbaig.local (Placeholder)</p>
      </div>
    </div>
  )
}
