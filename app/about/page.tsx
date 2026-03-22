import type { Metadata } from 'next'
import { CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AQSA ZAM ZAM MIRZA JOHAR BAIG | About Portfolio',
  description: 'Learn more about AQSA ZAM ZAM MIRZA JOHAR BAIG, a Computer Science student at VIIT Pune specializing in AI/ML, backend development, and DevOps.',
}

export default function About() {
  const skills = [
    { title: 'Languages', list: 'Python, Java, JavaScript, TypeScript, SQL, HTML/CSS' },
    { title: 'Frameworks', list: 'Next.js, React, Node.js, Express, Flask, Django' },
    { title: 'Cloud & DevOps', list: 'AWS (EC2, S3, RDS), Docker, CI/CD pipelines, Git' },
    { title: 'AI/Machine Learning', list: 'Scikit-Learn, TensorFlow, NLP (Urdu/English), Pandas' },
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-extrabold mb-8 text-center">About AQSA ZAM ZAM MIRZA JOHAR BAIG</h1>
      
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700 mb-10">
        <h2 className="text-2xl font-bold mb-4">Background & Education</h2>
        <p className="text-lg leading-relaxed mb-4">
          I am a passionate <strong>Computer Science student at VIIT Pune</strong>, specializing in Artificial Intelligence and Machine Learning. Based in Nagpur, India, my journey in tech is driven by a deep curiosity to solve complex problems and build scalable architectures.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Whether I'm setting up a robust AWS infrastructure, fine-tuning an ML model, or developing full-stack web applications, I bring a commitment to excellence and high coding standards to every project.
        </p>
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg flex items-start space-x-3">
          <CheckCircle2 className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-blue-900 dark:text-blue-100">Vishwakarma Institute of Information Technology (VIIT), Pune</h3>
            <p className="text-blue-800 dark:text-blue-200 text-sm">B.Tech in Computer Science (Specialization in AI/ML)</p>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-6">Technical Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map(skill => (
            <div key={skill.title} className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-lg mb-2 text-primary">{skill.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{skill.list}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-gray-900 text-white rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Beyond the Code</h2>
        <p className="text-lg text-gray-300 mb-6">
          When I'm not debugging or reading documentation, you will find me immersed in the world of classical Urdu literature. I write poetry (Shayari) exploring themes of existence, love, and the human condition.
        </p>
        <a 
          href="/resume.pdf" 
          className="inline-block px-6 py-3 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-200 transition"
          download
        >
          Download My Resume
        </a>
      </div>
    </div>
  )
}
