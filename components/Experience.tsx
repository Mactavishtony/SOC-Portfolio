import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Award } from 'lucide-react';
import { ExperienceItem } from '../types';

const experiences: ExperienceItem[] = [
  {
    role: "Founder & Secure Web Developer",
    company: "Webz Wave Solutions",
    period: "Sept 2024 – July 2025",
    type: "dev",
    description: [
      "Led a team of 8 in developing secure, responsive web applications.",
      "Implemented security best practices in frontend architecture to mitigate XSS and CSRF risks.",
      "Managed client expectations and delivered tailored digital solutions."
    ]
  },
  {
    role: "Digital Marketing & Design",
    company: "Clover Tech / Infynt Digital",
    period: "Aug 2024 – Jan 2025",
    type: "other",
    description: [
      "Analyzed trends to optimize digital content, demonstrating strong analytical skills transferable to threat intelligence.",
      "Collaborated with cross-functional teams to align branding strategies."
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-cyber-dark relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Experience Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h2 className="text-3xl font-bold mb-4 font-mono flex items-center gap-3">
                <Briefcase className="text-cyber-primary" /> Professional History
              </h2>
            </motion.div>

            {/* Timeline Container */}
            <div className="relative border-l-2 border-cyber-gray ml-3 space-y-12 pb-2">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 md:pl-10">
                  {/* Timeline Dot - Precisely aligned center to border */}
                  <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-cyber-dark border-4 border-cyber-secondary shadow-[0_0_10px_rgba(112,0,255,0.5)]"></div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-bold text-white leading-tight">{exp.role}</h3>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-cyber-primary font-mono text-sm mb-3">
                    <span>{exp.company}</span>
                    <span className="hidden sm:inline">•</span>
                    <span className="text-cyber-muted">{exp.period}</span>
                  </div>
                  
                  <ul className="list-disc list-outside ml-4 text-cyber-muted space-y-2 text-sm leading-relaxed">
                    {exp.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certs Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h2 className="text-3xl font-bold mb-4 font-mono flex items-center gap-3">
                <Award className="text-cyber-accent" /> Education & Certs
              </h2>
            </motion.div>

            {/* Certification Card - Featured */}
            <div className="mb-8">
               <div className="card-glow p-6 rounded-xl border-l-4 border-l-cyber-accent relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                   <Award size={64} />
                 </div>
                 <div className="relative z-10">
                   <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                     <h3 className="text-xl font-bold text-white">Junior Analyst Pathway</h3>
                     <span className="px-2 py-1 bg-cyber-accent/10 text-cyber-accent text-[10px] rounded font-mono border border-cyber-accent/20 tracking-wider">VERIFIED</span>
                   </div>
                   <p className="text-cyber-primary font-mono text-sm mb-4">Security Blue Team (SBT)</p>
                   <p className="text-sm text-cyber-muted mb-4">
                     Comprehensive training in Incident Response, Phishing Analysis, Threat Intelligence, Digital Forensics, and SIEM.
                   </p>
                   <div className="w-full bg-cyber-gray h-1.5 rounded-full overflow-hidden">
                     <div className="bg-cyber-accent h-full w-full shadow-[0_0_10px_#39ff14]"></div>
                   </div>
                 </div>
               </div>
            </div>

            <div className="space-y-8">
               <div className="relative pl-6 border-l border-cyber-gray hover:border-cyber-primary transition-colors duration-300">
                  <h3 className="text-lg font-bold text-white">Bachelor of Science in Computer Science</h3>
                  <p className="text-cyber-muted text-sm mt-1">Sri Ramakrishna College of Arts and Science</p>
                  <p className="text-cyber-muted text-xs font-mono mt-1">June 2022 – May 2025</p>
               </div>
               <div className="relative pl-6 border-l border-cyber-gray hover:border-cyber-primary transition-colors duration-300">
                  <h3 className="text-lg font-bold text-white">Higher Secondary Education</h3>
                  <p className="text-cyber-muted text-sm mt-1">PSG Sarvajana</p>
                  <p className="text-cyber-muted text-xs font-mono mt-1">2020 – 2022</p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;