import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 relative z-10 font-sans">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          {/* Section Headers */}
          <span className="font-mono text-cyan-400 text-[0.65rem] tracking-[0.4em] uppercase mb-2 block">
            <span className="text-gray-500 mr-2">{"//"}</span> Who Am I
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 tracking-wider text-[#f0f0f0]">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mb-10 clip-button"></div>
          
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed max-w-3xl">
            <p>
              I am <span className="text-cyan-400 font-semibold font-mono">&lt;Samadhan_Ade /&gt;</span>, an Electronics and Telecommunication Engineering student from Nagpur, India, with a deep passion for technology and software development.
            </p>
            <p>
              My journey in tech bridges hardware and software. I have a strong interest in Web Development, Artificial Intelligence, and Embedded Systems. I love crafting modern, intuitive web applications that solve real-world problems.
            </p>
            <p>
              Constantly learning and innovating, I focus on building high-tech projects that stand out through functionality and elegant design. Whether it's training machine learning models, developing full-stack platforms, or experimenting with Raspberry Pi, I approach every challenge as an opportunity to grow.
            </p>
            
            {/* Minimal Info Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 mt-8 border-t border-white/10">
              <div>
                <span className="block font-mono text-[0.65rem] text-gray-500 uppercase tracking-widest mb-1">Status</span>
                <span className="block font-mono text-sm text-[#f0f0f0]">Student / Engg</span>
              </div>
              <div>
                <span className="block font-mono text-[0.65rem] text-gray-500 uppercase tracking-widest mb-1">Location</span>
                <span className="block font-mono text-sm text-[#f0f0f0]">Nagpur, IN</span>
              </div>
              <div>
                <span className="block font-mono text-[0.65rem] text-gray-500 uppercase tracking-widest mb-1">Focus</span>
                <span className="block font-mono text-sm text-[#f0f0f0]">Full Stack / AI</span>
              </div>
              <div>
                <span className="block font-mono text-[0.65rem] text-gray-500 uppercase tracking-widest mb-1">Email</span>
                <a href="mailto:samadhanade056@gmail.com" className="block font-mono text-sm text-cyan-400 hover:underline hover:text-cyan-300">Contact Me</a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
