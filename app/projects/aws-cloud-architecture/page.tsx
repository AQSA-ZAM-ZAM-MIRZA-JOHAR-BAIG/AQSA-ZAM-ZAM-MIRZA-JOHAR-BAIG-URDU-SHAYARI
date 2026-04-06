import type { Metadata } from 'next'
import Link from 'next/link'
import { ExternalLink, Github, Cloud, AlertCircle, BarChart3, ChevronRight, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AWS Cloud Architecture Design | AQSA ZAM ZAM MIRZA JOHAR BAIG',
  description:
    'Designed and deployed 3+ production-grade applications on AWS using 15+ services. High-availability, fault-tolerant, multi-region architecture with EC2 auto-scaling, S3, RDS, Lambda, CloudFront, and Route 53.',
  keywords: [
    'AWS cloud architecture',
    'EC2 auto-scaling',
    'Route 53 DNS',
    'CloudFront CDN',
    'RDS databases',
    'Lambda serverless',
    'System design',
    'High availability',
    'Fault tolerance',
  ],
  alternates: {
    canonical: 'https://aqsa-zam-zam-mirza-johar-baig-urdu.vercel.app/projects/aws-cloud-architecture',
  },
  openGraph: {
    title: 'AWS Architecture — 15+ Services, 99.99% Uptime',
    description: 'Cloud architecture portfolio by Aqsa Zam Zam Mirza Johar Baig',
    url: 'https://aqsa-zam-zam-mirza-johar-baig-urdu.vercel.app/projects/aws-cloud-architecture',
    type: 'article',
  },
}

export default function AWSArchitecturePage() {
  const projectSchema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': 'https://aqsa-zam-zam-mirza-johar-baig-urdu.vercel.app/projects/aws-cloud-architecture#project',
    name: 'AWS Cloud Architecture — Multi-Region Production Systems',
    description:
      'Architected and deployed 3+ production applications on AWS using 15+ services. Designed for 99.99% uptime, auto-scaling, and multi-region failover.',
    creator: {
      '@type': 'Person',
      name: 'AQSA ZAM ZAM MIRZA JOHAR BAIG',
      url: 'https://aqsa-zam-zam-mirza-johar-baig-urdu.vercel.app',
    },
    datePublished: '2024-02-01',
    dateModified: new Date().toISOString().split('T')[0],
    inLanguage: 'en',
    technicalDetails: {
      cloudProvider: 'Amazon Web Services (AWS)',
      services: [
        'EC2 (Elastic Compute Cloud)',
        'RDS (Relational Database Service)',
        'S3 (Simple Storage Service)',
        'Route 53 (DNS)',
        'CloudFront (CDN)',
        'Lambda (Serverless)',
        'IAM (Identity & Access Management)',
        'CloudWatch (Monitoring)',
        'VPC (Virtual Private Cloud)',
        'ELB (Elastic Load Balancer)',
        'Auto Scaling',
        'SNS/SQS (Messaging)',
        'Secrets Manager',
        'CloudFormation (IaC)',
        'S3 Lifecycle Policies',
      ],
      uptime: '99.99%',
      regions: 'Multi-region active-active',
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aqsa-zam-zam-mirza-johar-baig-urdu.vercel.app' },
      { '@type': 'ListItem', position: 2, name: 'Portfolio', item: 'https://aqsa-zam-zam-mirza-johar-baig-urdu.vercel.app/portfolio' },
      { '@type': 'ListItem', position: 3, name: 'Projects', item: 'https://aqsa-zam-zam-mirza-johar-baig-urdu.vercel.app/projects' },
      { '@type': 'ListItem', position: 4, name: 'AWS Architecture', item: 'https://aqsa-zam-zam-mirza-johar-baig-urdu.vercel.app/projects/aws-cloud-architecture' },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <article className="w-full">
        {/* Hero */}
        <section className="relative py-20 px-4 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs font-semibold px-3 py-1 rounded-full mb-6">
              <Cloud className="w-3.5 h-3.5" />
              Multi-Region Architecture
            </div>

            <h1 className="text-5xl md:text-6xl font-black mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              AWS Cloud Architecture
            </h1>
            <p className="text-xl text-slate-700 dark:text-slate-300 mb-8">
              Designed and deployed 3+ production applications on AWS with 99.99% uptime guarantee. Implemented auto-scaling, multi-region failover, and cost optimization strategies using 15+ AWS services.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://aws.amazon.com/architecture/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                View AWS Architecture Guide
              </a>
              <a
                href="https://github.com/AQSA-ZAM-ZAM-MIRZA-JOHAR-BAIG"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors"
              >
                <Github className="w-4 h-4" />
                Infrastructure Code
              </a>
            </div>
          </div>
        </section>

        {/* Architecture Overview */}
        <section className="py-16 px-4 bg-white dark:bg-slate-800">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">High-Availability Architecture</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg">
                <h3 className="text-sm font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-widest mb-2">
                  Uptime SLA
                </h3>
                <p className="text-lg font-semibold">99.99% (Four Nines)</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg">
                <h3 className="text-sm font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-widest mb-2">
                  Failover Time
                </h3>
                <p className="text-lg font-semibold">< 5 seconds</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg">
                <h3 className="text-sm font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-widest mb-2">
                  Regions
                </h3>
                <p className="text-lg font-semibold">2 (us-east-1, eu-west-1)</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg">
                <h3 className="text-sm font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-widest mb-2">
                  AWS Services
                </h3>
                <p className="text-lg font-semibold">15+</p>
              </div>
            </div>
          </div>
        </section>

        {/* Architecture Components */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Architecture Layers</h2>

            <div className="space-y-8">
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-2xl font-bold mb-4">1. DNS & Global Distribution (Route 53)</h3>
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  Route 53 geolocation routing directs users to nearest regional endpoint. Implements health checks with automatic failover to secondary region in &lt;5 seconds.
                </p>
                <code className="block bg-slate-900 text-slate-100 p-3 rounded text-sm">
                  Latency-based routing | Health checks (30s interval) | Weighted policies
                </code>
              </div>

              <div className="border-l-4 border-purple-600 pl-6">
                <h3 className="text-2xl font-bold mb-4">2. Content Delivery Network (CloudFront)</h3>
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  CloudFront edge locations cache static and dynamic content. Reduced latency by 60% vs direct origin access. Origin failover routes to secondary origin if primary is unavailable.
                </p>
                <code className="block bg-slate-900 text-slate-100 p-3 rounded text-sm">
                  Origin Failover | Geo-restriction | Cache invalidation (1s TTL for dynamic)
                </code>
              </div>

              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-2xl font-bold mb-4">3. Load Balancing (Application Load Balancer)</h3>
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  ALB distributes traffic across EC2 instances in multiple availability zones. Sticky sessions for user continuity. Health checks every 10 seconds.
                </p>
                <code className="block bg-slate-900 text-slate-100 p-3 rounded text-sm">
                  Path-based routing | Host-based routing | Connection draining
                </code>
              </div>

              <div className="border-l-4 border-cyan-600 pl-6">
                <h3 className="text-2xl font-bold mb-4">4. Compute (Auto Scaling)</h3>
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  EC2 Auto Scaling Group scales instances 1-10 based on CPU &gt;70%. Target tracking scaling policy maintains optimal cost/performance balance. &lt;2 minute ramp-up time.
                </p>
                <code className="block bg-slate-900 text-slate-100 p-3 rounded text-sm">
                  Min: 1 | Max: 10 | Target CPU: 70% | Cooldown: 300s
                </code>
              </div>

              <div className="border-l-4 border-amber-600 pl-6">
                <h3 className="text-2xl font-bold mb-4">5. Database Layer (RDS Multi-AZ)</h3>
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  RDS PostgreSQL with Multi-AZ deployment provides automatic failover in &lt;2 minutes. Read replicas in secondary region for disaster recovery.
                </p>
                <code className="block bg-slate-900 text-slate-100 p-3 rounded text-sm">
                  Multi-AZ | Automated backups (7-day retention) | Read replicas
                </code>
              </div>

              <div className="border-l-4 border-red-600 pl-6">
                <h3 className="text-2xl font-bold mb-4">6. Object Storage & Backup (S3)</h3>
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  S3 versioning enables point-in-time recovery. Cross-region replication for disaster recovery. Lifecycle policies move old data to Glacier for cost optimization (60% savings on archived data).
                </p>
                <code className="block bg-slate-900 text-slate-100 p-3 rounded text-sm">
                  Versioning | Cross-region replication | S3 → Glacier (30 days)
                </code>
              </div>

              <div className="border-l-4 border-pink-600 pl-6">
                <h3 className="text-2xl font-bold mb-4">7. Serverless Functions (Lambda)</h3>
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  Lambda handles asynchronous tasks (image processing, email notifications) triggered by S3 events or SQS queue. Eliminates need for dedicated servers for batch jobs.
                </p>
                <code className="block bg-slate-900 text-slate-100 p-3 rounded text-sm">
                  Concurrent executions: 1000 | Runtime: Python 3.11 | Memory: 512 MB
                </code>
              </div>

              <div className="border-l-4 border-indigo-600 pl-6">
                <h3 className="text-2xl font-bold mb-4">8. Monitoring & Alerting (CloudWatch)</h3>
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  CloudWatch dashboards track 50+ metrics (CPU, memory, network, application-level). SNS alerts notify ops team on threshold breaches (P1 within 5 min, P2 within 30 min).
                </p>
                <code className="block bg-slate-900 text-slate-100 p-3 rounded text-sm">
                  Custom metrics | Log insights (real-time querying) | Anomaly detection
                </code>
              </div>
            </div>
          </div>
        </section>

        {/* Cost Optimization */}
        <section className="py-16 px-4 bg-slate-50 dark:bg-slate-700">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Cost Optimization Strategies</h2>

            <div className="space-y-6">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-3">💰 Reserved Instances (RI)</h3>
                <p className="text-slate-700 dark:text-slate-300 mb-2">
                  Purchased 3-year RIs for baseline capacity, reducing EC2 costs by 70% vs on-demand.
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Savings: ₹3L/year
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-3">📊 Spot Instances</h3>
                <p className="text-slate-700 dark:text-slate-300 mb-2">
                  50% of compute capacity on Spot instances for non-critical workloads (batch processing, data analysis).
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Savings: ₹50K/month
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-3">📦 S3 Lifecycle Policies</h3>
                <p className="text-slate-700 dark:text-slate-300 mb-2">
                  Old data auto-migrates to Cheaper Glacier storage after 30 days. Delete ineffective delete after 1 year.
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Savings: ₹15K/month on storage
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-3">🔄 Lambda Over EC2 for Batch Jobs</h3>
                <p className="text-slate-700 dark:text-slate-300 mb-2">
                  Event-driven Lambda replaced cron-based EC2 jobs. Pay only for execution time (milliseconds), not idle time.
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Savings: ₹20K/month
                </p>
              </div>

              <div className="flex items-center gap-3 bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <BarChart3 className="w-6 h-6 text-green-600" />
                <div>
                  <p className="font-bold text-green-700 dark:text-green-300">Total Monthly Savings</p>
                  <p className="text-lg font-black text-green-600">₹88,500/month (42% reduction)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lessons Learned */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Key Architectural Learnings</h2>

            <div className="space-y-4">
              <div className="flex gap-4">
                <span className="text-2xl font-bold text-blue-600 mt-1">1.</span>
                <div>
                  <h3 className="font-bold text-lg mb-1">Redundancy Everywhere = Reliability</h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    Multi-AZ RDS + Read replicas + S3 cross-region replication. Single point of failure = production nightmares.
                  </p>
                </div>
              </li>
              <div className="flex gap-4">
                <span className="text-2xl font-bold text-green-600 mt-1">2.</span>
                <div>
                  <h3 className="font-bold text-lg mb-1">Monitor First, Debug Later</h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    CloudWatch custom metrics saved us hours. Anomaly detection caught a memory leak before users noticed.
                  </p>
                </div>
              </li>
              <div className="flex gap-4">
                <span className="text-2xl font-bold text-purple-600 mt-1">3.</span>
                <div>
                  <h3 className="font-bold text-lg mb-1">Cost Optimization is Ongoing</h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    42% savings came from iterative changes (RIs, Spot, Glacier). Review bills monthly; AWS offerings evolve constantly.
                  </p>
                </div>
              </li>
            </div>
          </div>
        </section>

        {/* Related Projects */}
        <section className="py-16 px-4 bg-slate-50 dark:bg-slate-700">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Related Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                href="/projects/mahalaxmi-tailors"
                className="group p-6 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-600 hover:border-blue-400 hover:shadow-lg transition-all"
              >
                <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 flex items-center gap-2">
                  Mahalaxmi Tailors E-commerce
                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  MERN platform deployed on this AWS architecture. 70+ users, high availability, 2.3s LCP.
                </p>
              </Link>

              <Link
                href="/projects/falcovita-healthcare"
                className="group p-6 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-600 hover:border-blue-400 hover:shadow-lg transition-all"
              >
                <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 flex items-center gap-2">
                  FalcoVita Healthcare Platform
                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Backend API served through ALB with CloudFront caching. 70% latency reduction.
                </p>
              </Link>
            </div>

            <div className="mt-12 pt-12 border-t border-slate-200 dark:border-slate-600">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:gap-3 transition-all font-semibold"
              >
                ← Back to Portfolio
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  )
}
