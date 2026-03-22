import type { Metadata } from 'next'
import { ExternalLink, Github } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AQSA ZAM ZAM MIRZA JOHAR BAIG | Projects Portfolio',
  description: 'Explore full-stack, AI/ML, and DevOps projects built by AQSA ZAM ZAM MIRZA JOHAR BAIG.',
}

export default function Portfolio() {
  const projects = [
    {
      title: "Scalable E-Commerce Backend",
      tech: "Node.js, Express, MongoDB, Docker, AWS EC2",
      desc: "Architected a high-throughput e-commerce RESTful API. Implemented JWT authentication, Redis caching, and payment gateway integration. Containerized and deployed on AWS.",
      link: "#",
      github: "#"
    },
    {
      title: "Smart Hospital Management System",
      tech: "Java, Spring Boot, MySQL, React",
      desc: "Developed a comprehensive hospital management suite for patient records, appointment scheduling, and automated billing workflows, reducing administrative overhead by 40%.",
      link: "#",
      github: "#"
    },
    {
      title: "Predictive ML Models Suite",
      tech: "Python, Scikit-Learn, TensorFlow, Pandas",
      desc: "Built and evaluated multiple machine learning models including random forests and deep neural networks for churn prediction and price forecasting with 92% accuracy.",
      link: "#",
      github: "#"
    },
    {
      title: "Real-time IPO Dashboard Platform",
      tech: "Next.js, Tailwind CSS, WebSockets, Prisma",
      desc: "Created a real-time tracking platform for upcoming Initial Public Offerings. Handled live data feeds using WebSockets and visualized financial metrics dynamically.",
      link: "#",
      github: "#"
    },
    {
      title: "DevOps Automated Pipeline",
      tech: "GitHub Actions, Jenkins, Terraform, AWS S3/CloudFront",
      desc: "Designed an end-to-end CI/CD pipeline using Infrastructure as Code (IaC) to automatically provision resources and deploy serverless functions to AWS.",
      link: "#",
      github: "#"
    }
  ]

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-extrabold mb-4 text-center">Portfolio & Projects</h1>
      <p className="text-xl text-center text-gray-600 dark:text-gray-400 mb-12">
        A selection of technical projects by AQSA ZAM ZAM MIRZA JOHAR BAIG.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition flex flex-col">
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-sm font-medium text-primary mb-4">{project.tech}</p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">{project.desc}</p>
            <div className="flex space-x-4">
              <a href={project.github} className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary transition">
                <Github className="w-4 h-4 mr-1" /> Source
              </a>
              <a href={project.link} className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary transition">
                <ExternalLink className="w-4 h-4 mr-1" /> Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
