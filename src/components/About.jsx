import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative z-10 font-sans">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Headers */}
          <span className="font-mono text-cyan-400 text-[0.65rem] tracking-[0.4em] uppercase mb-2 block">
            <span className="text-gray-500 mr-2">{"//"}</span> Who Am I
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 tracking-wider text-[#f0f0f0]">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mb-10 clip-button"></div>
          
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed max-w-4xl">
            <p className="bg-[#111111] p-6 border-l-4 border-cyan-400 rounded-r-md text-gray-200">
              I am <span className="text-cyan-400 font-semibold font-mono">&lt;Samadhan_Ade /&gt;</span>, an Electronics and Telecommunication Engineering student with experience across 2 internships and 3 independent projects. 
              Skilled in React.js, Node.js, Express.js, and MongoDB, with a focus on responsive design and clean UI/UX, from building CRUD features to deploying live apps on Render and Vercel.
            </p>
            
            <p className="text-gray-400 text-base">
              My technical background bridges hardware and modern software engineering. With a strong foundation in both frontend aesthetics and backend architectures, I love creating clean, scalable web applications that deliver exceptional user experiences.
            </p>
            
            {/* Detailed Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 mt-8 border-t border-white/10">
              <div className="bg-[#161616] p-4 border border-white/5 clip-card">
                <span className="block font-mono text-[0.65rem] text-cyan-400 uppercase tracking-widest mb-1 flex items-center gap-1.5">
                  <GraduationCap size={14} /> Education
                </span>
                <span className="block font-heading text-sm text-[#f0f0f0] font-bold">B.Tech (ETC)</span>
                <span className="block font-mono text-[0.7rem] text-gray-500">2023 – 2027</span>
              </div>

              <div className="bg-[#161616] p-4 border border-white/5 clip-card">
                <span className="block font-mono text-[0.65rem] text-cyan-400 uppercase tracking-widest mb-1 flex items-center gap-1.5">
                  <MapPin size={14} /> College
                </span>
                <span className="block font-heading text-sm text-[#f0f0f0] font-bold">JD College of Engg.</span>
                <span className="block font-mono text-[0.7rem] text-gray-500">Nagpur, India</span>
              </div>

              <div className="bg-[#161616] p-4 border border-white/5 clip-card">
                <span className="block font-mono text-[0.65rem] text-cyan-400 uppercase tracking-widest mb-1 flex items-center gap-1.5">
                  <Phone size={14} /> Phone
                </span>
                <a href="tel:+918484881414" className="block font-mono text-sm text-cyan-300 hover:underline">
                  +91 8484881414
                </a>
              </div>

              <div className="bg-[#161616] p-4 border border-white/5 clip-card">
                <span className="block font-mono text-[0.65rem] text-cyan-400 uppercase tracking-widest mb-1 flex items-center gap-1.5">
                  <Mail size={14} /> Email
                </span>
                <a href="mailto:samadhanade056@gmail.com" className="block font-mono text-xs text-cyan-300 hover:underline truncate">
                  samadhanade056@gmail.com
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
