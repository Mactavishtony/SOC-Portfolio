import React from 'react';
import { Mail, Linkedin, Github, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-cyber-black border-t border-white/5 py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-mono">
            Ready to <span className="text-cyber-primary">Secure</span> Your Operations?
          </h2>
          <p className="text-cyber-muted mb-10 max-w-2xl mx-auto text-sm sm:text-base">
            Currently looking for SOC Analyst / Junior Security Analyst roles. I am ready to deploy my skills in monitoring, detection, and response to protect your infrastructure.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-12">
            <a 
              href="mailto:messagetogkr@gmail.com"
              className="flex items-center justify-center gap-3 px-6 py-4 bg-white/5 border border-white/10 hover:bg-cyber-primary/10 hover:border-cyber-primary text-white rounded-lg transition-all group w-full sm:w-auto"
            >
              <Mail className="group-hover:text-cyber-primary transition-colors shrink-0" />
              <span className="truncate">messagetogkr@gmail.com</span>
            </a>
             <a 
              href="tel:+919342336959"
              className="flex items-center justify-center gap-3 px-6 py-4 bg-white/5 border border-white/10 hover:bg-cyber-accent/10 hover:border-cyber-accent text-white rounded-lg transition-all group w-full sm:w-auto"
            >
              <Phone className="group-hover:text-cyber-accent transition-colors shrink-0" />
              <span>+91 9342336959</span>
            </a>
          </div>

          <div className="flex justify-center gap-8 mb-12">
            <a href="https://linkedin.com/in/GopalakrishnanPalpandi" target="_blank" rel="noreferrer" className="text-cyber-muted hover:text-white hover:scale-110 transition-all p-2">
              <Linkedin size={28} />
            </a>
            <a href="https://github.com/mactavishtony" target="_blank" rel="noreferrer" className="text-cyber-muted hover:text-white hover:scale-110 transition-all p-2">
              <Github size={28} />
            </a>
          </div>

          <div className="text-cyber-muted/40 text-sm font-mono">
            <p>Designed with React & Tailwind</p>
            <p className="mt-2">© {new Date().getFullYear()} Gopalakrishnan Palpandi</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;