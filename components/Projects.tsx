import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

// Transformed projects list focusing on Security + Original strong dev projects
const projects: Project[] = [
  {
    id: 1,
    title: "High-Security Video Analysis Framework",
    category: "AI & Threat Detection",
    description: "Designed a real-time analytics system for intrusion detection and anomalous behavior analysis. Leveraged Computer Vision to identify unauthorized access in restricted zones, simulating physical security monitoring.",
    tech: ["Python", "OpenCV", "TensorFlow", "Behavioral Analytics", "Intrusion Detection"],
    link: "https://github.com/mactavishtony",
    featured: true
  },
  {
    id: 2,
    title: "Decentralized Crowdfunding (Security Focus)",
    category: "Blockchain Security",
    description: "Developed a Web3 platform with a focus on smart contract integrity and secure wallet transactions. Implemented audit-ready Solidity contracts to prevent re-entrancy attacks and ensure transparent fund flow.",
    tech: ["Solidity", "Smart Contract Auditing", "ReactJS", "MetaMask", "Web3.js"],
    link: "https://github.com/mactavishtony",
    featured: false
  },
  {
    id: 3,
    title: "Home Lab SIEM Deployment",
    category: "SOC Operations",
    description: "Deployed Wazuh and ELK Stack in a virtualized environment to monitor network traffic. Configured custom rules to detect brute-force attacks and generated dashboards for visualizing security events.",
    tech: ["Wazuh", "ELK Stack", "Syslog", "Linux Hardening", "Virtualization"],
    link: "https://github.com/mactavishtony",
    featured: true
  },
  {
    id: 4,
    title: "LAN-Based Secure Chatbot",
    category: "Network Security",
    description: "Created an offline communication system using Python and Sockets. Focused on data privacy by eliminating external internet dependencies and implementing local encryption for message transfer.",
    tech: ["Python", "Socket.IO", "Cryptography", "Flask", "NLP"],
    link: "https://github.com/mactavishtony",
    featured: false
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-cyber-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 gap-4"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
              <span className="text-cyber-primary">02.</span> Operational Projects
            </h2>
            <div className="h-1 w-20 bg-cyber-secondary"></div>
          </div>
          <a href="https://github.com/mactavishtony" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-cyber-primary hover:text-white transition-colors font-mono text-sm">
            View GitHub Archive <ExternalLink size={16} />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative rounded-xl overflow-hidden bg-cyber-gray border border-white/5 hover:border-cyber-primary/50 transition-all duration-300 ${project.featured ? 'md:col-span-2' : ''}`}
            >
              {/* Project Content */}
              <div className="p-6 md:p-8 flex flex-col justify-between h-full relative z-10 w-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="max-w-[85%]">
                    <span className="text-xs font-mono text-cyber-primary mb-2 block tracking-wider uppercase">
                      {project.category}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyber-primary transition-colors leading-tight">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex gap-3 shrink-0">
                    <a href={project.link} target="_blank" rel="noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-white/10 text-white transition-colors">
                      <Github size={20} />
                    </a>
                  </div>
                </div>

                <p className="text-cyber-muted mb-6 leading-relaxed text-sm md:text-base">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 text-[10px] md:text-xs font-mono bg-black/50 text-cyber-text border border-white/10 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative Background Elements for Cards */}
              <div className="absolute top-0 right-0 p-32 bg-cyber-primary/5 blur-3xl rounded-full -mr-16 -mt-16 pointer-events-none group-hover:bg-cyber-primary/10 transition-colors"></div>
              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;