import React from 'react';
import { ExternalLink, Github, Linkedin, Youtube, Layers, Globe } from 'lucide-react';
import './Footer.css';

const profiles = [
  {
    name: 'GitHub',
    handle: '@AQSA-ZAM-ZAM-MIRZA-JOHAR-BAIG',
    url: 'https://github.com/AQSA-ZAM-ZAM-MIRZA-JOHAR-BAIG',
    icon: <Github size={20} className="footer-icon github-icon" />
  },
  {
    name: 'LinkedIn',
    handle: 'Aqsa Zam Zam Mirza Johar Baig',
    url: 'https://www.linkedin.com/in/aqsa-zam-zam-mirza-johar-baig-28501b3b6/?isSelfProfile=true',
    icon: <Linkedin size={20} className="footer-icon linkedin-icon" />
  },
  {
    name: 'Kaggle',
    handle: '@aqsamirza08',
    url: 'https://www.kaggle.com/aqsamirza08',
    icon: <Layers size={20} className="footer-icon kaggle-icon" />
  },
  {
    name: 'Medium Blog',
    handle: '@aqsamirza08',
    url: 'https://aqsamirza08.medium.com/',
    icon: <ExternalLink size={20} className="footer-icon medium-icon" />
  },
  {
    name: 'Stack Overflow',
    handle: 'Aqsa Zam Zam Mirza Johar Baig',
    url: 'https://stackoverflow.com/users/32468898/aqsa-zam-zam-mirza-johar-baig',
    icon: <ExternalLink size={20} className="footer-icon stack-icon" />
  },
  {
    name: 'YouTube',
    handle: '@aqsamirza08',
    url: 'https://www.youtube.com/@aqsamirza08',
    icon: <Youtube size={20} className="footer-icon yt-icon" />
  },
  {
    name: 'YouTube Channel',
    handle: 'Aqsa Mirza (Channel)',
    url: 'https://www.youtube.com/channel/UCtn3SjtE26v2pzdLeRPwJbQ',
    icon: <Youtube size={20} className="footer-icon yt-icon" />
  }
];

const projects = [
  {
    name: 'Portfolio Site',
    url: 'https://aqsa-zam-zam-mirza-johar-baig-portf.vercel.app/',
    domain: 'aqsa-zam-zam-mirza-johar-baig-portf.vercel.app'
  },
  {
    name: 'Urdu Shayari App',
    url: 'https://aqsa-zam-zam-mirza-johar-baig-urdu.vercel.app/',
    domain: 'aqsa-zam-zam-mirza-johar-baig-urdu.vercel.app'
  },
  {
    name: 'Blogs Platform (Vercel)',
    url: 'https://aqsa-zam-zam-mirza-johar-baig-blogs.vercel.app/',
    domain: 'aqsa-zam-zam-mirza-johar-baig-blogs.vercel.app'
  },
  {
    name: 'Blogs Platform (Render)',
    url: 'https://aqsa-zam-zam-mirza-johar-baig-blogs.onrender.com/',
    domain: 'aqsa-zam-zam-mirza-johar-baig-blogs.onrender.com'
  },
  {
    name: 'Constitutional Law',
    url: 'https://aqsa-zam-zam-mirza-johar-baig-const.vercel.app/',
    domain: 'aqsa-zam-zam-mirza-johar-baig-const.vercel.app'
  },
  {
    name: 'Law Dictionary',
    url: 'https://aqsa-zam-zam-mirza-johar-baig-law-d.vercel.app/',
    domain: 'aqsa-zam-zam-mirza-johar-baig-law-d.vercel.app'
  }
];

export default function Footer() {
  return (
    <footer className="advanced-footer">
      <div className="container">
        
        {/* SEO Hidden H1 to boost the name ranking for Google - very important for 1st index */}
        <h1 className="sr-only">Aqsa Zam Zam Mirza Johar Baig - Urdu Shayari & Projects</h1>

        <div className="footer-header">
          <span className="badge">FIND ME ONLINE</span>
          <h2 className="footer-title">Online Profiles</h2>
          <p className="footer-subtitle">
            Connect with me across the web — from legal publications and academic repositories to code and content platforms.
          </p>
        </div>

        <div className="cards-grid mb-extra">
          {profiles.map((profile, i) => (
            <a 
              key={i} 
              href={profile.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="glass-card"
            >
              <div className="card-icon-container">
                {profile.icon}
              </div>
              <div className="card-content">
                <span className="card-name">{profile.name}</span>
                <span className="card-handle">{profile.handle}</span>
              </div>
              <ExternalLink size={14} className="hover-arrow" />
            </a>
          ))}
        </div>

        <div className="footer-header">
          <span className="badge">MY WORK</span>
          <h2 className="footer-title">Projects</h2>
          <p className="footer-subtitle">Explore my portfolio of web applications spanning law, poetry, and blogs.</p>
        </div>

        <div className="cards-grid">
          {projects.map((proj, i) => (
            <a 
              key={i} 
              href={proj.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="glass-card"
            >
              <div className="card-icon-container">
                <Globe size={20} className="footer-icon project-icon" />
              </div>
              <div className="card-content">
                <span className="card-name">{proj.name}</span>
                <span className="card-handle">{proj.domain}</span>
              </div>
              <ExternalLink size={14} className="hover-arrow" />
            </a>
          ))}
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Designed & Built by Aqsa Zam Zam Mirza Johar Baig</p>
        </div>
      </div>
    </footer>
  );
}
