import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Search, Database, Globe, Lock, Cpu, Server, Activity } from 'lucide-react';
import { Skill } from '../types';

const skills: Skill[] = [
  {
    category: "Security Operations",
    icon: Shield,
    items: ["SIEM (Splunk, Wazuh)", "Incident Response", "Threat Hunting", "Log Analysis", "MITRE ATT&CK Framework"]
  },
  {
    category: "Network Security",
    icon: Globe,
    items: ["Wireshark", "Packet Analysis", "Nmap", "TCP/IP Protocol Suite", "Firewall Configuration", "IDS/IPS"]
  },
  {
    category: "Vulnerability Mgmt",
    icon: Search,
    items: ["Nessus", "Burp Suite", "OWASP Top 10", "Vulnerability Assessment", "Risk Analysis"]
  },
  {
    category: "DevSecOps & Code",
    icon: Terminal,
    items: ["Python (Automation)", "Bash Scripting", "Secure Coding", "Git/GitHub", "Docker"]
  }
];

// Icon mapping for display
const IconMap: Record<string, any> = {
  "Security Operations": Activity,
  "Network Security": Server,
  "Vulnerability Mgmt": Lock,
  "DevSecOps & Code": Cpu,
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-cyber-dark relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
            <span className="text-cyber-primary">01.</span> Technical Arsenal
          </h2>
          <div className="h-1 w-20 bg-cyber-secondary"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = IconMap[skill.category] || Shield;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-glow p-6 rounded-xl relative group overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                  <Icon size={80} />
                </div>
                
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-cyber-secondary/10 rounded-lg text-cyber-secondary border border-cyber-secondary/20">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-bold text-lg">{skill.category}</h3>
                </div>

                <ul className="space-y-3">
                  {skill.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-cyber-muted group-hover:text-cyber-text transition-colors">
                      <div className="w-1.5 h-1.5 bg-cyber-primary rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
                
                {/* Hover line effect */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-cyber-primary to-cyber-secondary group-hover:w-full transition-all duration-500"></div>
              </motion.div>
            );
          })}
        </div>

        {/* Tools Marquee styled section */}
        <div className="mt-20 pt-10 border-t border-cyber-gray">
          <p className="text-center text-cyber-muted font-mono mb-8 text-sm uppercase tracking-widest">Tools & Platforms Proficiencies</p>
          <div className="flex flex-wrap justify-center gap-4 opacity-70">
            {["Splunk", "Wazuh", "Wireshark", "Nessus", "Burp Suite", "Python", "Linux (Kali/Ubuntu)", "React", "Docker", "TensorFlow", "OpenCV"].map((tool, i) => (
              <span key={i} className="px-4 py-2 bg-cyber-black border border-cyber-gray rounded text-sm font-mono hover:border-cyber-primary hover:text-cyber-primary transition-colors cursor-default">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper for Icon in component
import { Terminal } from 'lucide-react';

export default Skills;