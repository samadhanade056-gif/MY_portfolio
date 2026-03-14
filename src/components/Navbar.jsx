import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];

  const scrollToSection = (id) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-heading text-2xl font-bold tracking-wider text-cyan-400 cursor-pointer"
          onClick={() => scrollToSection('home')}
        >
          SAMADHAN_
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link, i) => (
            <motion.button
              key={link}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => scrollToSection(link)}
              className="font-mono text-[0.7rem] text-gray-400 hover:text-cyan-400 transition-colors duration-300 tracking-[0.2em] uppercase"
            >
              <span className="text-cyan-600/50 mr-1">{(i + 1).toString().padStart(2, '0')}.</span>
              {link}
            </motion.button>
          ))}
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            href="/resume-img.png"
            target="_blank"
            className="ml-4 font-mono text-[0.7rem] text-cyan-400 border border-cyan-400/50 px-4 py-2 clip-button hover:bg-cyan-500/10 hover:border-cyan-400 transition-all uppercase tracking-widest"
          >
            Resume ↓
          </motion.a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-cyan-400 focus:outline-none">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-[#0a0a0a] border-b border-cyan-500/20 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col items-start px-6 py-6 space-y-6">
              {navLinks.map((link, i) => (
                <button
                  key={link}
                  onClick={() => scrollToSection(link)}
                  className="font-mono text-gray-300 hover:text-cyan-400 transition-colors text-sm tracking-[0.2em] uppercase flex items-center w-full"
                >
                  <span className="text-cyan-600/50 mr-3 text-xs">{(i + 1).toString().padStart(2, '0')}.</span> {link}
                </button>
              ))}
              <a
                href="/resume-img.png"
                target="_blank"
                className="w-full text-center mt-4 font-mono text-[0.8rem] text-cyan-400 border border-cyan-400/30 px-4 py-3 clip-button hover:bg-cyan-500/10 transition-all uppercase tracking-widest"
              >
                Resume ↓
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
