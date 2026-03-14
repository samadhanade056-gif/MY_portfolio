import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = ["Web Developer", "Java Full Stack Developer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center pt-20">
      <div className="w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left z-10"
          >
            <h2 className="font-mono text-cyan-400 text-[0.65rem] md:text-xs tracking-[0.4em] uppercase mb-4 block">
              <span className="text-gray-600 mr-2">{"//"}</span> Welcome to my universe
            </h2>
            
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-4 text-[#f0f0f0] tracking-wider">
              Hi, I'm <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">Samadhan Ade</span>
            </h1>
            
            <div className="h-10 mb-6 flex justify-center lg:justify-start overflow-hidden">
              <motion.h3 
                key={titleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="font-mono text-xl md:text-2xl text-gray-400"
              >
                &gt; {titles[titleIndex]}_
              </motion.h3>
            </div>

            <p className="font-sans text-gray-400 text-lg mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Crafting immersive digital experiences through modern web technologies, AI, and continuous learning.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a 
                href="#projects"
                className="clip-button bg-cyan-500 hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] text-black px-8 py-3.5 font-bold tracking-widest text-[0.85rem] uppercase transition-all duration-300 transform hover:-translate-y-1"
              >
                View Projects
              </a>
              
              <a 
                href="#contact"
                className="clip-button bg-transparent border border-white/10 hover:border-blue-500 hover:text-blue-400 text-[#f0f0f0] px-8 py-3.5 font-bold tracking-widest text-[0.85rem] uppercase transition-all duration-300 transform hover:-translate-y-1"
              >
                Contact Me
              </a>

              <a 
                href="/resume-img.png"
                target="_blank"
                className="clip-button-reverse bg-purple-600 hover:bg-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] text-white px-8 py-3.5 font-bold tracking-widest text-[0.85rem] uppercase transition-all duration-300 transform hover:-translate-y-1"
              >
                Resume ↓
              </a>
            </div>
          </motion.div>

          {/* Abstract Tech Profile Image/Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-center relative z-10"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Outer decorative square */}
              <div className="absolute inset-0 border border-cyan-500/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-4 border border-purple-500/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              
              {/* Image Frame */}
              <div className="absolute inset-8 bg-[#161616] border border-white/10 clip-card overflow-hidden group">
                 <img 
                  src="/profile.jpg" 
                  alt="Samadhan Ade" 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/40 to-transparent mix-blend-overlay"></div>
              </div>

              {/* Floating badges */}
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 py-2 px-4 bg-[#111111] border border-cyan-500/50 clip-button shadow-[0_0_15px_rgba(34,211,238,0.2)]"
              >
                <span className="font-mono text-cyan-400 text-xs">React.js</span>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-4 left-0 py-2 px-4 bg-[#111111] border border-purple-500/50 clip-button shadow-[0_0_15px_rgba(168,85,247,0.2)]"
              >
                <span className="font-mono text-purple-400 text-xs">Java</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
