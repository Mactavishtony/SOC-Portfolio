import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Terminal } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12">
      {/* Background Grid Animation */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
      </div>

      <div className="container mx-auto px-6 z-10 relative">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-12 lg:gap-8">
          {/* Left Side - Text Content */}
          <div className="flex flex-col items-center lg:items-start max-w-4xl lg:max-w-2xl text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap justify-center lg:justify-start items-center gap-2 mb-6"
            >
              <span className="px-3 py-1 text-[10px] sm:text-xs font-mono text-cyber-primary bg-cyber-primary/10 border border-cyber-primary/20 rounded-full">
                AVAILABLE FOR HIRE
              </span>
              <span className="px-3 py-1 text-[10px] sm:text-xs font-mono text-cyber-accent bg-cyber-accent/10 border border-cyber-accent/20 rounded-full flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-cyber-accent animate-pulse"></span>
                OPEN TO WORK
              </span>
            </motion.div>

            {/* Name optimized for responsiveness */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-6"
            >
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-sans tracking-tight text-white leading-tight">
                Gopalakrishnan <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-primary via-white to-cyber-secondary text-glow">
                  Palpandi
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl text-cyber-muted mb-8 font-mono flex flex-wrap justify-center lg:justify-start gap-2 items-center"
            >
              <span>SOC Analyst</span>
              <span className="hidden sm:inline">|</span>
              <span>Threat Hunter</span>
              <span className="hidden sm:inline">|</span>
              <span>Blue Teamer</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="max-w-2xl text-cyber-muted mb-10 leading-relaxed text-sm sm:text-base md:text-lg"
            >
              Dedicated Security Analyst with a foundation in computer science and advanced capabilities in Threat Detection, Incident Response, and SIEM management. Bridging the gap between software architecture and cybersecurity defense.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-col sm:flex-row w-full sm:w-auto gap-4"
            >
              <a href="#projects" className="group relative px-8 py-3 bg-cyber-primary text-cyber-black font-bold font-mono tracking-wider text-center hover:bg-white transition-colors duration-300">
                VIEW INTELLIGENCE
                <div className="absolute inset-0 bg-white/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
              <a href="#contact" className="px-8 py-3 border border-cyber-gray text-cyber-text font-mono text-center hover:border-cyber-primary hover:text-cyber-primary transition-colors duration-300">
                INITIATE COMMS
              </a>
            </motion.div>
          </div>

          {/* Right Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex-shrink-0 order-first lg:order-last"
          >
            {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyber-primary via-cyber-secondary to-cyber-accent rounded-full blur-2xl opacity-30 animate-pulse"></div>

            {/* Profile image container */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-cyber-gray hover:border-cyber-primary transition-colors duration-500 group">
              <img
                src="/profile.jpg"
                alt="Gopalakrishnan Palpandi - SOC Analyst"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-cyber-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Decorative ring */}
            <div className="absolute -inset-3 border border-cyber-primary/20 rounded-full pointer-events-none"></div>
            <div className="absolute -inset-6 border border-cyber-secondary/10 rounded-full pointer-events-none"></div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Floating Elements - Hidden on small mobile to prevent clutter */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="hidden md:block absolute right-10 top-1/4 opacity-20 pointer-events-none"
      >
        <Shield size={120} className="text-cyber-secondary" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 7 }}
        className="hidden md:block absolute right-32 bottom-1/4 opacity-10 pointer-events-none"
      >
        <Terminal size={80} className="text-cyber-primary" />
      </motion.div>
    </section>
  );
};

export default Hero;