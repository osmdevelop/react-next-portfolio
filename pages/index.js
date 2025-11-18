import Head from 'next/head'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import Certificates from '../components/Certificates'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Recommendations from '../components/Recommendations'
import Volunteer from '../components/Volunteer'
import { motion } from "framer-motion"
import { BsSun, BsMoon } from 'react-icons/bs'
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineMail
} from 'react-icons/ai'
import Image from 'next/image'
import design from '../public/design.png'
import code from '../public/code.png'
import web0 from '../public/web0.png'
import web1 from '../public/web1.png'
import web2 from '../public/web2.png'
import web3 from '../public/web3.png'
import web4 from '../public/web4.png'
import web5 from '../public/web5.png'
import web8 from '../public/web8.png'
import web9 from '../public/web9.png'
import web10 from '../public/web10.png'

import gfrontend from '../public/gfrontend.png'
import gcss from '../public/gcss.png'
import gjs from '../public/gjs.png'
import greact from '../public/greact.png'
import administratorCert from '../public/Administrator-cert.jpg'
import aiAssociateCert from '../public/ai-associate-cert.jpg'
import { useState } from 'react'

export default function Home(props) {
  const [darkMode, setDarkMode] = useState(true);

  // Experience data
  const experiences = [
    {
      title: "IT Specialist",
      company: "Selfreliance Federal Credit Union",
      period: "Apr 2025 - Present",
      location: "Chicago, Illinois · On-site",
      description: "Providing comprehensive IT support across multiple branches, managing enterprise infrastructure and security systems.",
      achievements: [
        "Provide IT support across branches, including Active Directory, Microsoft 365, Intune, and network systems",
        "Maintain endpoint security and device compliance",
        "Developed automation processes for IT asset tracking and software deployment"
      ],
      technologies: ["Active Directory", "Microsoft 365", "Intune", "Network Systems", "Endpoint Security"]
    },
    {
      title: "Lead Software Engineer",
      company: "Shannon Cyber AI",
      period: "Feb 2024 - Present",
      location: "Chicago, Illinois · Remote",
      role: "Promoted from Software Engineer → Senior → Lead",
      description: "Leading architecture and development of full-stack and AI-driven systems for government transparency and compliance automation.",
      achievements: [
        "Lead Software Engineer (Oct 2025 – Present): Leading architecture and development of full-stack and AI-driven systems (React, Next.js, Cloudflare Workers, D1, R2, Vectorize)",
        "Senior Software Engineer (Jun 2025 – Oct 2025): Built and optimized backend workers for automated data ingestion and FOIA policy updates",
        "Software Engineer (Feb 2024 – Jun 2025): Developed core product modules and frontend interfaces for the SaaS",
        "Designed AutoRAG AI Workers and MCP Services which fetch and efficiently index content",
        "Hardened security baseline by incorporating AI Gateways",
        "Significantly reduced delivery time of product MVPs, giving competitive edge"
      ],
      technologies: ["React", "Next.js", "Cloudflare Workers", "D1", "R2", "Vectorize", "AI Agents", "AutoRAG", "MCP Services"]
    },
    {
      title: "Front-end Developer, Database Administrator",
      company: "Selfreliance Association",
      period: "Nov 2022 - Apr 2025",
      location: "Chicago, Illinois · On-site",
      description: "Developed and maintained high-traffic websites and managed complex database systems, significantly improving operational efficiency.",
      achievements: [
        "Developed and maintained two high-traffic websites, achieving 40% boost in operational efficiency",
        "Increased team productivity by 20% through React-based applications",
        "Managed complex Salesforce database, generating 500+ monthly reports",
        "Collaborated with marketing team for 35% increase in key metrics",
        "Implemented streamlined workflows resulting in 40% improvement in work process speed"
      ],
      technologies: ["React", "Salesforce", "Database Administration", "Web Development"]
    },
    {
      title: "Software Engineer",
      company: "IHS Automation",
      period: "Feb 2024 - Jan 2025",
      location: "Chicago, Illinois · Remote · Part-time",
      description: "Engineered secure, automation-focused web applications for federal agencies and contributed to fraud prevention platforms.",
      achievements: [
        "Engineered secure, automation-focused web applications for federal agencies (React, Material UI, Microsoft 365)",
        "Contributed to fraud prevention platform (React, MongoDB, Camunda, APIs)",
        "Developed Salesforce applications for federal agencies"
      ],
      technologies: ["React", "Material UI", "Microsoft 365", "MongoDB", "Camunda", "Salesforce", "APIs"]
    }
  ];

  // Skills data organized by category
  const skillsCategories = [
    {
      category: "Frontend Technologies",
      skills: ["React", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "TailwindCSS", "Bootstrap", "Material UI"]
    },
    {
      category: "Backend & Cloud",
      skills: ["Cloudflare Workers", "Node.js", "MongoDB", "APIs", "REST", "GraphQL"]
    },
    {
      category: "AI & Machine Learning",
      skills: ["AI Agents", "AutoRAG", "MCP Services", "Vectorize", "AI Gateways", "LLM Integration"]
    },
    {
      category: "Cloudflare Stack",
      skills: ["Cloudflare Workers", "D1", "R2", "Vectorize", "Cloudflare Pages"]
    },
    {
      category: "Enterprise Tools",
      skills: ["Salesforce", "Microsoft 365", "Power Automate", "Active Directory", "Intune", "Camunda"]
    },
    {
      category: "DevOps & Deployment",
      skills: ["Vercel", "Netlify", "Git", "CI/CD", "Docker"]
    }
  ];

  // Recommendations
  const recommendations = [
    {
      name: "Brady Cusack",
      title: "Founder @ Shannon Cyber AI",
      quote: "Oleh is one of the most skilled Software Engineers I've had the privilege of working with. During his time at Shannon AI, he was able to strategically develop and scale Agentic AI systems that improved data availability within our SaaS Products by designing AutoRAG AI Workers and MCP Services which fetch and efficiently index content while also hardening our security baseline by incorporating AI Gateways. The design he implemented significantly reduced the delivery of our product MVP's, giving us a competitive edge against our competitors.",
      linkedin: "https://www.linkedin.com/in/olehsmolikevych/"
    }
  ];

  // Volunteer experience
  const volunteerExperience = [
    {
      role: "Front-end Developer",
      organization: "Ukrainian IT Cluster",
      period: "Aug 2023 - Present",
      description: "Contributing to development of referral network app and website, actively engaging in community events and networking.",
      activities: [
        "Contribute to development of referral network app and website with ReactJS",
        "Actively engage in weekly team meet-ups",
        "Participate in events to network and learn"
      ],
      technologies: ["React", "ReactJS", "Web Development"]
    }
  ];

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Oleh Smolikevych - Software Engineer | AI Agents Developer | IT Specialist</title>
        <meta name="description" content="Software Engineer specializing in secure, scalable, and AI-driven web applications. Full-stack developer with expertise in React, Next.js, Cloudflare Workers, and AI Agents." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white dark:bg-gray-900 min-h-screen'>
        {/* Navigation */}
        <nav className='sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 py-4 px-10 max-sm:px-5 md:px-20 lg:px-40'>
          <div className='flex justify-between items-center'>
            <h1 className='text-xl font-burtons dark:text-teal-500 text-gray-800 dark:text-white'>osmdevelop</h1>
            <ul className='flex items-center gap-6'>
              <li>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className='cursor-pointer text-2xl dark:text-white text-gray-800 hover:text-teal-500 dark:hover:text-teal-400 transition-colors'
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? <BsSun /> : <BsMoon />}
                </button>
              </li>
              <li>
                <a
                  href="#contact"
                  className="flex hover:text-teal-500 dark:hover:text-teal-400 dark:text-white text-gray-800 text-2xl transition-colors"
                  aria-label="Contact"
                >
                  <AiOutlineMail />
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Hero Section */}
        <section className='px-10 pb-16 max-sm:px-5 md:px-20 lg:px-40 pt-12'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-center max-w-4xl mx-auto'
          >
            <h1 className='text-5xl py-4 text-teal-600 dark:text-teal-400 font-bold md:text-6xl max-sm:text-4xl mb-4'>
              Oleh Smolikevych
            </h1>
            <h2 className='text-2xl py-2 md:text-3xl dark:text-gray-100 text-gray-800 font-semibold mb-6'>
              Software Engineer | AI Agents Developer | IT Specialist
            </h2>
            <p className='text-lg py-5 leading-8 text-gray-700 md:text-xl max-w-2xl mx-auto dark:text-gray-300 mb-8'>
              Results-driven software engineer specializing in secure, scalable, and user-centric web applications. Proven track record of translating complex requirements into efficient and elegant solutions. Dedicated to continuous learning and exploring the latest technologies to drive innovation.
            </p>
            
            {/* Social Links */}
            <div className='text-4xl flex justify-center gap-8 py-4 text-gray-600 dark:text-gray-400'>
              <a
                href="https://www.linkedin.com/in/olehsmolikevych/"
                target='_blank'
                rel="noopener noreferrer"
                className='hover:text-teal-500 dark:hover:text-teal-400 transition-colors'
                aria-label="LinkedIn"
              >
                <AiFillLinkedin />
              </a>
              <a
                href="https://www.github.com/osmdevelop"
                target='_blank'
                rel="noopener noreferrer"
                className='hover:text-teal-500 dark:hover:text-teal-400 transition-colors'
                aria-label="GitHub"
              >
                <AiFillGithub />
              </a>
            </div>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section className='px-10 pb-16 max-sm:px-5 md:px-20 lg:px-40 bg-gray-50 dark:bg-gray-800/50'>
          <div className='max-w-6xl mx-auto'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className='text-4xl font-bold text-gray-800 dark:text-white mb-4 pb-2 border-b-4 border-teal-500 inline-block'>
                Experience
              </h2>
            </motion.div>
            <div className='mt-8'>
              {experiences.map((exp, index) => (
                <Experience key={index} experience={exp} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className='px-10 pb-16 max-sm:px-5 md:px-20 lg:px-40'>
          <div className='max-w-6xl mx-auto'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className='text-4xl font-bold text-gray-800 dark:text-white mb-4 pb-2 border-b-4 border-teal-500 inline-block'>
                Skills & Technologies
              </h2>
              <p className='text-lg text-gray-700 dark:text-gray-300 mt-4 mb-8 max-w-3xl'>
                A comprehensive toolkit spanning frontend, backend, AI/ML, cloud infrastructure, and enterprise solutions.
              </p>
            </motion.div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
              {skillsCategories.map((category, index) => (
                <Skills key={index} category={category.category} skills={category.skills} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className='px-10 pb-16 max-sm:px-5 md:px-20 lg:px-40 bg-gray-50 dark:bg-gray-800/50'>
          <div className='max-w-6xl mx-auto'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className='text-4xl font-bold text-gray-800 dark:text-white mb-4 pb-2 border-b-4 border-teal-500 inline-block'>
                Services I Offer
              </h2>
              <p className='text-lg text-gray-700 dark:text-gray-300 mt-4 mb-8 max-w-3xl'>
                Delivering comprehensive solutions from full-stack development to AI-powered systems and enterprise IT support.
              </p>
            </motion.div>
            <div className='lg:flex gap-10 mt-8'>
              <Services
                inView={[-200, 0]}
                img={code}
                title="Full-Stack Development"
                description="Building modern, scalable web applications with cutting-edge technologies"
                tool1="Frontend: React, Next.js, TypeScript, TailwindCSS"
                tool2="Backend: Cloudflare Workers, Node.js, MongoDB, APIs"
                tool3="AI Integration: AI Agents, AutoRAG, MCP Services, Vectorize"
              />
              <Services
                inView={[200, 0]}
                img={design}
                title="Enterprise Solutions & IT Support"
                description="Providing enterprise-grade solutions, automation, and comprehensive IT infrastructure management"
                tool1="Salesforce Development & Administration"
                tool2="Microsoft 365, Power Automate, Active Directory, Intune"
                tool3="Cloudflare Stack: Workers, D1, R2, Vectorize, Pages"
              />
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className='px-10 pb-16 max-sm:px-5 md:px-20 lg:px-40'>
          <div className='max-w-6xl mx-auto'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className='text-4xl font-bold text-gray-800 dark:text-white mb-4 pb-2 border-b-4 border-teal-500 inline-block'>
                Portfolio Projects
              </h2>
              <p className='text-lg text-gray-700 dark:text-gray-300 mt-4 mb-8 max-w-3xl'>
                A collection of projects showcasing my skills in web development, React, and modern UI/UX design.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap items-center justify-center'>
                <Portfolio
                  web={web0}
                  github="https://github.com/osmdevelop/bank-app"
                  link="https://bank-app-novyi.netlify.app/"
                />
                <Portfolio
                  web={web1}
                  github="https://github.com/osmdevelop/space-travel"
                  link="https://osmdevelop.github.io/space-travel/"
                />
                <Portfolio
                  web={web2}
                  github="https://github.com/osmdevelop/react-tenzies-game"
                  link="https://osmdevelop.github.io/react-tenzies-game/"
                />
                <Portfolio
                  web={web3}
                  github="https://github.com/osmdevelop/react-movie-search"
                  link="https://osmdevelop.github.io/react-movie-search/"
                />
                <Portfolio
                  web={web4}
                  github="https://github.com/osmdevelop/capital-hungry"
                  link="https://osmdevelop.github.io/capital-hungry/"
                />
                <Portfolio
                  web={web5}
                  github="https://github.com/osmdevelop/react-speed-typing-game"
                  link="https://osmdevelop.github.io/react-speed-typing-game/"
                />
                <Portfolio
                  web={web10}
                  github="https://github.com/osmdevelop/react-travel-journal"
                  link="https://osmdevelop.github.io/react-travel-journal/"
                />
                <Portfolio
                  web={web8}
                  github="https://github.com/osmdevelop/momentum-clone"
                  link="https://osmdevelop.github.io/momentum-clone/"
                />
                <Portfolio
                  web={web9}
                  github="https://github.com/osmdevelop/google-keep"
                  link="https://osmdevelop.github.io/google-keep/"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Certificates Section */}
        <section className='px-10 pb-16 max-sm:px-5 md:px-20 lg:px-40 bg-gray-50 dark:bg-gray-800/50'>
          <div className='max-w-6xl mx-auto'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className='text-4xl font-bold text-gray-800 dark:text-white mb-4 pb-2 border-b-4 border-teal-500 inline-block'>
                Certifications
              </h2>
              <p className='text-lg text-gray-700 dark:text-gray-300 mt-4 mb-8 max-w-3xl'>
                Professional certifications demonstrating expertise in enterprise platforms and development technologies.
              </p>
            </motion.div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
              <Certificates
                certificateLink="https://trailblazer.me/credentials/5898837"
                certificateImg={administratorCert}
                certificateTitle="Salesforce Certified Administrator (SCA)"
                certificateDate="Issued Mar 2025"
              />
              <Certificates
                certificateLink="https://trailblazer.me/credentials/4215144"
                certificateImg={aiAssociateCert}
                certificateTitle="AI Associate - Salesforce"
                certificateDate="Issued Mar 2024"
              />
              <Certificates
                certificateLink="https://scrimba.com/certificate/uqQa4Rcq/gfrontend"
                certificateImg={gfrontend}
                certificateTitle="Front End Developer Career Path"
              />
              <Certificates
                certificateLink="https://scrimba.com/certificate/uqQa4Rcq/gresponsive"
                certificateImg={gcss}
                certificateTitle="Responsive Web Design"
              />
              <Certificates
                certificateLink="https://scrimba.com/certificate/uqQa4Rcq/gjavascript"
                certificateImg={gjs}
                certificateTitle="JavaScript Deep Dive"
              />
              <Certificates
                certificateLink="https://scrimba.com/certificate/uqQa4Rcq/greact"
                certificateImg={greact}
                certificateTitle="Advanced React"
              />
            </div>
          </div>
        </section>

        {/* Volunteer Section */}
        <section className='px-10 pb-16 max-sm:px-5 md:px-20 lg:px-40'>
          <div className='max-w-6xl mx-auto'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className='text-4xl font-bold text-gray-800 dark:text-white mb-4 pb-2 border-b-4 border-teal-500 inline-block'>
                Volunteer Experience
              </h2>
            </motion.div>
            <div className='mt-8'>
              {volunteerExperience.map((vol, index) => (
                <Volunteer key={index} volunteer={vol} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Recommendations Section */}
        <section className='px-10 pb-16 max-sm:px-5 md:px-20 lg:px-40 bg-gray-50 dark:bg-gray-800/50'>
          <div className='max-w-6xl mx-auto'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className='text-4xl font-bold text-gray-800 dark:text-white mb-4 pb-2 border-b-4 border-teal-500 inline-block'>
                Recommendations
              </h2>
            </motion.div>
            <div className='mt-8'>
              {recommendations.map((rec, index) => (
                <Recommendations key={index} recommendation={rec} index={index} />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className='bg-white dark:bg-gray-900 px-10 pb-16 pt-12 max-sm:px-5 md:px-20 lg:px-40 border-t border-gray-200 dark:border-gray-800'>
        <div className='max-w-6xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className='text-3xl font-bold text-teal-600 dark:text-teal-400 mb-6'>Get In Touch</h2>
            <div className='flex flex-col md:flex-row justify-center items-center gap-6 text-gray-700 dark:text-gray-300'>
              <AiOutlineMail className='text-4xl text-teal-500' />
              <a
                id='contact'
                className='text-xl hover:text-teal-500 dark:hover:text-teal-400 transition-colors'
                href="mailto:oleh@osmdevelop.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                oleh@osmdevelop.com
              </a>
            </div>
            <div className='mt-8 text-center text-gray-600 dark:text-gray-400'>
              <p>© {new Date().getFullYear()} Oleh Smolikevych. All rights reserved.</p>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
