import { motion } from 'framer-motion';

const skillsData = [
  {
    category: "Programming Languages",
    skills: ["C / C++", "Java", "Python", "JavaScript", "SQL"]
  },
  {
    category: "Web Development",
    skills: ["HTML", "CSS", "Tailwind CSS", "React", "Node.js"]
  },
  {
    category: "Tools & Technologies",
    skills: ["Git", "GitHub", "MongoDB", "OpenCV", "Raspberry Pi"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative z-10 font-sans">
      <div className="w-full">
        {/* Section Headers */}
        <span className="font-mono text-cyan-400 text-[0.65rem] tracking-[0.4em] uppercase mb-2 block">
          <span className="text-gray-500 mr-2">{"//"}</span> My Expertise
        </span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 tracking-wider text-[#f0f0f0]">
          Skills & Tech
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mb-16 clip-button"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillsData.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-tech clip-card p-8 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan-500/0 group-hover:bg-cyan-500 transition-colors duration-500"></div>
              
              <h3 className="font-heading text-xl font-bold mb-8 text-cyan-400 tracking-wide">{group.category}</h3>
              
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, i) => (
                  <div 
                    key={i} 
                    className="flex items-center gap-2 px-3 py-1.5 bg-[#0a0a0a] border border-white/5 font-mono text-[0.75rem] text-gray-300 hover:border-cyan-500/50 hover:text-cyan-300 transition-all cursor-default clip-button"
                  >
                     <span className="text-cyan-600">$&gt;</span> {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
