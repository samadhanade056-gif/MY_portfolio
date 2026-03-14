import { motion } from 'framer-motion';
import { Briefcase, Calendar, ExternalLink } from 'lucide-react';

const experiences = [
  {
    role: "Software Development Intern",
    company: "EduSkills Foundation®",
    duration: "Jan 2026 – Mar 2026",
    type: "Remote",
    skills: ["Java", "HTML", "CSS", "JS", "SQL"],
    desc: "Completed a software development internship working on programming exercises and web technologies."
  },
  {
    role: "AI/ML Intern",
    company: "EduSkills Foundation®",
    duration: "Oct 2025 – Dec 2025",
    type: "Remote",
    skills: ["AI", "Machine Learning"],
    desc: "Learned AI and ML concepts and worked on machine learning exercises and training modules."
  },
  {
    role: "Cybersecurity Intern",
    company: "EduSkills Foundation®",
    duration: "Jul 2025 – Sep 2025",
    type: "Full-time",
    skills: ["Cybersecurity"],
    desc: "Completed cybersecurity training focusing on security fundamentals and threat protection techniques."
  },
  {
    role: "Web Developer",
    company: "Zidio Development",
    duration: "May 2025 – Jun 2025",
    type: "Remote · Full-time",
    skills: ["Web Dev"],
    desc: "Worked on responsive website development and improved UI/UX using modern web technologies."
  },
  {
    role: "Web Developer",
    company: "Prodigy InfoTech",
    duration: "Sep 2024 – Sep 2024",
    type: "Remote",
    skills: ["HTML", "CSS", "Frontend"],
    desc: "Built frontend web projects and practiced responsive design using HTML and CSS."
  },
  {
    role: "Android Dev Intern",
    company: "EduSkills Foundation®",
    duration: "Jul 2024 – Sep 2024",
    type: "Remote",
    skills: ["Android"],
    desc: "Learned Android application development and created basic mobile applications."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative z-10 font-sans">
      <div className="w-full">
        <span className="font-mono text-cyan-400 text-[0.65rem] tracking-[0.4em] uppercase mb-2 block">
          <span className="text-gray-500 mr-2">{"//"}</span> Career Journey
        </span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 tracking-wider text-[#f0f0f0]">
          My Experience
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mb-16 clip-button"></div>

        <div className="max-w-4xl border-l-[1px] border-cyan-500/30 pl-8 md:pl-12 space-y-12 relative mx-auto lg:mx-0">
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[37px] md:-left-[53px] top-6 w-[3px] h-6 bg-cyan-500 group-hover:h-12 transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.8)]"></div>
              <div className="absolute -left-[45px] md:-left-[61px] top-7 font-mono text-[0.6rem] text-cyan-400 rotate-[-90deg] hidden md:block opacity-50 uppercase tracking-widest">{exp.duration.split(" ")[2]}</div>

              <div className="card-tech clip-card p-6 md:p-8 hover:-translate-y-1 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="font-heading text-xl md:text-2xl font-bold text-[#f0f0f0] group-hover:text-cyan-400 mb-2">
                       {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-[0.85rem] font-mono uppercase tracking-widest text-purple-400">
                      <Briefcase size={14} /> {exp.company}
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2">
                    <span className="flex items-center gap-2 text-cyan-300 bg-cyan-500/10 py-1.5 px-3 border border-cyan-500/20 font-mono text-[0.65rem] uppercase tracking-widest clip-button">
                      <Calendar size={12} /> {exp.duration}
                    </span>
                    <span className="font-mono text-[0.65rem] text-gray-500 uppercase tracking-widest">[{exp.type}]</span>
                  </div>
                </div>
                
                <p className="font-sans text-gray-400 mb-6 leading-relaxed text-[0.95rem]">
                  {exp.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto border-t border-white/5 pt-4">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="font-mono text-[0.6rem] tracking-widest px-2 py-1 bg-white/5 text-gray-500 uppercase group-hover:text-gray-300 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center lg:justify-start"
        >
          <a 
            href="https://www.linkedin.com/in/samadhan-ade-b634762bb" 
            target="_blank" 
            rel="noopener noreferrer"
            className="clip-button bg-cyan-600 hover:bg-cyan-500 text-black px-8 py-3.5 font-bold tracking-widest text-[0.85rem] uppercase transition-all duration-300 inline-flex items-center gap-2 shadow-[0_0_20px_rgba(34,211,238,0.2)]"
          >
            LinkedIn Profile <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
