import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, BookOpen } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-24 relative z-10 font-sans">
      <div className="w-full">
        <span className="font-mono text-cyan-400 text-[0.65rem] tracking-[0.4em] uppercase mb-2 block">
          <span className="text-gray-500 mr-2">{"//"}</span> Academics
        </span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 tracking-wider text-[#f0f0f0]">
          My Education
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mb-16 clip-button"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card-tech clip-card max-w-4xl p-8 md:p-10 relative overflow-hidden group bg-[#161616] border border-white/5 mx-auto lg:mx-0"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[100px] rounded-full"></div>
          
          <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
            <div className="p-5 bg-[#0a0a0a] border border-cyan-500/30 clip-button shrink-0 text-cyan-400 group-hover:bg-cyan-500/10 transition-colors shadow-[0_0_20px_rgba(34,211,238,0.2)]">
              <GraduationCap size={44} />
            </div>
            
            <div className="space-y-4 flex-1">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-[#f0f0f0] group-hover:text-cyan-400 transition-colors tracking-wide">
                  B.Tech in Electronics & Telecommunication
                </h3>
                <span className="font-mono text-xs text-cyan-300 bg-cyan-500/10 px-3 py-1.5 border border-cyan-500/20 clip-button flex items-center gap-1.5">
                  <Calendar size={12} /> 2023 – 2027
                </span>
              </div>
              
              <div className="text-lg md:text-xl text-purple-400 font-semibold font-mono">
                JD College of Engineering and Management
              </div>

              <p className="font-sans text-gray-400 text-sm leading-relaxed pt-2">
                Focused on core engineering principles, full-stack software development, embedded systems, and modern Web / MERN architectures.
              </p>
              
              <div className="flex items-center gap-2 text-gray-500 mt-6 font-mono text-xs uppercase tracking-widest border-t border-white/5 pt-4">
                <MapPin size={14} className="text-cyan-500" />
                <span>Nagpur, Maharashtra, India</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
