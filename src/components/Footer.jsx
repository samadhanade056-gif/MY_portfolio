import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-16 pb-8 relative z-10 font-sans">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-8">
          
          <div className="text-center md:text-left">
            <div className="font-heading text-2xl font-bold tracking-widest text-[#f0f0f0] mb-2">
              SAMADHAN<span className="text-cyan-400">_ADE</span>
            </div>
            <div className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-gray-500">
              Electronics & Telecom Engineer // Web Developer
            </div>
          </div>
          
          <div className="flex gap-4">
            <a href="https://github.com/samadhanade056-gif" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#111111] border border-white/5 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400 clip-button transition-all transform hover:-translate-y-1">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/samadhan-ade-b634762bb" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#111111] border border-white/5 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-400 clip-button transition-all transform hover:-translate-y-1">
              <Linkedin size={18} />
            </a>
            <a href="mailto:samadhanade056@gmail.com" className="w-10 h-10 bg-[#111111] border border-white/5 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-400 clip-button transition-all transform hover:-translate-y-1">
              <Mail size={18} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-mono text-gray-600 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} SAMADHAN ADE. ALL SYSTEM PROTOCOLS NORMAL.</p>
          <p className="mt-4 md:mt-0 flex gap-4">
            <span className="hover:text-cyan-500 cursor-pointer transition-colors">REACT</span>
            <span className="hover:text-cyan-500 cursor-pointer transition-colors">TAILWIND</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
